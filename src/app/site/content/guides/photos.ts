import type { Photo } from '../specialities';

/**
 * Representative stock photographs for guide pages.
 * img/m/* are licensed via the agency's paid Magnific (Freepik) account; img/stock/* are Pexels.
 * See docs/IMAGE-CREDITS.md. They show models, not SPANDA patients or staff.
 */
const m = (file: string, alt: string, width = 1800, height = 1200): Photo => ({ src: `img/m/${file}.jpg`, alt, width, height });

export const GUIDE_PHOTOS: Record<string, Photo> = {
  'parallel-bars': m('parallel-bars', 'A senior man practising walking between parallel bars with a physiotherapist beside him'),
  walker: m('walker-gait-training', 'A physiotherapist guiding a senior man walking with a frame in a rehabilitation gym', 1800, 1005),
  'knee-exam': m('knee-examination', 'A physiotherapist examining an older woman’s knee in a clinic', 1800, 1005),
  'leg-exercise': m('leg-exercise', 'A physiotherapist guiding an older man through a leg exercise on a mat'),
  'mat-exercise': m('mat-exercise', 'A therapist guiding a patient through a floor-based strengthening exercise'),
  shoulder: m('shoulder-exercise', 'A physiotherapist helping an older woman with a shoulder movement exercise'),
  'band-exercise': m('band-exercise', 'A physiotherapist helping a senior man with a resistance band exercise', 1800, 1005),
  'breathing-trainer': m('breathing-trainer', 'A woman using a breathing exercise device with a healthcare professional beside her'),
  spirometer: m('incentive-spirometer', 'A senior man using a breathing exercise device while recovering in a hospital bed'),
  stethoscope: m('assessment-stethoscope', 'A doctor listening to a patient’s chest with a stethoscope during an assessment', 1800, 1005),
  // Earlier Pexels set, kept for fallbacks.
  crutches: { src: 'img/stock/walking-with-crutches.jpg', alt: 'A patient walking with two crutches along a hospital corridor', width: 1600, height: 1338 },
  'knee-physio': { src: 'img/stock/knee-physiotherapy.jpg', alt: 'A physiotherapist guiding a leg strengthening exercise with an ankle weight', width: 1600, height: 1067 },
  therapist: { src: 'img/stock/therapist-guided-exercise.jpg', alt: 'A physiotherapist supporting a patient’s leg through a guided stretching exercise', width: 1280, height: 1600 },
  band: { src: 'img/stock/resistance-band-exercise.jpg', alt: 'A patient doing an ankle strengthening exercise with a resistance band', width: 1280, height: 1600 },
  balance: { src: 'img/stock/balance-training.jpg', alt: 'A person practising standing balance on a wobble board with a therapist close by', width: 1280, height: 1600 },
  breathing: { src: 'img/stock/breathing-exercise.jpg', alt: 'A man practising a seated breathing exercise', width: 1600, height: 1067 },
  assessment: { src: 'img/stock/assessment-consultation.jpg', alt: 'A clinician listening to a patient’s chest during a consultation', width: 1600, height: 1067 },
  clinical: { src: 'img/stock/clinical-assessment.jpg', alt: 'A clinician measuring a patient’s blood pressure', width: 1600, height: 1067 },
};

/** The best-matching photo for each guide (overrides the guide's own `photo` key). */
export const GUIDE_PHOTO_BY_SLUG: Record<string, string> = {
  'knee-replacement': 'knee-exam',
  'hip-replacement': 'leg-exercise',
  'fracture-recovery': 'crutches',
  'spine-surgery': 'walker',
  'back-and-neck-pain': 'mat-exercise',
  osteoarthritis: 'knee-exam',
  'ligament-meniscus-injuries': 'leg-exercise',
  'frozen-shoulder': 'shoulder',
  'sports-injuries': 'band-exercise',
  'mobility-after-hospitalisation': 'walker',
  stroke: 'parallel-bars',
  'traumatic-brain-injury': 'walker',
  'spinal-cord-injury': 'mat-exercise',
  'parkinsons-disease': 'walker',
  'multiple-sclerosis': 'band-exercise',
  neuropathy: 'leg-exercise',
  'balance-coordination-disorders': 'parallel-bars',
  'gait-abnormalities': 'parallel-bars',
  'neurological-weakness': 'band-exercise',
  'after-neurosurgery': 'stethoscope',
  copd: 'breathing-trainer',
  'post-pneumonia-recovery': 'breathing-trainer',
  'post-icu-recovery': 'spirometer',
  'prolonged-respiratory-illness': 'breathing-trainer',
  bronchiectasis: 'stethoscope',
  'interstitial-lung-disease': 'breathing-trainer',
  'persistent-breathlessness': 'stethoscope',
  'after-thoracic-surgery': 'spirometer',
  'chronic-exercise-limitation': 'breathing-trainer',
};

export const photoForGuide = (slug: string, fallback: string): Photo =>
  GUIDE_PHOTOS[GUIDE_PHOTO_BY_SLUG[slug] ?? fallback] ?? GUIDE_PHOTOS['therapist'];
