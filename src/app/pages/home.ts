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
import { Carousel, CarouselItem } from '../site/carousel';
import { GUIDES, guidePath } from '../site/content/guides';
import { photoForGuide } from '../site/content/guides/photos';
import { SPECIALITIES_FULL, SPECIALITY_PAGES, SpecialityFull } from '../site/content/specialities';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Cta, Faq, PhotoFrame } from '../site/ui';

type Tab = 'all' | SpecialityFull['id'];

@Component({
  selector: 'sp-home',
  imports: [RouterLink, Glyph, CallbackForm, Carousel, Faq, Cta, PhotoFrame],
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
    src: 'img/m/band-exercise.jpg',
    alt: 'A physiotherapist helping a senior man with a resistance band exercise',
    width: 1800,
    height: 1005,
  };

  /**
   * Team and centre cards. Stock photographs are clearly labelled so they are not mistaken for SPANDA's own staff or
   * premises (NMC notice 06/10/2026, clauses 7.2 and 9.2); replace with real, consented photographs before opening.
   */
  protected readonly team = [
    { role: 'Clinical team', soon: 'Details coming soon', note: 'Representative stock photograph', src: 'img/m/team-clinical.jpg', pos: '62% 50%', w: 1400, h: 788, alt: 'A doctor in conversation with a patient who uses a wheelchair' },
    { role: 'Therapy team', soon: 'Details coming soon', note: 'Representative stock photograph', src: 'img/m/band-exercise.jpg', pos: '50% 50%', w: 1800, h: 1005, alt: 'A physiotherapist guiding a senior man through a resistance band exercise' },
    { role: 'Care coordination', soon: 'Details coming soon', note: 'Representative stock photograph', src: 'img/m/team-coordination.jpg', pos: '50% 40%', w: 1400, h: 800, alt: 'A clinician explaining a report on a tablet to an older woman' },
    { role: 'The centre, Whitefield, Bengaluru', soon: 'Photographs coming soon', note: 'Representative image, not the SPANDA centre', src: 'img/m/centre-rehab-room.jpg', pos: '50% 50%', w: 1400, h: 933, alt: 'A bright rehabilitation room with parallel bars and exercise equipment' },
  ];

  protected readonly tab = signal<Tab>('all');

  /** Every condition guide as a carousel card, filtered by the speciality tab. */
  private readonly allItems: (CarouselItem & { specId: string })[] = SPECIALITIES_FULL.flatMap((s) =>
    s.conditions.map((c) => {
      const g = GUIDES.find((x) => x.condition === c.name)!;
      return { specId: s.id, name: c.name, body: c.body, spec: s.short, link: guidePath(g), photo: photoForGuide(g.slug, g.photo) };
    }),
  );
  protected readonly carouselItems = computed(() =>
    this.tab() === 'all' ? this.allItems : this.allItems.filter((c) => c.specId === this.tab()),
  );

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
