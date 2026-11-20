import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  inject,
  signal,
} from '@angular/core';
import { Glyph } from '../home/glyph';
import { FAQS, STAGES, VISIT } from '../home/home.content';
import { SITE, whatsappLink } from '../site.config';
import { SPECIALITIES_FULL, SpecialityFull } from './v3.content';
import type { PulseImage } from '../v2/pulse-image';

type Gsap = typeof import('gsap').gsap;
type Tab = 'all' | SpecialityFull['id'];

/** Homepage design option C: warm, content-rich, enquiry-led. */
@Component({
  selector: 'app-v3',
  imports: [Glyph],
  templateUrl: './v3.html',
  styleUrl: './v3.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V3 {
  protected readonly site = SITE;
  protected readonly specs = SPECIALITIES_FULL;
  protected readonly stages = STAGES;
  protected readonly visit = VISIT;
  protected readonly faqs = [...FAQS, ...SPECIALITIES_FULL.flatMap((s) => s.faqs)];
  protected readonly year = new Date().getFullYear();
  protected readonly whatsapp = whatsappLink('Hello SPANDA, I would like to enquire about a rehabilitation assessment.');

  protected readonly menuOpen = signal(false);
  protected readonly megaOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly openFaq = signal(0);
  protected readonly allFaqs = signal(false);
  protected readonly tab = signal<Tab>('all');
  protected readonly showAll = signal(false);
  protected readonly sending = signal(false);
  protected readonly sent = signal(false);
  protected readonly error = signal(false);

  private readonly all = SPECIALITIES_FULL.flatMap((s) => s.conditions.map((c) => ({ ...c, spec: s.title })));
  private readonly filtered = computed(() => {
    const t = this.tab();
    return t === 'all' ? this.all : this.all.filter((c) => c.spec === this.specs.find((s) => s.id === t)!.title);
  });
  protected readonly visibleConditions = computed(() => (this.showAll() ? this.filtered() : this.filtered().slice(0, 6)));
  protected readonly hiddenCount = computed(() => this.filtered().length - this.visibleConditions().length);
  protected readonly visibleFaqs = computed(() => (this.allFaqs() ? this.faqs : this.faqs.slice(0, 6)));

  private readonly host = inject(ElementRef<HTMLElement>);
  private pulse?: PulseImage;
  private cleanup: (() => void)[] = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.cleanup.forEach((fn) => fn());
      this.pulse?.dispose();
    });
    afterNextRender(() => this.start());
  }

  protected pickTab(t: Tab): void {
    this.tab.set(t);
    this.showAll.set(false);
  }

  protected closeAll(): void {
    this.menuOpen.set(false);
    this.megaOpen.set(false);
  }

  /** Netlify Forms: POST url-encoded data to the site root. A static copy of the form lives in index.html for detection. */
  protected async submit(e: Event): Promise<void> {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    if (!form.reportValidity()) return;
    this.sending.set(true);
    this.error.set(false);
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!res.ok) throw new Error(String(res.status));
      this.sent.set(true);
    } catch {
      this.error.set(true);
    } finally {
      this.sending.set(false);
    }
  }

  private get root(): HTMLElement {
    return this.host.nativeElement as HTMLElement;
  }

  private async start(): Promise<void> {
    const onScroll = () => this.scrolled.set(scrollY > 40);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    this.cleanup.push(() => removeEventListener('scroll', onScroll));

    const closeMega = (e: PointerEvent) => {
      if (!(e.target as Element).closest('.has-mega')) this.megaOpen.set(false);
    };
    addEventListener('pointerdown', closeMega);
    this.cleanup.push(() => removeEventListener('pointerdown', closeMega));

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);
    this.cleanup.push(() => ScrollTrigger.getAll().forEach((t) => t.kill()));
    await this.startPulse();
    this.choreograph(gsap);
    ScrollTrigger.refresh();
  }

  private async startPulse(): Promise<void> {
    const frame = this.root.querySelector<HTMLElement>('[data-pulse]');
    const probe = document.createElement('canvas');
    if (!frame || !(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
    const img = frame.querySelector('img')!;
    try {
      await img.decode();
    } catch {
      return;
    }
    const { PulseImage } = await import('../v2/pulse-image');
    const lowPower = (navigator.hardwareConcurrency ?? 8) <= 4;
    const p = new PulseImage(frame.querySelector('canvas')!, img, lowPower, {
      origin: [0.4, 0.55],
      every: 4.5,
      travel: 0.04,
      focus: [0.55, 0.8],
    });
    const fit = () => p.resize(frame.clientWidth, frame.clientHeight);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(frame);
    const io = new IntersectionObserver(([e]) => p.setVisible(e.isIntersecting));
    io.observe(frame);
    this.cleanup.push(() => ro.disconnect(), () => io.disconnect());
    frame.classList.add('is-gl');
    this.pulse = p;
  }

  private choreograph(gsap: Gsap): void {
    const root = this.root;

    // Hero: copy rises in, the photo card and its floating tags settle at different depths.
    gsap.from(root.querySelectorAll('.hero-copy > *'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 });
    gsap.from(root.querySelector('.hero-photo'), { y: 60, scale: 0.96, opacity: 0, duration: 1.4, ease: 'expo.out', delay: 0.1 });
    gsap.from(root.querySelectorAll('.float-card, .float-tag'), {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.6)',
      stagger: 0.15,
      delay: 0.7,
    });
    const hero = root.querySelector('.hero');
    gsap.to(root.querySelector('.float-card'), { yPercent: -60, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to(root.querySelector('.float-tag'), { yPercent: -120, ease: 'none', scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } });
    const scrollRef = { p: 0 };
    gsap.to(scrollRef, {
      p: 1,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
      onUpdate: () => this.pulse?.setScroll(scrollRef.p),
    });

    // Count up the honest facts.
    root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      const to = Number(el.dataset['count']);
      const o = { v: 0 };
      gsap.to(o, { v: to, duration: 1.6, ease: 'power2.out', delay: 0.5, onUpdate: () => (el.textContent = String(Math.round(o.v))) });
    });

    // Photos drift inside their frames.
    root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) return;
      gsap.fromTo(img, { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true } });
    });

    // Rises.
    root.querySelectorAll<HTMLElement>('[data-rise], .block-head').forEach((el) => {
      gsap.from(el, { y: 40, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } });
    });

    // Process line draws across the five steps.
    gsap.fromTo(
      root.querySelector('.steps-line > span'),
      { scaleX: 0 },
      { scaleX: 1, ease: 'none', scrollTrigger: { trigger: root.querySelector('.steps'), start: 'top 75%', end: 'bottom 55%', scrub: 0.6 } },
    );
  }
}
