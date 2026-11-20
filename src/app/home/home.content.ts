/**
 * Homepage content from SPANDA_Content_and_Developer_Handoff.pdf (V2.0, 19 Nov 2026).
 * Scope: three specialities only. All copy needs clinical and management sign-off before launch.
 */

export interface Speciality {
  id: string;
  title: string;
  /** Title split for the two-line card heading. */
  lines: [string, string];
  summary: string;
  image: string;
  alt: string;
}

export const SPECIALITIES: Speciality[] = [
  {
    id: 'orthopaedic',
    title: 'Orthopaedic rehabilitation',
    lines: ['Orthopaedic', 'rehabilitation'],
    summary: 'Rebuild strength, mobility and function after joint injury, surgery or musculoskeletal conditions.',
    image: 'img/orthopaedic-rehabilitation.jpg',
    alt: 'Illustrative image: a therapist guiding knee exercise',
  },
  {
    id: 'neurological',
    title: 'Neurological rehabilitation',
    lines: ['Neurological', 'rehabilitation'],
    summary:
      'Support movement, balance and day-to-day independence after neurological conditions such as stroke, brain or spinal cord injury.',
    image: 'img/neurological-rehabilitation.jpg',
    alt: 'Illustrative image: supported gait training between parallel bars',
  },
  {
    id: 'pulmonary',
    title: 'Pulmonary rehabilitation',
    lines: ['Pulmonary', 'rehabilitation'],
    summary:
      'Support breathing management, endurance and daily function in conditions such as COPD, post-illness recovery and chronic lung conditions.',
    image: 'img/pulmonary-rehabilitation.jpg',
    alt: 'Illustrative image: a guided breathing exercise',
  },
];

export interface Stage {
  title: string;
  body: string;
}

export const STAGES: Stage[] = [
  { title: 'Assessment', body: 'Understand medical history, current abilities and rehabilitation goals.' },
  { title: 'Your plan', body: 'Develop an individualised programme based on assessed needs.' },
  { title: 'Guided therapy', body: 'Practise appropriate therapeutic exercises and functional tasks.' },
  { title: 'Review', body: 'Review function, strength, mobility or endurance and adapt the plan.' },
  { title: 'Continuing care', body: 'Discuss suitable home guidance and follow-up recommendations.' },
];

export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  { q: 'Is a referral needed?', a: 'Contact the centre to confirm its referral and assessment requirements.' },
  {
    q: 'Who may benefit from rehabilitation at Spanda?',
    a: 'People recovering from joint surgery, neurological conditions or respiratory illness may be suitable, depending on assessment and available services.',
  },
  {
    q: 'What is rehabilitation?',
    a: 'Rehabilitation is a healthcare process that supports functioning and participation after injury, illness, surgery or disability.',
  },
  {
    q: 'How long will I need rehabilitation?',
    a: 'Duration varies with the condition, baseline function, goals and response to therapy.',
  },
  {
    q: 'Can older adults undergo rehabilitation?',
    a: 'Age alone does not exclude rehabilitation. Suitability depends on health, function and individual assessment.',
  },
];

export interface VisitItem {
  title: string;
  body: string;
}

export const VISIT: VisitItem[] = [
  {
    title: 'Bring relevant medical records',
    body: 'Discharge summaries, reports and referral information, if available.',
  },
  { title: 'Bring your medication list', body: 'Current medicines and doses, so the team has the full picture.' },
  { title: 'Wear comfortable clothing', body: 'Loose, flexible clothes and supportive footwear.' },
  {
    title: 'Confirm before travelling',
    body: 'Check your appointment requirements with the centre before you set out.',
  },
];
