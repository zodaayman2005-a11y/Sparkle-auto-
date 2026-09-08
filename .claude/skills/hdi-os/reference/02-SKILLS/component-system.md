# HDI Skill — component-system


---

## Source: `skills/component-system/SKILL.md`

---
name: component-system
description: Designs scalable UI tokens, primitives, components, variants, states, composition APIs, and documentation for React or other interface systems. Use when building or auditing a design system, component library, Storybook, dashboard UI, form system, reusable landing-page modules, or when one-off styling and state gaps are causing inconsistency.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Component System

## Goal

Create a reusable interface system that preserves the approved visual identity, supports real states and content, remains accessible, and prevents both copy-paste drift and over-engineered abstraction.

## Use this skill when

- Starting or extending a component library.
- Converting a design direction into reusable coded patterns.
- A product has inconsistent buttons, forms, cards, spacing, states, or density.
- Using Radix, shadcn, headless primitives, or an existing design system.
- Building Storybook or component documentation.
- A landing page repeats modules that should share behavior without becoming visually monotonous.

## Required inputs

Read `DESIGN.md`, `PRODUCT.md`, the UX state matrix, existing tokens, component code, accessibility expectations, and representative real content. Audit before replacing.

## Principle: behavior and appearance are separate contracts

Headless libraries may provide semantics, focus management, and interaction behavior. The project's design system owns visual expression. Do not inherit a generic library appearance accidentally.

## Step 1 — Audit existing system

Inventory:

- Token sources.
- CSS variables and theme layers.
- Primitives.
- Components.
- Variants.
- States.
- Duplicate patterns.
- One-off values.
- Accessibility behavior.
- Direction and localization support.
- Documentation and tests.

Classify each item: keep, repair, merge, deprecate, or create.

## Step 2 — Define token layers

### Foundation tokens

Raw palette, spacing, type metrics, radius, border, shadow, motion, and breakpoints.

### Semantic tokens

Roles such as background, surface, text, muted text, primary action, selected, focus, danger, and success.

### Component tokens

Use only when a component needs a stable contract that semantic tokens cannot express cleanly.

Avoid component code referencing raw color values. Avoid creating a semantic token for every one-off visual detail.

## Step 3 — Define primitives

Potential primitives:

- Text.
- Box/stack/cluster/grid.
- Icon.
- Button.
- Link.
- Input/control.
- Surface.
- Separator.
- Visually hidden.
- Focus treatment.

Use primitives only when they reduce drift or encode important behavior. Do not create a custom layout DSL that hides normal HTML and CSS without clear benefit.

## Step 4 — Build component families from user needs

Group components by jobs:

- Navigation and context.
- Actions.
- Input and selection.
- Feedback and status.
- Data display.
- Disclosure and overlays.
- Content and media.
- Marketing storytelling.

Do not make “Card” the answer to every content type. Name components by role when the role has stable behavior.

## Step 5 — Define variants deliberately

For each component, document:

- Purpose of each variant.
- When to use.
- When not to use.
- Visual and behavioral differences.
- Density.
- Responsive behavior.
- RTL behavior.

Avoid variants that differ only because separate pages were styled independently.

## Step 6 — Cover states

At minimum consider:

- Default.
- Hover where available.
- Active/pressed.
- Focus-visible.
- Selected/current.
- Disabled.
- Loading.
- Success.
- Warning/error.
- Empty.
- Permission restricted.

Complex data components also need sorting, filtering, pagination, partial data, and stale states.

## Step 7 — Design composition APIs

Prefer APIs that reflect user and design intent:

- Named slots for stable regions.
- Composable children for flexible content.
- Controlled/uncontrolled behavior where appropriate.
- Explicit state props.
- Direction and locale awareness.

Avoid giant components with dozens of boolean props that permit incoherent combinations. Encode invalid combinations where possible.

## Step 8 — Content stress test

Test components with:

- Long Arabic labels.
- Long English labels.
- Missing optional content.
- Large numbers.
- Multiple lines.
- Dense and sparse data.
- Very small and large collections.
- Error and loading states.
- Zoom and mobile.

Do not approve a component from a single ideal story.

## Step 9 — Accessibility contract

For each interactive component define:

- Native element or semantic role.
- Accessible name and description.
- Keyboard behavior.
- Focus entry, trap, and return when relevant.
- Announced state changes.
- Error relationship.
- Touch target.
- Reduced-motion behavior.

Reuse proven behavior primitives when they fit. Do not recreate dialogs, menus, comboboxes, or tabs casually.

## Step 10 — Documentation and stories

Each production component should document:

- Purpose.
- Anatomy.
- Variants.
- States.
- Content guidance.
- Accessibility.
- Responsive/RTL behavior.
- Do/don't examples.
- Representative stories.
- Known limitations.

## Step 11 — Visual distinction without fragmentation

A system may support expressive marketing modules and functional product UI. Share foundations where useful, but permit controlled surface-specific layers.

Do not force the dashboard and campaign page to use identical density, radius, or motion if their jobs differ. Do not let them become unrelated brands either.

## Step 12 — Change management

- Mark deprecated components.
- Provide migration guidance.
- Avoid breaking changes without an inventory.
- Update stories and tests with the component.
- Record token and behavior changes in `DECISIONS.md` or changelog.

## Required output

Use `references/COMPONENT-CONTRACT.md` and provide:

- Audit inventory.
- Token architecture.
- Primitive list.
- Component families.
- Variant/state matrix.
- Composition API guidance.
- Accessibility contract.
- Stress-test stories.
- Documentation plan.
- Migration plan when relevant.

## Failure modes

- Using a component library's default visuals as the brand.
- Creating a card component before defining content relationships.
- Dozens of arbitrary variants.
- Missing focus, loading, error, and long-content states.
- Raw color and spacing values scattered through code.
- Over-abstracted layout primitives.
- One giant component with conflicting boolean props.
- Design-system work disconnected from real product screens.
- Breaking existing components without migration evidence.

## Completion condition

The system is ready when representative screens can be built from documented components without losing the approved direction, real states are covered, accessibility behavior is clear, and new work no longer depends on repeated one-off styling.

---

## Source: `skills/component-system/references/COMPONENT-CONTRACT.md`

# Component Contract

## Identity

- Component:
- User job:
- Semantic/native foundation:
- Owner:

## Anatomy

- Required regions:
- Optional regions:
- Interactive regions:

## Variants

| Variant | Use when | Do not use when | Density | Visual distinction |
|---|---|---|---|---|
|  |  |  |  |  |

## States

| State | Visual behavior | Interaction | Accessible announcement | Recovery/next action |
|---|---|---|---|---|
| Default |  |  |  |  |
| Focus-visible |  |  |  |  |
| Loading |  |  |  |  |
| Error |  |  |  |  |
| Disabled |  |  |  |  |

## Content constraints

- Minimum/maximum content:
- Wrapping/truncation:
- Empty behavior:
- Long Arabic/English behavior:

## Responsive and RTL

- Small-screen transformation:
- Direction-sensitive elements:
- Logical alignment:

## API principles

- Required props/slots:
- Controlled state:
- Invalid combinations:

## Stories/tests

- Default.
- Long content.
- Loading.
- Empty.
- Error.
- Disabled/restricted.
- Mobile.
- Arabic RTL.
- English LTR.
