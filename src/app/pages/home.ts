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
import { GUIDE_LINKS } from '../site/content/guides';
import { FAQS, STAGES, VISIT } from '../home/home.content';
import { SITE } from '../site.config';
import { CallbackForm } from '../site/callback-form';
import { SPECIALITIES_FULL, SPECIALITY_PAGES, SpecialityFull, slugify } from '../site/content/specialities';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Cta, Faq, PhotoFrame } from '../site/ui';

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
      const guide = GUIDE_LINKS[slug];
      return { ...c, specId: s.id, spec: s.title, guide: !!guide, link: guide ?? '/rehabilitation/' + s.id, fragment: guide ? undefined : slug };
    }),
  );
  private readonly filtered = computed(() => (this.tab() === 'all' ? this.all : this.all.filter((c) => c.specId === this.tab())));
  protected readonly visibleConditions = computed(() => (this.showAll() ? this.filtered() : this.filtered().slice(0, 6)));
  protected readonly hiddenCount = computed(() => this.filtered().length - this.visibleConditions().length);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroy = inject(DestroyRef);
  private readonly motion = inject(Motion);

  constructor() {
    const seo = inject(Seo);
    seo.set({
      title: 'SPANDA by Cura | Rehabilitation Centre in Whitefield, Bengaluru',
      description:
        'Personalised orthopaedic, neurological and pulmonary rehabilitation in Whitefield, Bengaluru. Assessment-led care for 29 conditions, from knee replacement to stroke and COPD.',
      path: '/',
      jsonLd: [seo.faq(this.faqs)],
    });
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
  }
}
