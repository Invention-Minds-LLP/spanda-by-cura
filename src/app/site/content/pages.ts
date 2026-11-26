/**
 * Copy for About, Our approach, Patient information and Privacy.
 * Based on SPANDA_Content_and_Developer_Handoff.pdf (V2.0) and the prototype pages, expanded in plain,
 * Indian-British English. Needs clinical and management sign-off before launch.
 */
import type { Photo } from './specialities';

export const ABOUT = {
  seoTitle: 'About SPANDA by Cura | Rehabilitation Centre, Whitefield',
  seoDescription:
    'SPANDA by Cura is a rehabilitation centre in Whitefield, Bengaluru, focused on orthopaedic, neurological and pulmonary recovery through assessment-led, personalised care.',
  lead:
    'SPANDA Rehabilitation Centre is a specialised rehabilitation facility in Whitefield, Bengaluru, focused on recovery from orthopaedic, neurological and respiratory conditions.',
  story: [
    'Recovery rarely happens in a straight line. After an operation, a stroke or a long illness, the questions are often practical ones: will I manage the stairs at home, can I walk to the shop again, how do I get my breath back? Rehabilitation exists to help answer those questions, one step at a time.',
    'At SPANDA, rehabilitation begins with understanding you: your medical history, what you can do today and what you would like to be able to do. That understanding shapes a plan that is reviewed and adjusted as you progress, and patients and caregivers are encouraged to take part in every stage.',
  ],
  mission:
    'To make personalised, evidence-informed rehabilitation accessible, and to support functional independence and quality of life.',
  vision:
    'To develop patient-centred rehabilitation services that prioritise clinical quality and meaningful functional goals.',
  name: {
    word: 'स्पन्द',
    text: 'Spanda is a Sanskrit word for the first pulse of movement: the small, steady motion from which everything else follows. It reflects how we think about recovery: as progress built from many small steps.',
  },
  values: [
    { title: 'Assessment first', body: 'Every plan starts with a careful assessment, so that therapy is matched to your needs rather than to a standard template.' },
    { title: 'Goals that matter to you', body: 'We focus on everyday function, such as walking, self-care, breathing comfortably and returning to the roles you value.' },
    { title: 'Honest expectations', body: 'Progress differs from person to person. We explain what rehabilitation can and cannot do, and we review the plan regularly with you.' },
    { title: 'Families included', body: 'Caregivers are welcome to learn alongside the patient, so that practice and safety continue at home.' },
  ],
  photo: {
    src: 'img/stock/assessment-consultation.jpg',
    alt: 'A clinician listening to a patient’s chest with a stethoscope during a consultation',
    width: 1600,
    height: 1067,
  } as Photo,
};

export const APPROACH = {
  seoTitle: 'Our Rehabilitation Approach: 5 Stages of Care | SPANDA',
  seoDescription:
    'How rehabilitation works at SPANDA, Whitefield: assessment, an individual plan, guided therapy, regular review and continuing care at home. Plans built around your goals.',
  lead: 'Rehabilitation plans are developed around clinical needs, functional abilities and individual priorities.',
  stages: [
    {
      title: 'Assessment',
      summary: 'Understand medical history, current abilities and rehabilitation goals.',
      detail:
        'We review your medical history, reports and any instructions from your treating doctors, then look at how you move, walk, balance or breathe. We also ask what you want to get back to, because those goals guide everything that follows.',
    },
    {
      title: 'Your plan',
      summary: 'Develop an individualised programme based on assessed needs.',
      detail:
        'Your therapist explains what the assessment showed and agrees a plan with you: what you will work on, how often, and how progress will be measured. Precautions from your surgeon or physician are built into the plan.',
    },
    {
      title: 'Guided therapy',
      summary: 'Practise appropriate therapeutic exercises and functional tasks.',
      detail:
        'Sessions combine targeted exercise with practice of real-life tasks, progressed at a pace that is safe for you. You will usually be given exercises to continue between sessions.',
    },
    {
      title: 'Review',
      summary: 'Review function, strength, mobility or endurance and adapt the plan.',
      detail:
        'Progress is checked regularly against the goals you set. If something is not working, the plan changes. If new symptoms appear, we advise you to see your doctor.',
    },
    {
      title: 'Continuing care',
      summary: 'Discuss suitable home guidance and follow-up recommendations.',
      detail:
        'As you approach your goals, the focus shifts to independence: a clear home programme, advice on staying active safely, and recommendations for any follow-up you may need.',
    },
  ],
  caregivers:
    'Patients and caregivers are encouraged to discuss goals and practical needs with the care team. Appropriate home guidance and follow-up recommendations may form part of ongoing recovery.',
  photo: {
    src: 'img/stock/clinical-assessment.jpg',
    alt: 'A clinician measuring a patient’s blood pressure during an assessment',
    width: 1600,
    height: 1067,
  } as Photo,
};

export const PATIENT_INFO = {
  seoTitle: 'Patient Information: Preparing for Your Visit | SPANDA',
  seoDescription:
    'What to bring to your first rehabilitation assessment at SPANDA, Whitefield, what happens at the visit, and answers to common questions about rehabilitation.',
  lead: 'Plan your assessment and understand the rehabilitation process.',
  bring: [
    { title: 'Discharge summary or referral', body: 'Your hospital discharge summary or referral letter, if you have one.' },
    { title: 'Current medication list', body: 'All medicines and doses, including supplements, so the team has the full picture.' },
    { title: 'Reports and imaging', body: 'Relevant reports, X-rays or scan results, and any instructions from your surgeon or doctor.' },
    { title: 'Comfortable clothing', body: 'Loose clothing that allows movement, and supportive, flat footwear.' },
  ],
  firstVisit: [
    'A conversation about your health, your recovery so far and what you hope to achieve.',
    'A physical assessment, adapted to your condition, which may look at movement, strength, balance, walking or breathing.',
    'An explanation of the findings and a discussion of whether rehabilitation is suitable for you now.',
    'If it is, agreement on a plan, how often sessions may be needed and what you can do at home.',
  ],
  faqs: [
    { q: 'What is rehabilitation?', a: 'Rehabilitation is a healthcare process that supports functioning and participation after injury, illness, surgery or disability.' },
    { q: 'Who may benefit from rehabilitation at SPANDA?', a: 'People recovering from joint surgery, neurological conditions or respiratory illness may be suitable, depending on assessment and available services.' },
    { q: 'How long does rehabilitation take?', a: 'Duration varies with the condition, baseline function, goals and response to therapy. Your plan is reviewed regularly so that it reflects your progress.' },
    { q: 'Can older adults undergo rehabilitation?', a: 'Age alone does not exclude rehabilitation. Suitability depends on health, function and individual assessment.' },
    { q: 'Is a referral needed?', a: 'Please contact the centre to confirm its referral and assessment requirements before your visit.' },
    { q: 'Can a family member come with me?', a: 'Caregiver involvement is encouraged. Please confirm session arrangements with the centre when you book.' },
    { q: 'Can rehabilitation replace medical treatment?', a: 'No. Rehabilitation complements appropriate medical treatment and does not replace emergency or specialist care.' },
  ],
  important:
    'New or worsening symptoms need medical assessment. For urgent medical concerns, seek emergency medical care. This website does not provide individual medical advice.',
};

export const PRIVACY = {
  seoTitle: 'Privacy Information | SPANDA by Cura',
  seoDescription: 'How SPANDA by Cura handles the information you share through enquiry forms on this website.',
  updated: '26 November 2026',
};
