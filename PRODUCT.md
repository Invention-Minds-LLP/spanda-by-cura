# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Angular, with GSAP for scroll-driven background parallax and Three.js for motion graphics (user's explicit choice). Deploy target: undecided.

## Users

A mix of three audiences, weighted roughly equally:

- **Families**: relatives looking for care for a parent, spouse, or child after a stroke, injury, surgery, addiction, or developmental diagnosis. They compare centers, need reassurance, and want to call quickly.
- **Patients**: adults looking for therapy for their own condition and arranging a consultation.
- **Referring doctors and hospitals**: physicians deciding where to send patients for rehabilitation after discharge. They need to see specialties, clinical leadership, and inpatient capability.

## Product Purpose

The website for Spanda, a new rehabilitation center in India. It has to make one point clear: Spanda treats the whole person across every kind of rehabilitation, not only physiotherapy. It should then turn interest into a phone call or WhatsApp enquiry. Success means qualified enquiries from families, patients, and referrers.

## Positioning

Spanda brings every rehabilitation discipline under one roof, and specialist doctors lead the programs. One clinical team plans across physical, neurological, speech, occupational, pediatric, addiction, mental-health, and holistic therapies for the same patient. It runs residential (inpatient) programs as well as outpatient sessions. A physiotherapy clinic or a single-focus de-addiction center cannot truthfully make this claim.

## Operating Context

- Most enquiries come by **phone and WhatsApp**, so these are the main contact routes. An online form is secondary.
- Visitors often arrive in a stressful moment (a recent diagnosis, a hospital discharge, an addiction crisis) and are often on mobile.
- Referring doctors check a center's credibility before recommending it.

## Capabilities and Constraints

**Authority:** `SPANDA_Content_and_Developer_Handoff.pdf` (V2.0, 19 Nov 2026) and the approved desktop and mobile concepts supersede the earlier scope in this file.

- Location: Whitefield, Bengaluru, Karnataka.
- Three specialities only: orthopaedic, neurological and pulmonary rehabilitation (29 listed conditions, 5 rehabilitation stages).
- Do not add geriatric, inpatient, cardiac, speech, occupational, robotic, paediatric, de-addiction, mental-health, Ayurveda or other services without written clinical approval.
- Primary action: "Request an assessment".
- Contact details (phone, WhatsApp, email, street address) are unverified and must not be published until confirmed; live in `src/app/site.config.ts`.
- Follow NMC ethical advertising guidance: no cure guarantees, testimonials, outcome stories, superiority claims or inducements.
- Photographs from the prototype are illustrative and must be labelled as such until replaced with approved photography.

## Brand Commitments

- Full name: **Spanda By Cura**. Descriptor: **Centre For Rehabilitation & Recovery**. "Spanda" is the primary word; "By Cura" is the endorsement line.
- Logo: `brand/spanda-logo.png` (stacked). The handoff also uses a provisional horizontal header lockup (`public/brand/symbol.png` + `wordmark.png`), which still needs brand approval.
- Original stacked logo file: (3600×3600 PNG on white). The mark is a figure running forward out of flowing ribbons, with "SPANDA" in wide-tracked capitals over "By Cura", set between hairline rules, and the descriptor below. The logo is binding. Do not redraw it, recolour it, or separate the mark from the wordmark unless the user approves.
- The logo's colours are brand commitments: deep slate-navy (figure, roughly #233A4A), steel blue (wordmark, roughly #3D5A6E), sage green (ribbon, roughly #91A38B), ochre/terracotta (ribbon, roughly #C18C5A), and warm taupe (the "By Cura" line and descriptor, roughly #968270). The navy figure also fades into sage.
- No voice guide exists yet.

## Evidence on Hand

None. Spanda is a new center. There are no facility photos, team profiles, patient testimonials, outcome statistics, accreditations (such as NABH), hospital tie-ups, or awards. Future work must not invent any of these. Use clearly marked placeholders until real material arrives. Never fabricate names, qualifications, recovery stories, success rates, years of experience, or patient counts.

## Product Principles

1. **Whole-person, not single-discipline.** Every page should show that Spanda covers all of rehabilitation and that one team coordinates the care.
2. **Clinical credibility over claims.** Lead with how care is structured and who leads it. As a new center, Spanda has no track record to borrow, so the site shows how the care works and makes no proof claims.
3. **A call is always one tap away.** Phone and WhatsApp are always within reach, especially on mobile.
4. **Calm for people in crisis.** Visitors may be frightened or overwhelmed. Write in clear, warm, plain language and never use fear-based selling.
5. **Speak to three readers.** Families, patients, and doctors should each find their own path without the site splitting into three separate sites.

## Accessibility & Inclusion

The audience includes older adults and people with neurological, speech, motor, or cognitive impairments. Aim for WCAG 2.2 AA at minimum. Use generous text sizes and tap targets. Respect `prefers-reduced-motion`: the GSAP parallax and Three.js motion must have a calm fallback that does not block content. Keep pages fast on mid-range Android phones and Indian mobile networks.
