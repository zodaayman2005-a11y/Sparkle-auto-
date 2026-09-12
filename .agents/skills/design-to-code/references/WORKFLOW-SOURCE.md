---
name: design-to-code
description: Implements approved website and application designs as production-quality frontend code while preserving design tokens, hierarchy, real content, accessibility, responsive and RTL behavior, component states, and motion contracts. Use after art direction and UX contracts are defined, or when translating Figma/reference designs into an existing React, TypeScript, CSS, Tailwind, or component-system codebase.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Design to Code

## Goal

Translate an approved design system and experience contract into maintainable, accessible, responsive code without losing visual intent or inventing product truth. Implementation is complete only after rendered verification.

## Use this skill when

- Building approved pages, screens, sections, or components.
- Translating Figma, a design spec, or an authorized visual reference into code.
- Extending an existing React/TypeScript/Tailwind or similar frontend.
- Refactoring one-off UI into tokens and reusable components.
- Fixing a fidelity gap between design and browser output.

Do not use this skill to skip discovery and art direction on a net-new high-ambition design.

## Required inputs

Read:

- `DECISIONS.md`.
- `PRODUCT.md`.
- `CONTENT.md`.
- `DESIGN.md`.
- `MOTION.md`.
- `QUALITY-GATES.md`.
- Relevant composition, type, color/image, component, responsive, and advanced contracts.
- Existing repository instructions, stack, routes, data sources, and tests.

If essential design or product truth is missing, identify the gap. Do not silently choose generic defaults.

## Step 1 — Audit the repository

Inspect:

- Framework and versions.
- Routing.
- Styling system.
- Existing tokens and themes.
- Component library and primitives.
- Fonts and assets.
- Internationalization and direction handling.
- State/data patterns.
- Tests and Storybook.
- Build/lint commands.
- Performance constraints.

Prefer extending compatible infrastructure. Do not replace the stack for stylistic convenience.

## Step 2 — Build an implementation map

Map design requirements to code:

| Design contract | Existing implementation | Action | File/component | Verification |
|---|---|---|---|---|
| Token |  | Keep/repair/create |  |  |
| Component |  |  |  |  |
| State |  |  |  |  |
| Responsive rule |  |  |  |  |
| Motion scene |  |  |  |  |

Separate:

- Code-rendered interface.
- Real product screenshots.
- Brand assets.
- Custom artwork.
- Generated assets.
- Placeholder prototype content.

## Step 3 — Establish semantic tokens

- Map `DESIGN.md` roles to CSS variables/theme tokens.
- Preserve existing token names when semantically compatible.
- Avoid raw colors, arbitrary spacing, and isolated type values in component code.
- Use component tokens only for stable component-specific needs.
- Support themes and direction without duplicating whole stylesheets.

## Step 4 — Implement semantic structure

- Use correct headings and landmarks.
- Use native buttons, links, inputs, lists, tables, and dialogs when they match behavior.
- Preserve logical DOM and focus order.
- Keep essential text as text.
- Give media useful alternative text or mark it decorative appropriately.
- Do not make a clickable `div` when a semantic element exists.

## Step 5 — Build component behavior first

For interactive components verify:

- Default.
- Hover/pointer where relevant.
- Active/pressed.
- Focus-visible.
- Selected/current.
- Disabled.
- Loading.
- Error/success.
- Keyboard behavior.
- Focus restoration.
- Touch behavior.

Use proven headless primitives when they fit the product and stack. Customize visual expression from the approved system.

## Step 6 — Implement layout from relationships

Translate composition into:

- Containers and grid.
- Alignment anchors.
- Visual-mass relationships.
- Content-driven breakpoints.
- Full-bleed and breakout rules.
- Layering and z-index policy.
- Text measure and wrapping.

Avoid hard-coded absolute positions for responsive content unless the design is a controlled scene with defined variants.

## Step 7 — Implement typography faithfully

- Load approved families and weights only.
- Provide fallbacks.
- Use semantic type tokens.
- Test real Arabic and English content.
- Avoid inappropriate Arabic letter spacing.
- Preserve numeric alignment and direction.
- Prevent layout shift where possible.

Do not substitute a font silently because installation is inconvenient. Report the substitution and its visual effect.

## Step 8 — Implement assets and product proof

- Use exact approved assets and sources.
- Optimize image dimensions and formats.
- Keep focal points through responsive crops.
- Mask sensitive product data.
- Keep product UI readable.
- Do not fake screenshots, metrics, or testimonials.
- Do not redraw custom art in CSS when an approved asset is required.

## Step 9 — Implement motion as a contract

- Encode motion families and reduced-motion behavior.
- Tie transitions to state and spatial relationships.
- Keep interactions interruptible.
- Avoid delaying frequent tasks.
- Pause expensive offscreen motion.
- Build static/mobile alternatives for complex scenes.

Do not sprinkle independent animations after layout as “polish.”

## Step 10 — Implement responsive and RTL behavior

- Use logical properties and semantic direction.
- Apply module-specific transformations from the responsive matrix.
- Preserve source and focus order.
- Provide correct direction variants for icons, assets, screenshots, and motion.
- Isolate mixed-direction data.
- Test long translations and smallest widths.

## Step 11 — Connect real data and states

- Use the existing data layer and types.
- Preserve loading, empty, partial, error, success, permission, and stale states.
- Do not hardcode sample values into production paths.
- Label mocked data in prototypes.
- Keep destructive operations safe and recoverable where product rules allow.

## Step 12 — Verify continuously in the browser

After each substantial region:

1. Run build/type/lint checks.
2. Render the actual page.
3. Compare the largest visual relationships.
4. Test interactions.
5. Test required viewport and direction modes.
6. Fix root causes before adding polish.

Do not wait until the entire page is coded before seeing it.

## Step 13 — Fidelity order

When closing a design/reference gap, fix in this order:

1. Missing or wrong content/elements.
2. Structure and layout topology.
3. Relative scale and visual mass.
4. Typography family, size, weight, wrapping.
5. Spacing and alignment.
6. Color and surface hierarchy.
7. Crop, perspective, and depth.
8. Motion.
9. Small decorative details.

## Step 14 — Hand off to independent QA

Activate `visual-qa-refinement`. Provide:

- Run instructions.
- Route/state fixtures.
- Viewport matrix.
- Language modes.
- Known limitations.
- Design/reference targets.
- Changed files.

Do not self-approve the implementation.

## Required output

- Implementation map.
- Files changed.
- Token/component changes.
- Real vs prototype content disclosure.
- Viewports/languages/states implemented.
- Commands run and results.
- Known gaps.
- QA handoff.

## Failure modes

- Starting from a component template instead of the approved concept.
- Replacing the project's stack unnecessarily.
- Raw values scattered through code.
- Fake product UI.
- Absolute positioning that only works at one viewport.
- Missing states.
- Generic library appearance left untouched.
- Arabic layout treated as `dir="rtl"` only.
- Motion added after the fact without purpose.
- Reviewing source code but not rendered pixels.
- Fixing shadows before layout and type fidelity.

## Completion condition

Implementation is ready for review when the primary journey works, approved content and assets are used, visual contracts are represented in maintainable code, required responsive/RTL states exist, checks pass, and rendered evidence is available to the independent critic.
