---
name: brand-world-building
description: "Builds a distinctive, scalable visual and experiential world from brand strategy. Use to define concept thesis, visual verbs, shape grammar, materials, typography behavior, imagery, characters, props, environments, icons, motion, sound direction, production rules, and refusal rules across websites, apps, campaigns, and generated assets."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Brand World Building

## Goal

Create an ownable design universe that expresses the brand’s meaning consistently across product UI, marketing, motion, 3D, illustration, photography, and content without forcing every project into one template or copying a fashionable reference.

## Use this skill when

- A brand looks generic or inconsistent across surfaces.
- A new brand or major repositioning needs an art-direction system.
- Generated images, 3D characters, icons, and motion drift between outputs.
- A website needs more than tokens: it needs metaphors, materials, motifs, image logic, and behavior.
- Multiple teams or AI agents need a shared production grammar.

## Do not use this skill when

- The brand world is already locked and the task is only to implement a known component.
- The request is for a temporary campaign concept that must not redefine the core brand.
- No approved brand/product strategy exists; first clarify meaning, audience, promise, personality, and constraints.

## Required reading and evidence

1. `BRAND.md`
2. `PRODUCT.md`
3. `CONTENT.md`
4. `DESIGN.md`
5. `MOTION.md`
6. `DECISIONS.md`
7. `Existing identity assets, campaigns, product screens, and audience evidence`
8. `Relevant research and originality audit`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Start from brand meaning and user relationship, not an aesthetic trend.
- A world is a system of relationships: forms, materials, scale, light, voice, motion, environment, and recurring narrative roles.
- Choose a small number of visual verbs that generate many expressions.
- Distinctiveness requires recognizable combinations, not novelty in every element.
- Define invariants and controlled variation separately.
- Product UI can belong to the world without becoming a decorative campaign poster.
- Generated assets require identity, camera, material, lighting, perspective, and negative constraints.
- Cultural signals must be specific and respectful, not costume-like stereotypes.
- Every signature device must remain legible, accessible, performant, and usable across required media.
- Refusal rules are as important as inspiration rules.

## Step 1 — Extract the strategic core

- State the audience relationship, promise, tension, desired feeling, proof, and personality in concrete language.
- Identify what the brand must never resemble in its category.
- List cultural, geographic, material, historical, operational, or product truths that can legitimately seed the world.
- Separate permanent brand truth from campaign-specific messaging.
- Write one brand-world thesis that can guide visual decisions and reject incompatible ones.

## Step 2 — Define visual verbs and tensions

- Choose three to five verbs such as reveal, stack, route, compress, wash, stamp, orbit, or unfold.
- Define productive tensions, for example precise/human, industrial/fresh, bold/calm, local/technical.
- Translate each verb into composition, typography, shape, image, and motion behavior.
- Test whether the verbs produce distinct outputs without requiring the logo.
- Reject abstract adjectives that cannot generate a layout or asset decision.

## Step 3 — Build the formal grammar

- Define shape families, edge logic, corner behavior, line language, frames, containers, cutouts, patterns, marks, and spatial rhythm.
- Define material and surface behavior: matte/gloss, paper/metal/foam/glass, softness, grain, reflection, shadow, and depth.
- Define scale relationships and how hero objects, supporting props, and UI proof coexist.
- Specify color roles and light behavior rather than a loose palette.
- Describe what may vary by channel and what remains invariant.

## Step 4 — Create the image and world system

- Choose roles for photography, illustration, 3D, generative graphics, product UI, diagrams, and live data.
- Define subject casting, environment, architecture, props, wardrobe, expressions, camera language, lens feel, crop, background, and post-processing.
- For character systems, lock identity anchors, proportions, silhouette, materials, and allowable poses.
- For product presentation, define when real UI is primary proof and how mockups frame—not replace—it.
- Create negative prompts and forbidden visual families to prevent style drift.

## Step 5 — Define typography, icon, motion, and sound personality

- Specify display/body roles, density, casing, Arabic/Latin pairing, numerals, annotation style, and editorial exceptions.
- Define icon construction, stroke/filled behavior, perspective, metaphor style, and state consistency.
- Translate visual verbs into motion principles, transitions, easing families, choreography, and reduced-motion equivalents.
- When sound matters, define sonic roles and emotional boundaries without treating audio as mandatory decoration.
- Ensure frequent product actions remain fast and unobtrusive even when marketing motion is expressive.

## Step 6 — Prove the world across surfaces

- Create proof frames for a landing hero, product screen, mobile screen, social/key visual, data/diagram frame, and motion scene.
- Test light/dark or surface variants only if the product needs them.
- Test Arabic RTL, English LTR, long content, small screens, and low-bandwidth/static fallbacks.
- Check whether the same world survives without repeating one layout.
- Run an originality and category-similarity audit against researched references and competitors.

## Step 7 — Write production and governance rules

- Create a source-of-truth world bible with assets, tokens, examples, do/don’t pairs, and decision logic.
- Define asset naming, versioning, master files, export formats, color management, and ownership.
- Create reusable generation briefs and QA checklists for each asset family.
- Define campaign flex zones and approval thresholds for signature devices.
- Record locked decisions and conditions for evolution in DECISIONS.md.

## Required outputs

- Brand-world thesis
- Visual verbs and productive tensions
- Shape and composition grammar
- Material, light, and depth library
- Color-role system
- Typography and icon language
- Photography/illustration/3D/image universe
- Character, prop, and environment rules when applicable
- Motion and optional sonic personality
- Cross-surface proof frames
- Production briefs and refusal rules
- Governance and originality audit

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- The world is traceable to brand and audience truth, not only references.
- At least three different surfaces demonstrate the grammar without repeating one composition.
- Invariants and allowable variations are explicit.
- Real product UI is not replaced by decorative fake screens.
- Character or asset identity locks are testable where applicable.
- Arabic/English, responsive, accessibility, and fallback implications are defined.
- No researched source acts as a hidden template.
- Production files, ownership, and refusal rules are documented.

## Handoffs

- Send imagery and asset specifications to `asset-production-direction` and `color-imagery`.
- Send motion grammar to `motion-interaction` and `spatial-3d-world-building` when relevant.
- Send typography and content expression to `typography-content` and `content-information-design`.
- Send tokens and reusable patterns to `component-system` and `design-system-governance`.
- Send implementation contracts to `design-to-code` and final proof to `visual-qa-refinement`.

## Anti-patterns

Reject or correct these failure modes:

- A collage moodboard with no decision grammar
- Choosing a trend before defining brand meaning
- Making every brand use the same 3D mascot or gradient
- Copying a reference’s signature hero
- Decorating product UI until task clarity drops
- Uncontrolled AI character drift
- Local culture represented through clichés
- One rigid layout repeated across every channel
- A giant list of adjectives with no production rules

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
