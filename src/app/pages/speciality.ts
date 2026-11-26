import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import {
  CONDITION_GUIDES,
  SPECIALITIES_FULL,
  SPECIALITY_PAGES,
  SpecialityFull,
  getSpeciality,
  slugify,
} from '../site/content/specialities';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Crumbs, Cta, Faq, PhotoFrame } from '../site/ui';

@Component({
  selector: 'sp-speciality',
  imports: [RouterLink, Glyph, Crumbs, Cta, Faq, PhotoFrame],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let s = spec();
    @let pg = page();
    <section class="page-hero with-photo">
      <div class="wrap page-hero-grid">
        <div>
          <sp-crumbs [items]="crumbs()" />
          <p class="kicker">{{ s.tag }}</p>
          <h1>{{ s.short }} <em>rehabilitation</em> in Whitefield, Bengaluru</h1>
          <p class="page-lead">{{ s.intro }}</p>
          <div class="hero-actions">
            <a class="btn-v3 primary lg" routerLink="/contact">Request an assessment <app-glyph name="right" /></a>
            <a class="btn-v3 outline lg" [routerLink]="path()" fragment="conditions">{{ s.conditions.length }} conditions we support</a>
          </div>
        </div>
        <sp-photo [photo]="pg.photo" [eager]="true" />
      </div>
    </section>

    <section class="block slim">
      <div class="wrap two-col">
        <div data-rise>
          <p class="kicker">What we work towards</p>
          <h2>Goals of {{ s.short.toLowerCase() }} <em>rehabilitation</em></h2>
          <p class="body-lg">{{ s.goals }}</p>
          <h3 class="sub-h">What to expect</h3>
          <ul class="ticks dark">
            @for (e of pg.expect; track e) {
              <li><span class="tick" aria-hidden="true"></span><p>{{ e }}</p></li>
            }
          </ul>
        </div>
        <div class="approach-card" data-rise>
          <p class="kicker">Rehabilitation approaches</p>
          <h3>What therapy may include</h3>
          <ul class="approach-list">
            @for (a of s.approach; track a) {
              <li><app-glyph name="right" /> {{ a }}</li>
            }
          </ul>
          <p class="fine">The selection of approaches depends on your individual clinical assessment.</p>
        </div>
      </div>
    </section>

    <section class="block tint" id="conditions" aria-labelledby="cond-h">
      <div class="wrap">
        <header class="block-head" data-rise>
          <p class="kicker">Conditions and recovery needs</p>
          <h2 id="cond-h">Conditions we <em>support</em></h2>
          <p>Rehabilitation for each of these depends on medical stability, your treating doctor’s advice and an individual assessment.</p>
        </header>
        <nav class="toc" aria-label="Conditions on this page">
          @for (c of conditions(); track c.slug) {
            @if (c.guide) {
              <a [routerLink]="c.guide">{{ c.name }}</a>
            } @else {
              <a [routerLink]="path()" [fragment]="c.slug">{{ c.name }}</a>
            }
          }
        </nav>
        <div class="cond-list">
          @for (c of conditions(); track c.slug) {
            <article class="cond-item" [id]="c.slug">
              <h3>{{ c.name }}</h3>
              <p>{{ c.body }}</p>
              @if (c.guide) {
                <a class="arrow-link" [routerLink]="c.guide">Read the full recovery guide <app-glyph name="right" /></a>
              }
            </article>
          }
        </div>
      </div>
    </section>

    <section class="block" aria-labelledby="faq-h">
      <div class="wrap faq-wrap">
        <div>
          <p class="kicker">FAQs</p>
          <h2 id="faq-h">Questions about {{ s.short.toLowerCase() }} <em>rehabilitation</em></h2>
          <p class="fine">General information only. Your care team will advise on your individual situation.</p>
        </div>
        <sp-faq [items]="s.faqs" [id]="s.id + '-faq'" />
      </div>
    </section>

    <section class="block tint slim" aria-labelledby="other-h">
      <div class="wrap">
        <h2 id="other-h" class="small-h">Other specialities</h2>
        <div class="other-grid">
          @for (o of others(); track o.id) {
            <a class="other-card" [routerLink]="'/rehabilitation/' + o.id">
              <span class="spec-tag">{{ o.tag }}</span>
              <strong>{{ o.title }}</strong>
              <app-glyph name="right" />
            </a>
          }
        </div>
      </div>
    </section>

    <sp-cta />
  `,
})
export class SpecialityPage {
  /** Route param, bound by withComponentInputBinding. */
  readonly slug = input<string>('orthopaedic');

  protected readonly spec = computed<SpecialityFull>(() => getSpeciality(this.slug()) ?? SPECIALITIES_FULL[0]);
  protected readonly page = computed(() => SPECIALITY_PAGES[this.spec().id]);
  protected readonly path = computed(() => '/rehabilitation/' + this.spec().id);
  protected readonly others = computed(() => SPECIALITIES_FULL.filter((s) => s.id !== this.spec().id));
  protected readonly crumbs = computed(() => [
    { label: 'Home', link: '/' },
    { label: 'Specialities', link: '/rehabilitation' },
    { label: this.spec().title, link: this.path() },
  ]);
  protected readonly conditions = computed(() =>
    this.spec().conditions.map((c) => {
      const slug = slugify(c.name);
      return { ...c, slug, guide: CONDITION_GUIDES[slug] };
    }),
  );

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const s = this.spec();
      const pg = this.page();
      seo.set({
        title: pg.seoTitle,
        description: pg.seoDescription,
        path: this.path(),
        image: pg.photo.src,
        jsonLd: [
          seo.breadcrumbs(this.crumbs()),
          seo.medicalPage({ name: s.title, description: pg.seoDescription, path: this.path(), about: s.title }),
          seo.faq(s.faqs),
        ],
      });
    });
    const motion = inject(Motion);
    const host = inject(ElementRef<HTMLElement>);
    const destroy = inject(DestroyRef);
    afterNextRender(() => motion.attach(host.nativeElement, destroy));
  }
}
