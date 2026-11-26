import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  PLATFORM_ID,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Glyph } from '../home/glyph';
import { FAQS, VISIT } from '../home/home.content';
import { SITE, whatsappLink } from '../site.config';
import { GUIDES, guidePath } from './content/guides';
import { PATIENT_INFO } from './content/pages';
import { SPECIALITIES_FULL } from './content/specialities';
import { Tracking } from './tracking';

interface Link {
  label: string;
  link: string;
  fragment?: string;
}
type Guide = (typeof GUIDES)[number];
interface FaqEntry {
  q: string;
  a: string;
  guide?: Guide;
}
interface Msg {
  from: 'bot' | 'user';
  text: string;
  list?: string[];
  links?: Link[];
  urgent?: boolean;
}

/** Everyday words people use, mapped to each guide (in addition to the guide's own name). */
const SYNONYMS: Record<string, string> = {
  'knee-replacement': 'knee replacement tkr tka knee surgery knee operation',
  'hip-replacement': 'hip replacement thr hip surgery hip operation',
  'fracture-recovery': 'fracture broken bone plaster cast trauma accident',
  'spine-surgery': 'spine surgery back surgery disc surgery lumbar fusion',
  'back-and-neck-pain': 'back pain neck pain lower back slip disc slipped disc sciatica spondylosis cervical',
  osteoarthritis: 'arthritis osteoarthritis joint pain stiff joints knee pain wear',
  'ligament-meniscus-injuries': 'acl ligament meniscus knee injury torn',
  'frozen-shoulder': 'frozen shoulder shoulder pain stiff shoulder',
  'sports-injuries': 'sports injury sprain strain muscle tear',
  'mobility-after-hospitalisation': 'weak after hospital bedridden hospital stay deconditioning',
  stroke: 'stroke paralysis paralysed hemiplegia brain attack one side weak',
  'traumatic-brain-injury': 'head injury brain injury tbi accident',
  'spinal-cord-injury': 'spinal cord injury paraplegia quadriplegia',
  'parkinsons-disease': 'parkinson parkinsons tremor shaking',
  'multiple-sclerosis': 'ms multiple sclerosis',
  neuropathy: 'neuropathy numbness tingling diabetic sugar nerve',
  'balance-coordination-disorders': 'balance dizziness falls falling unsteady coordination vertigo',
  'gait-abnormalities': 'walking gait limp shuffling',
  'neurological-weakness': 'weakness weak muscles nerve weakness',
  'after-neurosurgery': 'brain surgery neurosurgery craniotomy',
  copd: 'copd emphysema chronic bronchitis smoker lungs',
  'post-pneumonia-recovery': 'pneumonia chest infection',
  'post-icu-recovery': 'icu ventilator intensive care critical',
  'prolonged-respiratory-illness': 'covid long covid respiratory illness',
  bronchiectasis: 'bronchiectasis mucus phlegm',
  'interstitial-lung-disease': 'ild interstitial lung fibrosis',
  'persistent-breathlessness': 'breathless breathlessness shortness of breath breathing difficulty',
  'after-thoracic-surgery': 'lung surgery chest surgery thoracic',
  'chronic-exercise-limitation': 'stamina tired easily exercise tolerance',
};

const STOP = new Set('a an and are be can do does for from have how i in is it me my of on or the to what when where which who will with you your rehabilitation rehab'.split(' '));
const words = (t: string) =>
  t
    .toLowerCase()
    .replace(/[’']/g, '')
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length > 1 && !STOP.has(w));

/**
 * SPANDA assistant: an on-site, rule-based helper. It answers only from the website's own reviewed content,
 * points to the right guide, and offers a callback. It gives no medical advice, stores nothing and sends
 * nothing anywhere (only an anonymous "chat_open" event when tracking is enabled).
 */
@Component({
  selector: 'sp-chatbot',
  imports: [RouterLink, Glyph],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'chatbot', '(keydown.escape)': 'open.set(false)' },
  template: `
    @if (open()) {
      <section class="cb-panel" role="dialog" aria-label="SPANDA assistant" aria-modal="false">
        <header class="cb-head">
          <img src="brand/symbol.png" alt="" width="1407" height="760" />
          <div>
            <strong>SPANDA assistant</strong>
            <span>Automated help · not medical advice</span>
          </div>
          <button type="button" class="cb-x" (click)="open.set(false)" aria-label="Close assistant"><app-glyph name="close" /></button>
        </header>

        <div class="cb-log" #log aria-live="polite">
          @for (m of messages(); track $index) {
            <div class="cb-msg" [class.user]="m.from === 'user'" [class.urgent]="m.urgent">
              <p>{{ m.text }}</p>
              @if (m.list) {
                <ul>
                  @for (l of m.list; track l) {
                    <li>{{ l }}</li>
                  }
                </ul>
              }
              @if (m.links) {
                <div class="cb-links">
                  @for (l of m.links; track l.label) {
                    @if (l.link.startsWith('http') || l.link.startsWith('tel:')) {
                      <a [href]="l.link" target="_blank" rel="noopener">{{ l.label }}</a>
                    } @else {
                      <a [routerLink]="l.link" [fragment]="l.fragment" (click)="open.set(false)">{{ l.label }}</a>
                    }
                  }
                </div>
              }
            </div>
          }
        </div>

        <div class="cb-chips">
          @for (c of chips; track c) {
            <button type="button" (click)="ask(c)">{{ c }}</button>
          }
        </div>
        <form class="cb-input" (submit)="send($event)">
          <label class="visually-hidden" for="cb-q">Type your question</label>
          <input #q id="cb-q" name="q" type="text" autocomplete="off" maxlength="200" placeholder="e.g. rehab after knee replacement" />
          <button type="submit" aria-label="Send"><app-glyph name="right" /></button>
        </form>
        <p class="cb-fine">Please don’t share personal or medical details here. In an emergency, call 112.</p>
      </section>
    }
    <button type="button" class="cb-launch" [class.is-open]="open()" (click)="toggle()" [attr.aria-expanded]="open()" aria-label="Chat with the SPANDA assistant">
      @if (open()) {
        <app-glyph name="close" />
      } @else {
        <app-glyph name="chat" /> <span>Ask us</span>
      }
    </button>
  `,
})
export class Chatbot {
  protected readonly open = signal(false);
  protected readonly messages = signal<Msg[]>([]);
  protected readonly chips = ['Conditions you support', 'Book an assessment', 'What should I bring?', 'Where are you?', 'Fees and insurance'];
  private readonly log = viewChild<ElementRef<HTMLElement>>('log');
  private readonly q = viewChild<ElementRef<HTMLInputElement>>('q');
  private readonly tracking = inject(Tracking);
  private readonly browser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly whatsapp = whatsappLink('Hello SPANDA, I would like to enquire about a rehabilitation assessment.');

  /** Searchable index built from the site's own content. */
  private readonly guideIndex = GUIDES.map((g) => ({
    g,
    terms: new Set(words(`${g.condition} ${g.slug.replace(/-/g, ' ')} ${SYNONYMS[g.slug] ?? ''}`)),
  }));
  private readonly faqIndex = ([
    ...FAQS,
    ...PATIENT_INFO.faqs,
    ...GUIDES.flatMap((g) => g.faqs.map((f) => ({ ...f, guide: g }))),
  ] as FaqEntry[]).map((f) => ({ f, terms: new Set(words(f.q)) }));

  protected toggle(): void {
    this.open.update((v) => !v);
    if (this.open()) {
      if (!this.messages().length) {
        this.messages.set([
          {
            from: 'bot',
            text: `Hello, I’m SPANDA’s automated assistant. I can help you find information about our orthopaedic, neurological and pulmonary rehabilitation in ${SITE.locality}, or arrange a callback. What would you like to know?`,
          },
        ]);
      }
      this.tracking.event('chat_open');
      setTimeout(() => this.q()?.nativeElement.focus(), 50);
    }
  }

  protected send(e: Event): void {
    e.preventDefault();
    const input = this.q()?.nativeElement;
    const text = input?.value.trim();
    if (!text) return;
    input!.value = '';
    this.ask(text);
  }

  protected ask(text: string): void {
    this.messages.update((m) => [...m, { from: 'user', text }, this.reply(text)]);
    if (this.browser) setTimeout(() => this.log()?.nativeElement.scrollTo({ top: 1e6, behavior: 'smooth' }), 30);
  }

  private callback(topic?: string): Link {
    return { label: topic ? `Request a callback about ${topic}` : 'Request a callback', link: '/contact' };
  }

  private contactLinks(): Link[] {
    const l: Link[] = [this.callback()];
    if (SITE.phoneHref) l.push({ label: `Call ${SITE.phoneDisplay}`, link: 'tel:' + SITE.phoneHref });
    if (this.whatsapp) l.push({ label: 'WhatsApp us', link: this.whatsapp });
    return l;
  }

  private reply(raw: string): Msg {
    const t = raw.toLowerCase();

    // Safety first: anything that sounds like an emergency.
    if (
      /chest pain|can'?t breathe|cannot breathe|not breathing|unconscious|fainted|face (is )?droop|slurred|sudden (weakness|numbness)|stroke now|having a stroke|severe bleeding|bleeding heavily|suicid|kill myself|overdose|emergency|blue lips|coughing (up )?blood/.test(t)
    ) {
      return {
        from: 'bot',
        urgent: true,
        text: 'This sounds like it may need urgent medical attention. Please call 112 now or go to the nearest emergency department. SPANDA is a rehabilitation centre and cannot help in an emergency.',
        links: [{ label: 'Call 112', link: 'tel:112' }],
      };
    }

    if (/^(hi|hello|hey|namaste|good (morning|afternoon|evening))\b/.test(t)) {
      return { from: 'bot', text: 'Hello! You can ask about a condition (for example “stroke rehabilitation” or “knee replacement”), booking an assessment, what to bring, or our location.' };
    }
    if (/\b(conditions?|treat\w*|services?|specialit\w*|what do you (do|offer)|support)\b/.test(t) && !this.bestGuide(t)) {
      return {
        from: 'bot',
        text: 'We support 29 conditions across three specialities:',
        list: SPECIALITIES_FULL.map((s) => `${s.title}: ${s.conditions.length} conditions`),
        links: [
          ...SPECIALITIES_FULL.map((s) => ({ label: s.title, link: '/rehabilitation/' + s.id })),
          { label: 'See all conditions', link: '/', fragment: 'conditions' },
        ],
      };
    }
    if (/\b(book\w*|appointments?|assessment|call ?back|consult\w*|enquir\w*|visit you|register)\b/.test(t)) {
      return {
        from: 'bot',
        text: 'You can request an assessment by sharing your name and phone number, and our team will call you back about availability and suitability.',
        links: this.contactLinks(),
      };
    }
    if (/\b(bring|prepare|first visit|documents|reports|what to wear)\b/.test(t)) {
      return {
        from: 'bot',
        text: 'For your first visit, it helps to bring:',
        list: VISIT.map((v) => `${v.title}: ${v.body}`),
        links: [{ label: 'Patient information', link: '/patient-information' }],
      };
    }
    if (/\b(where|location|address|directions?|map|located|reach you)\b/.test(t)) {
      return {
        from: 'bot',
        text: `SPANDA by Cura is in ${SITE.locality}, ${SITE.region}. The exact address and map will be published once verified.`,
        links: [{ label: 'Contact page', link: '/contact' }],
      };
    }
    if (/\b(phone|number|contact|whatsapp|e-?mail)\b/.test(t)) {
      const parts = [SITE.phoneDisplay && `Phone: ${SITE.phoneDisplay}`, SITE.email && `Email: ${SITE.email}`].filter(Boolean);
      return {
        from: 'bot',
        text: parts.length ? parts.join(' · ') : 'Our phone, WhatsApp and email details will be added once verified. Meanwhile, you can request a callback.',
        links: this.contactLinks(),
      };
    }
    if (/\b(costs?|fees?|prices?|charges?|insurance|cashless|packages?|how much)\b/.test(t)) {
      return {
        from: 'bot',
        text: 'Fees and insurance arrangements will be confirmed by the centre. Please request a callback and the team will share the details that apply to you.',
        links: [this.callback()],
      };
    }
    if (/\b(timings?|hours|open|opening|close|sunday|saturday|when are you)\b/.test(t)) {
      return { from: 'bot', text: 'Opening hours will be published once confirmed. You can request a callback in the meantime.', links: [this.callback()] };
    }
    if (/\b(doctors?|physios?|therapists?|team|staff|specialists?|qualifications?)\b/.test(t)) {
      return {
        from: 'bot',
        text: 'Details of our clinical team, with their qualifications and registration numbers, will be shared on the website before opening.',
        links: [{ label: 'About SPANDA', link: '/about' }],
      };
    }

    const guide = this.bestGuide(t);
    const faq = this.bestFaq(t);
    if (faq && (!guide || faq.score > guide.score + 1)) {
      const g = faq.f.guide;
      return {
        from: 'bot',
        text: faq.f.a,
        links: g ? [{ label: `Read: ${g.condition}`, link: guidePath(g) }, this.callback(g.condition)] : [this.callback()],
      };
    }
    if (guide) {
      const g = guide.g;
      const first = g.lead.split(/(?<=\.)\s/)[0];
      return {
        from: 'bot',
        text: `${first} Our guide explains what recovery usually involves, what rehabilitation at SPANDA may include and warning signs to watch for.`,
        links: [{ label: `Read the guide: ${g.condition}`, link: guidePath(g) }, this.callback(g.condition)],
      };
    }

    return {
      from: 'bot',
      text: 'I’m sorry, I couldn’t find that on our website. I can only share general information, not medical advice. Try a condition name, or ask our team directly.',
      links: [this.callback(), { label: 'All specialities', link: '/rehabilitation' }],
    };
  }

  private bestGuide(t: string): { g: (typeof GUIDES)[number]; score: number } | null {
    const q = words(t);
    let best: { g: (typeof GUIDES)[number]; score: number } | null = null;
    for (const { g, terms } of this.guideIndex) {
      const score = q.filter((w) => terms.has(w)).length;
      if (score > 0 && (!best || score > best.score)) best = { g, score };
    }
    return best;
  }

  private bestFaq(t: string): { f: FaqEntry; score: number } | null {
    const q = words(t);
    if (q.length < 2) return null;
    let best: { f: FaqEntry; score: number } | null = null;
    for (const { f, terms } of this.faqIndex) {
      const score = q.filter((w) => terms.has(w)).length;
      if (score >= 2 && (!best || score > best.score)) best = { f, score };
    }
    return best;
  }
}
