import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import { SITE } from '../site.config';
import { CallbackForm } from '../site/callback-form';
import { ABOUT, APPROACH, PATIENT_INFO, PRIVACY } from '../site/content/pages';
import { SPECIALITIES_FULL } from '../site/content/specialities';
import { Motion } from '../site/motion';
import { Crumb, Seo } from '../site/seo';
import { Crumbs, Cta, Faq, PhotoFrame } from '../site/ui';

/** Attach shared scroll motion once the page is in the browser. */
function useMotion(): void {
  const motion = inject(Motion);
  const host = inject(ElementRef<HTMLElement>);
  const destroy = inject(DestroyRef);
  afterNextRender(() => motion.attach(host.nativeElement, destroy));
}

const home: Crumb = { label: 'Home', link: '/' };

/* ───────────────────────── About ───────────────────────── */
@Component({
  selector: 'sp-about',
  imports: [RouterLink, Glyph, Crumbs, Cta, PhotoFrame],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero with-photo">
      <div class="wrap page-hero-grid">
        <div>
          <sp-crumbs [items]="crumbs" />
          <p class="kicker">About SPANDA</p>
          <h1>Supporting recovery. <em>Restoring possibilities.</em></h1>
          <p class="page-lead">{{ a.lead }}</p>
        </div>
        <sp-photo [photo]="a.photo" [eager]="true" />
      </div>
    </section>

    <section class="block slim">
      <div class="wrap two-col">
        <div class="prose" data-rise>
          <h2>Recovery is <em>personal</em></h2>
          @for (p of a.story; track $index) {
            <p>{{ p }}</p>
          }
        </div>
        <div class="mv-stack">
          <div class="mv-card" data-rise>
            <p class="kicker">Our mission</p>
            <p class="mv-text">{{ a.mission }}</p>
          </div>
          <div class="mv-card alt" data-rise>
            <p class="kicker">Our vision</p>
            <p class="mv-text">{{ a.vision }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="name-band" aria-labelledby="name-h">
      <div class="wrap name-inner">
        <p class="deva" lang="sa" aria-hidden="true">{{ a.name.word }}</p>
        <div>
          <h2 id="name-h">Why <em>Spanda?</em></h2>
          <p>{{ a.name.text }}</p>
        </div>
      </div>
    </section>

    <section class="block">
      <div class="wrap">
        <header class="block-head center" data-rise>
          <p class="kicker">How we work</p>
          <h2>What you can <em>expect from us</em></h2>
        </header>
        <div class="value-grid">
          @for (v of a.values; track v.title) {
            <div class="value-card" data-rise>
              <h3>{{ v.title }}</h3>
              <p>{{ v.body }}</p>
            </div>
          }
        </div>
        <div class="more-row">
          <a class="btn-v3 outline" routerLink="/rehabilitation">Explore our specialities <app-glyph name="right" /></a>
        </div>
      </div>
    </section>

    <sp-cta />
  `,
})
export class AboutPage {
  protected readonly a = ABOUT;
  protected readonly crumbs = [home, { label: 'About', link: '/about' }];
  constructor() {
    const seo = inject(Seo);
    seo.set({ title: ABOUT.seoTitle, description: ABOUT.seoDescription, path: '/about', image: ABOUT.photo.src, jsonLd: [seo.breadcrumbs(this.crumbs)] });
    useMotion();
  }
}

/* ───────────────────────── Our approach ───────────────────────── */
@Component({
  selector: 'sp-approach',
  imports: [RouterLink, Glyph, Crumbs, Cta, PhotoFrame],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero with-photo">
      <div class="wrap page-hero-grid">
        <div>
          <sp-crumbs [items]="crumbs" />
          <p class="kicker">Our approach</p>
          <h1>Personalised recovery <em>at every stage</em></h1>
          <p class="page-lead">{{ a.lead }}</p>
        </div>
        <sp-photo [photo]="a.photo" [eager]="true" />
      </div>
    </section>

    <section class="block slim" aria-labelledby="stages-h">
      <div class="wrap">
        <header class="block-head" data-rise>
          <p class="kicker">Five stages of rehabilitation</p>
          <h2 id="stages-h">How rehabilitation <em>works</em></h2>
        </header>
        <div class="stage-wrap">
          <span class="stage-line" aria-hidden="true"><span data-draw-y></span></span>
          <ol class="stage-list">
            @for (s of a.stages; track s.title; let i = $index) {
              <li data-rise>
                <span class="step-n" aria-hidden="true">{{ i + 1 }}</span>
                <div>
                  <h3>{{ s.title }}</h3>
                  <p class="stage-sum">{{ s.summary }}</p>
                  <p>{{ s.detail }}</p>
                </div>
              </li>
            }
          </ol>
        </div>
      </div>
    </section>

    <section class="block tint slim">
      <div class="wrap two-col">
        <div data-rise>
          <p class="kicker">Patients and caregivers</p>
          <h2>Recovery is a <em>shared effort</em></h2>
          <p class="body-lg">{{ a.caregivers }}</p>
        </div>
        <div class="approach-card" data-rise>
          <p class="kicker">Explore by speciality</p>
          <ul class="approach-list links">
            @for (s of specs; track s.id) {
              <li><a [routerLink]="'/rehabilitation/' + s.id"><app-glyph name="right" /> {{ s.title }}</a></li>
            }
          </ul>
        </div>
      </div>
    </section>

    <sp-cta />
  `,
})
export class ApproachPage {
  protected readonly a = APPROACH;
  protected readonly specs = SPECIALITIES_FULL;
  protected readonly crumbs = [home, { label: 'Our approach', link: '/our-approach' }];
  constructor() {
    const seo = inject(Seo);
    seo.set({ title: APPROACH.seoTitle, description: APPROACH.seoDescription, path: '/our-approach', image: APPROACH.photo.src, jsonLd: [seo.breadcrumbs(this.crumbs)] });
    useMotion();
  }
}

/* ───────────────────────── Patient information ───────────────────────── */
@Component({
  selector: 'sp-patient-info',
  imports: [RouterLink, Glyph, Crumbs, Cta, Faq],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero">
      <div class="wrap">
        <sp-crumbs [items]="crumbs" />
        <p class="kicker">Patient information</p>
        <h1>Preparing for <em>your visit</em></h1>
        <p class="page-lead">{{ p.lead }}</p>
      </div>
    </section>

    <section class="block slim">
      <div class="wrap two-col">
        <div class="guide-card" data-rise>
          <p class="kicker">What to bring</p>
          <h2>Your first <em>appointment</em></h2>
          <ul class="ticks">
            @for (b of p.bring; track b.title) {
              <li>
                <span class="tick" aria-hidden="true"></span>
                <div><h3>{{ b.title }}</h3><p>{{ b.body }}</p></div>
              </li>
            }
          </ul>
          <p class="guide-note">Please confirm appointment requirements and arrangements with the centre before visiting.</p>
        </div>
        <div data-rise>
          <p class="kicker">At the assessment</p>
          <h2>What happens at <em>your first visit</em></h2>
          <ol class="num-list">
            @for (f of p.firstVisit; track $index; let i = $index) {
              <li><span class="step-n sm" aria-hidden="true">{{ i + 1 }}</span><p>{{ f }}</p></li>
            }
          </ol>
          <a class="btn-v3 outline" routerLink="/our-approach">How rehabilitation works <app-glyph name="right" /></a>
        </div>
      </div>
    </section>

    <section class="block tint" aria-labelledby="pi-faq">
      <div class="wrap faq-wrap">
        <div>
          <p class="kicker">FAQs</p>
          <h2 id="pi-faq">Frequently asked <em>questions</em></h2>
        </div>
        <sp-faq [items]="p.faqs" id="pi-faq-list" />
      </div>
    </section>

    <section class="block slim">
      <div class="wrap">
        <div class="warn-box" role="note">
          <h2>Important information</h2>
          <p>{{ p.important }}</p>
        </div>
      </div>
    </section>

    <sp-cta />
  `,
})
export class PatientInfoPage {
  protected readonly p = PATIENT_INFO;
  protected readonly crumbs = [home, { label: 'Patient information', link: '/patient-information' }];
  constructor() {
    const seo = inject(Seo);
    seo.set({
      title: PATIENT_INFO.seoTitle,
      description: PATIENT_INFO.seoDescription,
      path: '/patient-information',
      jsonLd: [seo.breadcrumbs(this.crumbs), seo.faq(PATIENT_INFO.faqs)],
    });
    useMotion();
  }
}

/* ───────────────────────── Contact ───────────────────────── */
@Component({
  selector: 'sp-contact',
  imports: [Glyph, Crumbs, CallbackForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero">
      <div class="wrap">
        <sp-crumbs [items]="crumbs" />
        <p class="kicker">Contact</p>
        <h1>Request an <em>assessment</em></h1>
        <p class="page-lead">
          Contact SPANDA Rehabilitation Centre to discuss rehabilitation suitability and appointment availability.
        </p>
      </div>
    </section>

    <section class="block slim">
      <div class="wrap contact-grid">
        <div class="callback" data-rise>
          <div class="callback-intro">
            <p class="kicker">Assessment enquiry</p>
            <h2>Tell us a little, and we will call you back.</h2>
          </div>
          <sp-callback-form label="Send enquiry" />
        </div>
        <aside class="contact-side" data-rise>
          <div class="contact-card">
            <h2>{{ site.name }}</h2>
            <p class="contact-line"><app-glyph name="pin" /> {{ site.locality }}, {{ site.region }}</p>
            <p class="contact-line">
              <app-glyph name="phone" />
              @if (site.phoneHref) {
                <a [href]="'tel:' + site.phoneHref">{{ site.phoneDisplay }}</a>
              } @else {
                Telephone to be confirmed
              }
            </p>
            <p class="contact-line">
              <app-glyph name="mail" />
              @if (site.email) {
                <a [href]="'mailto:' + site.email">{{ site.email }}</a>
              } @else {
                Email to be confirmed
              }
            </p>
            <p class="fine">The exact address, telephone, email, opening hours and WhatsApp number will be added after verification.</p>
          </div>
          <div class="warn-box compact" role="note">
            <h2>Urgent medical concerns</h2>
            <p>This form is not monitored for emergencies. For urgent medical concerns, call 112 or go to the nearest emergency department.</p>
          </div>
        </aside>
      </div>
    </section>
  `,
})
export class ContactPage {
  protected readonly site = SITE;
  protected readonly crumbs = [home, { label: 'Contact', link: '/contact' }];
  constructor() {
    const seo = inject(Seo);
    seo.set({
      title: 'Contact SPANDA | Request a Rehabilitation Assessment, Whitefield',
      description:
        'Request a rehabilitation assessment at SPANDA by Cura, Whitefield, Bengaluru. Share a few details and our team will call you back about suitability and availability.',
      path: '/contact',
      jsonLd: [seo.breadcrumbs(this.crumbs)],
    });
    useMotion();
  }
}

/* ───────────────────────── Privacy ───────────────────────── */
@Component({
  selector: 'sp-privacy',
  imports: [Crumbs],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero">
      <div class="wrap">
        <sp-crumbs [items]="crumbs" />
        <p class="kicker">Privacy</p>
        <h1>Privacy <em>information</em></h1>
        <p class="page-lead">How we handle the details you share through this website. Last updated {{ updated }}.</p>
      </div>
    </section>
    <section class="block slim">
      <div class="wrap prose narrow">
        <div class="warn-box compact" role="note">
          <p>
            <strong>Interim notice.</strong> SPANDA’s full privacy notice, data-retention policy and grievance contact are
            being finalised and will be published here before the centre opens.
          </p>
        </div>
        <h2>What we collect</h2>
        <p>
          When you use our enquiry form, we collect only your name, phone number, the area of rehabilitation you are asking
          about and your preferred time for a call. Please do not send medical records or health details through the form.
        </p>
        <h2>Why we collect it</h2>
        <p>We use these details only to respond to your enquiry about assessment availability and suitability.</p>
        <h2>Your consent</h2>
        <p>
          We process your details on the basis of the consent you give when you submit the form, in line with the Digital
          Personal Data Protection Act, 2023. You may withdraw consent and ask us to delete your details at any time by
          contacting the centre.
        </p>
        <h2>Sharing</h2>
        <p>
          We do not sell your details or share them with advertisers. Enquiries are received through our website hosting
          provider’s form service and are accessed only by staff handling enquiries.
        </p>
        <h2>Cookies and tracking</h2>
        <p>This website does not currently use advertising or analytics cookies.</p>
      </div>
    </section>
  `,
})
export class PrivacyPage {
  protected readonly updated = PRIVACY.updated;
  protected readonly crumbs = [home, { label: 'Privacy', link: '/privacy' }];
  constructor() {
    const seo = inject(Seo);
    seo.set({ title: PRIVACY.seoTitle, description: PRIVACY.seoDescription, path: '/privacy', jsonLd: [seo.breadcrumbs(this.crumbs)] });
  }
}

/* ───────────────────────── 404 ───────────────────────── */
@Component({
  selector: 'sp-not-found',
  imports: [RouterLink, Glyph],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero center-hero">
      <div class="wrap">
        <p class="kicker">Page not found</p>
        <h1>This page has <em>moved or doesn’t exist</em></h1>
        <p class="page-lead">Try one of these instead:</p>
        <div class="hero-actions center">
          <a class="btn-v3 primary lg" routerLink="/">Home <app-glyph name="right" /></a>
          <a class="btn-v3 outline lg" routerLink="/rehabilitation">Our specialities</a>
          <a class="btn-v3 outline lg" routerLink="/contact">Contact</a>
        </div>
      </div>
    </section>
  `,
})
export class NotFoundPage {
  constructor() {
    inject(Seo).set({ title: 'Page not found | SPANDA by Cura', description: 'This page could not be found.', path: '/404', noindex: true });
  }
}
