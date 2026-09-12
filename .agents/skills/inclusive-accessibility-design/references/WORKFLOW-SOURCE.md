---
name: inclusive-accessibility-design
description: "Designs inclusive defaults and alternatives for visual, auditory, motor, cognitive, speech, language, literacy, age, neurodiversity, and situational constraints. Use before and during design to go beyond compliance checks and ensure core tasks remain perceivable, operable, understandable, and robust."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Inclusive Accessibility Design

## Goal

Make important experiences usable by a wider range of people and contexts through semantic structure, flexible presentation, forgiving interaction, clear content, equivalent alternatives, and evidence-based testing—without treating accessibility as a final overlay or a single score.

## Use this skill when

- A new or redesigned experience needs inclusive requirements before implementation.
- A product serves broad public, older, low-literacy, multilingual, high-stress, or disabled users.
- Custom components, charts, media, motion, drag/drop, canvas, or complex forms are involved.
- An audit reveals barriers beyond simple contrast.
- The team needs to translate WCAG criteria into product-specific design contracts and tests.

## Do not use this skill when

- The request is for a legal compliance certification; involve qualified auditors/legal owners.
- A single automated scanner result is being treated as proof of accessibility.
- The task asks to create an inaccessible experience intentionally or to bypass assistive technology.

## Required reading and evidence

1. `PRODUCT.md`
2. `User research and usability evidence`
3. `Supported devices, browsers, assistive technologies, languages, and contexts`
4. `WCAG 2.2 target and organizational policy`
5. `Current semantic structure, component system, media, motion, charts, forms, and error states`
6. `Localization and content models`
7. `Known support incidents and accessibility reports`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Accessibility is a design input, not a QA phase.
- Use native semantics and controls before recreating behavior.
- Equivalent experience means equivalent purpose and outcome, not identical visuals.
- Do not rely on one sensory channel, gesture, color, timing window, or precise movement.
- Clarity, predictability, recovery, and reduced cognitive load benefit many users.
- Respect user preferences for text size, zoom, contrast, motion, color scheme, and input method.
- Automated tools find only part of the problem; keyboard, screen reader, zoom/reflow, speech, and human task testing are required.
- Disability and situational constraints vary; avoid designing for one imagined ‘accessible user.’
- Do not hide accessibility modes behind segregated experiences when inclusive defaults can work.
- Record unresolved barriers and product constraints honestly.

## Step 1 — Define inclusive users, contexts, and critical tasks

- Identify core tasks, high-risk decisions, usage frequency, time pressure, environment, device/input, language/literacy, and assistive technology contexts.
- Map potential barriers across vision, hearing, motor, speech, cognition, learning, language, age, and situational constraints such as glare, noise, injury, or poor network.
- Prioritize by task importance, harm, reach, and lack of workaround.
- Define the WCAG conformance target separately from broader inclusive goals.
- Include disabled and affected users in research/testing plans where possible.

## Step 2 — Design semantic structure and navigation

- Define landmarks, headings, regions, reading order, focus order, labels, descriptions, names/roles/states, and relationships.
- Use native links, buttons, inputs, details, tables, and dialogs when behavior fits.
- Provide skip/navigation aids and predictable placement for repeated functions.
- Ensure route/page changes, dynamic updates, and errors are announced appropriately.
- Avoid DOM/visual-order divergence that confuses keyboard and screen-reader users.

## Step 3 — Design perceivable content and alternatives

- Set text contrast, non-text contrast, focus visibility, scalable typography, line spacing, zoom/reflow, and content-width behavior.
- Provide alt purpose for meaningful images and decorative exclusion for redundant art.
- Provide captions, transcripts, audio description or descriptive equivalents for meaningful media.
- Ensure charts/diagrams have labels, patterns or shapes, summaries, and accessible data alternatives.
- Do not encode status or instruction by color, sound, position, or motion alone.

## Step 4 — Design operable interaction

- Support keyboard and assistive input for every action without focus traps.
- Provide visible focus, logical order, sufficient target size/spacing, alternatives to drag, multi-touch, path gestures, or device motion.
- Avoid unexpected context changes on focus/input.
- Allow pause/stop/hide for moving content and respect reduced-motion preferences.
- Design timeouts, sessions, authentication, and repeated entry with extension/recovery where appropriate.

## Step 5 — Design understandable content and forms

- Use plain, concrete language while preserving necessary domain accuracy.
- Keep labels, instructions, requirements, formats, and errors adjacent and programmatically associated.
- Prevent errors where possible; provide specific identification, correction, preservation of entered data, and safe review for high-stakes actions.
- Use consistent interaction patterns and avoid memory-dependent steps without support.
- Support low literacy, translation, cognitive load, and stress with chunking and clear progress.

## Step 6 — Design robust custom and dynamic experiences

- Specify custom component keyboard model, focus management, roles/states/properties, announcements, touch, and screen-reader behavior.
- For canvas/3D, keep semantic content and controls in DOM or provide an equivalent route.
- For virtualized/dynamic content, preserve reading, focus, count, selection, and update meaning.
- Test personalization and themes without removing necessary contrast or semantics.
- Ensure errors and loading states do not leave users trapped or uncertain.

## Step 7 — Test with layered evidence

- Run static/lint/automated checks as early guardrails.
- Test keyboard-only, screen reader combinations in supported platforms, 200–400% zoom/reflow, text spacing, high contrast/forced colors where relevant, reduced motion, touch, and voice/switch scenarios where applicable.
- Test real tasks and edge states with disabled users or qualified testers for high-impact flows.
- Record defects by affected task, user/context, severity, evidence, owner, and retest.
- Prevent regression with component stories, automated checks, manual release gates, and issue governance.

## Required outputs

- Inclusive user/context and barrier map
- Critical-task accessibility requirements
- Semantic/read/focus-order contract
- Visual/text/media alternative specifications
- Keyboard/touch/gesture/time/motion behavior
- Form/error/recovery contract
- Custom component and dynamic-update semantics
- Assistive technology and human test matrix
- Severity-ranked barrier register
- Regression and ownership plan

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Core tasks work by keyboard and do not require one pointer gesture or sensory channel.
- Semantic names, roles, states, relationships, reading order, and focus behavior match the experience.
- Text, non-text, focus, zoom/reflow, and content expansion meet the declared standard and product needs.
- Meaningful images, media, charts, diagrams, canvas, and 3D have appropriate equivalents.
- Errors preserve work and provide specific recovery; high-stakes actions support review.
- Reduced motion, timing, target size, and dynamic announcements are covered.
- Automated results are supplemented by manual and task-based testing.
- Blocking and major barriers have owners and closure evidence; unresolved exceptions are explicit.

## Handoffs

- Send component semantics to `component-system` and `design-system-governance`.
- Send content/literacy issues to `content-information-design` and `localization-culturalization`.
- Send chart alternatives to `data-visualization`.
- Send media/asset alternatives to `asset-production-direction`.
- Send motion/3D alternatives to `motion-interaction` and `spatial-3d-world-building`.
- Send implementation/tests to `design-to-code`, `prototype-usability-testing`, and `visual-qa-refinement`.

## Anti-patterns

Reject or correct these failure modes:

- Accessibility as a final color-contrast pass
- A separate ‘accessible version’ that is incomplete
- Automated score presented as full compliance
- ARIA replacing native semantics unnecessarily
- DOM order that contradicts visual/task order
- Hover-only or drag-only actions
- Removing focus outlines
- Color-only status
- Canvas-only content
- Captions generated but never reviewed
- Forcing reduced motion to disable essential state change
- Small fixed text/layout that fails zoom and reflow

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
