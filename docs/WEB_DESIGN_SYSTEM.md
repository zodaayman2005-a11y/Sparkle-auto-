# Sparkle Auto — Web execution reference

## Latest user clarification — takes precedence

The user clarified that this design plan is NOT the foundation or a binding master system. It may be used selectively as inspiration, with creative freedom to present information beautifully in the spirit of the brand's social posts. The digest below preserves the earlier reference, but its mandatory language does not override this clarification. Section count/order, layout families, visual ratios, exact UI treatments, and proposed workflow are guidance rather than requirements. Choose the story and composition around the real content. Preserve the official logo and character identity, product accuracy, and usable execution.

Source: user-supplied **Landing Page Web Design System v1.0 — Web Execution Edition**, sections 0–117, designated Master Web Source of Truth. This file is an implementation digest, not a verbatim archive or a replacement for that source. The referenced original 3D Design System v3.0 has not been supplied in this repository.

## Governing direction

Premium stylized 3D × Egyptian editorial thinking × Fresh Blue Neo-Brutalism × real product proof. Build one coherent Sparkle world, not social posts stacked into sections or a generic SaaS template with a mascot.

- 3D tells a story and expresses pain or transformation; one main metaphor per artwork.
- Editorial composition supplies scale contrast, asymmetry, rhythm, and generous whitespace.
- Neo-brutalist components provide structure and clear, physical interaction.
- Real product screenshots provide evidence. Product truth cannot be sacrificed for visual style.
- Arabic RTL is primary; English LTR and mobile require recomposition, not automatic mirroring or shrinking.

## Locked identity

Use the supplied official logo and six Owner references. Preserve face, hair, facial hair as actually present in the references, clothing, proportions, and rendering style. Do not infer a new beard or alter identity from a generic written descriptor. No photorealistic reinterpretation, unrelated cartoon style, CSS character reconstruction, stock imagery, or presenter role.

Earlier pose-to-section suggestions in BRAND_ASSETS.md are exploratory only. A pose is not an approved section composition. Every character appearance needs a narrative function; no automatic Owner in FAQ, pricing, or every section.

## Visual values

| Role | Value |
| --- | --- |
| Sparkle Blue | `#01A2FF` |
| Dark Blue | `#0C264B` |
| Deep Navy / ink / outlines | `#03132E` |
| Soft Light Blue | `#91B1D8` |
| White / default surface | `#FFFFFF` |

Pale-blue surfaces must derive from this palette. No orange, yellow, coral, mint, purple, rainbow gradients, glassmorphism, or neon. Red is reserved for errors and critical warnings.

- Mostly white; pale blue for rhythm; deep navy used sparingly, particularly for a closing CTA.
- Borders: 2px navy default, 3px emphasis; 4px+ exceptional.
- Radius: 8/12/18/24px token baseline; buttons 10–14px, cards 16–20px, product frames 20–24px.
- Hard shadows are selective. Narrative guidance suggests 4/6px offsets; section 80 gives 3/5/7px tokens. Normalize centrally before component implementation; avoid mixing both scales arbitrarily.
- Palette distribution is directional: 50–65% clean surfaces, 15–25% product UI, 10–20% storytelling, 5–10% accents. These are not strict totals.
- Prefer navy text on bright-blue buttons pending measured contrast. A brand color alone does not guarantee an accessible text pairing.

## Grid and typography

- Desktop reference 1440px, preferred content max 1240px, 12 columns, gutters 24–32px, outer margins 32–64px.
- Tablet 768–1199px: 8 columns, margins 24–32px.
- Mobile 320–767px, reference 390px: 4 columns, margins 16–20px.
- Spacing scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 144px. The source's sample tokens also include 128px; resolve deliberately in the final central token sheet.
- Sections typically 96–144px vertically on desktop, 64–96px on mobile, with deliberate variation.
- Desktop hero 56–76px, H2 42–56px, H3 28–36px; mobile hero 36–46px, H2 30–38px, H3 24–30px; body 16–18px.
- Typeface remains unselected. Prepare a typography sheet and select one family before locking typography.
- Arabic headlines remain HTML with intentional wrapping, no justification or arbitrary tracking. Body width usually 560–680px; hero headline 600–760px as composition permits.
- Do not repeat one section family more than twice consecutively. Use asymmetric splits, editorial numbers, broad product stages, and occasional sticky stories.

## Components and behavior

Reusable foundations: header, mobile drawer, primary/secondary buttons, text link, eyebrow, heading, product frame, device mockup, editorial/step/pricing cards, badge, accordion, form field, radio card, checkbox, CTA panel, footer, Spark accent, section container.

- Cards only when content needs its own container; no feature-card wall.
- Buttons: 52–58px desktop / 50–56px mobile; interactive targets at least 44×44px. Hover compresses shadow with a small translation; pressed state remains physical and restrained.
- Forms: visible labels, 48–56px minimum field height, understandable validation beyond color, short logical flows.
- FAQ: keyboard-operable spacious rows with clear expanded state.
- One consistent primary action label; secondary action only for a distinct decision.
- Semantic HTML, correct headings, visible focus, keyboard access, appropriate alt text, measured contrast, reduced-motion support.

## Asset and evidence separation

HTML/CSS: text, buttons, borders, shadows, layouts, frames, surfaces, simple accents.

Approved image assets: character, complex props, 3D scenes, editorial metaphor.

Real screenshots: product UI, kept intact. No generated dashboards, invented metrics, notifications, charts, testimonials, customer logos, or unsupported features. Frames, crops, perspective, and explanatory annotations are allowed only while preserving readable product truth.

Keep artwork layers separate when practical: character, main prop, secondary props, shadow, Spark, atmosphere. Do not bake headline, CTA, logo, or product UI into generated scenes. Do not mirror character or screenshots with `scaleX(-1)`.

Screenshot records require screen name, version/date, language, device, source, and approved crop. Naming for derived artwork: `SA_LP_[SECTION]_[DIRECTION]_[BREAKPOINT]_V01`.

## Motion and delivery

Every Spark trail must have a describable function, such as connecting booking to daily close. Limit decorative accents to roughly 1–4 per viewport.

Microinteractions 120–250ms; component entrances 300–600ms; major transitions 600–1000ms. No perpetual floating, bouncing, random particles, continuous 3D rotation, scroll hijacking, or animation that delays reading. At most 1–2 major scrollytelling moments, with static/mobile fallbacks.

Reduce mobile motion and honor prefers-reduced-motion. Optimize responsive assets, reserve dimensions, lazy-load below fold, preload only where warranted for LCP. Evaluate LCP, CLS, and INP on the implemented page; no performance claim is verified yet.

## Proposed section sequence from the source

This is a narrative framework, not confirmation that all named capabilities or offers exist.

| Section | Role / composition | Evidence or dependency |
| --- | --- | --- |
| 01 Header | Low-intensity navigation and primary action | Real destinations and action |
| 02 Hero | One outcome, asymmetric copy and readable product cluster | Actual dashboard/booking screenshots and supported promise |
| 03 Problem | One large editorial metaphor; Owner may act within it | Confirmed customer pain and approved artwork |
| 04 What is Sparkle? | Clear definition and strong product stage | Verified definition and 2–4 outcomes |
| 05 Designed for whom? | Segment labels or blocks | Supported business segments |
| 06 Operating strategies | Large editorial numbering | Accurate operational content |
| 07 Real system showcase | Screenshots dominate | Versioned product evidence |
| 08 Operational journey | Timeline; Spark may connect steps | Verified workflow and supporting proof |
| 09 Setup | Calm three-step composition | Actual setup process |
| 10 Pricing | Readable commercial grid; preferably no Owner | Approved plans, currency, prices, inclusions |
| 11 Trial | Decision-to-action transition | Confirm trial availability, duration, and conditions; 14 days is not yet independently confirmed |
| 12 FAQ | Bordered accessible accordion | Approved answers |
| 13 Form | Short accessible conversion flow | Required fields, destination, handling, validation |
| 14 Final CTA | Single strong closing message, possible navy stage | Confirmed action; Owner only if story supports it |
| 15 Footer | Quiet descriptor, useful links, legal | Real contact and legal details |

## Production sequence and review

Product facts → narrative → section briefs → wireframe → visual system → required artwork → real UI integration → desktop RTL → English recomposition → mobile recomposition → functional motion → accessibility → performance → QA → release.

Each section brief records business goal, user question, one message, pain, metaphor, Owner need/emotion/pose, main prop and scale, copy position, desktop/mobile and RTL/LTR composition, Spark function, scroll states, real proof source, background, layers, and prohibitions.

Review ten gates: brand, story, product truth, layout, typography, artwork identity, responsive composition, interaction, accessibility, performance. Also test one-second comprehension, proof without copy, identity without logo, and one-handed mobile use.

## Open inputs

The visual direction and palette are supplied. Product screenshots, verified capabilities, commercial terms, conversion destination, detailed copy, and the original v3.0 art direction document remain missing. Do not fill these gaps with invented marketing facts. Design examples are not product specifications.
