import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import { SPECIALITIES_FULL, SPECIALITY_PAGES } from '../site/content/specialities';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Crumbs, Cta } from '../site/ui';

@Component({
  selector: 'sp-specialities',
  imports: [RouterLink, Glyph, Crumbs, Cta],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero">
      <div class="wrap">
        <sp-crumbs [items]="crumbs" />
        <p class="kicker">Our specialities</p>
        <h1>Rehabilitation <em>specialities</em></h1>
        <p class="page-lead">
          Find information about orthopaedic, neurological and pulmonary rehabilitation at SPANDA in Whitefield,
          Bengaluru, including the conditions we support and what recovery may involve.
        </p>
      </div>
    </section>

    <section class="block slim">
      <div class="wrap spec-rows">
        @for (s of specs; track s.id; let i = $index) {
          <article class="spec-row" [class.flip]="i % 2 === 1" data-rise>
            <div class="spec-row-photo" data-parallax>
              <img [src]="pages[s.id].photo.src" [alt]="pages[s.id].photo.alt" [width]="pages[s.id].photo.width" [height]="pages[s.id].photo.height" loading="lazy" />
              <span class="photo-note on-photo">Representative stock photograph</span>
            </div>
            <div class="spec-row-text">
              <p class="spec-tag">{{ s.tag }}</p>
              <h2>{{ s.title }}</h2>
              <p>{{ s.intro }}</p>
              <ul class="chips">
                @for (c of s.conditions.slice(0, 6); track c.name) {
                  <li>{{ c.name }}</li>
                }
                <li class="chip-more">+{{ s.conditions.length - 6 }} more</li>
              </ul>
              <a class="btn-v3 primary" [routerLink]="'/rehabilitation/' + s.id">Explore {{ s.short.toLowerCase() }} rehabilitation <app-glyph name="right" /></a>
            </div>
          </article>
        }
      </div>
    </section>

    <sp-cta />
  `,
})
export class SpecialitiesPage {
  protected readonly specs = SPECIALITIES_FULL;
  protected readonly pages = SPECIALITY_PAGES;
  protected readonly crumbs = [
    { label: 'Home', link: '/' },
    { label: 'Specialities', link: '/rehabilitation' },
  ];

  constructor() {
    const seo = inject(Seo);
    seo.set({
      title: 'Rehabilitation Specialities in Whitefield, Bengaluru | SPANDA',
      description:
        'Orthopaedic, neurological and pulmonary rehabilitation at SPANDA, Whitefield, Bengaluru. See the 29 conditions we support and how assessment-led care works.',
      path: '/rehabilitation',
      jsonLd: [seo.breadcrumbs(this.crumbs)],
    });
    const motion = inject(Motion);
    const host = inject(ElementRef<HTMLElement>);
    const destroy = inject(DestroyRef);
    afterNextRender(() => motion.attach(host.nativeElement, destroy));
  }
}
