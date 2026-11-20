/**
 * Extra homepage content for design option B, taken from the prototype's services.json
 * (SPANDA_Complete_Developer_Prototype_V2). Same scope rules as option A: three specialities only.
 */

export interface SpecialityDetail {
  id: 'orthopaedic' | 'neurological' | 'pulmonary';
  tag: string;
  conditions: string[];
}

export const SPECIALITY_DETAILS: Record<string, SpecialityDetail> = {
  orthopaedic: {
    id: 'orthopaedic',
    tag: 'Movement and strength',
    conditions: [
      'Total knee replacement',
      'Total hip replacement',
      'Fracture and trauma recovery',
      'Spine surgery rehabilitation',
      'Back and neck pain',
      'Osteoarthritis and joint stiffness',
      'Ligament and meniscus injuries',
      'Frozen shoulder',
      'Sports injury recovery',
      'Mobility after prolonged hospitalisation',
    ],
  },
  neurological: {
    id: 'neurological',
    tag: 'Function and independence',
    conditions: [
      'Stroke rehabilitation',
      'Traumatic brain injury',
      'Spinal cord injury',
      'Parkinson’s disease',
      'Multiple sclerosis',
      'Neuropathy',
      'Balance and coordination disorders',
      'Gait abnormalities',
      'Neurological weakness',
      'Rehabilitation after neurosurgery',
    ],
  },
  pulmonary: {
    id: 'pulmonary',
    tag: 'Breathing and endurance',
    conditions: [
      'COPD rehabilitation',
      'Post-pneumonia recovery',
      'Post-ICU deconditioning',
      'Prolonged respiratory illness',
      'Bronchiectasis',
      'Interstitial lung disease',
      'Persistent breathlessness after illness',
      'Post-thoracic surgery',
      'Chronic respiratory exercise limitations',
    ],
  },
};
