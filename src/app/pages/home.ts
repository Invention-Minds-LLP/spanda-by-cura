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
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import { FAQS, STAGES, VISIT } from '../home/home.content';
import { SITE } from '../site.config';
import { CallbackForm } from '../site/callback-form';
import { CONDITION_GUIDES, SPECIALITIES_FULL, SPECIALITY_PAGES, SpecialityFull, slugify } from '../site/content/specialities';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Cta, Faq, PhotoFrame } from '../site/ui';
import type { PulseImage } from '../v2/pulse-image';

type Tab = 'all' | SpecialityFull['id'];

@Component({
  selector: 'sp-home',
  imports: [RouterLink, Glyph, CallbackForm, Faq, Cta, PhotoFrame],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly site = SITE;
  protected readonly specs = SPECIALITIES_FULL;
  protected readonly pages = SPECIALITY_PAGES;
  protected readonly stages = STAGES;
  protected readonly visit = VISIT;
  protected readonly faqs = [...FAQS, ...SPECIALITIES_FULL.flatMap((s) => s.faqs)];
  protected readonly therapyPhoto = {
    src: 'img/stock/resistance-band-exercise.jpg',
    alt: 'A patient doing an ankle strengthening exercise with a resistance band',
    width: 1280,
    height: 1600,
  };

  protected readonly tab = signal<Tab>('all');
  protected readonly showAll = signal(false);

  private readonly all = SPECIALITIES_FULL.flatMap((s) =>
    s.conditions.map((c) => {
      const slug = slugify(c.name);
      const guide = CONDITION_GUIDES[slug];
      return { ...c, specId: s.id, spec: s.title, guide: !!guide, link: guide ?? '/rehabilitation/' + s.id, fragment: guide ? undefined : slug };
    }),
  );
  private readonly filtered = computed(() => (this.tab() === 'all' ? this.all : this.all.filter((c) => c.specId === this.tab())));
  protected readonly visibleConditions = computed(() => (this.showAll() ? this.filtered() : this.filtered().slice(0, 6)));
  protected readonly hiddenCount = computed(() => this.filtered().length - this.visibleConditions().length);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroy = inject(DestroyRef);
  private readonly motion = inject(Motion);
  private pulse?: PulseImage;

  constructor() {
    const seo = inject(Seo);
    seo.set({
      title: 'SPANDA by Cura | Rehabilitation Centre in Whitefield, Bengaluru',
      description:
        'Personalised orthopaedic, neurological and pulmonary rehabilitation in Whitefield, Bengaluru. Assessment-led care for 29 conditions, from knee replacement to stroke and COPD.',
      path: '/',
      jsonLd: [seo.faq(this.faqs)],
    });
    this.destroy.onDestroy(() => this.pulse?.dispose());
    afterNextRender(() => this.start());
  }

  protected pickTab(t: Tab): void {
    this.tab.set(t);
    this.showAll.set(false);
  }

  private async start(): Promise<void> {
    const root = this.host.nativeElement as HTMLElement;
    await this.motion.attach(root, this.destroy);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const { gsap } = await import('gsap');

    gsap.from(root.querySelectorAll('.hero-copy > *'), { y: 30, opacity: 0, duration: 1, ease: 'expo.out', stagger: 0.08 });
    gsap.from(root.querySelectorAll('.float-card, .float-tag'), { y: 30, opacity: 0, duration: 1, ease: 'back.out(1.6)', stagger: 0.15, delay: 0.6 });
    root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      const to = Number(el.dataset['count']);
      const o = { v: 0 };
      gsap.to(o, { v: to, duration: 1.6, ease: 'power2.out', delay: 0.5, onUpdate: () => (el.textContent = String(Math.round(o.v))) });
    });

    // The hero photograph "breathes" through WebGL, with a soft pulse.
    const frame = root.querySelector<HTMLElement>('[data-pulse]');
    const probe = document.createElement('canvas');
    if (!frame || !(probe.getContext('webgl2') || probe.getContext('webgl'))) return;
    const img = frame.querySelector('img')!;
    try {
      await img.decode();
    } catch {
      return;
    }
    const { PulseImage } = await import('../v2/pulse-image');
    const p = new PulseImage(frame.querySelector('canvas')!, img, (navigator.hardwareConcurrency ?? 8) <= 4, {
      origin: [0.5, 0.45],
      every: 4.5,
      travel: 0.04,
      focus: [0.5, 0.6],
    });
    const fit = () => p.resize(frame.clientWidth, frame.clientHeight);
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(frame);
    const io = new IntersectionObserver(([e]) => p.setVisible(e.isIntersecting));
    io.observe(frame);
    this.destroy.onDestroy(() => {
      ro.disconnect();
      io.disconnect();
    });
    frame.classList.add('is-gl');
    this.pulse = p;
  }
}
