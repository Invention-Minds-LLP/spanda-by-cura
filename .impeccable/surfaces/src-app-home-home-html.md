---
version: 1
slug: "src-app-home-home-html"
primary_target: "src/app/home/home.html"
related_targets: []
---

# Homepage

Mode: Persuade. Audience: families, patients, referring doctors (equal). Action: call or WhatsApp (placeholders in src/app/site.config.ts). Proof: none exists yet, so the page shows how care is structured. Imagery: motion graphics only (Three.js ribbons + GSAP), no photos. Constraints: WCAG 2.2 AA, reduced-motion fallback, light enough for mid-range Android.

History: The Stepwell world (seed:186657be6f012fe0) was built, then rejected by the user ("design and concept is not good": the stepwell idea is wrong, it doesn't feel like healthcare, the colours and type are off). The user pinned this replacement direction: premium calm wellness. The stepwell is an anti-reference.

## Direction contract

THESIS: The logo's ribbons are the four kinds of care. Scrolling braids four separate strands into one, so "one team, one plan" is shown rather than claimed. Refuses both the stone-and-metaphor theatre that was rejected and the clinic default of a stock-photo split hero over icon cards.

OWN-WORLD: The ground is airy mist (#EEF2EE) with paper (#F7F8F5), deep navy ink (#1F3444), sage fields (#DCE4D8 / #91A38B / #5E7563), and ochre (#C18C5A) as the warm accent. Silky 3D ribbons in the logo's colours (navy fading to sage, ochre, sage, taupe-gold) flow from lower-left upward to the right, as the logo does. One family, Albert Sans: light 300 for large display with tight tracking, 500 for emphasis. Soft rounded pill controls, hairline rules, generous air, no cards.

STORY: In the hero the visitor sees "Every kind of recovery. One team around you." and calls or WhatsApps. Pinned "one plan" sequence: four labelled strands braid into one. Care areas, a five-step plan drawn as a single ribbon line, residential versus outpatient care, doctors, and contact follow. A call control stays within reach.

FIRST VIEWPORT: Full-bleed mist. Three.js ribbons sweep through the lower two-thirds, rising to the right. The header holds the stacked logo, nav and Call. Top-left: the H1 in light 300 at about 96px, with its second line in sage-deep. Below it are one supporting line and Call (navy pill) and WhatsApp (sage pill). Along the bottom, the four care areas are links, each marked with its ribbon colour.

FORM: User-pinned direction (premium calm wellness, logo ribbons and figure movement). No roll: seed: none (pinned by user). Signature interaction: the pinned braid. Four strands with labels at their left ends converge and wrap into one braid as you scroll, and the right-end label reads "One plan, by one team". Motion grammar: slow continuous flow, pointer parallax, exponential ease-out, nothing hidden by default.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
