---
version: "1.0-example"
name: "Sparkle Auto Fresh Blue Operating System"
description: "Arabic-first Fresh Blue Neo-Brutalist marketing system combining real product proof, premium soft stylized 3D, and Egyptian editorial operating diagrams."
colors:
  sparkle-blue: "#01A2FF"
  deep-navy: "#03132E"
  structure-blue: "#0C264B"
  quiet-blue: "#91B1D8"
  canvas: "#FFFFFF"
  danger: "#B42318"
typography:
  arabic-display:
    fontFamily: "Cairo"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0em"
  arabic-body:
    fontFamily: "Cairo"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "0em"
  latin-display:
    fontFamily: "Nunito"
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  latin-body:
    fontFamily: "Nunito"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "0em"
spacing:
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4.5rem"
  9: "6rem"
  10: "9rem"
rounded:
  small: "0.375rem"
  medium: "0.75rem"
  large: "1.25rem"
components:
  primary-action:
    background: "{colors.sparkle-blue}"
    foreground: "{colors.deep-navy}"
    border: "{colors.deep-navy}"
    radius: "{rounded.medium}"
  structural-module:
    background: "{colors.canvas}"
    foreground: "{colors.deep-navy}"
    border: "{colors.deep-navy}"
    radius: "{rounded.medium}"
---

# Sparkle Auto Design System — Mini Example

## Overview

### Design concept

A bright Egyptian operating studio where bold editorial messages, diagram-like structures, a consistent 3D Owner, and real Sparkle Auto screens turn daily car-wash chaos into visible control.

### Experience character

- Desired response: “They understand my daily operation, and the system looks real and manageable.”
- Visual ambition: expressive but controlled.
- Density: open in marketing narrative; functional in product proof.
- Dominant mode: light.
- Primary surface: bilingual marketing landing page.

### Conceptual references

- Car-wash operating boards and shift sheets.
- Egyptian editorial headline energy.
- Clean white industrial surfaces.
- Blueprint and process-diagram logic.
- Chunky premium stylized 3D props.
- Real mobile and desktop product evidence.

Do not interpret “Neo-Brutalist” as a dark page full of black, harsh noise, or arbitrary boxes.

## Colors

| Token | Role | Allowed uses | Avoid |
|---|---|---|---|
| Sparkle Blue `#01A2FF` | Action and brand energy | CTAs, key paths, selected states, controlled fields | Filling every section |
| Deep Navy `#03132E` | Essential text and strongest structure | Headings, outlines, readable text on blue | Large oppressive backgrounds by default |
| Structure Blue `#0C264B` | Secondary authority | Subheads, diagrams, secondary structures | Competing with Deep Navy everywhere |
| Quiet Blue `#91B1D8` | Low-priority support | Secondary lines, soft fills, diagrams | Essential low-contrast text |
| White `#FFFFFF` | Dominant canvas | Main background, breathing room, product frames | Treating whitespace as “unfinished” |
| Danger | True warnings only | Destructive/error states | Decoration |

- White occupies roughly 50–65% of the marketing experience.
- Sparkle Blue should guide attention, not become visual wallpaper.
- Use Deep Navy text on large Sparkle Blue surfaces when white text does not meet the required contrast.
- No unapproved gradients.

## Typography

### Families

| Script/role | Family | Fallbacks | Reason |
|---|---|---|---|
| Arabic display/body | Cairo | system Arabic sans | Clear, bold Arabic hierarchy across marketing and product contexts |
| Latin display/body | Nunito | system sans | Friendly geometric companion with readable product behavior |
| Numerals/data | Nunito or tabular system numerals | system sans | Stable prices, totals, dates, and operational data |

### Behavior

- Headlines are oversized, short, and integrated with the composition.
- Arabic never receives Latin-style tracking.
- Line breaks are approved independently for Arabic and English.
- Use one decisive display treatment per section; avoid multiple competing slogans.
- Product captions stay legible at the rendered screenshot size.
- Numbers, prices, phone numbers, and IDs may retain LTR ordering inside Arabic layouts.

## Layout

- Desktop: 12-column grid with controlled breakouts for product devices and 3D artwork.
- Mobile: content re-authored into one focal proof and one primary action at a time.
- Maximum narrative text width remains narrow enough for fast scanning.
- Section rhythm alternates between open editorial moments, structured proof, and process sequences.
- Asymmetry must be anchored by a grid edge, baseline, device, or deliberate visual mass.
- Heavy scroll storytelling is reserved for Strategy, Real Product Explorer, and Setup when content justifies it.

## Elevation & Depth

- Deep Navy outlines create structure.
- Hard or compact shadows are allowed as Neo-Brutalist depth cues; do not use the same shadow on every object.
- Product devices and 3D subjects may have softer physical shadows to remain believable.
- No glassmorphism as a default layer model.

## Shapes

- Structural rectangles and diagram modules dominate.
- Radius is controlled and moderate, not universally large.
- Pills are reserved for statuses, compact filters, or true tags.
- Decorative arrows, spark trails, foam, and blueprint annotations must support reading order or causality.

## Components

- Behavior primitives may come from accessible libraries, but their default skin is not the Sparkle identity.
- Primary buttons use Sparkle Blue, Deep Navy text, clear focus, and a defined pressed/loading state.
- Product modules prioritize real screenshots and explanatory captions over ornamental feature cards.
- Price plans may share a system but must communicate real package differences, not three cosmetically identical boxes.
- Forms prioritize touch, Arabic labels, validation clarity, phone number direction, and one obvious submission action.

## Imagery & Iconography

- Real product screenshots are mandatory for product proof.
- 3D supports metaphors, human acting, props, and environments—not fake UI.
- Maintain Owner identity and wardrobe across all generated assets.
- Icons are simple, sturdy, and subordinate to labels.
- Avoid generic floating SaaS cards, stock photography, fake charts, and overly glossy cars.

## Motion

- Motion explains cause and effect: scattered work becomes ordered, a booking advances, a branch comes into view, or a process step locks into place.
- Frequent controls respond quickly.
- Pinned scenes require stacked mobile and reduced-motion alternatives.
- Repeated fade-up animation on every element is forbidden.

## Responsive & Bidirectional Design

- Arabic RTL is primary; English LTR is a full directional variant.
- Device/character artwork can require mirrored or separately composed assets, but embedded UI text, logos, and culturally fixed objects are never globally mirrored.
- Arrows, process directions, and annotation placement follow the intended reading or physical direction.
- Desktop product proof may use laptop + phone; mobile usually prioritizes one device or a controlled layered crop.
- Test Arabic expansion, English expansion, prices, phone numbers, dates, and mixed product names.

## Do's and Don'ts

### Do

- Use one message, one focal contract, and one proof role per section.
- Let white space and product truth carry confidence.
- Make the visual metaphor specific to car-wash operations.
- Use editorial energy to explain, not to obscure.

### Don't

- Do not create a generic blue SaaS page.
- Do not repeat identical rounded feature cards across the entire page.
- Do not use tiny dashboards as decorative wallpaper.
- Do not mechanically mirror the complete composition for Arabic.
- Do not animate every visible object.
- Do not let the Owner character, palette, or real UI drift between sections.
