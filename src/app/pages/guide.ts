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
import { GUIDES, findGuide, guideBySlug, guidePath } from '../site/content/guides';
import { photoForGuide } from '../site/content/guides/photos';
import { getSpeciality } from '../site/content/specialities';
import { CallbackForm } from '../site/callback-form';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Crumbs, Cta, Faq, PhotoFrame } from '../site/ui';

/** One template for every condition guide: /rehabilitation/:spec/:slug. */
@Component({
  selector: 'sp-guide',
  imports: [RouterLink, Glyph, Crumbs, Cta, Faq, PhotoFrame, CallbackForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let g = guide();
    <article class="guide-page">
      <header class="page-hero with-photo">
        <div class="wrap page-hero-grid">
          <div>
            <sp-crumbs [items]="crumbs()" />
            <p class="kicker">{{ specTitle() }} · Condition guide</p>
            <h1>
              @for (part of h1Parts(); track $index) {
                @if (part.em) {
                  <em>{{ part.text }}</em>
                } @else {
                  {{ part.text }}
                }
              }
            </h1>
            <p class="page-lead">{{ g.lead }}</p>
            <div class="hero-actions">
              <a class="btn-v3 primary lg" routerLink="/contact">Request an assessment <app-glyph name="right" /></a>
            </div>
            <p class="meta-line">Last updated {{ g.updated }} · Clinical review by SPANDA’s rehabilitation team pending before launch</p>
          </div>
          <sp-photo [photo]="photo()" [eager]="true" />
        </div>
      </header>

      @if (g.facts?.length) {
        <section class="facts-strip" aria-label="Key facts">
          <div class="wrap">
            <dl class="fact-row">
              @for (f of g.facts; track f.label) {
                <div><dt>{{ f.value }}</dt><dd>{{ f.label }}</dd></div>
              }
            </dl>
            <p class="fine center">General figures from published patient information. Individual recovery varies.</p>
          </div>
        </section>
      }

      <div class="wrap article-grid">
        <aside class="toc-side" aria-label="On this page">
          <p class="kicker">On this page</p>
          <ol>
            @for (t of toc(); track t.id) {
              <li><a [routerLink]="path()" [fragment]="t.id">{{ t.label }}</a></li>
            }
          </ol>
          <a class="btn-v3 primary" routerLink="/contact">Request an assessment</a>
        </aside>

        <div class="prose">
          @for (s of g.sections; track s.id) {
            <section [id]="s.id">
              <h2>{{ s.heading }}</h2>
              @for (p of s.paragraphs; track $index) {
                <p>{{ p }}</p>
              }
            </section>
          }

          @if (g.timeline?.length) {
            <section id="recovery-timeline">
              <h2>{{ g.timelineHeading ?? 'What recovery may look like' }}</h2>
              @if (g.timelineIntro) {
                <p>{{ g.timelineIntro }}</p>
              }
              <div class="timeline-wrap">
                <span class="timeline-line" aria-hidden="true"><span data-draw-y></span></span>
                <ol class="timeline">
                  @for (t of g.timeline; track t.when) {
                    <li data-rise>
                      <p class="tl-when">{{ t.when }}</p>
                      <h3>{{ t.title }}</h3>
                      <p>{{ t.body }}</p>
                    </li>
                  }
                </ol>
              </div>
            </section>
          }

          <section id="rehabilitation-at-spanda">
            <h2>What rehabilitation at SPANDA may include</h2>
            <p>
              Rehabilitation at SPANDA in Whitefield begins with an assessment and is planned around your treating doctor’s
              advice and precautions. Depending on your needs, your programme may include:
            </p>
            <div class="prog-grid">
              @for (p of g.programme; track p.title) {
                <div class="prog-card" data-rise>
                  <h3>{{ p.title }}</h3>
                  <p>{{ p.body }}</p>
                </div>
              }
            </div>
          </section>


          <section class="quick-cb" aria-labelledby="qcb-h" data-rise>
            <div>
              <p class="kicker">Ask our team</p>
              <h2 id="qcb-h">Request a callback about {{ g.condition.toLowerCase() }}</h2>
              <p>Share your name and number, and our team will call you about assessment availability and suitability.</p>
            </div>
            <sp-callback-form [compact]="true" [topic]="g.condition" label="Call me back" />
          </section>

          @if (g.checklist?.length) {
            <section id="practical-tips">
              <h2>{{ g.checklistHeading ?? 'Practical tips' }}</h2>
              @if (g.checklistIntro) {
                <p>{{ g.checklistIntro }}</p>
              }
              <ul class="check-list">
                @for (c of g.checklist; track c) {
                  <li>{{ c }}</li>
                }
              </ul>
            </section>
          }

          <section id="warning-signs" class="warn-box">
            <h2>Warning signs: when to seek medical help</h2>
            <p>{{ g.warningIntro }}</p>
            <ul>
              @for (w of g.warnings; track w) {
                <li>{{ w }}</li>
              }
            </ul>
            <p class="fine">In an emergency, call 112 straight away.</p>
          </section>

          @if (g.closing?.length) {
            <section id="living-well">
              <h2>{{ g.closingHeading ?? 'Living well' }}</h2>
              @for (p of g.closing; track $index) {
                <p>{{ p }}</p>
              }
            </section>
          }

          <section id="faqs">
            <h2>Frequently asked questions</h2>
            <sp-faq [items]="g.faqs" [id]="g.slug + '-faq'" />
          </section>

          <section class="refs" aria-labelledby="refs-h">
            <h2 id="refs-h">References</h2>
            <p class="fine">
              This guide was written by SPANDA for general patient education, using information from the sources below.
              SPANDA is not affiliated with these organisations. It is not a substitute for advice from your own doctor.
            </p>
            <ol>
              @for (r of g.references; track r.url) {
                <li>{{ r.org }}. <a [href]="r.url" target="_blank" rel="noopener">{{ r.title }}</a> ({{ r.date }}).</li>
              }
            </ol>
          </section>

          @if (related().length) {
            <section class="related" aria-labelledby="rel-h">
              <h2 id="rel-h">Related conditions</h2>
              <div class="other-grid">
                @for (r of related(); track r.slug) {
                  <a class="other-card" [routerLink]="r.path">
                    <span class="spec-tag">{{ r.spec }}</span>
                    <strong>{{ r.name }}</strong>
                    <app-glyph name="right" />
                  </a>
                }
              </div>
            </section>
          }
        </div>
      </div>
    </article>

    <sp-cta />
  `,
})
export class GuidePage {
  /** Route params, bound by withComponentInputBinding. */
  readonly spec = input<string>('orthopaedic');
  readonly slug = input<string>('knee-replacement');

  protected readonly guide = computed(() => findGuide(this.spec(), this.slug()) ?? GUIDES[0]);
  protected readonly path = computed(() => guidePath(this.guide()));
  protected readonly speciality = computed(() => getSpeciality(this.guide().spec)!);
  protected readonly specTitle = computed(() => this.speciality().title);
  protected readonly photo = computed(() => photoForGuide(this.guide().slug, this.guide().photo));
  protected readonly crumbs = computed(() => [
    { label: 'Home', link: '/' },
    { label: 'Specialities', link: '/rehabilitation' },
    { label: this.specTitle(), link: '/rehabilitation/' + this.guide().spec },
    { label: this.guide().condition, link: this.path() },
  ]);

  /** Split the H1 so the accent phrase can be set in italics. */
  protected readonly h1Parts = computed(() => {
    const { h1, accent } = this.guide();
    const i = accent ? h1.indexOf(accent) : -1;
    if (i < 0 || !accent) return [{ text: h1, em: false }];
    return [
      { text: h1.slice(0, i), em: false },
      { text: accent, em: true },
      { text: h1.slice(i + accent.length), em: false },
    ].filter((p) => p.text);
  });

  protected readonly toc = computed(() => {
    const g = this.guide();
    return [
      ...g.sections.map((s) => ({ id: s.id, label: s.heading })),
      ...(g.timeline?.length ? [{ id: 'recovery-timeline', label: 'Recovery timeline' }] : []),
      { id: 'rehabilitation-at-spanda', label: 'Rehabilitation at SPANDA' },
      ...(g.checklist?.length ? [{ id: 'practical-tips', label: g.checklistHeading ?? 'Practical tips' }] : []),
      { id: 'warning-signs', label: 'Warning signs' },
      ...(g.closing?.length ? [{ id: 'living-well', label: g.closingHeading ?? 'Living well' }] : []),
      { id: 'faqs', label: 'FAQs' },
    ];
  });

  protected readonly related = computed(() =>
    this.guide()
      .related.map((s) => guideBySlug(s))
      .filter((g) => !!g)
      .map((g) => ({ slug: g.slug, name: g.condition, path: guidePath(g), spec: getSpeciality(g.spec)!.short })),
  );

  constructor() {
    const seo = inject(Seo);
    effect(() => {
      const g = this.guide();
      seo.set({
        title: g.seoTitle,
        description: g.seoDescription,
        path: this.path(),
        image: this.photo().src,
        type: 'article',
        jsonLd: [
          seo.breadcrumbs(this.crumbs()),
          seo.medicalPage({ name: g.h1, description: g.seoDescription, path: this.path(), about: g.condition }),
          seo.faq(g.faqs),
        ],
      });
    });
    const motion = inject(Motion);
    const host = inject(ElementRef<HTMLElement>);
    const destroy = inject(DestroyRef);
    afterNextRender(() => motion.attach(host.nativeElement, destroy));
  }
}
