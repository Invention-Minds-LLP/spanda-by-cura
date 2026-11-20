import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
} from '@angular/core';
import { Glyph } from '../home/glyph';
import { FAQS, SPECIALITIES, STAGES, VISIT } from '../home/home.content';
import { SITE } from '../site.config';
import { SPECIALITY_DETAILS } from './v2.content';
import type { PulseImage } from './pulse-image';

type Gsap = typeof import('gsap').gsap;
type ST = typeof import('gsap/ScrollTrigger').ScrollTrigger;

/** Homepage design option B: editorial, photo-led, with living WebGL photographs. */
@Component({
  selector: 'app-v2',
  imports: [Glyph],
  templateUrl: './v2.html',
  styleUrl: './v2.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V2 {
  protected readonly site = SITE;
  protected readonly specialities = SPECIALITIES;
  protected readonly details = SPECIALITY_DETAILS;
  protected readonly stages = STAGES;
  protected readonly faqs = FAQS;
  protected readonly visit = VISIT;
  protected readonly year = new Date().getFullYear();

  protected readonly menuOpen = signal(false);
  protected readonly openFaq = signal(0);
  protected readonly scrolled = signal(false);
  protected readonly live = signal(false);

  private readonly host = inject(ElementRef<HTMLElement>);
  private images = new Map<HTMLElement, PulseImage>();
  private cleanup: (() => void)[] = [];

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      this.cleanup.forEach((fn) => fn());
      this.images.forEach((p) => p.dispose());
    });
    afterNextRender(() => this.start());
  }

  protected toggleFaq(i: number): void {
    this.openFaq.update((cur) => (cur === i ? -1 : i));
  }

  private get root(): HTMLElement {
    return this.host.nativeElement as HTMLElement;
  }

  private async start(): Promise<void> {
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => this.scrolled.set(scrollY > 24);
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });
    this.cleanup.push(() => removeEventListener('scroll', onScroll));

    const [{ gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);
    this.cleanup.push(() => ScrollTrigger.getAll().forEach((t) => t.kill()));

    if (!reduced) await this.startImages();
    this.live.set(true);
    if (!reduced) this.choreograph(gsap, ScrollTrigger);
    ScrollTrigger.refresh();
  }

  /** Swap each framed photograph for its living WebGL version. The <img> stays for alt text and as fallback. */
  private async startImages(): Promise<void> {
    const probe = document.createElement('canvas');
    if (!(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
    const { PulseImage } = await import('./pulse-image');
    const lowPower =
      (navigator.hardwareConcurrency ?? 8) <= 4 ||
      ((navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 8) <= 4;

    const frames = this.root.querySelectorAll<HTMLElement>('[data-pulse]');
    await Promise.all(
      [...frames].map(async (frame) => {
        const img = frame.querySelector('img')!;
        const canvas = frame.querySelector('canvas')!;
        img.loading = 'eager';
        try {
          await img.decode();
        } catch {
          return;
        }
        const kind = frame.dataset['pulse'];
        const p = new PulseImage(canvas, img, lowPower, {
          origin: kind === 'hero' ? [0.36, 0.6] : [0.5, 0.55],
          every: kind === 'hero' ? 4.2 : kind === 'care' ? 5 : 0,
          travel: kind === 'hero' ? 0.05 : 0.035,
          focus: kind === 'hero' ? [0.6, 0.85] : [0.5, 0.5],
        });
        const fit = () => p.resize(frame.clientWidth, frame.clientHeight);
        fit();
        const ro = new ResizeObserver(fit);
        ro.observe(frame);
        const io = new IntersectionObserver(([e]) => p.setVisible(e.isIntersecting), { rootMargin: '100px' });
        io.observe(frame);
        // Speciality photos pulse from wherever they are touched.
        if (kind === 'spec') {
          const tap = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            p.pulse([(e.clientX - r.left) / r.width, 1 - (e.clientY - r.top) / r.height]);
          };
          canvas.addEventListener('pointerenter', tap);
          this.cleanup.push(() => canvas.removeEventListener('pointerenter', tap));
        }
        this.cleanup.push(() => ro.disconnect(), () => io.disconnect());
        frame.classList.add('is-gl');
        this.images.set(frame, p);
      }),
    );
  }

  private choreograph(gsap: Gsap, ScrollTrigger: ST): void {
    const root = this.root;
    const mm = gsap.matchMedia();
    this.cleanup.push(() => mm.revert());

    // Hero: headline lines rise out of their masks; the photo settles from a slight zoom.
    const heroFrame = root.querySelector<HTMLElement>('.hero-media')!;
    this.images.get(heroFrame)?.setReveal(0);
    requestAnimationFrame(() => this.images.get(heroFrame)?.setReveal(1));
    gsap.from(root.querySelectorAll('.hero-title .line > span'), {
      yPercent: 110,
      duration: 1.3,
      ease: 'expo.out',
      stagger: 0.09,
      delay: 0.15,
    });
    gsap.from(root.querySelectorAll('.hero-content .eyebrow, .hero-foot'), {
      y: 24,
      opacity: 0,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.1,
      delay: 0.55,
    });
    gsap.to(root.querySelector('.hero-content'), {
      yPercent: -18,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
    });

    // Every living photo drifts inside its frame as it crosses the viewport.
    this.images.forEach((p, frame) => {
      ScrollTrigger.create({
        trigger: frame,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => p.setScroll(self.progress * 2 - 1),
      });
    });

    // Statement: words fill from faint to full ink as they are read.
    const fill = root.querySelector<HTMLElement>('[data-fill]');
    if (fill) {
      const words = this.splitWords(fill);
      gsap.fromTo(
        words,
        { opacity: 0.16 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.05,
          scrollTrigger: { trigger: fill, start: 'top 80%', end: 'bottom 45%', scrub: 0.5 },
        },
      );
    }

    // Meaning: the Devanagari word scales with scroll, behind the definition.
    gsap.fromTo(
      root.querySelector('.deva'),
      { yPercent: 20, scale: 0.9 },
      { yPercent: -20, scale: 1.05, ease: 'none', scrollTrigger: { trigger: '.meaning', start: 'top bottom', end: 'bottom top', scrub: true } },
    );

    // Specialities: on wide screens the three panels travel sideways while the section is pinned.
    mm.add('(min-width: 1000px)', () => {
      const track = root.querySelector<HTMLElement>('.specs-track')!;
      const pin = root.querySelector<HTMLElement>('.specs-pin')!;
      const distance = () => track.scrollWidth - pin.clientWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => '+=' + distance(),
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
    });

    // Recovery is personal: the photo opens from an inset card to full bleed.
    mm.add('(min-width: 700px)', () => {
      gsap.fromTo(
        root.querySelector('.personal-media'),
        { clipPath: 'inset(14% 18% 14% 18% round 28px)' },
        {
          clipPath: 'inset(0% 0% 0% 0% round 0px)',
          ease: 'none',
          scrollTrigger: { trigger: '.personal', start: 'top top', end: '+=70%', scrub: true, pin: '.personal-stage' },
        },
      );
    });
    gsap.from(root.querySelectorAll('.personal-copy > *'), {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'expo.out',
      scrollTrigger: { trigger: '.personal', start: 'top 20%', once: true },
    });

    // Process: each card shrinks back slightly as the next one stacks over it.
    const cards = gsap.utils.toArray<HTMLElement>('.deck-card');
    cards.forEach((card, i) => {
      const next = cards[i + 1];
      if (!next) return;
      gsap.to(card, {
        scale: 0.94,
        ease: 'none',
        scrollTrigger: { trigger: next, start: 'top 85%', end: 'top 25%', scrub: true },
      });
    });

    // Small rises for the guide list and headings.
    root.querySelectorAll<HTMLElement>('[data-rise], .guide h2, .closing h2').forEach((el) => {
      gsap.from(el, { y: 36, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } });
    });

    // Closing marquee: drifts on its own and speeds with scroll.
    const row = root.querySelector('.marquee-row');
    if (row) {
      const loop = gsap.to(row, { xPercent: -50, duration: 38, ease: 'none', repeat: -1 });
      ScrollTrigger.create({
        trigger: '.closing',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          gsap.to(loop, { timeScale: 1 + Math.min(4, Math.abs(self.getVelocity()) / 400), duration: 0.2, overwrite: true });
          gsap.to(loop, { timeScale: 1, duration: 1, delay: 0.25 });
        },
      });
    }
  }

  /** Wrap each word in a span, preserving <em>. */
  private splitWords(el: HTMLElement): HTMLElement[] {
    const out: HTMLElement[] = [];
    const walk = (node: Node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          (child.textContent ?? '').split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) frag.append(part);
            else {
              const s = document.createElement('span');
              s.className = 'w';
              s.textContent = part;
              frag.append(s);
              out.push(s);
            }
          });
          child.replaceWith(frag);
        } else walk(child);
      });
    };
    walk(el);
    return out;
  }
}
