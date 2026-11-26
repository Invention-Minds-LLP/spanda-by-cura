import type { Photo } from '../specialities';

/** Representative stock photographs (Pexels; see docs/IMAGE-CREDITS.md) available to guide pages. */
export const GUIDE_PHOTOS: Record<string, Photo> = {
  crutches: { src: 'img/stock/walking-with-crutches.jpg', alt: 'A patient walking with two crutches along a hospital corridor', width: 1600, height: 1338 },
  'knee-physio': { src: 'img/stock/knee-physiotherapy.jpg', alt: 'A physiotherapist guiding a leg strengthening exercise with an ankle weight', width: 1600, height: 1067 },
  therapist: { src: 'img/stock/therapist-guided-exercise.jpg', alt: 'A physiotherapist supporting a patient’s leg through a guided stretching exercise', width: 1280, height: 1600 },
  band: { src: 'img/stock/resistance-band-exercise.jpg', alt: 'A patient doing an ankle strengthening exercise with a resistance band', width: 1280, height: 1600 },
  balance: { src: 'img/stock/balance-training.jpg', alt: 'A person practising standing balance on a wobble board with a therapist close by', width: 1280, height: 1600 },
  breathing: { src: 'img/stock/breathing-exercise.jpg', alt: 'A man practising a seated breathing exercise with one hand on his chest and one on his abdomen', width: 1600, height: 1067 },
  assessment: { src: 'img/stock/assessment-consultation.jpg', alt: 'A clinician listening to a patient’s chest with a stethoscope during a consultation', width: 1600, height: 1067 },
  clinical: { src: 'img/stock/clinical-assessment.jpg', alt: 'A clinician measuring a patient’s blood pressure during an assessment', width: 1600, height: 1067 },
};
