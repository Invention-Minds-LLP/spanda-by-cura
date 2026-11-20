---
name: Spanda By Cura
description: A sunlit stepwell for a whole-person rehabilitation centre; galleries of sandstone ringing one dark pool of water.
colors:
  shaft: "#1e3240"
  shaft-deep: "#142330"
  night: "#0d171e"
  ochre: "#c18c5a"
  ochre-deep: "#8a5a2f"
  sand: "#e7c9a0"
  sand-lit: "#f0dcbd"
  sandstone-bed: "#cfa572"
  stone-shadow: "#6e4626"
  sage: "#91a38b"
  water-deep: "#12261f"
  lime: "#f4eee6"
  ink-soft: "#3d5a6e"
  shaft-line: "rgb(244 238 230 / 0.16)"
  course-line: "rgb(30 50 64 / 0.22)"
typography:
  display:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "clamp(38px, 6.6vw, 104px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.025em"
  display-hero:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "clamp(30px, calc(var(--water) * 0.084), 66px)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.018em"
    fontVariation: "'wdth' 90"
  headline:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "clamp(36px, 5.2vw, 78px)"
    fontWeight: 720
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 104"
  numeral:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "clamp(40px, 7.4vw, 116px)"
    fontWeight: 300
    lineHeight: 1
    letterSpacing: "-0.01em"
    fontFeature: "'tnum'"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "clamp(24px, 2.2vw, 34px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 102"
  body:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "clamp(17px, 0.35vw + 15.5px, 19px)"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "'lnum'"
  lead:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "1.08rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 650
    letterSpacing: "0.1em"
  button:
    fontFamily: "'Anek Latin Variable', 'Anek Latin', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "0.01em"
    fontVariation: "'wdth' 106"
  devanagari:
    fontFamily: "'Anek Devanagari Variable', 'Anek Latin Variable', system-ui, sans-serif"
    fontSize: "clamp(22px, 2.4vw, 34px)"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(20px, 4vw, 64px)"
  section: "clamp(80px, 10vw, 150px)"
  head-gap: "clamp(24px, 5vw, 96px)"
  course: "clamp(32px, 3.6vw, 52px)"
  actions: "12px"
components:
  step-btn-ink:
    backgroundColor: "{colors.shaft}"
    textColor: "{colors.lime}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.35em 0.8em"
    height: "52px"
  step-btn-ink-hover:
    backgroundColor: "#28455a"
  step-btn-lime:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.shaft}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.35em 0.8em"
    height: "52px"
  step-btn-lime-hover:
    backgroundColor: "#fffaf2"
  step-btn-ochre:
    backgroundColor: "{colors.ochre}"
    textColor: "{colors.shaft-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.35em 0.8em"
    height: "52px"
  step-btn-ochre-hover:
    backgroundColor: "#cf9b69"
  step-btn-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.shaft}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.35em 0.8em"
    height: "52px"
  plaque:
    backgroundColor: "{colors.sand-lit}"
    textColor: "{colors.shaft}"
    rounded: "{rounded.none}"
    padding: "10px 16px 10px 12px"
    width: "max 300px"
  plaque-hover:
    backgroundColor: "#fff7ea"
  carved-glyph:
    textColor: "{colors.shaft}"
    rounded: "{rounded.none}"
    size: "56px"
  course:
    backgroundColor: "{colors.sand-lit}"
    textColor: "{colors.shaft}"
    padding: "clamp(32px, 3.6vw, 52px) clamp(20px, 4vw, 64px)"
  stair-step:
    backgroundColor: "{colors.stone-shadow}"
    textColor: "{colors.lime}"
    padding: "28px clamp(16px, 2vw, 32px) 40px"
  rim:
    backgroundColor: "{colors.lime}"
    textColor: "{colors.shaft}"
    padding: "12px clamp(20px, 4vw, 64px)"
  dock:
    backgroundColor: "{colors.lime}"
    padding: "8px"
  reveal-plaque:
    backgroundColor: "{colors.lime}"
    padding: "clamp(18px, 2.4vw, 30px) clamp(26px, 3.4vw, 44px)"
---

# Design System: Spanda By Cura

## Overview

**Creative North Star: "The Stepwell"**

Spanda is drawn as a square stepwell seen from above: galleries of sunlit sandstone step down on every side to one still, dark pool. The pool is the patient; the galleries are the disciplines that ring them; recovery is the climb back up. Every surface is built from that one structure. Sections are horizontal courses of stone, controls are stone steps that sink when pressed, labels are carved tablets resting on ledges, and facts are ruled with hairline course lines like mortar joints.

Density is calm and generous: large type, long section padding, wide gutters, and one idea per band. The dark ground is the shadow of the well shaft; warmth arrives only where sunlight hits stone. One family, Anek Latin, carries everything, and hierarchy comes from width, weight and scale rather than from a second face. Motion is the camera moving through the well: the homepage ascends out of it, the opening page descends into it at dawn.

The world refuses the clinic default (a headline-and-photo split over a row of rounded icon cards). There are no photographs; the only imagery is the Three.js well and authored SVG glyphs.

**Key Characteristics:**
- Slate-navy shaft ground, sandstone courses, dark green water, limestone text on dark.
- One variable family (Anek Latin), hierarchy through width axis, weight and scale.
- Square corners and chamfers only; no border-radius anywhere on containers or controls.
- Stone-step buttons with a visible riser that collapses on press.
- Hairline course lines grid every list of facts.
- Slow exponential ease-out; reduced motion gets a still, layered well.

## Colors

A warm sandstone-and-water palette lifted directly from the logo's ochre, sage and navy, set against the cool shadow of a well shaft.

### Primary
- **Well Shaft** (shaft): the ground of the site and the ink of all body text on light stone. Dark bands (the plan staircase section, the well itself) and the ink step button use it. The same value serves as `--ink`.
- **Deep Shaft** (shaft-deep): the closing contact band and the text colour on ochre buttons.
- **Night Well** (night): the near-black ground of the opening page before light arrives.

### Secondary
- **Sunlit Ochre** (ochre): the logo's ochre, used as the primary action colour for WhatsApp and Call on dark grounds, the focus ring (3px outline, 3px offset), selection highlight and nav underline.
- **Burnt Ochre** (ochre-deep): the riser under ochre buttons, diamond bullets in therapy lists, middle-dot separators, plaque glyphs and the scrollbar thumb.
- **Warm Sand** (sand): the rim and plinth borders (6px and 8px), the big phone number, term labels on dark, and Devanagari text.
- **Lit Sand** (sand-lit): the brightest sandstone; care plaques, the care section header, the first course and the top stair step. Words lit by the sun on the opening page.
- **Sandstone Bed** (sandstone-bed): the darker bed the care courses step down onto.
- **Stone Shadow** (stone-shadow): the lowest, darkest stair step and the base mixed (30%) into every course's 8px bottom edge.

### Tertiary
- **Still Sage** (sage): the logo's sage. Carries the whole Residential Stay band; never text.
- **Deep Water** (water-deep): the pool in the WebGL scene and its CSS fallback. Words that sit in the water are limestone on this.

### Neutral
- **Limestone** (lime): text on every dark ground, the rim (header), the plinth (footer), the dock, the lime button and the opening reveal plaque. It is the only surface the full-colour logo sits on.
- **Steel Ink** (ink-soft): the logo's wordmark blue, for secondary metadata (rim phone number, referrer term labels, legal line).
- **Shaft Line** (shaft-line): hairline rules on dark grounds.
- **Course Line** (course-line): hairline rules on light stone, used as `--course: 1px solid`.

### Named Rules
**The Sunlight Rule.** Warmth means light reaching stone. Sandstone tones step from dark (stone-shadow) to lit (sand-lit) in the direction of the climb; never scatter them as decoration.

**The Logo-On-Limestone Rule.** The stacked full-colour logo appears only on limestone (rim, plinth, reveal plaque). It is never recoloured, never reversed onto slate, and never separated from its wordmark.

**The Water Holds the Words Rule.** The most important sentence sits on the dark water in limestone, at AA contrast, with a soft text shadow (0 1px 18px) for legibility over the scene.

## Typography

**Display Font:** Anek Latin Variable (with Anek Latin, system-ui, sans-serif)
**Body Font:** Anek Latin Variable (same family)
**Script Font:** Anek Devanagari Variable, only for स्पन्द

**Character:** A single humanist sans with a wide width axis. Condensed and heavy for the hero, expanded and light for numerals, and slightly expanded and semibold for controls. One voice that changes register by stretching rather than switching faces.

### Hierarchy
- **Display** (700 to 760, clamp(38px, 6.6vw, 104px), line-height 1, -0.025em): opening page beats. The four lit words go further (clamp(56px, 11vw, 176px), 760, width 112%, line-height 0.9, -0.03em).
- **Display Hero** (720, up to 66px, scaled to the water's width, width 90%, line-height 1.02): the homepage H1 in the pool. Narrow screens use clamp(34px, 8.6vw, 52px).
- **Headline** (720, clamp(36px, 5.2vw, 78px), width 104%, line-height 1, -0.02em, balanced): every section H2.
- **Numeral** (300, clamp(40px, 7.4vw, 116px), width 112%, tabular): the closing phone number and the stair step numerals (clamp(44px, 4.4vw, 72px)).
- **Title** (700, clamp(24px, 2.2vw, 34px), width 102%, line-height 1.08): course names (max 14ch), settings and stair headings.
- **Body** (400, clamp(17px to 19px), line-height 1.55, lining numerals): running text, 42 to 58ch measures. Lead paragraphs beside headlines run at 1.08rem.
- **Label** (650, 0.8rem, 0.1em, uppercase): definition-list terms (Planned with, Setting, City, Hours) and list headings inside a settings column. Never placed above a headline.
- **Button** (600, 1rem, width 106%, 0.01em): every step button.

### Named Rules
**The One Family Rule.** Anek Latin carries all text. Hierarchy comes from the width axis (90% to 112%), weight (300 to 760) and scale. Never add a second display face.

**The Light Numeral Rule.** Numbers that are meant to be read or dialled are set light (300) and wide (112%), the opposite of the heavy condensed headings.

## Layout

The page is a vertical stack of full-bleed horizontal bands, each a course of the well, with content inset by a fluid gutter (clamp(20px, 4vw, 64px)). Section bands pad clamp(80px, 10vw, 150px) top and bottom; the close pads more. Section heads use a two-column grid (about 1.1fr headline to 1fr lead, gap clamp(24px, 5vw, 96px), bottom-aligned) that stacks below 1000px.

Stepping is literal. Care courses indent from the left by their index (up to 64px per step, 10px on narrow screens) and show an 8px darker bottom edge, so the list reads as terraces. The plan staircase is a five-column grid whose steps grow 64px taller each, climbing from stone-shadow into lit sand; on narrow screens it becomes a vertical stack indented in reverse.

Facts sit in hairline registers: rows ruled by course lines, a 2px ink top rule on the referrer grid, and 1px column dividers in the settings.

The well hero fills the viewport below the rim and pins during its ascent only at 1000px wide and 620px tall or more. Below that, the WebGL view is a fixed window (min(54svh, 112vw)) with plaques in its four corners, and the hero copy moves onto a slate band beneath it, left-aligned with full-width buttons. A quick-contact dock appears after the hero and becomes a full-width bottom bar on narrow screens.

## Elevation & Depth

Depth is carried by the 3D scene and by tone, not by stacked shadows. Surfaces are flat colour bands; light versus dark sandstone and the step riser imply height. Shadows exist in three narrow roles: inset bevels that carve stone, a single ambient drop shadow on the floating dock, and soft text shadows that keep words legible over the WebGL scene.

### Shadow Vocabulary
- **Carved bevel** (`box-shadow: inset 0 0 0 1px rgb(30 50 64 / 0.28), inset 0 -3px 0 rgb(138 90 47 / 0.35)`): care plaques; the carved glyph tile uses a 1.5px ink line with a 4px base.
- **Light shaft** (`box-shadow: inset 0 2px 0 rgb(255 248 235 / 0.28)`): step button hover, as if light catches the step's lip. Stair steps carry a constant 6px version.
- **Floating dock** (`box-shadow: 0 10px 30px rgb(10 20 28 / 0.35), inset 0 0 0 1px rgb(30 50 64 / 0.2)`): the only drop shadow in the system.
- **Scene legibility** (`text-shadow: 0 1px 18px rgb(8 18 16 / 0.55)` to `0 2px 30px rgb(5 10 14 / 0.75)`): text over the well only.

### Named Rules
**The Lit-Edge Rule.** Height is shown by a lit top edge or a dark riser below, never by a blurred shadow beneath a card. The dock is the one element that truly floats.

## Shapes

Everything is square (border-radius 0). Where an object needs to read as a cut stone tablet, its corners are chamfered with a clip-path octagon: 8px on plaques and carved glyph tiles, 14px on the opening reveal plaque. Bands end in thick horizontal edges (6px rim border, 8px course bottoms, 8px plinth top). Bullets are 7px squares rotated 45 degrees in burnt ochre. The water ripple is drawn as concentric squares, not circles, because the well is square.

**The Chamfer, Not Curve Rule.** Corners are either square or chamfered. Rounded rectangles do not exist in this world (icons may round their stroke joins).

## Components

### Buttons
Stone steps: solid, square and heavy, and they sink under the finger.
- **Shape:** square (0px), minimum height 52px, with a 4px bottom riser in a darker tone of the face.
- **Ink:** shaft face, limestone text, near-black riser (#0d1820). The default on light grounds. Inside the well's water it is recoloured to ochre so it reads against the dark pool.
- **Ochre:** ochre face, deep shaft text, burnt-ochre riser. The WhatsApp/notify action on dark grounds and in the dock.
- **Lime:** limestone face, ink text, #c4b194 riser. The secondary action on dark grounds.
- **Ghost:** transparent with a 1.5px inset ink outline. Only as the second action on limestone.
- **Hover / Focus:** face lightens one step and the 2px light-shaft inset appears (200ms). Focus is the global 3px ochre outline at 3px offset.
- **Active:** translates down 3px while the riser collapses to 1px (160ms), so the step is pressed into the ground.
- Every button leads with an authored SVG glyph (phone or chat) at 1.25em.

### Care Plaques
Stone tablets resting on the well's ledges, one per care area, positioned by the 3D scene and clamped to stay whole on screen.
- Lit-sand face, 8px chamfer, carved bevel, burnt-ochre 30px glyph, 0.95rem name at 650 weight and width 104%, and a 0.8rem sub-line.
- Hover/focus lifts 2px and brightens to #fff7ea; pointer or focus also turns the camera toward that wall.
- They are focusable links to the matching course. On narrow screens they shrink into the four corners and drop the sub-line.

### Care Courses
Each care area is a full-width band of sandstone: three columns of name with carved glyph tile, summary and therapy list, and team and setting tags.
- Tones step darker per course (sand-lit to #dcb987), each with an 8px bottom edge mixed 30% toward #6e4626, and each indented by its index.
- Therapy lists use diamond bullets over a course-line rule. Tags are definition-list pairs, each ruled above.
- Courses slide in 5% from the left (expo.out, 1.1s) when they enter.

### Staircase
Five numbered steps of the plan, rising from stone shadow into lit sand. Light numerals, title, and body at up to 30ch. Steps rise into place on scroll with increasing offset (60px plus 50px per step, scrubbed).

### Navigation
- **Rim:** a limestone header holding the full logo (76 to 108px tall), centred nav links at 550 weight, and an ink Call button with the number beneath. A 6px sand border separates it from the well. Links grow a 2px ochre underline from the left on hover (300ms). On narrow screens the nav moves to a second, horizontally scrollable row that fades out at the right edge.
- **Plinth:** a limestone footer with an 8px sand top edge, the logo again, links and a legal line in steel ink.
- **Dock:** a limestone tray with Call (ink) and WhatsApp (ochre) that slides up (520ms) once the hero has passed; inert and hidden while off screen.

### Glyphs
One authored stroke family: 24px grid, 1.75 stroke, round caps and joins, currentColor. Four care-area marks (body, speech, mind, holistic) and utility marks (phone, chat, arrows). Inside a carved tile they sit in a 56px chamfered square.

### Opening Reveal
On the launch page, the name is withheld until the light reaches the water. Then a limestone tablet (14px chamfer, 6px ochre base) holds the stacked logo above the headline, pitch and two step buttons, rising in sequence (expo.out, 1.4s, 0.12s stagger).

### Motion Grammar
One easing everywhere in CSS (cubic-bezier(0.16, 1, 0.3, 1)); GSAP entrances use expo.out. Scroll-linked scene motion is scrubbed (0.6 to 1). Content rises 28px into place. The pulse period is 4.2s. Under prefers-reduced-motion the scene renders still, ripples freeze at rest, transitions are removed and all words show lit.

## Do's and Don'ts

### Do:
- **Do** build new sections as full-bleed horizontal bands of a single tone, inset by the gutter (clamp(20px, 4vw, 64px)).
- **Do** use stone-step buttons (52px minimum, 4px riser, 3px press) for every call to action, with a phone or chat glyph.
- **Do** keep Call and WhatsApp reachable: ink and ochre pair in the dock, lime and ochre pair on dark grounds.
- **Do** rule lists of facts with 1px course lines and set their terms as uppercase labels (0.8rem, 650, 0.1em).
- **Do** order sandstone tones from dark to lit in the direction of the climb.
- **Do** place the logo only on limestone, at full colour.
- **Do** provide a still, fully legible state for every scroll-driven motion.

### Don't:
- **Don't** use border-radius on containers, tablets or controls; use square edges or the 8px chamfer.
- **Don't** add a second display typeface; stretch Anek Latin instead.
- **Don't** use blurred drop shadows under cards; the dock is the only floating element.
- **Don't** use photography or stock imagery; imagery is the well scene and authored glyphs.
- **Don't** recolour, reverse or split the logo, or set it on slate.
- **Don't** use sage as a text or accent colour; it is a ground for the Stay band, carrying ink text.
- **Don't** number care areas; they are named by plaques and glyphs (the plan staircase is the one numbered sequence).
