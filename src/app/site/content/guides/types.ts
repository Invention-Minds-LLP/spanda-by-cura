/**
 * Data model for condition guide pages (/rehabilitation/:speciality/:slug).
 * Every guide is written in original Indian-British English from reputable sources, follows the
 * NMC ethical-advertising guidance (no guarantees, outcomes, superiority claims) and needs SPANDA's
 * clinical sign-off before launch.
 */

export interface GuideSection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface GuideStage {
  when: string;
  title: string;
  body: string;
}

export interface GuideFact {
  value: string;
  label: string;
}

export interface GuideReference {
  org: string;
  title: string;
  /** e.g. "15 November 2024" or "reviewed 11 November 2025" or "accessed 26 November 2026". */
  date: string;
  url: string;
}

export interface ConditionGuide {
  /** Speciality id: 'orthopaedic' | 'neurological' | 'pulmonary'. */
  spec: 'orthopaedic' | 'neurological' | 'pulmonary';
  /** URL segment, short and keyword-led, e.g. 'hip-replacement'. */
  slug: string;
  /** Exact condition name as listed in services.json (used to link menus and cards). */
  condition: string;
  /** H1 (keep the keyword; plain words). */
  h1: string;
  /** Word in the H1 to set in the italic accent (must appear in h1), optional. */
  accent?: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  updated: string;
  /** Optional four key facts with general, sourced figures. */
  facts?: GuideFact[];
  /** 3–4 explanatory sections: what it is, how it affects daily life, why rehabilitation helps. */
  sections: GuideSection[];
  /** Optional general recovery stages. */
  timelineHeading?: string;
  timelineIntro?: string;
  timeline?: GuideStage[];
  /** What rehabilitation at SPANDA may include (4–6 items). */
  programme: { title: string; body: string }[];
  /** Optional practical checklist (e.g. preparing your home, everyday tips). */
  checklistHeading?: string;
  checklistIntro?: string;
  checklist?: string[];
  /** Symptoms that need prompt medical attention. */
  warningIntro: string;
  warnings: string[];
  /** Optional closing section (e.g. life after recovery, living well). */
  closingHeading?: string;
  closing?: string[];
  faqs: { q: string; a: string }[];
  references: GuideReference[];
  /** Slugs of related guides in any speciality. */
  related: string[];
  /** Photo key from GUIDE_PHOTOS. */
  photo: string;
}
