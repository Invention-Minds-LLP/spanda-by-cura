import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import type { Crumb } from './seo';
import type { Photo } from './content/specialities';
import { SITE } from '../site.config';

/** Accessible accordion for question-and-answer lists. */
@Component({
  selector: 'sp-faq',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="faq-list">
      @for (f of shown(); track f.q; let i = $index) {
        <li class="faq-item" [class.is-open]="open() === i">
          <h3>
            <button
              type="button"
              [id]="id() + '-q-' + i"
              [attr.aria-expanded]="open() === i"
              [attr.aria-controls]="id() + '-a-' + i"
              (click)="open.set(open() === i ? -1 : i)"
            >
              <span>{{ f.q }}</span>
              <span class="faq-icon" aria-hidden="true"></span>
            </button>
          </h3>
          <div class="faq-a" [id]="id() + '-a-' + i" role="region" [attr.aria-labelledby]="id() + '-q-' + i">
            <div><p>{{ f.a }}</p></div>
          </div>
        </li>
      }
    </ul>
    @if (limit() && !all() && items().length > limit()) {
      <button type="button" class="btn-v3 outline" (click)="all.set(true)">Show all {{ items().length }} questions</button>
    }
  `,
})
export class Faq {
  readonly items = input.required<{ q: string; a: string }[]>();
  readonly id = input('faq');
  readonly limit = input(0);
  protected readonly open = signal(0);
  protected readonly all = signal(false);
  protected shown() {
    const l = this.limit();
    return l && !this.all() ? this.items().slice(0, l) : this.items();
  }
}

/** Visible breadcrumb trail (JSON-LD is added by the page through Seo). */
@Component({
  selector: 'sp-crumbs',
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="crumbs" aria-label="Breadcrumb">
      <ol>
        @for (c of items(); track c.link; let last = $last) {
          <li>
            @if (last) {
              <span aria-current="page">{{ c.label }}</span>
            } @else {
              <a [routerLink]="c.link">{{ c.label }}</a>
            }
          </li>
        }
      </ol>
    </nav>
  `,
})
export class Crumbs {
  readonly items = input.required<Crumb[]>();
}

/** A framed photograph with its provenance note. */
@Component({
  selector: 'sp-photo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'photo' },
  template: `
    <div class="photo-frame" data-parallax>
      <img
        [src]="photo().src"
        [alt]="photo().alt"
        [width]="photo().width"
        [height]="photo().height"
        [attr.loading]="eager() ? null : 'lazy'"
        [attr.fetchpriority]="eager() ? 'high' : null"
      />
    </div>
    <p class="photo-note">{{ note() }}</p>
  `,
})
export class PhotoFrame {
  readonly photo = input.required<Photo>();
  readonly eager = input(false);
  readonly note = input('Representative stock photograph');
}

/** Closing call to action used at the foot of every page. */
@Component({
  selector: 'sp-cta',
  imports: [RouterLink, Glyph],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cta" aria-labelledby="cta-title">
      <div class="wrap cta-inner">
        <div>
          <h2 id="cta-title">Let’s discuss your <em>next step.</em></h2>
          <p>Enquire about assessment availability and rehabilitation suitability with our team in {{ site.locality }}.</p>
          <div class="cta-actions">
            <a class="btn-v3 light lg" routerLink="/contact">Request an assessment <app-glyph name="right" /></a>
            <a class="btn-v3 outline-light lg" routerLink="/patient-information">Preparing for your visit</a>
          </div>
        </div>
        <dl class="cta-contact">
          <div><dt><app-glyph name="pin" /> Visit us</dt><dd>{{ site.name }}, {{ site.locality }}, {{ site.region }}</dd></div>
          <div>
            <dt><app-glyph name="phone" /> Call us</dt>
            <dd>
              @if (site.phoneHref) {
                <a [href]="'tel:' + site.phoneHref">{{ site.phoneDisplay }}</a>
              } @else {
                To be confirmed
              }
            </dd>
          </div>
          <div>
            <dt><app-glyph name="mail" /> Email us</dt>
            <dd>
              @if (site.email) {
                <a [href]="'mailto:' + site.email">{{ site.email }}</a>
              } @else {
                To be confirmed
              }
            </dd>
          </div>
        </dl>
      </div>
    </section>
  `,
})
export class Cta {
  protected readonly site = SITE;
}
