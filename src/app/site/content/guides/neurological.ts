/** Condition guides: neurological rehabilitation (10 guides). Facts sourced from NHS and Cleveland Clinic patient pages, rewritten in original words. Needs SPANDA clinical sign-off before launch. */
import type { ConditionGuide } from './types';

export const NEUROLOGICAL_GUIDES: ConditionGuide[] = [
  /* ------------------------------------------------------------------ 1. Stroke */
  {
    "spec": "neurological",
    "slug": "stroke",
    "condition": "Stroke rehabilitation",
    "h1": "Stroke rehabilitation in Bengaluru",
    "accent": "Stroke rehabilitation",
    "seoTitle": "Stroke Rehabilitation in Whitefield, Bengaluru | SPANDA",
    "seoDescription": "Stroke rehabilitation for families: how a stroke affects movement, what recovery may look like, BE-FAST warning signs and how physiotherapy may help.",
    "lead": "Stroke rehabilitation helps a person relearn movement and everyday tasks after the brain has been injured by a stroke. For a family, the days after a stroke can feel frightening and uncertain. This guide explains how a stroke can affect the body, what the recovery period often looks like and how rehabilitation at SPANDA in Whitefield, Bengaluru works alongside the medical care your neurologist and hospital team provide.",
    "updated": "26 November 2026",
    "sections": [
      {
        "id": "what-is-a-stroke",
        "heading": "What is a stroke?",
        "paragraphs": [
          "A stroke happens when part of the brain does not receive enough blood. Without the oxygen that blood carries, brain cells in that area begin to die within a short time, which is why a stroke is always a medical emergency. Doctors sometimes call it a cerebrovascular accident or a brain attack.",
          "There are two main types. In an ischaemic stroke, a clot blocks a blood vessel that supplies the brain. In a haemorrhagic stroke, a blood vessel in or around the brain bursts and bleeds. The hospital team treats the stroke itself; rehabilitation begins once the person is medically stable and the treating doctors agree it is safe."
        ]
      },
      {
        "id": "how-stroke-affects-movement",
        "heading": "How does a stroke affect movement and daily life?",
        "paragraphs": [
          "The effects depend on which part of the brain was injured and how large the area was. Many people notice weakness or heaviness on one side of the body, sometimes including the face. Others find their hand or leg does not do what they ask of it, their movements feel clumsy, or they feel unsteady and dizzy when standing or walking.",
          "These changes show up in ordinary moments: turning over in bed, standing up from a chair, walking to the bathroom, dressing, eating with one hand or climbing the few steps at the entrance of a building. A stroke can also bring tiredness, low mood and anxiety, and sometimes problems with speech, swallowing, vision or memory. Those needs are important too, and your doctor may refer you to the right specialists for them."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "Why does rehabilitation help after a stroke?",
        "paragraphs": [
          "The brain has some ability to reorganise itself after injury, a property called neuroplasticity. Healthy areas can gradually take on some of the work that the damaged area used to do. This process seems to respond to practice: repeating meaningful movements, again and again, in a way that is challenging but safe.",
          "That is why stroke rehabilitation focuses on task-specific practice, which means working on the actual movements you need, such as reaching for a cup, shifting weight from one leg to the other or taking steady steps. The work can be tiring and progress is often gradual, but regular, structured practice gives the brain and body a good opportunity to adapt. How much movement returns varies widely from person to person."
        ]
      }
    ],
    "timelineHeading": "What does stroke recovery usually look like?",
    "timelineIntro": "There is no fixed timetable after a stroke, and progress varies widely. Some people improve a great deal within days or weeks; others need many months, and some effects may last longer. The stages below are a general outline only; your medical team’s advice always comes first.",
    "timeline": [
      {
        "when": "Early weeks",
        "title": "Becoming medically stable and moving safely",
        "body": "In hospital, the focus is on treating the stroke and preventing complications. Once the doctors agree, the team helps the person sit up, change position and begin standing with support. After discharge, the early weeks at home are about safe transfers, short walks with help if needed, and finding a routine that balances practice with rest."
      },
      {
        "when": "First months",
        "title": "Building strength, balance and everyday skills",
        "body": "Many people make noticeable gains during the first few months. Rehabilitation sessions work on strength, control of the weaker side, balance, walking and the tasks of daily life. A review of progress around six months after the stroke is commonly recommended, to check goals and plan what comes next."
      },
      {
        "when": "Longer term",
        "title": "Continuing to adapt",
        "body": "Improvement can continue beyond the first year for some people, often more slowly. The focus may shift towards keeping the strength and skills you have gained, staying active safely, adapting the home and returning to valued activities, with guidance from your doctor and therapist."
      }
    ],
    "programme": [
      {
        "title": "Neurological assessment",
        "body": "A careful look at strength, muscle tone, sensation, balance, walking, how you manage daily tasks, your medical precautions and what matters most to you."
      },
      {
        "title": "Neurophysiotherapy",
        "body": "Hands-on guidance and exercise to improve control of the weaker arm and leg, encourage useful movement patterns and manage stiffness."
      },
      {
        "title": "Balance and coordination training",
        "body": "Graded practice in sitting and standing balance, weight shifting and controlled movement, to help reduce the risk of falls."
      },
      {
        "title": "Gait retraining",
        "body": "Working on a safer, steadier walking pattern, including the correct use of a walking stick or walker where one is recommended."
      },
      {
        "title": "Daily-living practice",
        "body": "Task-specific practice of real activities such as getting in and out of bed, standing up from a chair, toileting transfers, reaching and managing steps."
      },
      {
        "title": "Caregiver training",
        "body": "Showing family members how to help safely with transfers and walking, and how to support the home exercise plan between sessions."
      }
    ],
    "checklistHeading": "Making home safer after a stroke",
    "checklistIntro": "Small changes at home can make the first months safer for everyone. Discuss your home layout at your assessment, and consider:",
    "checklist": [
      "Clear walkways of loose mats, trailing wires and clutter",
      "Grab bars or a secure handrail beside the toilet and in the bathing area",
      "A shower chair or stool, and a non-slip mat in the bathroom",
      "A firm chair with arms that is easy to stand up from",
      "Good lighting, including a night light on the way to the bathroom",
      "Frequently used items kept within easy reach on the stronger side",
      "A phone or bell within reach so help can be called quickly"
    ],
    "warningIntro": "A second stroke is a real risk, and every minute matters. Use BE-FAST to recognise the signs. If you notice any of these, call 112 immediately, even if the symptoms seem to settle:",
    "warnings": [
      "Balance: sudden loss of balance, dizziness or falling",
      "Eyes: sudden blurring or loss of vision in one or both eyes",
      "Face: drooping on one side of the face, or a lopsided smile",
      "Arms: weakness or numbness, so that one arm drifts down when both are raised",
      "Speech: slurred speech, confusion or difficulty finding words",
      "Time: call 112 immediately and note the time the symptoms began. Do not wait to see if they pass, and do not drive yourself to hospital",
      "Also seek emergency care for a sudden, severe headache, or new confusion or drowsiness"
    ],
    "closingHeading": "Supporting someone after a stroke",
    "closing": [
      "Families and carers are a central part of stroke recovery. Your encouragement during practice, your help with the home exercises and your patience on difficult days all make a difference. It is also normal for carers to feel tired, frustrated or alone at times. Please look after your own health and accept help when it is offered.",
      "Rehabilitation complements, and does not replace, the medical care that helps prevent another stroke. Keep taking prescribed medicines, attend your follow-up appointments, and speak to your doctor about blood pressure, diabetes, smoking and other risk factors."
    ],
    "faqs": [
      {
        "q": "When should stroke rehabilitation start?",
        "a": "Rehabilitation usually begins in hospital once the person is medically stable, and continues after discharge. Outpatient sessions start when your treating doctor confirms it is safe. Please bring your discharge summary so the plan can follow the hospital’s advice."
      },
      {
        "q": "How long does recovery take after a stroke?",
        "a": "It varies widely. Many people make the most visible gains in the first few months, but some effects can last a year or longer, and some people continue to improve slowly after that. Your progress is reviewed regularly so the plan stays realistic."
      },
      {
        "q": "Will physiotherapy help my arm and leg recover after a stroke?",
        "a": "Physiotherapy may help you regain strength, control and function, and can teach you safer ways to move. How much movement returns depends on the size and location of the stroke, your general health and other factors, so no one can promise a particular result."
      },
      {
        "q": "Is it too late for rehabilitation months after a stroke?",
        "a": "Not necessarily. Some people continue to make gains with focused practice long after the stroke, although progress tends to be slower. An assessment can help you understand what goals may be realistic now."
      },
      {
        "q": "Can family members attend stroke rehabilitation sessions?",
        "a": "Yes, family involvement is encouraged. Learning how to help with transfers, walking and home exercises can make daily life safer and support practice between sessions."
      },
      {
        "q": "Does SPANDA provide speech or swallowing therapy after a stroke?",
        "a": "SPANDA’s neurological rehabilitation focuses on movement, balance, walking and daily physical activities. If speech, swallowing, thinking or memory have been affected, your doctor can refer you to the appropriate specialist, and we are happy to coordinate with them."
      }
    ],
    "references": [
      {
        "org": "NHS",
        "title": "Recovering from a stroke",
        "date": "reviewed 12 September 2024",
        "url": "https://www.nhs.uk/conditions/stroke/recovery/"
      },
      {
        "org": "NHS",
        "title": "Symptoms of a stroke",
        "date": "reviewed 12 September 2024",
        "url": "https://www.nhs.uk/conditions/stroke/symptoms/"
      },
      {
        "org": "Cleveland Clinic",
        "title": "Stroke: what it is, causes, symptoms and treatment",
        "date": "updated 27 January 2025",
        "url": "https://my.clevelandclinic.org/health/diseases/5601-stroke"
      }
    ],
    "related": [
      "gait-abnormalities",
      "balance-coordination-disorders",
      "neurological-weakness",
      "mobility-after-hospitalisation"
    ],
    "photo": "therapist"
  },

  /* ------------------------------------------------------------------ 2. Traumatic brain injury */
  {
    "spec": "neurological",
    "slug": "traumatic-brain-injury",
    "condition": "Traumatic brain injury rehabilitation",
    "h1": "Rehabilitation after a traumatic brain injury",
    "accent": "traumatic brain injury",
    "seoTitle": "Brain Injury Rehabilitation in Whitefield | SPANDA",
    "seoDescription": "Brain injury rehabilitation: how a head injury can affect movement and balance, what recovery may involve, red flags and how physiotherapy may help.",
    "lead": "Traumatic brain injury rehabilitation supports people whose movement, balance or stamina has changed after a blow or jolt to the head. Recovery after a brain injury is very individual, and families often have many questions. This guide explains what a traumatic brain injury is, how it can affect physical function and how rehabilitation at SPANDA in Whitefield, Bengaluru may fit alongside your medical team’s care.",
    "updated": "26 November 2026",
    "sections": [
      {
        "id": "what-is-tbi",
        "heading": "What is a traumatic brain injury?",
        "paragraphs": [
          "A traumatic brain injury, often shortened to TBI, happens when a force from outside the body damages the brain and changes how it works. It may follow a road accident, a fall, a sports injury or an assault. In some injuries an object passes through the skull; in many others the head is struck or shaken so that the brain moves inside the skull.",
          "Doctors usually describe brain injuries as mild, moderate or severe. A mild injury is often called a concussion, and most brain injuries fall into this group, although even a mild injury can cause symptoms that linger. Moderate and severe injuries, which may involve a longer loss of consciousness, need emergency hospital care, and some people need surgery."
        ]
      },
      {
        "id": "how-tbi-affects-movement",
        "heading": "How can a brain injury affect movement and daily life?",
        "paragraphs": [
          "Physical effects can include weakness in an arm or leg, poor balance, clumsy or poorly coordinated movement, dizziness, headaches and a heavy tiredness that makes it hard to keep going through the day. Some people also notice changes in vision, hearing or sensation.",
          "A brain injury can also affect thinking, memory, concentration, communication, mood and behaviour. These changes are often harder for families to see and understand than physical ones. Specialised cognitive, communication or psychological needs may require referral to other professionals, and the rehabilitation plan is adjusted to take them into account."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "Why does rehabilitation help after a brain injury?",
        "paragraphs": [
          "After injury, the brain can adapt and form new connections, particularly when it is given regular, meaningful practice. Physical rehabilitation uses this ability by repeating movements and tasks in a structured way, gradually increasing the challenge as balance, strength and confidence build.",
          "Rehabilitation also helps people manage fatigue, pace their activity and return safely to daily routines. Because a second knock to the head before the brain has healed can be dangerous, the plan always follows your doctor’s guidance on which activities are safe and when. Recovery varies a great deal: some people improve within weeks, while others continue to change gradually over a much longer period."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Strength, balance, coordination, walking, fatigue, how you manage daily tasks, and the precautions set by your neurosurgeon or neurologist."
      },
      {
        "title": "Neurophysiotherapy",
        "body": "Exercises and guided movement to improve control of weaker limbs and support more efficient, comfortable movement."
      },
      {
        "title": "Balance and coordination training",
        "body": "Graded balance work, from steady sitting and standing to more dynamic tasks, to help you move more safely."
      },
      {
        "title": "Gait retraining",
        "body": "Practising a steadier walking pattern indoors and, when ready, on slopes, steps and uneven surfaces."
      },
      {
        "title": "Activity pacing",
        "body": "Building tolerance gradually, with rest breaks planned into sessions and a home routine that respects fatigue."
      },
      {
        "title": "Family guidance",
        "body": "Helping family members understand safe ways to assist, how to encourage practice at home and when to seek medical advice."
      }
    ],
    "warningIntro": "Some symptoms after a head injury can signal bleeding, swelling or another serious problem. Call 112 or go to the nearest emergency department immediately if you notice:",
    "warnings": [
      "A headache that will not go away or keeps getting worse",
      "Repeated vomiting",
      "Increasing drowsiness, difficulty waking or loss of consciousness",
      "A seizure (fit)",
      "New confusion, slurred speech or difficulty understanding",
      "New weakness or numbness, or new problems with walking or balance",
      "Clear fluid or blood coming from the nose or ears",
      "Sudden changes in behaviour, such as unusual irritability"
    ],
    "closingHeading": "Living with the effects of a brain injury",
    "closing": [
      "Recovery after a brain injury rarely follows a straight line. Good days and harder days are common, and fatigue can make progress feel uneven. Keeping a simple routine, resting before you are exhausted and celebrating small steps forward can help the whole family.",
      "Caring for someone after a brain injury can be demanding, particularly when personality or mood has changed. Please speak to your doctor if you are struggling; support for carers is just as important as support for the person who was injured."
    ],
    "faqs": [
      {
        "q": "How long does recovery from a traumatic brain injury take?",
        "a": "There is no single answer. Symptoms of a mild injury often settle within a few weeks, but some people have effects that last longer. After moderate or severe injuries, change can continue gradually over months and sometimes years. Progress varies widely."
      },
      {
        "q": "When can physiotherapy start after a head injury?",
        "a": "Outpatient rehabilitation starts once your treating doctor confirms you are medically stable and it is safe to begin. The plan follows any precautions they give, including limits on activity or exertion."
      },
      {
        "q": "Can rehabilitation help with balance and dizziness after a brain injury?",
        "a": "Balance and coordination training may help you feel steadier and move more safely. Dizziness can have several causes, so your doctor’s assessment of the cause is important and guides which exercises are suitable."
      },
      {
        "q": "Does SPANDA offer cognitive or speech therapy for brain injury?",
        "a": "No. SPANDA’s neurological rehabilitation focuses on movement, balance, walking and daily physical tasks. If memory, thinking, communication or swallowing have been affected, your doctor can refer you to the right specialist, and we can work alongside them."
      },
      {
        "q": "Why does my family member get so tired after a brain injury?",
        "a": "Fatigue is very common after a brain injury, because the brain has to work harder to do tasks that were once automatic. Pacing activity, planning rest and building up gradually are part of the rehabilitation plan."
      },
      {
        "q": "Is it safe to exercise after a concussion?",
        "a": "Light activity is often introduced gradually, but the timing depends on your symptoms and your doctor’s advice. Avoid contact sport and any activity with a risk of another head injury until a doctor has cleared you."
      }
    ],
    "references": [
      {
        "org": "Cleveland Clinic",
        "title": "Traumatic brain injury (TBI): what it is, symptoms and treatment",
        "date": "updated 17 December 2025",
        "url": "https://my.clevelandclinic.org/health/diseases/8874-traumatic-brain-injury"
      },
      {
        "org": "NHS",
        "title": "Head injury and concussion",
        "date": "reviewed 29 May 2025",
        "url": "https://www.nhs.uk/conditions/severe-head-injury/"
      }
    ],
    "related": [
      "after-neurosurgery",
      "balance-coordination-disorders",
      "post-icu-recovery",
      "stroke"
    ],
    "photo": "assessment"
  },

  /* ------------------------------------------------------------------ 3. Spinal cord injury */
  {
    "spec": "neurological",
    "slug": "spinal-cord-injury",
    "condition": "Spinal cord injury rehabilitation",
    "h1": "Spinal cord injury rehabilitation",
    "accent": "Spinal cord injury",
    "seoTitle": "Spinal Cord Injury Rehabilitation in Bengaluru | SPANDA",
    "seoDescription": "Spinal cord injury rehabilitation: effects on movement and sensation, what rehabilitation may involve, skin care, safety advice and urgent warning signs.",
    "lead": "Spinal cord injury rehabilitation helps people make the most of the movement and function available to them after damage to the spinal cord. An injury of this kind changes daily life for the whole family, and the road ahead can feel overwhelming. This guide explains how spinal cord injuries affect the body and how rehabilitation at SPANDA in Whitefield, Bengaluru may support mobility and independence alongside your specialist medical team.",
    "updated": "26 November 2026",
    "sections": [
      {
        "id": "what-is-sci",
        "heading": "What is a spinal cord injury?",
        "paragraphs": [
          "The spinal cord is a bundle of nerves that runs down the spine and carries messages between the brain and the rest of the body. When it is damaged, by an accident, a fall, a sports injury or a medical condition, those messages can be partly or completely interrupted below the level of the injury. Unlike many nerves elsewhere in the body, the spinal cord has very limited ability to repair itself.",
          "Doctors describe injuries as incomplete, where some signals still get through and some movement or feeling may remain below the injury, or complete, where signals below the injury are blocked. An injury in the neck can affect the arms, trunk and legs (tetraplegia), while an injury lower down mainly affects the trunk and legs (paraplegia). The level and completeness of the injury shape what rehabilitation can aim for."
        ]
      },
      {
        "id": "how-sci-affects-daily-life",
        "heading": "How does a spinal cord injury affect the body and daily life?",
        "paragraphs": [
          "Depending on the injury, a person may experience weakness or paralysis, muscle stiffness and spasms (spasticity), numbness, tingling or nerve pain, and reduced awareness of touch, temperature and the position of the limbs. Sitting balance, rolling in bed, moving from bed to wheelchair and standing may all become difficult.",
          "A spinal cord injury can also affect bladder and bowel control, breathing, blood pressure, heart rate and body temperature. Because sensation may be reduced, the skin is at risk of pressure injuries (bedsores) from sitting or lying in one position. Emotional wellbeing matters too; low mood is common, and support from your doctor and counsellor is an important part of care."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "How can rehabilitation help after a spinal cord injury?",
        "paragraphs": [
          "Rehabilitation focuses on the abilities that are available and builds on them. For some people with an incomplete injury, regular, task-specific practice may help improve strength and control in partly affected muscles. For others, the emphasis is on strengthening the muscles that work well, preventing stiffness and learning efficient, safe ways to move and manage daily tasks.",
          "Rehabilitation also helps reduce the risk of complications: regular movement and position changes support circulation and skin health, and exercise helps maintain fitness. Every plan depends on the injury level, medical stability and the precautions set by your spine surgeon or rehabilitation physician, and progress varies widely."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Strength, sensation, muscle tone, sitting and standing balance, transfers, skin risk and the precautions set by your treating team."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Strengthening of working muscles, stretching to help manage stiffness, and exercises to maintain joint movement."
      },
      {
        "title": "Neurophysiotherapy",
        "body": "Guided practice to encourage control in partly affected muscles, where the injury and your clinicians suggest this is appropriate."
      },
      {
        "title": "Balance and transfers",
        "body": "Sitting balance work and practice of bed-to-chair and chair-to-toilet transfers, using safe techniques."
      },
      {
        "title": "Gait and standing practice",
        "body": "Where appropriate for the injury, supported standing and walking practice with aids recommended by your team."
      },
      {
        "title": "Caregiver training",
        "body": "Safe handling, positioning and pressure-relief routines for family members who help with daily care."
      }
    ],
    "checklistHeading": "Everyday safety after a spinal cord injury",
    "checklistIntro": "Small daily habits help protect health and reduce complications. Your medical team will give advice specific to you; common points include:",
    "checklist": [
      "Change position regularly, as advised, to relieve pressure on the skin",
      "Check the skin daily, especially over the hips, lower back, heels and buttocks, for redness or marks",
      "Keep the skin clean and dry, and use the cushion or mattress recommended for you",
      "Test bath water carefully, as reduced sensation can hide burns",
      "Follow your bladder and bowel routine as taught by your medical team",
      "Keep walkways clear and transfer surfaces at a safe, steady height"
    ],
    "warningIntro": "Some problems after a spinal cord injury need urgent medical attention. Call 112 or seek emergency care immediately for:",
    "warnings": [
      "Any new injury to the neck or back, or a fall where a spinal injury is possible; do not move the person unless they are in immediate danger",
      "New or worsening weakness, numbness or loss of movement",
      "A sudden, severe, pounding headache, especially if you have been told you are at risk of autonomic dysreflexia; follow your emergency plan",
      "Difficulty breathing, or chest pain",
      "Pain, swelling or redness in a calf or thigh",
      "New loss of bladder or bowel control, or signs of a urinary infection with fever",
      "A skin wound or pressure sore that is getting larger, darker or smells unpleasant"
    ],
    "closingHeading": "Living well with a spinal cord injury",
    "closing": [
      "Life after a spinal cord injury involves learning new ways of doing things, and that takes time and support. Many people find that setting small, practical goals, such as a safer transfer or a longer period sitting up, helps them see progress.",
      "Families carry a great deal during this time. Ask your treating team about home adaptations, equipment and support services, and please speak to your doctor if you or your family member is feeling low."
    ],
    "faqs": [
      {
        "q": "Can someone walk again after a spinal cord injury?",
        "a": "It depends on the level and completeness of the injury, the early medical care and many individual factors. Some people with incomplete injuries regain some walking ability; others use a wheelchair for mobility. Your specialist team is the right source for an individual outlook."
      },
      {
        "q": "What is the difference between a complete and incomplete spinal cord injury?",
        "a": "In an incomplete injury, some messages still pass through the injured part of the cord, so some movement or feeling may remain below it. In a complete injury, those messages are blocked, which usually means loss of function below the injury."
      },
      {
        "q": "When can rehabilitation start after a spinal cord injury?",
        "a": "Early rehabilitation usually begins in hospital. Outpatient rehabilitation at SPANDA starts once your treating doctor confirms you are medically stable and gives any spinal precautions to follow."
      },
      {
        "q": "How can I prevent pressure sores?",
        "a": "Regular position changes, daily skin checks, a suitable cushion and mattress, good nutrition and keeping the skin clean and dry all help. Report any red mark that does not fade, or any broken skin, to your doctor promptly."
      },
      {
        "q": "Can family members learn to help with transfers?",
        "a": "Yes. Caregiver training covers safe ways to help with transfers, positioning and exercises, which protects both the person with the injury and the person helping."
      }
    ],
    "references": [
      {
        "org": "Cleveland Clinic",
        "title": "Spinal cord injury: causes, symptoms, treatment and types",
        "date": "updated 18 December 2023",
        "url": "https://my.clevelandclinic.org/health/diseases/12098-spinal-cord-injury"
      }
    ],
    "related": [
      "spine-surgery",
      "neurological-weakness",
      "gait-abnormalities",
      "post-icu-recovery"
    ],
    "photo": "clinical"
  },

  /* ------------------------------------------------------------------ 4. Parkinson’s disease */
  {
    "spec": "neurological",
    "slug": "parkinsons-disease",
    "condition": "Parkinson’s disease rehabilitation",
    "h1": "Parkinson’s disease rehabilitation",
    "accent": "Parkinson’s disease",
    "seoTitle": "Parkinson’s Physiotherapy in Whitefield, Bengaluru | SPANDA",
    "seoDescription": "Parkinson’s rehabilitation: how symptoms affect walking and balance, how physiotherapy and exercise may help, fall prevention and when to seek help.",
    "lead": "Parkinson’s disease rehabilitation helps people keep moving as well and as safely as possible while living with a condition that changes over time. Physiotherapy and regular exercise sit alongside the medicines your neurologist prescribes. This guide explains how Parkinson’s affects movement and how rehabilitation at SPANDA in Whitefield, Bengaluru may support walking, balance and everyday independence.",
    "updated": "26 November 2026",
    "facts": [
      {
        "value": "After 50",
        "label": "When most people first develop symptoms"
      },
      {
        "value": "3",
        "label": "Main symptoms: tremor, slowness and stiffness"
      },
      {
        "value": "Gradual",
        "label": "Symptoms usually change slowly over years"
      },
      {
        "value": "Near-normal",
        "label": "Life expectancy for most people with treatment"
      }
    ],
    "sections": [
      {
        "id": "what-is-parkinsons",
        "heading": "What is Parkinson’s disease?",
        "paragraphs": [
          "Parkinson’s disease is a condition in which nerve cells in a part of the brain called the substantia nigra are gradually lost. These cells produce dopamine, a chemical messenger that helps the brain control smooth, coordinated movement. As dopamine levels fall, movement becomes harder to start, control and sustain.",
          "Why the cells are lost is not fully understood; a combination of genetic and environmental factors is thought to be involved. Most people notice symptoms after the age of 50, though some develop them earlier. The condition usually progresses slowly over many years, and many people respond well to treatment."
        ]
      },
      {
        "id": "how-parkinsons-affects-movement",
        "heading": "How does Parkinson’s affect movement and daily life?",
        "paragraphs": [
          "The three main movement symptoms are tremor, usually starting in one hand or arm and most noticeable at rest; slowness of movement, known as bradykinesia; and stiff, tight muscles. Together these can lead to a slow, shuffling walk with short steps, difficulty turning in bed or rising from a chair, and smaller, less expressive facial movements.",
          "Balance problems can make falls more likely, and some people feel dizzy when they stand up. Everyday tasks such as buttoning a shirt, getting in and out of a car or walking through a busy market can take longer and need more concentration. Parkinson’s can also affect sleep, mood, memory, swallowing and speech, which your neurologist will help manage."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "Why do physiotherapy and exercise help in Parkinson’s?",
        "paragraphs": [
          "Physiotherapy aims to ease stiffness through movement, improve walking and flexibility, and build the fitness you need to manage daily tasks independently. Regular, purposeful exercise can help you keep strength, balance and confidence for longer, and practising movements deliberately can help the brain compensate for the loss of automatic control.",
          "Rehabilitation also teaches practical strategies, such as taking bigger, more deliberate steps, using rhythm or counting to keep walking going, and breaking complex movements like turning or standing up into simpler stages. These strategies work alongside, not instead of, your medicines, and your plan is reviewed as your needs change."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Walking, balance, posture, strength, flexibility, fall history and the timing of your medicines, since symptoms can vary through the day."
      },
      {
        "title": "Gait retraining",
        "body": "Practising longer, more deliberate steps, safer turning and strategies such as rhythm or counting to keep walking smooth."
      },
      {
        "title": "Balance training",
        "body": "Graded balance exercises in standing and walking, aimed at reducing the risk of falls."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Stretching, strengthening and larger, purposeful movements to ease stiffness and support posture and fitness."
      },
      {
        "title": "Functional movement practice",
        "body": "Breaking everyday tasks into steps: rising from a chair, turning in bed, getting in and out of a vehicle and managing stairs."
      },
      {
        "title": "Home programme and family guidance",
        "body": "A clear routine to practise at home, and advice for family members on helping without taking over."
      }
    ],
    "checklistHeading": "Reducing the risk of falls at home",
    "checklistIntro": "Falls are a common concern in Parkinson’s. These steps can make the home safer:",
    "checklist": [
      "Remove loose rugs, mats and clutter from walkways",
      "Fit grab bars in the bathroom and a handrail on stairs",
      "Leave clear space for turning, especially in narrow areas such as the bathroom",
      "Stand up slowly, pausing before walking, if you feel dizzy on rising",
      "Wear well-fitting footwear with a firm grip rather than loose slippers",
      "Plan more demanding activities for times when your medicines are working well"
    ],
    "warningIntro": "Parkinson’s usually changes gradually. Sudden changes may have another cause and need prompt medical attention. Contact your doctor or seek urgent care for:",
    "warnings": [
      "A sudden worsening of movement, stiffness or confusion over hours or days",
      "A fall with a head injury, severe pain or inability to get up",
      "Choking, or coughing repeatedly while eating or drinking",
      "Fainting or severe dizziness when standing",
      "High temperature (38°C or above) with confusion or worsening symptoms",
      "Any sudden face drooping, arm weakness or speech difficulty; call 112 immediately, as this may be a stroke"
    ],
    "closingHeading": "Living well with Parkinson’s",
    "closing": [
      "Staying active is one of the most useful things you can do. Walking, gentle exercise and the hobbies you enjoy all help, and a regular routine makes practice part of daily life rather than a chore.",
      "Family members often notice small changes first. Share what you see with the neurologist and therapist, and remember that support for carers matters too."
    ],
    "faqs": [
      {
        "q": "Can physiotherapy slow Parkinson’s disease?",
        "a": "Physiotherapy cannot change the underlying condition, but it may help you stay more mobile, flexible and steady, and manage daily tasks with more confidence. It works alongside the treatment your neurologist prescribes."
      },
      {
        "q": "What exercises are good for Parkinson’s?",
        "a": "A mix of walking, stretching, strengthening, balance work and larger, deliberate movements is commonly used. The right exercises depend on your symptoms, fitness and fall risk, which are reviewed at your assessment."
      },
      {
        "q": "How can I stop shuffling when I walk?",
        "a": "Strategies such as focusing on bigger steps, landing on the heel, using a steady rhythm or counting, and pausing before turning may help. Your therapist can practise these with you so they become easier to use."
      },
      {
        "q": "When is the right time to start rehabilitation for Parkinson’s?",
        "a": "Many people benefit from starting early, while symptoms are mild, to build good exercise habits. Rehabilitation can also help at later stages, with goals adjusted to your needs."
      },
      {
        "q": "Should sessions be timed with my Parkinson’s medicines?",
        "a": "Often, yes. Many people move more easily when their medicines are working well, so we may plan sessions for those times. Please bring your medicine schedule to your first appointment."
      },
      {
        "q": "Does SPANDA help with swallowing or speech problems in Parkinson’s?",
        "a": "SPANDA’s rehabilitation focuses on movement, balance and daily physical tasks. If swallowing or speech has changed, your neurologist can refer you to a speech and language specialist."
      }
    ],
    "references": [
      {
        "org": "NHS",
        "title": "Parkinson’s disease (overview)",
        "date": "reviewed 3 November 2022",
        "url": "https://www.nhs.uk/conditions/parkinsons-disease/"
      },
      {
        "org": "NHS",
        "title": "Symptoms: Parkinson’s disease",
        "date": "reviewed 3 November 2022",
        "url": "https://www.nhs.uk/conditions/parkinsons-disease/symptoms/"
      },
      {
        "org": "NHS",
        "title": "Treatment: Parkinson’s disease",
        "date": "reviewed 3 November 2022",
        "url": "https://www.nhs.uk/conditions/parkinsons-disease/treatment/"
      }
    ],
    "related": [
      "gait-abnormalities",
      "balance-coordination-disorders",
      "neurological-weakness"
    ],
    "photo": "balance"
  },

  /* ------------------------------------------------------------------ 5. Multiple sclerosis */
  {
    "spec": "neurological",
    "slug": "multiple-sclerosis",
    "condition": "Multiple sclerosis rehabilitation",
    "h1": "Multiple sclerosis rehabilitation",
    "accent": "Multiple sclerosis",
    "seoTitle": "Multiple Sclerosis Rehabilitation in Bengaluru | SPANDA",
    "seoDescription": "MS rehabilitation: how multiple sclerosis affects mobility, balance and fatigue, how exercise and physiotherapy may help, and symptoms needing review.",
    "lead": "Multiple sclerosis rehabilitation helps people with MS stay as mobile, steady and independent as possible as symptoms change over time. MS is different for everyone, so rehabilitation needs to be flexible too. This guide explains how MS can affect movement and energy, and how rehabilitation at SPANDA in Whitefield, Bengaluru may adapt exercise and daily-activity practice to your needs, alongside your neurologist’s treatment.",
    "updated": "26 November 2026",
    "facts": [
      {
        "value": "20–50",
        "label": "Age range in which MS is more often diagnosed"
      },
      {
        "value": "3",
        "label": "Main types: relapsing remitting and two progressive forms"
      },
      {
        "value": "Brain and spinal cord",
        "label": "The parts of the nervous system affected"
      },
      {
        "value": "Varies daily",
        "label": "Symptoms can change from one day to the next"
      }
    ],
    "sections": [
      {
        "id": "what-is-ms",
        "heading": "What is multiple sclerosis?",
        "paragraphs": [
          "Multiple sclerosis is a long-term condition in which the immune system mistakenly attacks myelin, the protective covering around nerve fibres in the brain and spinal cord. Damage to myelin disrupts the messages travelling along those nerves, which is why MS can affect so many different parts of the body.",
          "Many people first have relapsing remitting MS, with flare-ups (relapses) followed by periods of partial or full improvement. Over time this can change to secondary progressive MS, where symptoms slowly increase. A smaller number of people have primary progressive MS from the start. Medicines prescribed by a neurologist can reduce relapses and help manage the condition."
        ]
      },
      {
        "id": "how-ms-affects-daily-life",
        "heading": "How does MS affect movement and daily life?",
        "paragraphs": [
          "Common physical symptoms include weakness, numbness or tingling, muscle stiffness and spasms, poor balance and coordination, dizziness and a deep tiredness (fatigue) that is different from ordinary tiredness. Some people find that heat makes their symptoms temporarily worse, which is worth knowing in a warm climate like Bengaluru’s.",
          "These symptoms can make walking longer distances, climbing stairs or standing for long periods harder, and they can vary from one day to the next. MS can also affect vision, bladder control, memory and mood. Planning the day around energy levels, and having a flexible routine, often helps people stay active."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "Why does rehabilitation help in MS?",
        "paragraphs": [
          "Physiotherapy and exercise can help with movement problems, stiffness and muscle discomfort, and regular activity supports general health. An exercise plan that is adjusted to your symptoms, fatigue and tolerance may help you maintain strength and balance and keep doing the things that matter to you.",
          "Rehabilitation in MS is not about pushing through exhaustion. It involves pacing, choosing the right intensity, planning rest and adapting the programme during or after a relapse. Your plan is reviewed regularly, because MS changes, and the aim is to support function and participation rather than to change the course of the condition."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Strength, stiffness, balance, walking, fatigue, heat sensitivity and your current treatment and relapse history."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Strengthening, stretching and conditioning, adjusted to your energy levels and how you feel on the day."
      },
      {
        "title": "Balance and coordination training",
        "body": "Exercises to improve steadiness and control, with a focus on reducing the risk of falls."
      },
      {
        "title": "Gait retraining",
        "body": "Working on walking efficiency and safety, including advice on walking aids if they would help you go further."
      },
      {
        "title": "Fatigue and activity pacing",
        "body": "Planning activity and rest across the day and week so you can keep doing what matters most."
      },
      {
        "title": "Home programme",
        "body": "A simple routine you can adapt on good and difficult days, with clear guidance on when to ease off."
      }
    ],
    "checklistHeading": "Practical tips for exercising with MS",
    "checklistIntro": "A few simple habits can make activity more comfortable and sustainable:",
    "checklist": [
      "Exercise in a cool, well-ventilated space and avoid the hottest part of the day",
      "Keep water nearby and take regular breaks",
      "Plan important tasks for the time of day when you usually have more energy",
      "Stop and rest if symptoms such as blurred vision or weakness increase during exercise",
      "Keep walkways clear and use a walking aid if it has been recommended",
      "Tell your therapist about any recent relapse or change in medicines"
    ],
    "warningIntro": "Some symptoms need prompt medical review. Contact your neurologist for new or worsening MS symptoms lasting more than a day. Call 112 immediately for:",
    "warnings": [
      "Sudden weakness or numbness in the face, an arm or a leg, especially on one side",
      "Sudden loss or blurring of vision",
      "Sudden difficulty speaking or understanding",
      "Sudden severe loss of balance or coordination",
      "A severe headache unlike any you have had before",
      "Difficulty breathing or swallowing"
    ],
    "closingHeading": "Living well with MS",
    "closing": [
      "Many people with MS lead active, full lives with the right treatment and support. Regular activity, good sleep, balanced meals and not smoking all support general health.",
      "MS can be unpredictable, which can be stressful for families. Talking openly about how you feel, and asking your neurologist about support services, can help everyone cope."
    ],
    "faqs": [
      {
        "q": "Is exercise safe for people with multiple sclerosis?",
        "a": "For most people with MS, regular, well-planned exercise is encouraged. The type and intensity should suit your symptoms and fitness, which is why an assessment comes first."
      },
      {
        "q": "Why do my MS symptoms get worse in the heat?",
        "a": "Some people with MS find that heat temporarily worsens symptoms such as weakness or blurred vision. These usually ease once the body cools. Tell your doctor if you are very sensitive to heat or if symptoms do not settle."
      },
      {
        "q": "Can physiotherapy help with MS fatigue?",
        "a": "Rehabilitation can help you manage fatigue through pacing, planned rest and gradual conditioning. Fatigue has several possible causes, so your doctor may also want to review it."
      },
      {
        "q": "Should I continue rehabilitation during a relapse?",
        "a": "During a relapse, the plan is usually paused or adjusted. Contact your neurologist first, and tell your therapist so that exercise can be changed to suit how you feel."
      },
      {
        "q": "Will I need a walking aid with MS?",
        "a": "Not everyone does. If walking becomes tiring or unsteady, a stick or other aid may help you walk further and more safely. Your therapist can advise and help you practise using one."
      }
    ],
    "references": [
      {
        "org": "NHS",
        "title": "Multiple sclerosis",
        "date": "reviewed 16 August 2024",
        "url": "https://www.nhs.uk/conditions/multiple-sclerosis/"
      },
      {
        "org": "Cleveland Clinic",
        "title": "Multiple sclerosis (MS): what it is, symptoms and treatment",
        "date": "updated 25 January 2024",
        "url": "https://my.clevelandclinic.org/health/diseases/17248-multiple-sclerosis"
      }
    ],
    "related": [
      "balance-coordination-disorders",
      "gait-abnormalities",
      "neurological-weakness"
    ],
    "photo": "band"
  },

  /* ------------------------------------------------------------------ 6. Neuropathy */
  {
    "spec": "neurological",
    "slug": "neuropathy",
    "condition": "Neuropathy rehabilitation",
    "h1": "Neuropathy rehabilitation",
    "accent": "Neuropathy",
    "seoTitle": "Neuropathy Rehabilitation in Whitefield, Bengaluru | SPANDA",
    "seoDescription": "Peripheral neuropathy rehabilitation: how nerve damage affects sensation, strength and balance, foot care, fall prevention and how physiotherapy may help.",
    "lead": "Neuropathy rehabilitation supports people whose balance, strength or walking has been affected by damage to the nerves in the hands, feet and limbs. Diabetes is one of the most common reasons for this kind of nerve problem. This guide explains what peripheral neuropathy is and how rehabilitation at SPANDA in Whitefield, Bengaluru may help you move more safely, while your doctor looks after the underlying cause.",
    "updated": "26 November 2026",
    "sections": [
      {
        "id": "what-is-neuropathy",
        "heading": "What is peripheral neuropathy?",
        "paragraphs": [
          "Peripheral neuropathy means damage to the nerves outside the brain and spinal cord, most often in the feet, legs, hands and arms. These nerves carry feeling from the skin, send instructions to the muscles and help control automatic functions such as blood pressure and bladder control. The symptoms depend on which nerves are affected.",
          "Diabetes is one of the most common causes, because high blood sugar over many years can damage nerves. Other causes include nerve injuries, infections such as shingles, side effects of certain medicines and heavy alcohol use. Finding and treating the cause is a medical task and an important first step."
        ]
      },
      {
        "id": "how-neuropathy-affects-daily-life",
        "heading": "How does neuropathy affect balance and daily life?",
        "paragraphs": [
          "Common symptoms include numbness, tingling or pins and needles, burning or shooting pain, and weakness, particularly in the feet and ankles. When you cannot feel the ground well under your feet, the body loses some of the information it uses to stay balanced, so many people feel unsteady, especially in the dark or on uneven surfaces.",
          "Weak ankle muscles can make the toes catch while walking, and reduced feeling means that cuts, blisters or burns on the feet may go unnoticed. Everyday tasks such as walking to the shop, climbing stairs, buttoning clothes or holding small objects can become more difficult, and the fear of falling can lead people to do less, which in turn weakens muscles further."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "How can rehabilitation help with neuropathy?",
        "paragraphs": [
          "Rehabilitation cannot repair damaged nerves, but it may help the body make the most of the strength and sensation that remain. Balance training teaches the body to rely more on vision and the muscles and joints, and strengthening exercises for the ankles, legs and hips can improve support and control.",
          "Practising walking on different surfaces, turning, stepping and getting up from the floor safely can build confidence and reduce the risk of falls. Rehabilitation works alongside medical care, such as good blood sugar control in diabetes, and progress depends on the cause and severity of the neuropathy."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Sensation, strength, balance, walking pattern, footwear, fall history and any precautions from your doctor."
      },
      {
        "title": "Balance training",
        "body": "Graded standing and walking balance exercises, progressing safely as your steadiness improves."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Strengthening for the ankles, legs and hips, and hand exercises where grip has been affected."
      },
      {
        "title": "Gait retraining",
        "body": "Working on a safer walking pattern, foot clearance and the use of a walking aid if one is recommended."
      },
      {
        "title": "Functional practice",
        "body": "Practising stairs, turning, uneven surfaces and getting up safely if you have a fall."
      },
      {
        "title": "Safety education",
        "body": "Foot checks, footwear advice and home changes that may help reduce the risk of injury."
      }
    ],
    "checklistHeading": "Foot care and fall prevention with neuropathy",
    "checklistIntro": "Reduced feeling in the feet calls for some daily care. Your doctor or diabetes team may give you specific advice; general points include:",
    "checklist": [
      "Check your feet every day for cuts, blisters, redness or swelling, using a mirror if needed",
      "Wear well-fitting, closed footwear with a firm grip, indoors and outdoors where possible",
      "Avoid walking barefoot, including at home and on hot surfaces",
      "Test bath water with your elbow or a thermometer before stepping in",
      "Keep rooms and the path to the bathroom well lit at night",
      "Remove loose mats and clutter from walkways"
    ],
    "warningIntro": "Some changes need prompt medical attention. See your doctor promptly, or seek urgent care, if you notice:",
    "warnings": [
      "A cut, blister or ulcer on the foot that is not healing, or looks infected",
      "Redness, warmth or swelling in the foot with a high temperature (38°C or above)",
      "Weakness or numbness that is spreading quickly over hours or days",
      "Difficulty breathing or swallowing; call 112 immediately",
      "Sudden weakness on one side of the body or face; call 112 immediately",
      "New loss of bladder or bowel control"
    ],
    "faqs": [
      {
        "q": "Can physiotherapy help peripheral neuropathy?",
        "a": "Physiotherapy cannot repair damaged nerves, but it may help improve balance, strength and walking, and reduce the risk of falls. Medical treatment of the cause, such as diabetes management, remains essential."
      },
      {
        "q": "Why do I feel unsteady with neuropathy?",
        "a": "The nerves in the feet send information about the ground and the position of your feet to the brain. When these nerves are damaged, the brain gets less information, which can make balance harder, especially in poor light."
      },
      {
        "q": "What exercises help balance with diabetic neuropathy?",
        "a": "Balance exercises, ankle and leg strengthening and walking practice are commonly used. They should be chosen after an assessment, and started in a safe setting with support nearby."
      },
      {
        "q": "Is walking good for neuropathy?",
        "a": "Walking is generally encouraged for overall health, provided your feet are protected and checked daily. Your therapist can advise on safe distances, surfaces and footwear."
      },
      {
        "q": "Can neuropathy symptoms improve?",
        "a": "It depends on the cause. Some neuropathies improve when the cause is treated; others remain or change slowly. Your doctor is the right person to discuss the outlook for your situation."
      }
    ],
    "references": [
      {
        "org": "NHS",
        "title": "Peripheral neuropathy",
        "date": "reviewed 10 October 2022",
        "url": "https://www.nhs.uk/conditions/peripheral-neuropathy/"
      }
    ],
    "related": [
      "balance-coordination-disorders",
      "gait-abnormalities",
      "neurological-weakness"
    ],
    "photo": "assessment"
  },

  /* ------------------------------------------------------------------ 7. Balance and coordination disorders */
  {
    "spec": "neurological",
    "slug": "balance-coordination-disorders",
    "condition": "Balance and coordination disorders",
    "h1": "Rehabilitation for balance and coordination disorders",
    "accent": "balance and coordination",
    "seoTitle": "Balance and Coordination Rehab in Whitefield | SPANDA",
    "seoDescription": "Balance and coordination problems: common causes, effects on daily life, how balance training may help, fall prevention and red-flag symptoms.",
    "lead": "Rehabilitation for balance and coordination disorders helps people who feel unsteady, dizzy or clumsy to move with more safety and confidence. Balance problems are common, especially with age, but they are not something you simply have to accept. This guide explains why balance can be affected and how rehabilitation at SPANDA in Whitefield, Bengaluru may help, once your doctor has looked into the cause.",
    "updated": "26 November 2026",
    "sections": [
      {
        "id": "what-are-balance-disorders",
        "heading": "What causes balance and coordination problems?",
        "paragraphs": [
          "Staying balanced depends on several systems working together: the inner ear, the eyes, sensation from the skin, muscles and joints, and the brain, which combines all this information and coordinates the body’s response. A problem in any one of these can leave you feeling unsteady or dizzy.",
          "Causes include inner ear conditions, migraine, head injury, peripheral neuropathy, Parkinson’s disease, stroke, multiple sclerosis and conditions affecting the cerebellum, the part of the brain that coordinates movement. Difficulty with coordination itself is sometimes called ataxia. Because the causes are so varied, a medical assessment of the reason for the problem is an important first step."
        ]
      },
      {
        "id": "how-balance-affects-daily-life",
        "heading": "How do balance problems affect daily life?",
        "paragraphs": [
          "People describe feeling unsteady when standing or walking, light-headed, or as if the room is spinning. Others notice that their movements are clumsy or poorly judged: they may sway, stagger, reach past an object or find it hard to walk in a straight line. Symptoms may be constant or appear only in certain situations, such as standing up quickly or turning the head.",
          "This can make everyday activities feel risky, from walking on crowded pavements to bathing, cooking or stepping onto a bus. Many people begin to avoid activities for fear of falling, which can lead to weaker muscles and further loss of confidence. Breaking that cycle safely is a central aim of rehabilitation."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "How does balance training help?",
        "paragraphs": [
          "Balance is a skill that can respond to practice. Carefully graded exercises challenge the balance systems in a safe setting, encouraging the brain to adapt and make better use of the information it receives. Over time, tasks that felt unsteady may become more manageable.",
          "Coordination training uses repeated, controlled movements to improve accuracy and smoothness, while strengthening the legs and trunk gives the body a steadier base. Rehabilitation complements medical treatment of the underlying cause, and how much improvement is possible varies from person to person."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Standing and walking balance, coordination, strength, sensation, fall history and the situations in which you feel most unsteady."
      },
      {
        "title": "Balance training",
        "body": "Progressive exercises from supported standing to more dynamic tasks, always within a safe level of challenge."
      },
      {
        "title": "Coordination exercises",
        "body": "Repeated, controlled movements of the arms, legs and trunk to improve accuracy and smoothness."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Strengthening of the legs, hips and trunk to support a steadier posture."
      },
      {
        "title": "Gait and functional practice",
        "body": "Walking, turning, stepping and everyday tasks such as reaching and bending, practised safely."
      },
      {
        "title": "Fall prevention education",
        "body": "Practical home-safety advice and a home exercise plan, with guidance for family members."
      }
    ],
    "checklistHeading": "Preventing falls at home",
    "checklistIntro": "Simple changes can make a real difference to safety:",
    "checklist": [
      "Remove loose rugs, mats, trailing wires and clutter",
      "Keep rooms, stairs and the route to the bathroom well lit",
      "Fit grab bars in the bathroom and handrails on stairs",
      "Stand up slowly and pause before walking",
      "Wear supportive footwear with a firm grip",
      "Keep often-used items within easy reach to avoid stretching or climbing",
      "Have your eyesight checked regularly"
    ],
    "warningIntro": "Some balance problems are a sign of a medical emergency. Call 112 immediately if dizziness or unsteadiness comes on suddenly with:",
    "warnings": [
      "Face drooping, arm or leg weakness, or numbness on one side",
      "Slurred speech or difficulty understanding",
      "Sudden loss or blurring of vision, or double vision",
      "A sudden, severe headache",
      "Chest pain, palpitations or fainting",
      "Seek medical advice promptly for frequent unsteadiness, a recent fall, or symptoms that are getting worse"
    ],
    "faqs": [
      {
        "q": "What causes sudden loss of balance?",
        "a": "Causes include inner ear problems, a drop in blood pressure when standing, and nerve or brain conditions. Sudden loss of balance with weakness, vision or speech changes may be a stroke; call 112 immediately."
      },
      {
        "q": "Can balance be improved with exercise?",
        "a": "For many people, yes. Balance responds to regular, graded practice. The right exercises depend on the cause and your current ability, which is why an assessment comes first."
      },
      {
        "q": "What is ataxia?",
        "a": "Ataxia is a term for problems with coordination and balance, often due to a problem in the cerebellum. It can affect walking, fine hand movements, speech and eye movements. A neurologist assesses the cause."
      },
      {
        "q": "Does SPANDA treat vertigo?",
        "a": "SPANDA provides balance and coordination training as part of neurological rehabilitation. The cause of vertigo should first be assessed by a doctor, who can advise whether balance rehabilitation is suitable or whether specialist inner-ear treatment is needed."
      },
      {
        "q": "How long does balance training take to work?",
        "a": "It varies. Some people notice changes within a few weeks of regular practice; others need longer. Continuing the home programme is important to keep the gains you make."
      }
    ],
    "references": [
      {
        "org": "Cleveland Clinic",
        "title": "Balance problems: symptoms, causes and treatment",
        "date": "updated 27 May 2025",
        "url": "https://my.clevelandclinic.org/health/symptoms/21021-balance-problems"
      },
      {
        "org": "NHS",
        "title": "Ataxia",
        "date": "reviewed 16 April 2021",
        "url": "https://www.nhs.uk/conditions/ataxia/"
      }
    ],
    "related": [
      "gait-abnormalities",
      "neuropathy",
      "parkinsons-disease",
      "stroke"
    ],
    "photo": "balance"
  },

  /* ------------------------------------------------------------------ 8. Gait abnormalities */
  {
    "spec": "neurological",
    "slug": "gait-abnormalities",
    "condition": "Gait abnormalities",
    "h1": "Gait abnormalities and walking rehabilitation",
    "accent": "walking rehabilitation",
    "seoTitle": "Gait Training and Walking Rehab in Bengaluru | SPANDA",
    "seoDescription": "Gait abnormalities explained: common walking patterns, neurological causes, how gait retraining may help, fall prevention and when to see a doctor.",
    "lead": "Gait abnormalities are changes to the way a person walks, such as shuffling, dragging a foot or walking unsteadily. Walking problems can quietly limit independence and raise the risk of falls. This guide explains common walking patterns, their neurological causes and how gait retraining at SPANDA in Whitefield, Bengaluru may help, once the cause has been assessed by your doctor.",
    "updated": "26 November 2026",
    "facts": [
      {
        "value": "About 15%",
        "label": "Of people have a walking abnormality by age 60"
      },
      {
        "value": "Over 80%",
        "label": "Of people over 85 have one"
      },
      {
        "value": "Pain",
        "label": "The most common reason for a limp"
      },
      {
        "value": "Falls",
        "label": "Preventing them is a key goal of care"
      }
    ],
    "sections": [
      {
        "id": "what-are-gait-abnormalities",
        "heading": "What is a gait abnormality?",
        "paragraphs": [
          "Gait simply means the way you walk. A gait abnormality is a change from your usual walking pattern, and it can result from anything that affects the brain, spinal cord, nerves, muscles, joints or feet. Sometimes more than one cause is involved, particularly in older adults.",
          "Neurological causes include stroke, Parkinson’s disease, multiple sclerosis, cerebral palsy, conditions affecting the cerebellum and damage to the nerves of the legs. Non-neurological causes such as arthritis, joint pain, foot problems, poor vision or ill-fitting shoes can also change the way you walk, so a full assessment looks at the whole picture."
        ]
      },
      {
        "id": "types-of-gait",
        "heading": "What are the common types of abnormal gait?",
        "paragraphs": [
          "Different conditions tend to produce recognisable walking patterns. After a stroke, one leg may be stiff and swing outwards in an arc (a spastic or hemiplegic gait). Weakness of the muscles that lift the foot, often due to nerve damage, can cause a high-stepping walk with the toes catching the ground (a steppage gait). Parkinson’s disease often brings a stooped posture with short, quick or shuffling steps.",
          "Problems with coordination can cause irregular, wide, unsteady steps (an ataxic gait), while some muscle conditions and hip problems can cause a waddling, side-to-side movement. A limp because of pain is the most common pattern of all. Recognising the pattern helps your clinicians understand the cause and plan the right exercises."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "How does gait retraining help?",
        "paragraphs": [
          "Walking is a skill the brain and body relearn through practice. Gait retraining breaks walking down into its parts, such as weight shifting, stepping, foot clearance and turning, then practises them repeatedly and puts them back together. Strength, flexibility and balance work support the walking pattern itself.",
          "A walking stick, walker or other aid, when recommended, can improve safety and confidence, and learning to use it correctly matters. Rehabilitation complements medical treatment of the cause, and the aim is a safer, more efficient walk, with results that vary from person to person."
        ]
      }
    ],
    "programme": [
      {
        "title": "Walking assessment",
        "body": "Observing your walking pattern, speed, balance, strength, flexibility, footwear and the situations where walking is hardest."
      },
      {
        "title": "Gait retraining",
        "body": "Structured practice of weight shifting, stepping, foot clearance, turning and walking at different speeds."
      },
      {
        "title": "Balance training",
        "body": "Exercises that build steadiness for standing, walking and changing direction."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Strengthening and stretching for the hips, knees, ankles and trunk to support a better walking pattern."
      },
      {
        "title": "Walking aid guidance",
        "body": "Advice on whether a stick or walker may help, correct height adjustment and safe use on steps and kerbs."
      },
      {
        "title": "Real-world practice",
        "body": "Stairs, slopes, uneven ground and the walking you need at home, at work or in your neighbourhood."
      }
    ],
    "checklistHeading": "Walking more safely every day",
    "checklistIntro": "These habits can help reduce the risk of falls:",
    "checklist": [
      "Wear well-fitting shoes with a firm sole and good grip",
      "Use your walking aid as advised, even for short distances indoors",
      "Take your time on stairs, slopes and wet floors, and use handrails",
      "Keep walkways clear and well lit",
      "Have your eyes checked regularly",
      "Rest when you feel tired, as fatigue can make walking less steady"
    ],
    "warningIntro": "A sudden change in walking can signal a serious problem. Call 112 or seek emergency care immediately for:",
    "warnings": [
      "Sudden difficulty walking, with weakness or numbness on one side of the body",
      "Sudden face drooping, slurred speech or vision loss",
      "Sudden severe headache or dizziness with unsteadiness",
      "Weakness in both legs with new loss of bladder or bowel control, or numbness around the groin or buttocks",
      "Inability to walk or bear weight after a fall",
      "See your doctor promptly for walking changes that develop over days or weeks"
    ],
    "faqs": [
      {
        "q": "What causes an abnormal gait?",
        "a": "Causes include neurological conditions such as stroke, Parkinson’s disease, multiple sclerosis and nerve damage, as well as joint pain, arthritis, foot problems and vision difficulties. A doctor’s assessment helps identify the cause."
      },
      {
        "q": "Can walking be retrained in older adults?",
        "a": "Yes, age alone does not rule out gait retraining. The plan is shaped by your health, current abilities and goals, and focuses on safe, steady walking."
      },
      {
        "q": "What is foot drop?",
        "a": "Foot drop is difficulty lifting the front of the foot, so the toes catch or drag when walking. It can be caused by nerve damage or by conditions affecting the brain or spinal cord. A doctor should assess the cause."
      },
      {
        "q": "Should I use a walking stick or walker?",
        "a": "A walking aid can improve safety and confidence for some people. Your therapist can assess whether one would help, which type suits you and how to use it correctly."
      },
      {
        "q": "How long does gait training take?",
        "a": "It depends on the cause and your goals. Some people notice changes within a few weeks of regular practice; others need longer-term support. Progress is reviewed regularly."
      }
    ],
    "references": [
      {
        "org": "Cleveland Clinic",
        "title": "Abnormal gait: gait disorder types, causes and treatments",
        "date": "reviewed 22 February 2023",
        "url": "https://my.clevelandclinic.org/health/symptoms/21092-gait-disorders"
      }
    ],
    "related": [
      "balance-coordination-disorders",
      "parkinsons-disease",
      "stroke",
      "neuropathy"
    ],
    "photo": "crutches"
  },

  /* ------------------------------------------------------------------ 9. Neurological weakness */
  {
    "spec": "neurological",
    "slug": "neurological-weakness",
    "condition": "Neurological weakness",
    "h1": "Rehabilitation for neurological weakness",
    "accent": "neurological weakness",
    "seoTitle": "Neurological Weakness Rehabilitation, Bengaluru | SPANDA",
    "seoDescription": "Neurological weakness: how it differs from tiredness, common causes, how strengthening and functional training may help, and when it is an emergency.",
    "lead": "Rehabilitation for neurological weakness helps people rebuild strength and function when weakness comes from a problem in the brain, spinal cord or nerves. Weakness can make simple tasks, such as standing up or holding a cup, unexpectedly hard. This guide explains what neurological weakness is and how rehabilitation at SPANDA in Whitefield, Bengaluru may support movement and daily activities, alongside your doctor’s care.",
    "updated": "26 November 2026",
    "sections": [
      {
        "id": "what-is-neurological-weakness",
        "heading": "What is neurological weakness?",
        "paragraphs": [
          "Muscle weakness means that muscles cannot produce as much force as they normally would. It is different from feeling tired or worn out: with true weakness, a particular movement is harder however rested you are. When the problem lies in the nervous system, the muscles themselves may be healthy, but the signals that drive them are disrupted.",
          "Neurological causes include stroke and transient ischaemic attack, spinal cord injury, a trapped nerve in the neck or back, peripheral neuropathy, multiple sclerosis, Guillain-Barré syndrome and other nerve or muscle conditions. Weakness can also follow a long illness or stay in intensive care. Identifying the cause is a medical task, and treatment depends on it."
        ]
      },
      {
        "id": "how-weakness-affects-daily-life",
        "heading": "How does weakness affect movement and daily life?",
        "paragraphs": [
          "The pattern of weakness depends on the cause. It may affect one side of the body, one limb, both legs, or the hands and feet. People notice it in everyday ways: difficulty rising from a chair or the floor, tripping because a foot does not lift, dropping things, struggling with stairs, or tiring quickly when walking.",
          "Weakness often brings other changes with it, such as stiffness, reduced balance and loss of confidence. When a person moves less, unused muscles weaken further, which can make the original problem worse. Rehabilitation aims to interrupt that cycle safely."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "How can rehabilitation help with weakness?",
        "paragraphs": [
          "Graded, individually planned exercise can help strengthen muscles that are working, and repeated, task-specific practice may help the nervous system make better use of muscles that are partly affected. The focus is on the movements you need, such as standing up, stepping and gripping, rather than exercise for its own sake.",
          "Where some weakness is likely to remain, rehabilitation also teaches safer, more efficient ways to move and manage daily tasks. The pace and intensity are matched to your condition and how you respond, with rest built in between sessions. Progress varies with the cause and the individual."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Which muscles are affected and how much, along with tone, sensation, balance, walking, daily tasks and your medical diagnosis and precautions."
      },
      {
        "title": "Therapeutic exercises",
        "body": "Graded strengthening matched to your condition, with careful attention to fatigue and recovery between sessions."
      },
      {
        "title": "Neurophysiotherapy",
        "body": "Guided, repeated practice to help activate and control partly affected muscles."
      },
      {
        "title": "Functional movement practice",
        "body": "Sit-to-stand, transfers, reaching, gripping and the specific activities you find difficult at home or work."
      },
      {
        "title": "Gait and balance training",
        "body": "Safer walking and standing balance, including advice on walking aids if helpful."
      },
      {
        "title": "Home programme",
        "body": "A clear, realistic set of exercises to continue between sessions, with guidance for family members."
      }
    ],
    "warningIntro": "Some kinds of weakness are a medical emergency. Call 112 immediately if weakness:",
    "warnings": [
      "Comes on suddenly",
      "Affects one side of the body, or the face, arm or leg on one side",
      "Comes with slurred speech, confusion, vision loss or a severe headache",
      "Spreads quickly from one area to another, such as from the feet up the legs",
      "Comes with difficulty breathing or swallowing",
      "Comes with new loss of bladder or bowel control, or numbness around the groin",
      "See your doctor promptly if weakness lasts more than a few days or is affecting your daily routine"
    ],
    "faqs": [
      {
        "q": "What is the difference between weakness and fatigue?",
        "a": "Fatigue is a general feeling of tiredness or exhaustion. Weakness means a muscle cannot produce its usual strength, so a particular movement is harder even when you feel rested. Both are worth discussing with your doctor."
      },
      {
        "q": "Can physiotherapy improve neurological weakness?",
        "a": "It may help, depending on the cause. Graded exercise and task-specific practice can support strength and function, and you can learn safer ways to manage daily tasks. Outcomes vary from person to person."
      },
      {
        "q": "Is it safe to exercise weak muscles?",
        "a": "Usually, yes, when the exercise is chosen carefully and matched to your condition. Because the right level differs between conditions, an assessment and medical clearance come first."
      },
      {
        "q": "What causes sudden weakness in the legs?",
        "a": "Causes range from a stroke or spinal cord problem to conditions such as Guillain-Barré syndrome. Sudden weakness is an emergency; call 112 immediately rather than waiting to see if it improves."
      },
      {
        "q": "How long will it take to regain strength?",
        "a": "It depends on the cause, how long the weakness has been present and your general health. Some people notice changes within weeks; others need longer. Your progress is reviewed regularly."
      }
    ],
    "references": [
      {
        "org": "Cleveland Clinic",
        "title": "Muscle weakness: causes and treatment",
        "date": "updated 12 February 2025",
        "url": "https://my.clevelandclinic.org/health/symptoms/muscle-weakness"
      }
    ],
    "related": [
      "stroke",
      "spinal-cord-injury",
      "neuropathy",
      "post-icu-recovery"
    ],
    "photo": "band"
  },

  /* ------------------------------------------------------------------ 10. After neurosurgery */
  {
    "spec": "neurological",
    "slug": "after-neurosurgery",
    "condition": "Rehabilitation after neurosurgery",
    "h1": "Rehabilitation after neurosurgery",
    "accent": "neurosurgery",
    "seoTitle": "Rehabilitation After Brain Surgery in Whitefield | SPANDA",
    "seoDescription": "Rehabilitation after neurosurgery or craniotomy: what recovery may involve, how physiotherapy can support walking and balance, and warning signs.",
    "lead": "Rehabilitation after neurosurgery helps people regain strength, balance and confidence once they are home from brain surgery such as a craniotomy. Coming home after an operation on the brain can feel daunting for the whole family. This guide explains what recovery often involves and how rehabilitation at SPANDA in Whitefield, Bengaluru follows your neurosurgeon’s precautions to support mobility and daily activities.",
    "updated": "26 November 2026",
    "facts": [
      {
        "value": "3–5 hrs",
        "label": "Typical length of a craniotomy"
      },
      {
        "value": "Several days",
        "label": "Usual hospital stay, sometimes up to a week"
      },
      {
        "value": "Weeks to months",
        "label": "General recovery time, depending on the reason"
      },
      {
        "value": "Early",
        "label": "Getting up and walking once it is safe"
      }
    ],
    "sections": [
      {
        "id": "what-is-neurosurgery",
        "heading": "What does neurosurgery involve?",
        "paragraphs": [
          "Neurosurgery covers operations on the brain, spinal cord and nerves. A common brain operation is a craniotomy, in which the surgeon temporarily removes a section of the skull to reach the brain, treats the problem and then fixes the bone back in place. It may be done to remove a tumour, treat bleeding or an aneurysm, relieve pressure or swelling, treat an infection or manage some types of epilepsy.",
          "After surgery, people are monitored closely in hospital, sometimes in intensive care for a short time. The team manages pain, watches for complications and helps the person get up and walk as soon as it is safe. Recovery depends greatly on the reason for the operation, the part of the brain involved and the person’s health beforehand."
        ]
      },
      {
        "id": "how-surgery-affects-movement",
        "heading": "How can brain surgery affect movement and daily life?",
        "paragraphs": [
          "Headaches, soreness and tiredness are common in the weeks after surgery. Depending on where the operation was performed, some people also have weakness, difficulty walking, problems with balance or coordination, or changes in speech, mood or behaviour. Some of these effects are temporary and ease as swelling settles; others may last longer.",
          "Day to day, this can mean needing help to get out of bed, walk to the bathroom or manage stairs, and tiring quickly. Your neurosurgeon will advise on restrictions such as avoiding heavy lifting, strenuous activity and driving. Specialised speech, swallowing or cognitive needs may require referral to other professionals."
        ]
      },
      {
        "id": "why-rehabilitation-helps",
        "heading": "Why does rehabilitation help after neurosurgery?",
        "paragraphs": [
          "Early, safe movement helps reduce the risk of complications such as blood clots and chest infections, and rehabilitation builds on this once you are home. Where surgery has affected strength or balance, structured, task-specific practice can help the brain adapt and support the return of everyday skills.",
          "Rehabilitation also helps you build up activity gradually, so that you regain stamina without overdoing it. Every plan follows the precautions and timeline set by your neurosurgeon, begins only after medical clearance, and is adjusted as you recover. Progress varies with the reason for surgery and the individual."
        ]
      }
    ],
    "programme": [
      {
        "title": "Assessment",
        "body": "Strength, balance, coordination, walking, fatigue and daily tasks, reviewed against your neurosurgeon’s precautions and discharge advice."
      },
      {
        "title": "Neurophysiotherapy",
        "body": "Guided movement and exercise to improve control of any weaker limbs."
      },
      {
        "title": "Balance and coordination training",
        "body": "Graded exercises to help you feel steadier in standing, walking and turning."
      },
      {
        "title": "Gait retraining",
        "body": "Rebuilding a safe, steady walking pattern, with or without a walking aid as advised."
      },
      {
        "title": "Graded activity",
        "body": "Gradually increasing walking distance and general activity, within the limits your surgeon has set."
      },
      {
        "title": "Daily-living practice and caregiver guidance",
        "body": "Practising transfers, bathroom safety and stairs, and showing family members how to help safely."
      }
    ],
    "checklistHeading": "Preparing for the first weeks at home",
    "checklistIntro": "A little preparation can make the return home safer. Follow your discharge instructions first, and consider:",
    "checklist": [
      "Someone to stay with you and help during the first days at home",
      "A clear list of your medicines, wound-care instructions and follow-up dates",
      "Clear walkways and a well-lit path to the bathroom",
      "A shower chair and grab bars if balance is affected",
      "A firm chair with arms that is easy to stand up from",
      "Plans for transport, since you should not drive until your surgeon says it is safe"
    ],
    "warningIntro": "Contact your neurosurgical team or seek emergency care immediately if you notice any of the following after surgery. Call 112 for sudden or severe symptoms:",
    "warnings": [
      "A seizure (fit)",
      "A severe or worsening headache, or one that is not eased by your prescribed pain relief",
      "New or increasing weakness, numbness, confusion, drowsiness or difficulty speaking",
      "A high temperature (38°C or above)",
      "Redness, swelling, discharge or clear fluid leaking from the wound",
      "Repeated vomiting",
      "Pain or swelling in a calf, chest pain or sudden breathlessness"
    ],
    "closingHeading": "Recovering at your own pace",
    "closing": [
      "Recovery after brain surgery is rarely quick, and tiredness can last for some time. Short, regular periods of activity with rest in between often work better than trying to do too much at once.",
      "Family members play an important part in noticing changes, encouraging practice and keeping track of appointments. Please keep all follow-up visits with your neurosurgeon, and ask them before returning to work, driving or more demanding activity."
    ],
    "faqs": [
      {
        "q": "How long does recovery take after a craniotomy?",
        "a": "Recovery commonly takes several weeks to a few months, depending on the reason for surgery and your general health. Your neurosurgeon will give you guidance for your situation."
      },
      {
        "q": "When can I start physiotherapy after brain surgery?",
        "a": "Getting up and walking usually starts in hospital as soon as it is safe. Outpatient rehabilitation at SPANDA begins once your neurosurgeon confirms you are ready and shares any precautions."
      },
      {
        "q": "Is it normal to feel tired after brain surgery?",
        "a": "Yes, fatigue is common after neurosurgery and can last for weeks. Pacing activity and building up gradually are part of the rehabilitation plan. Tell your doctor if tiredness is severe or getting worse."
      },
      {
        "q": "Will my balance improve after brain surgery?",
        "a": "Balance problems sometimes ease as the brain recovers from surgery, and balance training may help. How much improvement occurs depends on the area of the brain involved and other factors."
      },
      {
        "q": "Can rehabilitation help after spine surgery too?",
        "a": "Yes. Rehabilitation after spine surgery follows similar principles, with precautions specific to the spine. Please see our guide to rehabilitation after spine surgery."
      },
      {
        "q": "What should I bring to my first appointment?",
        "a": "Please bring your discharge summary, the surgeon’s precautions and activity instructions, your current medicine list, recent scan reports and comfortable clothing."
      }
    ],
    "references": [
      {
        "org": "Cleveland Clinic",
        "title": "Craniotomy: what it is, procedure, types and recovery",
        "date": "updated 28 September 2026",
        "url": "https://my.clevelandclinic.org/health/treatments/24902-craniotomy"
      }
    ],
    "related": [
      "traumatic-brain-injury",
      "spine-surgery",
      "post-icu-recovery",
      "mobility-after-hospitalisation"
    ],
    "photo": "clinical"
  }
];
