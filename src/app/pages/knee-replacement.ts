import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import { KNEE_GUIDE } from '../site/content/knee-replacement';
import { Motion } from '../site/motion';
import { Seo } from '../site/seo';
import { Crumbs, Cta, Faq, PhotoFrame } from '../site/ui';

@Component({
  selector: 'sp-knee',
  imports: [RouterLink, Glyph, Crumbs, Cta, Faq, PhotoFrame],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="guide-page">
      <header class="page-hero with-photo">
        <div class="wrap page-hero-grid">
          <div>
            <sp-crumbs [items]="crumbs" />
            <p class="kicker">Orthopaedic rehabilitation · Recovery guide</p>
            <h1>Rehabilitation after <em>knee replacement</em></h1>
            <p class="page-lead">{{ g.lead }}</p>
            <p class="meta-line">
              Last updated {{ g.updated }} · Clinical review by SPANDA’s rehabilitation team pending before launch
            </p>
          </div>
          <sp-photo [photo]="heroPhoto" [eager]="true" />
        </div>
      </header>

      <section class="facts-strip" aria-label="Key facts">
        <div class="wrap">
          <dl class="fact-row">
            @for (f of g.facts; track f.label) {
              <div data-rise><dt>{{ f.value }}</dt><dd>{{ f.label }}</dd></div>
            }
          </dl>
          <p class="fine center">General figures from published patient information. Individual recovery varies.</p>
        </div>
      </section>

      <div class="wrap article-grid">
        <aside class="toc-side" aria-label="On this page">
          <p class="kicker">On this page</p>
          <ol>
            @for (s of g.sections; track s.id) {
              <li><a [routerLink]="path" [fragment]="s.id">{{ s.heading }}</a></li>
            }
            <li><a [routerLink]="path" fragment="recovery-timeline">Recovery timeline</a></li>
            <li><a [routerLink]="path" fragment="rehabilitation-at-spanda">Rehabilitation at SPANDA</a></li>
            <li><a [routerLink]="path" fragment="preparing-your-home">Preparing your home</a></li>
            <li><a [routerLink]="path" fragment="warning-signs">Warning signs</a></li>
            <li><a [routerLink]="path" fragment="life-after">Life after recovery</a></li>
            <li><a [routerLink]="path" fragment="faqs">FAQs</a></li>
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

          <section id="recovery-timeline">
            <h2>Recovery timeline: what to expect week by week</h2>
            <p>{{ g.timelineIntro }}</p>
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

          <section id="rehabilitation-at-spanda">
            <h2>What rehabilitation at SPANDA may include</h2>
            <p>
              Rehabilitation after knee replacement at SPANDA in Whitefield begins with an assessment and follows the
              precautions and weight-bearing instructions set by your surgeon. Depending on your needs, your programme
              may include:
            </p>
            <div class="prog-grid">
              @for (p of g.programme; track p.title) {
                <div class="prog-card" data-rise>
                  <h3>{{ p.title }}</h3>
                  <p>{{ p.body }}</p>
                </div>
              }
            </div>
            <sp-photo class="inline-photo" [photo]="bandPhoto" />
          </section>

          <section id="preparing-your-home">
            <h2>Preparing your home before surgery</h2>
            <p>{{ g.prepareIntro }}</p>
            <ul class="check-list">
              @for (p of g.prepare; track p) {
                <li>{{ p }}</li>
              }
            </ul>
          </section>

          <section id="warning-signs" class="warn-box">
            <h2>Warning signs: when to seek medical help</h2>
            <p>{{ g.warningIntro }}</p>
            <ul>
              @for (w of g.warnings; track w) {
                <li>{{ w }}</li>
              }
            </ul>
            <p class="fine">For chest pain or sudden breathlessness, call emergency services (112) straight away.</p>
          </section>

          <section id="life-after">
            <h2>Life after knee replacement</h2>
            @for (p of g.lifeAfter; track $index) {
              <p>{{ p }}</p>
            }
          </section>

          <section id="faqs">
            <h2>Frequently asked questions</h2>
            <sp-faq [items]="g.faqs" id="knee-faq" />
          </section>

          <section class="refs" aria-labelledby="refs-h">
            <h2 id="refs-h">References</h2>
            <p class="fine">
              This guide was written by SPANDA for general patient education, using information from the sources below.
              SPANDA is not affiliated with these organisations.
            </p>
            <ol>
              @for (r of g.references; track r.url) {
                <li>
                  {{ r.org }}. <a [href]="r.url" target="_blank" rel="noopener">{{ r.title }}</a> ({{ r.date }}).
                </li>
              }
            </ol>
          </section>

          <section class="related" aria-labelledby="rel-h">
            <h2 id="rel-h">Related conditions</h2>
            <div class="other-grid">
              @for (r of g.related; track r.label) {
                <a class="other-card" [routerLink]="r.link" [fragment]="r.fragment">
                  <span class="spec-tag">Orthopaedic</span>
                  <strong>{{ r.label }}</strong>
                  <app-glyph name="right" />
                </a>
              }
            </div>
          </section>
        </div>
      </div>
    </article>

    <sp-cta />
  `,
})
export class KneeReplacementPage {
  protected readonly g = KNEE_GUIDE;
  protected readonly path = KNEE_GUIDE.path;
  protected readonly crumbs = [
    { label: 'Home', link: '/' },
    { label: 'Specialities', link: '/rehabilitation' },
    { label: 'Orthopaedic rehabilitation', link: '/rehabilitation/orthopaedic' },
    { label: 'Knee replacement', link: KNEE_GUIDE.path },
  ];
  protected readonly heroPhoto = {
    src: 'img/stock/walking-with-crutches.jpg',
    alt: 'A patient walking with two crutches along a hospital corridor after surgery',
    width: 1600,
    height: 1338,
  };
  protected readonly bandPhoto = {
    src: 'img/stock/knee-physiotherapy.jpg',
    alt: 'A physiotherapist guiding a knee strengthening exercise with an ankle weight',
    width: 1600,
    height: 1067,
  };

  constructor() {
    const seo = inject(Seo);
    seo.set({
      title: KNEE_GUIDE.seoTitle,
      description: KNEE_GUIDE.seoDescription,
      path: KNEE_GUIDE.path,
      image: this.heroPhoto.src,
      type: 'article',
      jsonLd: [
        seo.breadcrumbs(this.crumbs),
        seo.medicalPage({
          name: KNEE_GUIDE.h1,
          description: KNEE_GUIDE.seoDescription,
          path: KNEE_GUIDE.path,
          about: 'Rehabilitation after total knee replacement',
        }),
        seo.faq(KNEE_GUIDE.faqs),
      ],
    });
    const motion = inject(Motion);
    const host = inject(ElementRef<HTMLElement>);
    const destroy = inject(DestroyRef);
    afterNextRender(() => motion.attach(host.nativeElement, destroy));
  }
}
