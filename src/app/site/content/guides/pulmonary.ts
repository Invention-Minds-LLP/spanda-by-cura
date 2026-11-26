/** Condition guides: pulmonary rehabilitation (nine conditions listed under the pulmonary speciality). */
import type { ConditionGuide } from './types';

/* Shared references, reused across guides. All were read on 26 November 2026. */
const CC_PULM_REHAB = {
  org: 'Cleveland Clinic',
  title: 'Pulmonary rehabilitation',
  date: 'updated 23 May 2024',
  url: 'https://my.clevelandclinic.org/health/treatments/pulmonary-rehabilitation',
};
const ALUK_PULM_REHAB = {
  org: 'Asthma + Lung UK',
  title: 'Pulmonary rehabilitation (PR)',
  date: 'reviewed 28 February 2023',
  url: 'https://www.asthmaandlung.org.uk/living-with/keeping-active/pulmonary-rehabilitation',
};
const ALUK_BREATHLESSNESS = {
  org: 'Asthma + Lung UK',
  title: 'How can I manage my breathlessness?',
  date: 'reviewed 31 March 2024',
  url: 'https://www.asthmaandlung.org.uk/symptoms-tests-treatments/symptoms/breathlessness/how-can-i-manage-my-breathlessness',
};
const CC_PURSED_LIP = {
  org: 'Cleveland Clinic',
  title: 'Pursed-lip breathing',
  date: 'updated 8 July 2026',
  url: 'https://my.clevelandclinic.org/health/articles/9443-pursed-lip-breathing-',
};

export const PULMONARY_GUIDES: ConditionGuide[] = [
  /* ------------------------------------------------------------------ 1. COPD */
  {
    spec: 'pulmonary',
    slug: 'copd',
    condition: 'COPD rehabilitation',
    h1: 'Pulmonary rehabilitation for COPD',
    accent: 'COPD',
    seoTitle: 'COPD Rehabilitation in Whitefield, Bengaluru | SPANDA',
    seoDescription:
      'Pulmonary rehabilitation for COPD in Whitefield, Bengaluru: supervised exercise, breathing techniques, energy-saving tips, warning signs and what to expect',
    lead: 'COPD rehabilitation, usually called pulmonary rehabilitation, is a structured course of exercise and education for people whose breathlessness has started to shrink their day. It works alongside your inhalers and medical care, not instead of them. This guide explains what COPD does to breathing, why exercise still matters when you feel short of breath, and how pulmonary rehabilitation at SPANDA in Whitefield, Bengaluru may be planned around your doctor’s advice.',
    updated: '26 November 2026',
    facts: [
      { value: '6–8 weeks', label: 'Typical length of a pulmonary rehabilitation course' },
      { value: '2 a week', label: 'Usual number of sessions in many programmes' },
      { value: 'About half', label: 'Of each session is often spent on exercise' },
      { value: 'Long term', label: 'COPD has no cure, but its symptoms can be managed' },
    ],
    sections: [
      {
        id: 'what-is-copd',
        heading: 'What is COPD?',
        paragraphs: [
          'Chronic obstructive pulmonary disease (COPD) is a long-term lung condition in which the airways and the tiny air sacs of the lungs are damaged. The term covers chronic bronchitis, where the airways are inflamed and produce extra mucus, and emphysema, where the air sacs lose their stretch. Air moves in and out less easily, so breathing takes more effort.',
          'Smoking, now or in the past, is the most common cause. Years of breathing in dust, fumes or chemicals at work can also contribute, as can lung problems in childhood or regular exposure to other people’s smoke. COPD usually comes on gradually, and it is diagnosed by a doctor using breathing tests such as spirometry, often with a chest X-ray and blood tests.',
        ],
      },
      {
        id: 'how-copd-affects-daily-life',
        heading: 'How does COPD affect breathing and daily life?',
        paragraphs: [
          'The first thing most people notice is breathlessness with activities that used to be easy: climbing a flight of stairs, walking uphill, carrying shopping or bathing. A persistent cough with phlegm and frequent chest infections are also common. Symptoms can flare up after a chest infection, in smoky or polluted air, with strong smells or in very hot or cold weather.',
          'Breathlessness is unpleasant, so it is natural to start avoiding the things that cause it. Over time, though, doing less weakens the leg and arm muscles, and weaker muscles need more oxygen for the same task. You then become breathless sooner, and the circle tightens. Many families notice the change before the person does: shorter walks, more time in a chair, and less confidence going out.',
        ],
      },
      {
        id: 'why-pulmonary-rehabilitation-helps',
        heading: 'Why does pulmonary rehabilitation help with COPD?',
        paragraphs: [
          'Pulmonary rehabilitation does not repair damaged lungs, but it can help your muscles use oxygen more efficiently, so everyday tasks may take less effort. Programmes combine exercise set at your own level with education about the condition. Reputable sources describe possible benefits such as less breathlessness and tiredness, better walking ability, more confidence with daily tasks and, for some people, fewer flare-ups and hospital visits. Progress varies from person to person.',
          'Just as valuable are the skills you take home: breathing techniques for moments of breathlessness, positions that ease the effort of breathing, ways to pace your day, and a clearer sense of what to do when symptoms change. Keeping active after the course ends is what helps you hold on to the gains, so the programme is built around habits you can continue.',
        ],
      },
      {
        id: 'who-is-suitable',
        heading: 'Who is suitable for COPD rehabilitation?',
        paragraphs: [
          'Pulmonary rehabilitation is generally aimed at people whose COPD makes it harder to stay active. It may not be appropriate straight after a flare-up, or for people with uncontrolled heart problems, a recent heart attack or other conditions that make exercise unsafe. People who use oxygen can often still take part, with their doctor’s guidance.',
          'At SPANDA, eligibility depends on a medical assessment of your lung condition and overall health, and on monitoring arrangements appropriate to you. Please bring your latest reports and the name of your treating doctor, so that your plan fits safely alongside the treatment you already receive.',
        ],
      },
    ],
    timelineHeading: 'What a pulmonary rehabilitation course may look like',
    timelineIntro: 'Every programme is planned for the person in front of us, and courses differ in length. The outline below is a general guide only; your doctor’s advice comes first.',
    timeline: [
      {
        when: 'Before you start',
        title: 'Medical clearance and assessment',
        body: 'Your doctor confirms that your COPD is stable enough for exercise. At your first visit, the team asks about your symptoms, daily routine and goals, and looks at how far you can walk, how breathless you feel and how strong your legs and arms are.',
      },
      {
        when: 'Weeks 1–2',
        title: 'Finding your starting level',
        body: 'Exercise sessions start short and gentle. You learn how breathless is acceptable during exercise, how to recover, and simple breathing techniques such as pursed-lip breathing.',
      },
      {
        when: 'Weeks 3–6',
        title: 'Building endurance and strength',
        body: 'Walking or cycling time is extended gradually, and strengthening exercises for the legs and arms become a little harder as you cope. Education sessions cover pacing, energy-saving and recognising flare-ups.',
      },
      {
        when: 'End of the course',
        title: 'Review and a home plan',
        body: 'Your progress is reviewed against the goals you set at the start, and you leave with a home exercise plan. Staying active from here on is what helps you keep the benefits.',
      },
    ],
    programme: [
      { title: 'Assessment', body: 'Your symptoms, walking ability, strength, daily activities and goals, read alongside your doctor’s diagnosis and current treatment.' },
      { title: 'Supervised exercise training', body: 'Walking, cycling or step exercises and light strengthening work, set at a level you can manage and progressed gradually.' },
      { title: 'Breathing techniques', body: 'Pursed-lip breathing, relaxed breathing control and positions that may ease breathlessness during and after activity.' },
      { title: 'Endurance conditioning', body: 'Building the stamina to walk further, climb stairs and manage household tasks with fewer pauses.' },
      { title: 'Energy-conservation strategies', body: 'Planning, pacing and simplifying daily tasks so that you have energy left for the things that matter to you.' },
      { title: 'Self-management guidance', body: 'Understanding your condition, using your action plan from your doctor and knowing when to seek help.' },
    ],
    checklistHeading: 'Everyday ways to save your breath',
    checklistIntro: 'Small changes to how you do things can make a real difference to your energy. These are general ideas; your therapist can help you adapt them to your home.',
    checklist: [
      'Plan the day so that heavier jobs fall when you usually feel your strongest',
      'Alternate harder tasks with lighter ones, and rest before you become exhausted',
      'Sit down for tasks such as dressing, ironing, chopping vegetables or grooming',
      'Keep things you use often between waist and shoulder height to reduce bending and reaching',
      'Breathe out during the effort part of a movement, such as standing up or lifting',
      'Use a trolley or bag with wheels for shopping rather than carrying heavy loads',
      'Bring your inhalers, spacer and any action plan from your doctor to every session',
    ],
    warningIntro: 'Rehabilitation is not an emergency service. If you or a family member notice any of the following, call 112 or go to the nearest emergency department:',
    warnings: [
      'Severe or sudden breathlessness, gasping or being unable to speak in full sentences',
      'Chest pain, tightness or heaviness, or pain spreading to the arm, back, neck or jaw',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Sudden confusion, drowsiness or difficulty waking',
      'Coughing up blood',
      'Breathlessness much worse than usual that is not eased by your reliever inhaler, or a high fever with worsening cough',
    ],
    closingHeading: 'Living well with COPD',
    closing: [
      'COPD is a long-term condition, but many people find that regular activity, good inhaler technique and knowing how to handle breathless moments make daily life more manageable. Stopping smoking remains one of the most important steps at any stage.',
      'Keep up your vaccinations as advised by your doctor, note what tends to trigger your flare-ups, and keep moving every day, even on days when you can do only a little.',
    ],
    faqs: [
      { q: 'Is exercise safe with COPD?', a: 'For most people with stable COPD, exercise set at the right level is considered safe and helpful. Feeling somewhat breathless during exercise is expected and is part of training; you are taught how to recover. Whether exercise is suitable for you is decided after a medical assessment.' },
      { q: 'Does pulmonary rehabilitation replace inhalers?', a: 'No. Pulmonary rehabilitation works alongside your inhalers, medicines and any oxygen prescribed by your doctor. Please continue your treatment as prescribed and discuss any changes only with your treating doctor.' },
      { q: 'How long does a COPD rehabilitation programme last?', a: 'Many programmes run for six to eight weeks, often with two sessions a week, although lengths vary. After the course, continuing regular activity at home helps you keep the benefits.' },
      { q: 'Can pulmonary rehabilitation cure COPD?', a: 'No. COPD cannot be cured. Rehabilitation may help you manage breathlessness, build stamina and stay more independent, but progress varies from person to person.' },
      { q: 'I use oxygen at home. Can I still take part?', a: 'Many people who use oxygen can still take part in pulmonary rehabilitation. This needs to be discussed with your doctor first, and suitability depends on your assessment and the monitoring you need.' },
      { q: 'What should I bring to my first session?', a: 'Please bring your inhalers and spacer, a list of your medicines, recent reports such as spirometry results and discharge summaries, comfortable clothing and walking shoes, and a bottle of water.' },
    ],
    references: [
      {
        org: 'NHS',
        title: 'Chronic obstructive pulmonary disease (COPD)',
        date: 'reviewed 2 November 2026',
        url: 'https://www.nhs.uk/conditions/chronic-obstructive-pulmonary-disease-copd/',
      },
      CC_PULM_REHAB,
      ALUK_PULM_REHAB,
      CC_PURSED_LIP,
    ],
    related: ['chronic-exercise-limitation', 'persistent-breathlessness', 'bronchiectasis', 'post-pneumonia-recovery'],
    photo: 'breathing',
  },

  /* ------------------------------------------------------------------ 2. Post-pneumonia */
  {
    spec: 'pulmonary',
    slug: 'post-pneumonia-recovery',
    condition: 'Post-pneumonia recovery',
    h1: 'Rebuilding stamina after pneumonia',
    accent: 'after pneumonia',
    seoTitle: 'Recovery After Pneumonia in Whitefield | SPANDA',
    seoDescription:
      'Post-pneumonia recovery in Whitefield, Bengaluru: why tiredness lingers, how gradual activity and breathing techniques may help, and warning signs.',
    lead: 'Post-pneumonia recovery often takes longer than people expect. The infection may have cleared, yet climbing the stairs or getting through a working day still leaves you drained. This guide explains why that happens, how gradual, supervised activity may help you rebuild stamina, and how rehabilitation at SPANDA in Whitefield, Bengaluru fits in once your doctor confirms that the acute illness has settled.',
    updated: '26 November 2026',
    facts: [
      { value: '2–4 weeks', label: 'Typical time for most people to get over pneumonia' },
      { value: '2–3 days', label: 'Contact your doctor if no better after this long on antibiotics' },
      { value: 'Longer', label: 'Recovery is often slower for older adults and people with lung or heart conditions' },
    ],
    sections: [
      {
        id: 'what-is-pneumonia',
        heading: 'What is pneumonia?',
        paragraphs: [
          'Pneumonia is inflammation of the lungs, usually caused by a bacterial or viral infection. The small air sacs fill with fluid, which makes it harder for oxygen to pass into the blood. Typical symptoms include cough, breathlessness, a high temperature, chest pain, body aches, loss of appetite and extreme tiredness. Older people may become confused.',
          'Pneumonia can affect anyone, but babies, older adults and people with existing heart or lung conditions are more likely to become seriously unwell. Treatment depends on the cause and may include antibiotics and, for some people, a hospital stay. All of this medical care comes before rehabilitation.',
        ],
      },
      {
        id: 'why-recovery-takes-time',
        heading: 'Why do I still feel tired and breathless after pneumonia?',
        paragraphs: [
          'Many people feel better within two to four weeks, but tiredness, a lingering cough and breathlessness on effort can continue for some time afterwards. Fighting a serious infection uses a great deal of energy, appetite is often poor, and days or weeks spent largely in bed allow muscles to weaken quickly, particularly in older adults.',
          'The result is a body that tires sooner than before. You may notice it on the stairs, when bathing, or when you try to return to work or household duties. It is tempting either to rest for too long or to push straight back to your old routine; neither tends to help. A gradual, planned return to activity is usually more comfortable and more sustainable.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How can rehabilitation help after pneumonia?',
        paragraphs: [
          'Once your doctor is satisfied that the infection has resolved and you are medically stable, a structured programme may help you rebuild strength and endurance step by step. Exercise is set at a level you can manage and increased only as your body allows, so you are neither under-doing nor overdoing it.',
          'Rehabilitation can also give you practical tools: breathing techniques for moments of breathlessness, ways to clear phlegm if your doctor feels this is appropriate, and pacing strategies for getting through the day. Recovery after pneumonia varies a great deal, and the plan is adjusted to how you are progressing.',
        ],
      },
    ],
    timelineHeading: 'A general pattern of recovery after pneumonia',
    timelineIntro: 'Recovery is individual. Your age, general health and how unwell you were all play a part. The stages below are a general guide only; your doctor’s advice comes first.',
    timeline: [
      { when: 'During treatment', title: 'Medical care and rest', body: 'The priority is treating the infection as your doctor advises, drinking enough fluids and resting. Rehabilitation is not started while you are acutely unwell.' },
      { when: 'Weeks 1–4', title: 'Gentle return to movement', body: 'Short walks around the home, simple stretches and breathing exercises, increased little by little. Many people feel noticeably better by the end of this period, though tiredness may remain.' },
      { when: 'After medical review', title: 'Structured rehabilitation, if needed', body: 'If stamina is slow to return and your doctor agrees, a supervised programme may help you build endurance, strength and confidence over several weeks.' },
      { when: 'Ongoing', title: 'Back to your routine', body: 'Activity is increased towards work, travel and household tasks. A home exercise plan helps you keep the progress you have made.' },
    ],
    programme: [
      { title: 'Assessment', body: 'Your recent illness, current symptoms, walking tolerance, strength and goals, read alongside your doctor’s clearance and reports.' },
      { title: 'Supervised exercise training', body: 'Gentle, graded walking or cycling and strengthening exercises, progressed only as you cope.' },
      { title: 'Breathing techniques', body: 'Relaxed breathing control, pursed-lip breathing and recovery positions for moments of breathlessness.' },
      { title: 'Airway-clearance education', body: 'Where your doctor feels it is appropriate, simple techniques to help bring up remaining phlegm.' },
      { title: 'Energy-conservation strategies', body: 'Pacing your day, alternating heavier and lighter tasks and planning rest before you are exhausted.' },
      { title: 'Self-management guidance', body: 'Recognising signs that you may be getting worse, and a plan for continuing activity at home.' },
    ],
    warningIntro: 'Pneumonia can sometimes worsen or return. If you or a family member notice any of the following, call 112 or go to the nearest emergency department:',
    warnings: [
      'Severe or sudden breathlessness, gasping or being unable to speak properly',
      'Chest pain, especially pain that is new or getting worse',
      'Lips, tongue or skin turning blue, grey or blotchy (on darker skin, check the palms)',
      'Sudden confusion or unusual drowsiness',
      'Coughing up blood',
      'A high temperature of 38°C (100.4°F) or above that returns after you had started to improve',
    ],
    faqs: [
      { q: 'How long does it take to recover from pneumonia?', a: 'Many people feel better within two to four weeks, but tiredness and breathlessness on effort can continue for longer, especially in older adults and people with other health conditions. Recovery varies from person to person.' },
      { q: 'Is it normal to feel tired weeks after pneumonia?', a: 'Lingering tiredness is common after pneumonia. If it is not slowly improving, or if you have new or worsening symptoms, please see your doctor so that other causes can be checked.' },
      { q: 'When can I start exercising after pneumonia?', a: 'Gentle movement around the home is usually encouraged as you recover, but a structured exercise programme should start only after your doctor confirms that the infection has resolved and you are medically stable.' },
      { q: 'Do breathing exercises help after pneumonia?', a: 'Breathing techniques can help you manage breathlessness and feel more in control during activity. Your therapist will show you which techniques may suit you, in line with your doctor’s advice.' },
      { q: 'Does rehabilitation replace my antibiotics or follow-up?', a: 'No. Rehabilitation supports recovery of everyday function. Please complete any treatment your doctor prescribes and attend your follow-up appointments.' },
    ],
    references: [
      {
        org: 'NHS',
        title: 'Pneumonia',
        date: 'reviewed 17 July 2026',
        url: 'https://www.nhs.uk/conditions/pneumonia/',
      },
      ALUK_BREATHLESSNESS,
      CC_PULM_REHAB,
    ],
    related: ['prolonged-respiratory-illness', 'post-icu-recovery', 'persistent-breathlessness', 'mobility-after-hospitalisation'],
    photo: 'therapist',
  },

  /* ------------------------------------------------------------------ 3. Post-ICU */
  {
    spec: 'pulmonary',
    slug: 'post-icu-recovery',
    condition: 'Post-ICU physical deconditioning',
    h1: 'Rebuilding strength after an ICU stay',
    accent: 'ICU stay',
    seoTitle: 'Post-ICU Recovery and Rehabilitation, Whitefield | SPANDA',
    seoDescription:
      'Post-ICU recovery in Whitefield, Bengaluru: why weakness and fatigue follow critical illness, how gradual reconditioning may help, and family support.',
    lead: 'Post-ICU recovery is often a long road. After a stay in intensive care, many people find that their muscles, stamina and confidence have been affected far more than they expected. This guide explains why physical deconditioning happens after critical illness, what families can watch for, and how rehabilitation at SPANDA in Whitefield, Bengaluru may support a gradual return to everyday life once you are medically stable.',
    updated: '26 November 2026',
    facts: [
      { value: '5–8 in 10', label: 'People treated in intensive care may develop lingering symptoms' },
      { value: 'Months', label: 'Some after-effects of intensive care can last several months' },
      { value: 'Family too', label: 'Relatives can also be affected emotionally' },
    ],
    sections: [
      {
        id: 'what-is-post-icu-deconditioning',
        heading: 'What is post-ICU physical deconditioning?',
        paragraphs: [
          'Deconditioning is the loss of strength, stamina and fitness that comes from serious illness and long periods of immobility. In intensive care, people may spend days or weeks in bed, sometimes sedated or on a breathing machine, while the body directs its energy to fighting the illness. Muscles, including the muscles used for breathing, can weaken quickly.',
          'Doctors use the term post-intensive care syndrome (PICS) for the physical, mental and emotional problems that can linger after an ICU stay. Physical effects include muscle weakness, extreme tiredness, breathlessness, stiffness, poor sleep, low appetite and weight loss. Not everyone is affected, and how long the effects last varies widely.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does an ICU stay affect daily life afterwards?',
        paragraphs: [
          'Simple things can feel surprisingly hard at first: getting out of bed, standing in the shower, walking to the bathroom or climbing a few steps. You may become breathless quickly and need long rests. Some people also notice problems with memory and concentration, low mood, anxiety or vivid memories of their time in hospital.',
          'Families feel it too. Watching someone you love through critical illness is exhausting, and relatives can develop anxiety or low mood of their own. Recognising this is part of recovery. If emotional or memory problems persist, please speak to your doctor, who can arrange appropriate support.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How can rehabilitation help after intensive care?',
        paragraphs: [
          'Early movement in hospital and continued rehabilitation afterwards are widely recommended to reduce weakness and improve function. Once you are home and medically stable, a supervised programme may help you rebuild leg and arm strength, endurance and balance in small, manageable steps.',
          'Rehabilitation also focuses on the activities you need most, such as getting up from a chair, walking outdoors and managing stairs, together with breathing techniques and ways to pace your energy. Progress after critical illness is very individual, and the plan is reviewed and adjusted as you go.',
        ],
      },
    ],
    timelineHeading: 'A general outline of recovery after intensive care',
    timelineIntro: 'Recovery after critical illness differs greatly between people. The stages below are a general guide only; your doctor’s advice comes first.',
    timeline: [
      { when: 'In hospital', title: 'From ICU to the ward', body: 'Once intensive care is no longer needed, you move to a ward to continue recovering. The hospital team usually encourages early sitting, standing and walking as soon as it is safe.' },
      { when: 'First weeks at home', title: 'Settling in', body: 'Short, frequent periods of activity with plenty of rest. Help with bathing, cooking and getting about may be needed for a while.' },
      { when: 'After medical review', title: 'Structured reconditioning', body: 'If your doctor agrees, supervised exercise may help you build strength and stamina, progressed gradually over several weeks.' },
      { when: 'Months ahead', title: 'Returning to roles', body: 'Activity is built towards work, travel and family responsibilities. Some effects can take several months to settle, and continued activity at home helps.' },
    ],
    programme: [
      { title: 'Assessment', body: 'Your hospital course, current strength, walking, balance, breathlessness and daily activities, read alongside your discharge summary and doctor’s advice.' },
      { title: 'Supervised exercise training', body: 'Gentle strengthening and graded walking or cycling, started at a level you can manage and progressed carefully.' },
      { title: 'Endurance conditioning', body: 'Building stamina for everyday tasks, with rest built into each session.' },
      { title: 'Breathing techniques', body: 'Relaxed breathing control and recovery positions for moments of breathlessness during activity.' },
      { title: 'Energy-conservation strategies', body: 'Pacing, planning and simplifying daily routines while your strength returns.' },
      { title: 'Family guidance', body: 'Practical advice for family members on supporting safe activity at home without doing everything for you.' },
    ],
    checklistHeading: 'What to bring to your first visit',
    checklistIntro: 'Having the right information helps the team plan safely around your recent illness.',
    checklist: [
      'Your hospital discharge summary and any ICU or ward reports',
      'A current list of all your medicines',
      'Any inhalers or medicines you may need during the session',
      'Recent test results, such as chest X-rays or blood tests',
      'Comfortable clothing and supportive footwear',
      'A family member or carer, if you would like support',
    ],
    warningIntro: 'If you or a family member notice any of the following after an ICU stay, call 112 or go to the nearest emergency department:',
    warnings: [
      'Severe or sudden breathlessness, or being unable to speak in full sentences',
      'Chest pain or tightness',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'New confusion, unusual drowsiness or difficulty waking',
      'Pain, swelling or warmth in one leg, especially with breathlessness',
      'Coughing up blood, or a high fever',
    ],
    faqs: [
      { q: 'Why am I so weak after being in the ICU?', a: 'Serious illness and long periods in bed can cause muscles to weaken quickly, including the muscles used for breathing. This weakness is common after intensive care and often improves gradually with activity, although the pace varies.' },
      { q: 'How long does it take to recover after intensive care?', a: 'It varies widely. Some people recover within weeks, while others notice effects for several months or longer. Your doctor can give you a better idea based on your illness and health.' },
      { q: 'When can rehabilitation start after an ICU stay?', a: 'Gentle movement often starts in hospital. Supervised rehabilitation at an outpatient centre is considered once your doctor confirms that you are medically stable, and eligibility depends on assessment.' },
      { q: 'Is it normal to feel anxious or low after intensive care?', a: 'Yes, emotional and memory difficulties are recognised after critical illness, and family members can be affected too. Please speak to your doctor if these feelings persist, so that the right support can be arranged.' },
      { q: 'Can a family member come to sessions?', a: 'Yes. A family member or carer is welcome, and it can help them learn how to support safe activity at home.' },
    ],
    references: [
      {
        org: 'Cleveland Clinic',
        title: 'Post-intensive care syndrome (PICS)',
        date: 'updated 29 May 2025',
        url: 'https://my.clevelandclinic.org/health/diseases/21161-post-intensive-care-syndrome-pics',
      },
      {
        org: 'NHS',
        title: 'Intensive care',
        date: 'reviewed 24 February 2023',
        url: 'https://www.nhs.uk/tests-and-treatments/intensive-care/',
      },
    ],
    related: ['mobility-after-hospitalisation', 'post-pneumonia-recovery', 'prolonged-respiratory-illness'],
    photo: 'balance',
  },

  /* ------------------------------------------------------------------ 4. Prolonged respiratory illness */
  {
    spec: 'pulmonary',
    slug: 'prolonged-respiratory-illness',
    condition: 'Recovery after prolonged respiratory illness',
    h1: 'Recovery after a prolonged respiratory illness',
    accent: 'prolonged respiratory illness',
    seoTitle: 'Recovery After Prolonged Respiratory Illness | SPANDA',
    seoDescription:
      'Recovery after a prolonged respiratory illness in Whitefield, Bengaluru: graded activity, breathing techniques and pacing to rebuild stamina.',
    lead: 'Recovery after a prolonged respiratory illness can feel slow and uneven. Weeks or months of coughing, breathlessness and rest leave many people with low stamina long after the illness itself has settled. This guide explains why that happens, why a careful, graded return to activity matters, and how rehabilitation at SPANDA in Whitefield, Bengaluru may help once your doctor has reviewed you.',
    updated: '26 November 2026',
    sections: [
      {
        id: 'what-it-means',
        heading: 'What counts as a prolonged respiratory illness?',
        paragraphs: [
          'This covers any chest illness that has gone on for weeks rather than days, such as a severe or slow-to-settle chest infection, a long course of treatment for tuberculosis, repeated flare-ups of an existing lung condition, or lingering symptoms after a viral illness such as COVID-19. When COVID-19 symptoms continue beyond about 12 weeks, doctors call this long COVID.',
          'The common thread is that the illness, and the rest it required, has taken a toll on the whole body. Extreme tiredness, breathlessness on effort, aching muscles and difficulty concentrating are frequently reported. Symptoms may come and go, and can feel worse after stress or a busy day.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does it affect breathing and daily life?',
        paragraphs: [
          'Long illness reduces fitness in two ways. The lungs and airways may still be recovering, and the muscles of the legs, arms and chest lose strength from weeks of reduced activity. Together, this means everyday tasks such as cooking, bathing, walking to the shop or a full day at work can leave you breathless and drained.',
          'Avoiding activity because it makes you breathless is understandable, but it tends to weaken the muscles further, which makes breathing feel harder still. At the same time, doing too much on a good day can lead to a setback. Finding the middle ground is the heart of recovery.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How can rehabilitation help after a long illness?',
        paragraphs: [
          'Before any exercise begins, your doctor needs to check what is behind your ongoing symptoms and confirm that you are medically stable. If rehabilitation is suitable, activity is started at a comfortable level and increased gradually, watching how you feel during and after each session, not just on the day.',
          'Alongside graded exercise, you learn breathing techniques for moments of breathlessness, pacing strategies to avoid boom-and-bust days, and practical ways to save energy at home and work. Progress varies, and the plan is adjusted if symptoms flare.',
        ],
      },
    ],
    timelineHeading: 'A general approach to a graded return',
    timelineIntro: 'There is no fixed timetable after a long illness. The outline below is a general guide only; your doctor’s advice comes first.',
    timeline: [
      { when: 'First step', title: 'Medical review', body: 'Your doctor checks the cause of ongoing symptoms and whether any further tests or treatment are needed before exercise.' },
      { when: 'Starting out', title: 'A comfortable baseline', body: 'You and the team agree a level of activity you can manage on most days, even a less good day, and start there.' },
      { when: 'Over several weeks', title: 'Small, steady increases', body: 'Activity is increased in small steps if you cope well, and eased back if symptoms flare in the following day or two.' },
      { when: 'Longer term', title: 'Back to your usual roles', body: 'The aim is to build towards work, household and family activities, with a home plan you can continue.' },
    ],
    programme: [
      { title: 'Assessment', body: 'Your illness history, current symptoms, energy levels, walking tolerance and goals, alongside your doctor’s findings.' },
      { title: 'Supervised exercise training', body: 'Graded walking, cycling and strengthening, adjusted to how you respond.' },
      { title: 'Endurance conditioning', body: 'Gradually extending how long you can stay active before needing to rest.' },
      { title: 'Breathing techniques', body: 'Relaxed breathing, pursed-lip breathing, paced breathing and recovery positions.' },
      { title: 'Energy-conservation strategies', body: 'Pacing, prioritising and planning your week to avoid boom-and-bust cycles.' },
      { title: 'Self-management guidance', body: 'Keeping a simple symptom and activity diary, and recognising when to seek medical review.' },
    ],
    checklistHeading: 'Pacing tips for everyday life',
    checklistIntro: 'These general ideas can help you balance activity and rest. Your therapist can help you tailor them.',
    checklist: [
      'Keep a simple diary of activity, rest and symptoms to spot patterns',
      'Break bigger jobs into smaller parts spread across the day or week',
      'Plan rest before you feel exhausted, not after',
      'Increase activity in small steps rather than all at once on a good day',
      'Keep regular sleep and waking times where you can',
      'Bring your reports, medicine list and any inhalers to your sessions',
    ],
    warningIntro: 'If you notice any of the following, call 112 or go to the nearest emergency department:',
    warnings: [
      'Severe or sudden breathlessness, or difficulty speaking',
      'Chest pain, pressure or tightness',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Sudden confusion or unusual drowsiness',
      'Coughing up blood',
      'A high fever with worsening cough or breathlessness',
    ],
    faqs: [
      { q: 'Why am I still breathless weeks after my chest infection?', a: 'Lingering breathlessness can be due to the lungs still recovering, reduced muscle fitness after rest, or another cause that needs checking. Please see your doctor so that the reason can be assessed before you start a programme.' },
      { q: 'Can rehabilitation help with long COVID?', a: 'For some people with ongoing breathlessness or reduced stamina after COVID-19, a carefully paced programme may help, but only after medical review. Exercise should not be restarted without first speaking to your doctor.' },
      { q: 'What if exercise makes my symptoms worse?', a: 'The programme is paced so that activity is increased only as you cope. If symptoms flare in the day or two after a session, the plan is eased back and reviewed, and your doctor is informed if needed.' },
      { q: 'How long will recovery take?', a: 'There is no fixed timeline. Some people improve over weeks; others take months. Progress varies, and the plan is shaped around how you respond.' },
      { q: 'Do I need a referral?', a: 'A doctor’s review is important to rule out other causes of your symptoms. Please bring their notes and your reports, as eligibility depends on medical assessment.' },
    ],
    references: [
      {
        org: 'NHS',
        title: 'Long COVID',
        date: 'reviewed 19 August 2025',
        url: 'https://www.nhs.uk/conditions/covid-19/long-term-effects-of-covid-19-long-covid/',
      },
      ALUK_BREATHLESSNESS,
      CC_PULM_REHAB,
    ],
    related: ['post-pneumonia-recovery', 'persistent-breathlessness', 'post-icu-recovery', 'chronic-exercise-limitation'],
    photo: 'assessment',
  },

  /* ------------------------------------------------------------------ 5. Bronchiectasis */
  {
    spec: 'pulmonary',
    slug: 'bronchiectasis',
    condition: 'Bronchiectasis rehabilitation',
    h1: 'Pulmonary rehabilitation for bronchiectasis',
    accent: 'bronchiectasis',
    seoTitle: 'Bronchiectasis Rehabilitation in Whitefield | SPANDA',
    seoDescription:
      'Bronchiectasis rehabilitation in Whitefield, Bengaluru: exercise, airway-clearance education and breathing techniques alongside your medical care.',
    lead: 'Bronchiectasis rehabilitation brings together exercise, breathing techniques and, where your doctor feels it is appropriate, education on clearing phlegm from the chest. It does not replace antibiotics, inhalers or specialist care. This guide explains what bronchiectasis is, how it affects daily life and how pulmonary rehabilitation at SPANDA in Whitefield, Bengaluru may support you alongside your treatment.',
    updated: '26 November 2026',
    facts: [
      { value: 'Daily', label: 'Airway-clearance exercises are usually done every day' },
      { value: '6–8 weeks', label: 'Typical length of a pulmonary rehabilitation course' },
      { value: 'Long term', label: 'Bronchiectasis usually cannot be cured, but can be managed' },
    ],
    sections: [
      {
        id: 'what-is-bronchiectasis',
        heading: 'What is bronchiectasis?',
        paragraphs: [
          'Bronchiectasis is a long-term condition in which the airways of the lungs become damaged and wider than normal. Damaged airways cannot clear mucus as well as healthy ones, so phlegm collects and the lungs become prone to repeated infections.',
          'It can follow a severe lung infection such as pneumonia, tuberculosis, whooping cough or measles, and is also linked with conditions such as asthma, COPD, immune problems and rheumatoid arthritis. Often no single cause is found. Diagnosis is made by a specialist, usually with a CT scan of the chest.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does bronchiectasis affect breathing and daily life?',
        paragraphs: [
          'The main symptoms are a persistent cough that brings up a lot of phlegm, and chest infections that keep coming back. Breathlessness, wheezing, tiredness and chest discomfort are also common. During a flare-up, symptoms can worsen for days or weeks.',
          'Living with a daily cough and frequent infections is tiring. Many people cut back on activity to avoid breathlessness or coughing in public, and gradually lose fitness. Feeling self-conscious about coughing at work or in social settings can also affect confidence and mood.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How does pulmonary rehabilitation help with bronchiectasis?',
        paragraphs: [
          'Airway clearance is a central part of managing bronchiectasis. Breathing techniques taught by a physiotherapist, and sometimes handheld devices, help to loosen and move phlegm so it can be coughed up more easily. These are usually done daily, so learning a routine that works for you is worthwhile.',
          'Pulmonary rehabilitation adds exercise set at your level, which can support stamina and may help you manage breathlessness, along with advice on pacing and self-management. It works alongside the antibiotics, inhalers and other treatment your doctor prescribes. Progress varies from person to person.',
        ],
      },
    ],
    programme: [
      { title: 'Assessment', body: 'Your cough, phlegm, breathlessness, exercise tolerance and goals, together with your specialist’s diagnosis and treatment plan.' },
      { title: 'Airway-clearance education', body: 'Where appropriate and agreed with your doctor, breathing techniques to help loosen and clear phlegm, and building them into a daily routine.' },
      { title: 'Supervised exercise training', body: 'Walking, cycling and strengthening exercises set at a level you can manage, progressed gradually.' },
      { title: 'Breathing techniques', body: 'Breathing control and recovery positions for breathless moments.' },
      { title: 'Energy-conservation strategies', body: 'Pacing your day and planning airway clearance and activity around your energy levels.' },
      { title: 'Self-management guidance', body: 'Recognising signs of a chest infection early and knowing when to contact your doctor.' },
    ],
    checklistHeading: 'Everyday habits that may help',
    checklistIntro: 'These general measures are often recommended for people with bronchiectasis. Please check with your doctor what applies to you.',
    checklist: [
      'Keep to your airway-clearance routine every day, as advised',
      'Stay as active as you can between sessions',
      'Wash your hands often and avoid close contact with people who have chest infections',
      'Discuss recommended vaccinations with your doctor',
      'Avoid smoking and smoky environments',
      'Bring your inhalers, any airway-clearance device and recent reports to your sessions',
    ],
    warningIntro: 'If you notice any of the following, call 112 or go to the nearest emergency department:',
    warnings: [
      'Coughing up more than small streaks of blood',
      'Severe or sudden breathlessness, or difficulty speaking',
      'Chest pain or tightness',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Sudden confusion or unusual drowsiness',
      'A high temperature of 38°C (100.4°F) or above with worsening cough and breathlessness (seek urgent medical advice)',
    ],
    faqs: [
      { q: 'Can bronchiectasis be cured?', a: 'Bronchiectasis usually cannot be cured, but treatment and self-management can help control symptoms and reduce flare-ups. Rehabilitation is one part of that care.' },
      { q: 'What is airway clearance?', a: 'Airway clearance means breathing techniques, and sometimes handheld devices, that help loosen and move phlegm so it can be coughed up. A physiotherapist teaches the method that suits you, usually to be done daily.' },
      { q: 'Is exercise good for bronchiectasis?', a: 'Regular exercise is generally recommended for people with bronchiectasis and can help with fitness and breathlessness. Whether a programme is suitable for you depends on your medical assessment.' },
      { q: 'Does pulmonary rehabilitation replace antibiotics or inhalers?', a: 'No. Please continue the treatment your doctor prescribes. Rehabilitation works alongside it to support activity and self-management.' },
      { q: 'Should I attend if I have a chest infection?', a: 'Please contact the centre and your doctor if you develop signs of a chest infection. Sessions are usually paused until your doctor confirms you are well enough to continue.' },
    ],
    references: [
      {
        org: 'NHS',
        title: 'Bronchiectasis',
        date: 'reviewed 11 June 2025',
        url: 'https://www.nhs.uk/conditions/bronchiectasis/',
      },
      CC_PULM_REHAB,
      ALUK_PULM_REHAB,
    ],
    related: ['copd', 'chronic-exercise-limitation', 'post-pneumonia-recovery'],
    photo: 'breathing',
  },

  /* ------------------------------------------------------------------ 6. ILD */
  {
    spec: 'pulmonary',
    slug: 'interstitial-lung-disease',
    condition: 'Interstitial lung disease rehabilitation',
    h1: 'Rehabilitation for interstitial lung disease',
    accent: 'interstitial lung disease',
    seoTitle: 'Interstitial Lung Disease Rehab in Bengaluru | SPANDA',
    seoDescription:
      'Interstitial lung disease rehabilitation in Whitefield, Bengaluru: supervised exercise, breathing and pacing, after medical assessment, with monitoring.',
    lead: 'Interstitial lung disease rehabilitation aims to help you stay as active and independent as possible while living with lung scarring. It is offered alongside the medicines, oxygen and specialist care your doctors provide, never in place of them. This guide explains what interstitial lung disease (ILD) is, how it affects exercise and daily life, and how rehabilitation at SPANDA in Whitefield, Bengaluru may support you after a medical assessment.',
    updated: '26 November 2026',
    sections: [
      {
        id: 'what-is-ild',
        heading: 'What is interstitial lung disease?',
        paragraphs: [
          'Interstitial lung disease is a group of conditions that cause inflammation and scarring of the lung tissue around the air sacs and small blood vessels. Unlike asthma or COPD, which mainly affect the airways, ILD affects the tissue through which oxygen passes into the blood. The scarring is usually permanent, although treatment can often slow it.',
          'There are many types. Idiopathic pulmonary fibrosis, where no cause is found, is the most common. Others are linked to connective tissue diseases such as rheumatoid arthritis, sarcoidosis, long-term exposure to dusts such as silica or asbestos, reactions to inhaled mould or bird droppings, certain medicines or radiation. Diagnosis is made by a specialist using scans, breathing tests and sometimes a biopsy.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does ILD affect breathing and exercise?',
        paragraphs: [
          'Scarred lung tissue makes it harder to move oxygen into the blood. The result is breathlessness that is typically worse with activity, often with a persistent dry cough and tiredness. Symptoms usually begin mildly and change over months or years, at a pace that differs from person to person.',
          'Because breathlessness comes on with effort, many people gradually do less: shorter walks, fewer outings, more help with household tasks. Muscles then lose strength, which makes the same activities feel harder. Some people are prescribed oxygen to help them stay active; this is decided and managed by your doctor.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How can pulmonary rehabilitation help with ILD?',
        paragraphs: [
          'Pulmonary rehabilitation is recommended for many people with ILD. It cannot reverse scarring, but exercise set at the right level, with education about the condition, may help make breathing during activity feel less strenuous and support your ability to carry on with daily life.',
          'Because oxygen levels can fall during exertion in some people with ILD, a medical assessment and appropriate monitoring arrangements are particularly important before and during any exercise programme. At SPANDA, eligibility and the level of monitoring you need are decided with your treating doctor before you begin. Progress varies, and the plan is adapted as your condition changes.',
        ],
      },
    ],
    programme: [
      { title: 'Assessment', body: 'Your diagnosis, current symptoms, exercise tolerance, any prescribed oxygen and your goals, read alongside your specialist’s advice.' },
      { title: 'Supervised exercise training', body: 'Walking, cycling and strengthening exercises at a carefully chosen intensity, with rest built in.' },
      { title: 'Endurance conditioning', body: 'Gradually building the stamina you need for the activities that matter to you.' },
      { title: 'Breathing techniques', body: 'Breathing control, paced breathing during movement and recovery positions for breathless moments.' },
      { title: 'Energy-conservation strategies', body: 'Planning and simplifying daily tasks to make the most of your energy.' },
      { title: 'Self-management guidance', body: 'Understanding your condition, using any oxygen exactly as your doctor prescribes, and knowing when to seek help.' },
    ],
    checklistHeading: 'Before your first session',
    checklistIntro: 'Bringing the right information helps the team plan safely with your doctor.',
    checklist: [
      'Your specialist’s letters, recent scan reports and breathing-test results',
      'A current list of your medicines',
      'Your prescribed oxygen equipment, if you use it, and your doctor’s instructions for it during activity',
      'Any inhalers you use',
      'Comfortable clothes and supportive walking shoes',
    ],
    warningIntro: 'If you notice any of the following, call 112 or go to the nearest emergency department:',
    warnings: [
      'Severe or sudden breathlessness, or breathlessness at rest that is much worse than usual',
      'Chest pain, especially sudden sharp pain on one side',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Sudden confusion or unusual drowsiness',
      'Coughing up blood',
      'A high fever with worsening cough or breathlessness',
    ],
    closingHeading: 'Living with interstitial lung disease',
    closing: [
      'The outlook for ILD depends on the type, its cause and how it responds to treatment, and only your specialist can explain what to expect in your case. Staying active within safe limits, not smoking and avoiding known triggers or dust exposure are often part of looking after yourself.',
      'Infections can be more serious when you have a lung condition, so ask your doctor about recommended vaccinations and try to avoid close contact with people who have colds or chest infections.',
    ],
    faqs: [
      { q: 'Is exercise safe with interstitial lung disease?', a: 'For many people with ILD, exercise at the right level is recommended. Because oxygen levels can drop during effort in some people, suitability and monitoring must be agreed with your doctor first, following a medical assessment.' },
      { q: 'Can pulmonary rehabilitation reverse lung scarring?', a: 'No. Rehabilitation cannot reverse scarring. It aims to support activity, breathing management and daily function alongside your medical treatment.' },
      { q: 'Does rehabilitation replace my medicines or oxygen?', a: 'No. Please continue all medicines and any oxygen exactly as your doctor prescribes. SPANDA does not prescribe or change medicines or oxygen.' },
      { q: 'Can I take part if I use oxygen?', a: 'Many people who use oxygen take part in pulmonary rehabilitation. Please discuss this with your doctor, and bring their instructions, as eligibility depends on your assessment and the monitoring you need.' },
      { q: 'What is the difference between ILD and pulmonary fibrosis?', a: 'ILD is the umbrella term for a group of conditions that inflame or scar lung tissue. Pulmonary fibrosis means scarring of the lungs; idiopathic pulmonary fibrosis is the most common type of ILD.' },
    ],
    references: [
      {
        org: 'Cleveland Clinic',
        title: 'Interstitial lung disease',
        date: 'updated 4 March 2026',
        url: 'https://my.clevelandclinic.org/health/diseases/17809-interstitial-lung-disease',
      },
      {
        org: 'NHS',
        title: 'Idiopathic pulmonary fibrosis',
        date: 'reviewed 27 August 2026',
        url: 'https://www.nhs.uk/conditions/idiopathic-pulmonary-fibrosis/',
      },
      CC_PULM_REHAB,
    ],
    related: ['chronic-exercise-limitation', 'persistent-breathlessness', 'copd'],
    photo: 'clinical',
  },

  /* ------------------------------------------------------------------ 7. Persistent breathlessness */
  {
    spec: 'pulmonary',
    slug: 'persistent-breathlessness',
    condition: 'Persistent breathlessness following illness',
    h1: 'Persistent breathlessness after illness',
    accent: 'after illness',
    seoTitle: 'Persistent Breathlessness After Illness, Whitefield | SPANDA',
    seoDescription:
      'Persistent breathlessness after illness in Whitefield, Bengaluru: why a medical check comes first and how breathing techniques and graded activity may help',
    lead: 'Persistent breathlessness after an illness is worrying, and it always deserves a medical check to find the cause. Once serious problems have been ruled out or treated, rehabilitation may help you manage breathlessness and rebuild your confidence with activity. This guide explains what can lie behind lingering breathlessness, when to seek urgent help, and how rehabilitation at SPANDA in Whitefield, Bengaluru may fit in after your doctor’s assessment.',
    updated: '26 November 2026',
    sections: [
      {
        id: 'causes',
        heading: 'Why might breathlessness continue after an illness?',
        paragraphs: [
          'Breathlessness has many possible causes. After a chest infection, COVID-19 or a hospital stay, it may simply reflect lungs that are still healing and muscles that have lost fitness. But it can also be a sign of asthma, COPD, lung scarring, heart problems, anaemia, a blood clot or other conditions that need specific treatment.',
          'That is why it is important not to assume the cause yourself. See your doctor if your breathlessness is getting worse with normal activities or when lying down, if you have swollen ankles, or if you have had a cough for three weeks or more. Rehabilitation is considered only after this medical evaluation.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does ongoing breathlessness affect daily life?',
        paragraphs: [
          'Feeling short of breath can be frightening, and anxiety itself can make breathing feel faster and harder. Many people start to avoid stairs, walks or busy places for fear of becoming breathless, and over time this lack of activity weakens the muscles and makes breathlessness come on sooner.',
          'Breaking that cycle gently is often the aim. Knowing what to do when breathlessness starts, and having a plan for gradually doing more, can help you feel more in control.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How can rehabilitation help with breathlessness?',
        paragraphs: [
          'If your doctor feels rehabilitation is suitable, you may learn breathing control (gentle, relaxed breathing with a longer out-breath), pursed-lip breathing, ways to time your breath with movement, and positions that ease breathlessness, such as sitting and leaning forward with your forearms on your knees.',
          'Alongside these skills, supervised exercise set at your level may help build stamina and confidence, while pacing and energy-saving strategies help you plan your day. Progress varies, and if your symptoms change, you will be advised to return to your doctor.',
        ],
      },
    ],
    programme: [
      { title: 'Assessment', body: 'Your symptoms, what triggers your breathlessness, your daily activities and goals, read alongside your doctor’s findings on the cause.' },
      { title: 'Breathing techniques', body: 'Breathing control, pursed-lip breathing, “blow as you go” and paced breathing during activity.' },
      { title: 'Supervised exercise training', body: 'Graded walking, cycling and strengthening to build tolerance step by step.' },
      { title: 'Endurance conditioning', body: 'Gradually extending how long you can stay active before you need to rest.' },
      { title: 'Energy-conservation strategies', body: 'Planning, pacing and adapting daily tasks to reduce breathlessness.' },
      { title: 'Self-management guidance', body: 'Recognising when breathlessness is part of exercise and when it is a warning sign that needs medical attention.' },
    ],
    checklistHeading: 'Positions that may ease breathlessness',
    checklistIntro: 'These positions are commonly taught to help recover from breathless moments. Your therapist will show you which work for you.',
    checklist: [
      'Sitting and leaning forward, with your forearms resting on your thighs',
      'Sitting at a table, leaning forward onto a pillow with your head and arms resting on it',
      'Standing and leaning your back or forearms against a wall',
      'Lying on your side, propped up on pillows that support your head and shoulders',
      'Relaxing your shoulders and breathing out gently for longer than you breathe in',
    ],
    warningIntro: 'Some breathlessness is an emergency. Call 112 or go to the nearest emergency department if you or a family member notice:',
    warnings: [
      'Severe or sudden breathlessness, gasping, choking or being unable to speak properly',
      'Chest tightness, heaviness or pain, especially spreading to the arms, back, neck or jaw',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Sudden confusion or unusual drowsiness',
      'Coughing up blood',
      'Breathlessness with pain or swelling in one leg, or with a racing or irregular heartbeat',
    ],
    faqs: [
      { q: 'Why am I still short of breath after being ill?', a: 'It may be due to the lungs still healing or reduced fitness, but it can also signal another condition that needs treatment. Please see your doctor to find the cause before starting rehabilitation.' },
      { q: 'When should I worry about shortness of breath?', a: 'Seek emergency help (call 112) for severe or sudden breathlessness, chest pain, blue or grey lips, sudden confusion or coughing up blood. See your doctor soon if breathlessness is getting worse with everyday activities.' },
      { q: 'Do breathing exercises really help with breathlessness?', a: 'Breathing techniques such as breathing control and pursed-lip breathing can help many people manage breathless moments and feel more in control. They do not treat the underlying cause, which is why medical evaluation comes first.' },
      { q: 'Is it safe to exercise if I get breathless?', a: 'Once your doctor has checked the cause and agrees, exercise at the right level is generally encouraged, and some breathlessness during exercise is expected. Suitability depends on your assessment.' },
      { q: 'Can anxiety make breathlessness worse?', a: 'Yes. Anxiety can make breathing faster and feel harder. Learning calm breathing control and recovery positions may help, and your doctor can advise if anxiety is a significant problem.' },
    ],
    references: [
      {
        org: 'NHS',
        title: 'Shortness of breath',
        date: 'reviewed 30 January 2024',
        url: 'https://www.nhs.uk/symptoms/shortness-of-breath/',
      },
      ALUK_BREATHLESSNESS,
      CC_PURSED_LIP,
    ],
    related: ['prolonged-respiratory-illness', 'post-pneumonia-recovery', 'chronic-exercise-limitation', 'copd'],
    photo: 'assessment',
  },

  /* ------------------------------------------------------------------ 8. Thoracic surgery */
  {
    spec: 'pulmonary',
    slug: 'after-thoracic-surgery',
    condition: 'Post-thoracic surgery rehabilitation',
    h1: 'Rehabilitation after thoracic surgery',
    accent: 'thoracic surgery',
    seoTitle: 'Rehabilitation After Thoracic Surgery, Whitefield | SPANDA',
    seoDescription:
      'Rehabilitation after thoracic (chest) surgery in Whitefield, Bengaluru: breathing, graded activity and conditioning within your surgeon’s precautions.',
    lead: 'Rehabilitation after thoracic surgery helps you rebuild breathing, stamina and everyday activity after an operation on the lungs or chest. It always follows your surgeon’s clearance and precautions. This guide explains what recovery from chest surgery usually involves, what to watch for, and how rehabilitation at SPANDA in Whitefield, Bengaluru may support a gradual return to your routine.',
    updated: '26 November 2026',
    facts: [
      { value: '3–10 days', label: 'Typical hospital stay, depending on the operation' },
      { value: '~1 month', label: 'Driving is often restricted for about this long' },
      { value: '~6 weeks', label: 'Lifting limits commonly last around this long' },
      { value: 'A month+', label: 'Full recovery often takes a month or more' },
    ],
    sections: [
      {
        id: 'what-is-thoracic-surgery',
        heading: 'What is thoracic surgery?',
        paragraphs: [
          'Thoracic surgery means any operation inside the chest, including on the lungs, airways, oesophagus (food pipe), chest wall or diaphragm. Common lung operations include a lobectomy, where part of a lung is removed, often for lung cancer. Surgery may be done through a larger cut between the ribs (a thoracotomy) or through small keyhole incisions using a camera, known as video-assisted thoracic surgery (VATS) or robotic surgery.',
          'Recovery is usually quicker after keyhole surgery than after open surgery, but every operation and every person is different. This guide focuses on lung and chest-wall surgery; heart surgery usually follows a cardiac rehabilitation pathway.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does chest surgery affect breathing and daily life?',
        paragraphs: [
          'After surgery, pain around the wound can make deep breathing and coughing uncomfortable, which is why breathing exercises and early walking are encouraged in hospital to help the lungs re-expand and reduce the risk of chest infection. If part of a lung has been removed, you may notice more breathlessness on effort for a while.',
          'At home, many people feel tired, a little breathless and stiff around the chest and shoulder on the operated side. Your surgeon will usually set limits on lifting and driving for some weeks. It is common to feel unsure about how much to do, and that uncertainty can lead people to do too little.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How can rehabilitation help after thoracic surgery?',
        paragraphs: [
          'Once your surgeon has cleared you for outpatient rehabilitation, a graded programme may help you rebuild walking tolerance, strength and stamina within your surgical precautions. Breathing techniques help you manage breathlessness and use your lungs comfortably as healing progresses.',
          'Gentle, approved movement for the shoulder and upper body on the operated side may help with stiffness, and pacing advice helps you return to household tasks and work step by step. Progress varies with the type of surgery and your health before the operation.',
        ],
      },
    ],
    timelineHeading: 'A general outline of recovery after chest surgery',
    timelineIntro: 'Recovery depends on the operation, the approach used and your general health. The stages below are a general guide only; your surgeon’s and doctor’s advice comes first.',
    timeline: [
      { when: 'In hospital', title: 'Breathing and early walking', body: 'Chest drains are usually in place for a few days. The hospital team encourages breathing exercises, coughing with the wound supported and walking with help as soon as possible.' },
      { when: 'First weeks at home', title: 'Rest and short walks', body: 'Short, regular walks, breathing exercises and wound care as instructed. Lifting and driving are restricted as your surgeon advises.' },
      { when: 'After surgical clearance', title: 'Structured rehabilitation', body: 'If your surgeon agrees, supervised exercise may help you build stamina, strength and upper-body movement over several weeks.' },
      { when: 'Weeks to months', title: 'Returning to routine', body: 'Return to work and heavier activity depends on the operation, your job and your surgeon’s advice. Many people continue to improve for some time.' },
    ],
    programme: [
      { title: 'Assessment', body: 'Your operation, surgical precautions, wound healing, breathlessness, walking tolerance and goals, read alongside your discharge summary.' },
      { title: 'Breathing techniques', body: 'Breathing control and deep-breathing exercises as advised by your surgical team, with recovery positions for breathless moments.' },
      { title: 'Supervised exercise training', body: 'Graded walking and strengthening exercises within your lifting and movement limits.' },
      { title: 'Endurance conditioning', body: 'Building stamina for daily tasks, travel and a return to work.' },
      { title: 'Airway-clearance education', body: 'Where appropriate, how to cough effectively and comfortably with the wound supported.' },
      { title: 'Energy-conservation strategies', body: 'Pacing your day and adapting household tasks while you heal.' },
    ],
    checklistHeading: 'What to bring to your first session',
    checklistIntro: 'This helps the team plan within your surgeon’s instructions.',
    checklist: [
      'Your discharge summary and operation notes',
      'Any written precautions about lifting, driving or arm movement',
      'A current list of your medicines, including pain relief',
      'Inhalers, if you use them',
      'Loose, comfortable clothing that does not press on the wound',
    ],
    warningIntro: 'Contact your surgeon promptly about any wound concerns. Call 112 or go to the nearest emergency department if you notice:',
    warnings: [
      'Severe or sudden breathlessness',
      'New or worsening chest pain',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Coughing up blood',
      'Pain, swelling or warmth in one leg, especially with breathlessness',
      'A temperature of 38°C (100.4°F) or above, or redness, discharge or bleeding from the wound (contact your surgeon urgently)',
    ],
    faqs: [
      { q: 'How long does it take to recover from lung surgery?', a: 'It depends on the operation and the approach. Hospital stays are often between three and ten days, and full recovery commonly takes a month or more, sometimes longer after open surgery. Your surgeon will guide you.' },
      { q: 'When can I start rehabilitation after thoracic surgery?', a: 'Breathing exercises and walking usually start in hospital. Outpatient rehabilitation begins once your surgeon clears you, and the programme always follows your surgical precautions.' },
      { q: 'Why am I more breathless after lung surgery?', a: 'Wound pain, reduced fitness and, if part of a lung was removed, less lung tissue can all add to breathlessness. It often eases with time and activity, but please report any sudden or severe change to your doctor.' },
      { q: 'When can I lift things or drive again?', a: 'Lifting limits often last around six weeks and driving is often restricted for about a month, but this varies. Please follow your surgeon’s specific advice.' },
      { q: 'Will exercise damage my wound?', a: 'Exercises are chosen to respect your surgeon’s precautions and are progressed gradually. If you notice any wound problem, stop and contact your surgeon.' },
    ],
    references: [
      {
        org: 'Cleveland Clinic',
        title: 'Thoracic surgery',
        date: 'updated 20 September 2022',
        url: 'https://my.clevelandclinic.org/health/treatments/24201-thoracic-surgery',
      },
      CC_PULM_REHAB,
    ],
    related: ['mobility-after-hospitalisation', 'post-icu-recovery', 'persistent-breathlessness'],
    photo: 'clinical',
  },

  /* ------------------------------------------------------------------ 9. Chronic exercise limitation */
  {
    spec: 'pulmonary',
    slug: 'chronic-exercise-limitation',
    condition: 'Chronic respiratory-related exercise limitations',
    h1: 'Exercise limitation with a long-term lung condition',
    accent: 'long-term lung condition',
    seoTitle: 'Lung Conditions and Exercise Limits, Bengaluru | SPANDA',
    seoDescription:
      'Exercise limitation from a long-term lung condition in Whitefield, Bengaluru: how pulmonary rehabilitation and pacing may help you stay active.',
    lead: 'Exercise limitation is one of the hardest parts of living with a long-term lung condition. When walking to the market or playing with grandchildren leaves you breathless, it is natural to do less, yet doing less often makes things harder. This guide explains that cycle and how pulmonary rehabilitation at SPANDA in Whitefield, Bengaluru may help you stay more active, guided by your doctor’s assessment.',
    updated: '26 November 2026',
    facts: [
      { value: '6–12 weeks', label: 'Common length range for pulmonary rehabilitation programmes' },
      { value: '2–3 a week', label: 'Typical number of supervised sessions' },
      { value: '1–2 hours', label: 'Usual length of each session' },
    ],
    sections: [
      {
        id: 'what-it-is',
        heading: 'What is respiratory-related exercise limitation?',
        paragraphs: [
          'Many long-term lung conditions, including COPD, bronchiectasis, interstitial lung disease, severe asthma and the after-effects of tuberculosis or other serious chest illness, reduce how much physical activity a person can manage before breathlessness or tiredness forces them to stop.',
          'The limitation does not come from the lungs alone. Over time, reduced activity weakens the muscles of the legs and arms, and weaker muscles demand more oxygen for the same work. Anxiety about becoming breathless can also hold people back.',
        ],
      },
      {
        id: 'how-it-affects-daily-life',
        heading: 'How does it affect daily life?',
        paragraphs: [
          'People often describe a slow shrinking of their world: taking the lift instead of the stairs, stopping walks in the evening, needing help with shopping or bathing, and turning down family functions or travel. Each change makes sense on its own, but together they can lead to further loss of fitness and confidence.',
          'Breaking this cycle does not mean pushing through severe breathlessness. It means finding a safe level of activity, building on it steadily and learning to manage breathless moments calmly.',
        ],
      },
      {
        id: 'how-rehabilitation-helps',
        heading: 'How does pulmonary rehabilitation help?',
        paragraphs: [
          'Pulmonary rehabilitation combines exercise set at your own level with education on breathing and managing your condition. Reputable sources describe possible benefits including better walking ability, less breathlessness and tiredness, greater confidence with everyday tasks and improved wellbeing. Progress varies, and gains are kept by staying active afterwards.',
          'Feeling somewhat out of breath during exercise is expected and is part of the training; you are supported to work at a level you can safely manage. At SPANDA, eligibility depends on a medical assessment of your condition and on monitoring arrangements appropriate to you.',
        ],
      },
      {
        id: 'who-may-not-be-suitable',
        heading: 'Is pulmonary rehabilitation suitable for everyone?',
        paragraphs: [
          'Not always. It may not be appropriate for people with uncontrolled heart problems, a recent heart attack, pain that prevents walking or during a flare-up of a lung condition. Some people who are very breathless may need a different approach first.',
          'Your doctor’s assessment is the starting point. Please bring your diagnosis, recent reports and medication list, so that any programme is planned safely alongside the treatment you already receive.',
        ],
      },
    ],
    programme: [
      { title: 'Assessment', body: 'Your diagnosis, symptoms, walking tolerance, strength, daily activities and goals, alongside your doctor’s advice.' },
      { title: 'Supervised exercise training', body: 'Aerobic exercise such as walking or cycling, plus strengthening for the legs and arms, progressed gradually.' },
      { title: 'Endurance conditioning', body: 'Building stamina for the activities you want to get back to.' },
      { title: 'Breathing techniques', body: 'Pursed-lip breathing, breathing control, “blow as you go” and recovery positions.' },
      { title: 'Energy-conservation strategies', body: 'Prioritising, planning and pacing your day, and simplifying tasks at home.' },
      { title: 'Self-management guidance', body: 'A home activity plan, understanding your condition and knowing when to contact your doctor.' },
    ],
    checklistHeading: 'Simple ways to stay active between sessions',
    checklistIntro: 'These general tips can help you keep moving safely. Your therapist can adapt them to your condition.',
    checklist: [
      'Aim for a little activity every day rather than a lot on one day',
      'Breathe out during the effort part of a movement (“blow as you go”) and avoid holding your breath',
      'Use pursed-lip breathing during the harder part of an activity, such as climbing stairs',
      'Plan rest stops on longer walks, and use a bench or chair without guilt',
      'Exercise indoors on very hot, humid or polluted days',
      'Keep your reliever inhaler with you, as prescribed',
    ],
    warningIntro: 'Stop exercising and call 112 or go to the nearest emergency department if you notice:',
    warnings: [
      'Severe or sudden breathlessness that does not settle with rest and your usual techniques',
      'Chest pain, tightness or pressure',
      'Lips, tongue or skin turning blue, grey or very pale (on darker skin, check the palms)',
      'Sudden confusion, dizziness or fainting',
      'Coughing up blood',
      'A high fever with worsening cough and breathlessness',
    ],
    faqs: [
      { q: 'Is it safe to get breathless when exercising with a lung condition?', a: 'Some breathlessness during exercise is expected and is part of training. You are taught how to recover and how breathless is acceptable for you. Sudden or severe breathlessness that does not settle is different and needs urgent care.' },
      { q: 'Does pulmonary rehabilitation replace inhalers?', a: 'No. Rehabilitation works alongside your inhalers, medicines and any oxygen your doctor prescribes. Please continue your treatment as prescribed.' },
      { q: 'How often are pulmonary rehabilitation sessions?', a: 'Many programmes run two or three sessions a week for several weeks. Your plan is discussed at assessment.' },
      { q: 'What kind of exercise helps with lung disease?', a: 'Programmes usually combine aerobic exercise, such as walking or cycling, with strengthening for the arms and legs, all set at your level. Which exercises suit you depends on your assessment.' },
      { q: 'Will I lose the benefits once the programme ends?', a: 'Benefits tend to fade if activity stops. Continuing a home exercise plan and staying active is what helps you keep the progress you have made.' },
      { q: 'Am I too old for pulmonary rehabilitation?', a: 'Age alone does not exclude anyone. Suitability depends on your health, your medical assessment and your goals.' },
    ],
    references: [CC_PULM_REHAB, ALUK_PULM_REHAB, ALUK_BREATHLESSNESS, CC_PURSED_LIP],
    related: ['copd', 'interstitial-lung-disease', 'bronchiectasis', 'persistent-breathlessness'],
    photo: 'band',
  },
];
