/**
 * Option 3 content, generated from the prototype's services.json (SPANDA_Complete_Developer_Prototype_V2).
 * Scope: three specialities only. All copy needs clinical and management sign-off before launch.
 */

export interface Condition { name: string; body: string; }
export interface Faq { q: string; a: string; }
export interface SpecialityFull {
  id: 'orthopaedic' | 'neurological' | 'pulmonary';
  title: string;
  short: string;
  tag: string;
  intro: string;
  approach: string[];
  goals: string;
  image: string;
  conditions: Condition[];
  faqs: Faq[];
}

export const SPECIALITIES_FULL: SpecialityFull[] = [
  {
    "id": "orthopaedic",
    "title": "Orthopaedic rehabilitation",
    "short": "Orthopaedic",
    "tag": "Movement and strength",
    "intro": "Orthopaedic rehabilitation supports people experiencing movement limitations after surgery, injury or musculoskeletal conditions. At Spanda in Whitefield, the proposed programme focuses on individual functional goals, mobility, strength and daily activity.",
    "approach": [
      "Therapeutic exercise",
      "Strength and mobility training",
      "Gait and balance training",
      "Functional movement practice",
      "Patient education"
    ],
    "goals": "Support safer movement, manage functional limitations and work towards everyday activities.",
    "image": "img/orthopaedic-rehabilitation.jpg",
    "conditions": [
      {
        "name": "Total knee replacement rehabilitation",
        "body": "Knee replacement recovery can involve stiffness, weakness and difficulty walking or using stairs. Rehabilitation focuses on clinician-approved joint movement, strength and walking practice, respecting surgical precautions."
      },
      {
        "name": "Total hip replacement rehabilitation",
        "body": "After hip replacement, rehabilitation may address walking, transfers, strength and daily tasks while following the surgeon’s weight-bearing and movement instructions."
      },
      {
        "name": "Fracture and trauma recovery",
        "body": "After a fracture or traumatic injury, rehabilitation can address stiffness, weakness and reduced activity. Progression depends on healing, medical stability and permitted loading."
      },
      {
        "name": "Spine surgery rehabilitation",
        "body": "After spine surgery, rehabilitation may support gradual mobility, posture and everyday function, within the surgeon’s restrictions and recovery stage."
      },
      {
        "name": "Back and neck pain",
        "body": "Persistent back or neck pain can affect movement, sleep and activity. Assessment helps identify relevant functional limitations and guide an appropriate exercise and movement plan."
      },
      {
        "name": "Osteoarthritis and joint stiffness",
        "body": "Joint stiffness and discomfort may make daily tasks difficult. Rehabilitation may support joint mobility, muscle strength and activity adaptation; it does not reverse arthritis."
      },
      {
        "name": "Ligament and meniscus injuries",
        "body": "Rehabilitation may address knee stability, movement and strength after ligament or meniscus injury, with progression guided by clinical findings and surgical restrictions where relevant."
      },
      {
        "name": "Frozen shoulder",
        "body": "Frozen shoulder can limit shoulder movement and everyday tasks. A tailored programme may focus on tolerable mobility practice and gradual functional use."
      },
      {
        "name": "Sports injury recovery",
        "body": "Following a sports injury, rehabilitation may address movement, strength, balance and activity-specific demands. Return to sport depends on healing and clinical assessment."
      },
      {
        "name": "Mobility limitations after prolonged hospitalisation",
        "body": "Time in hospital can reduce strength and endurance. Rehabilitation may help medically stable individuals practise transfers, walking and daily activities at an appropriate pace."
      }
    ],
    "faqs": [
      {
        "q": "When can rehabilitation begin after surgery?",
        "a": "Timing depends on the operation, medical stability and the surgeon’s instructions."
      },
      {
        "q": "Will I need a walking aid?",
        "a": "A clinician can assess whether an aid is appropriate and how to use it safely."
      },
      {
        "q": "How long does orthopaedic rehabilitation take?",
        "a": "Duration depends on healing, functional goals, baseline ability and response to therapy."
      }
    ]
  },
  {
    "id": "neurological",
    "title": "Neurological rehabilitation",
    "short": "Neurological",
    "tag": "Function and independence",
    "intro": "Neurological rehabilitation supports people whose movement, strength, balance or daily functioning has been affected by conditions involving the brain, spinal cord or nerves. A rehabilitation plan is shaped around clinical assessment, abilities and personal goals.",
    "approach": [
      "Neurophysiotherapy",
      "Balance and coordination training",
      "Gait retraining",
      "Therapeutic exercises",
      "Functional movement and activities-of-daily-living practice"
    ],
    "goals": "Support available functional abilities, mobility and participation in daily life. Progress varies by individual.",
    "image": "img/neurological-rehabilitation.jpg",
    "conditions": [
      {
        "name": "Stroke rehabilitation",
        "body": "Stroke may affect strength, balance, mobility and daily activities. Rehabilitation can support task-specific movement and functional practice after medical clearance."
      },
      {
        "name": "Traumatic brain injury rehabilitation",
        "body": "Brain injury can affect physical function, coordination and activity tolerance. Rehabilitation is adapted to medical stability, current abilities and goals; specialised cognitive or communication needs may require referral."
      },
      {
        "name": "Spinal cord injury rehabilitation",
        "body": "Spinal cord injury can affect movement, sensation and independence. Rehabilitation may address appropriate mobility and functional tasks within the individual’s clinical capabilities."
      },
      {
        "name": "Parkinson’s disease rehabilitation",
        "body": "Parkinson’s disease may affect movement speed, balance and walking. Rehabilitation can support movement strategies, strength and balance alongside ongoing medical care."
      },
      {
        "name": "Multiple sclerosis rehabilitation",
        "body": "Multiple sclerosis can affect mobility, fatigue and coordination. Rehabilitation may adapt activity and exercise to functional needs, symptom changes and tolerance."
      },
      {
        "name": "Neuropathy rehabilitation",
        "body": "Peripheral nerve problems can affect sensation, muscle strength and balance. Rehabilitation may focus on safer movement and functional practice, alongside medical assessment of the cause."
      },
      {
        "name": "Balance and coordination disorders",
        "body": "Difficulties with balance or coordinated movement can affect daily activities. Assessment helps guide appropriate exercises and safety strategies."
      },
      {
        "name": "Gait abnormalities",
        "body": "Changes in walking pattern may result from neurological weakness or coordination problems. Rehabilitation can assess functional walking and practise appropriate gait strategies."
      },
      {
        "name": "Neurological weakness",
        "body": "Weakness associated with neurological conditions may limit movement and daily tasks. Rehabilitation can support individually appropriate activity and functional training."
      },
      {
        "name": "Rehabilitation after neurosurgery",
        "body": "After neurosurgery, rehabilitation may support mobility and function once medically appropriate, following the treating team’s precautions."
      }
    ],
    "faqs": [
      {
        "q": "Can rehabilitation help after a stroke?",
        "a": "It may support functional abilities; timing and outcomes depend on the individual and medical status."
      },
      {
        "q": "Can family members participate?",
        "a": "The centre’s approach encourages caregiver involvement. Confirm session arrangements with the centre."
      },
      {
        "q": "Does neurological rehabilitation cure neurological disease?",
        "a": "No. Rehabilitation addresses function and participation; medical management remains important."
      }
    ]
  },
  {
    "id": "pulmonary",
    "title": "Pulmonary rehabilitation",
    "short": "Pulmonary",
    "tag": "Breathing and endurance",
    "intro": "Pulmonary rehabilitation combines individually appropriate exercise, breathing-management education and functional conditioning for eligible people with respiratory illness or limited exercise tolerance. A medical assessment and suitable monitoring are important before and during the programme.",
    "approach": [
      "Supervised exercise training",
      "Breathing techniques",
      "Endurance conditioning",
      "Airway-clearance education when appropriate",
      "Energy-conservation strategies",
      "Respiratory self-management guidance"
    ],
    "goals": "Support breathlessness management, exercise tolerance and everyday function. Rehabilitation does not replace medical respiratory treatment.",
    "image": "img/pulmonary-rehabilitation.jpg",
    "conditions": [
      {
        "name": "COPD rehabilitation",
        "body": "Chronic obstructive pulmonary disease can limit activity through breathlessness and fatigue. Pulmonary rehabilitation may support conditioning and symptom-management skills alongside prescribed treatment."
      },
      {
        "name": "Post-pneumonia recovery",
        "body": "Some people experience reduced stamina after pneumonia. Following medical assessment and resolution of acute concerns, gradual activity may support recovery of everyday function."
      },
      {
        "name": "Post-ICU physical deconditioning",
        "body": "Critical illness and prolonged immobility can reduce strength and endurance. Rehabilitation may support gradual functional reconditioning when medically stable."
      },
      {
        "name": "Recovery after prolonged respiratory illness",
        "body": "After a lengthy respiratory illness, activity tolerance may be reduced. Rehabilitation may address gradual conditioning and breathlessness management, guided by assessment."
      },
      {
        "name": "Bronchiectasis rehabilitation",
        "body": "Bronchiectasis can cause cough, mucus and breathlessness. Pulmonary rehabilitation may include conditioning and appropriate airway-clearance education alongside medical care."
      },
      {
        "name": "Interstitial lung disease rehabilitation",
        "body": "Interstitial lung disease can limit exercise tolerance. A medically appropriate programme may support activity and breathing management, with monitoring as needed."
      },
      {
        "name": "Persistent breathlessness following illness",
        "body": "Persistent breathlessness needs medical evaluation to identify its cause. If suitable, rehabilitation may address activity tolerance and symptom-management strategies."
      },
      {
        "name": "Post-thoracic surgery rehabilitation",
        "body": "Following chest surgery, rehabilitation may assist gradual activity and conditioning after medical clearance and within surgical precautions."
      },
      {
        "name": "Chronic respiratory-related exercise limitations",
        "body": "Long-term respiratory conditions can make daily activity difficult. Rehabilitation may support functional conditioning and energy-management strategies based on medical assessment."
      }
    ],
    "faqs": [
      {
        "q": "Who is suitable for pulmonary rehabilitation?",
        "a": "Eligibility depends on respiratory diagnosis, medical stability and assessment."
      },
      {
        "q": "Does pulmonary rehabilitation replace inhalers or medicines?",
        "a": "No. Continue prescribed treatment and discuss changes with the treating clinician."
      },
      {
        "q": "Is exercise supervised?",
        "a": "The brief proposes supervised training and appropriate monitoring. The precise clinical monitoring arrangements require confirmation."
      }
    ]
  }
];
