# HDI Skill — visual-composition


---

## Source: `skills/visual-composition/SKILL.md`

---
name: visual-composition
description: Builds layout systems, grids, focal hierarchy, visual mass, whitespace, rhythm, density, controlled asymmetry, section pacing, and responsive composition. Use when creating or repairing the structure of a page, screen, dashboard, hero, editorial layout, or reference-matched interface before decorative styling.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Visual Composition

## Goal

Create a clear and distinctive spatial hierarchy that tells the eye what matters, supports the user's task or narrative, and remains coherent across content lengths, viewports, and languages.

## Use this skill when

- A page feels generic, flat, crowded, empty, or visually confused.
- Building a hero, landing-page section system, dashboard, editorial page, or complex responsive layout.
- Matching the composition of a supplied reference.
- The design relies on asymmetry, overlap, large typography, product devices, 3D scenes, or unusual section transitions.
- Cards and grids are being used without hierarchy.

## Required inputs

Read the selected art direction, UX architecture, `DESIGN.md`, `CONTENT.md`, real content, required product images, responsive priorities, and reference brief.

## Principle: structure before decoration

Work in grayscale or low-detail blocks first. Do not use gradients, shadows, 3D assets, or motion to compensate for weak hierarchy.

## Step 1 — Define the focal contract

For every viewport or section, identify:

- Primary focal point.
- Secondary support.
- Primary action or task.
- Proof or evidence.
- Context.
- What may be delayed below the fold or behind interaction.

Only one element should dominate the initial scan unless the concept intentionally creates tension and still preserves comprehension.

## Step 2 — Inventory visual mass

Classify each element by visual mass:

- Large type block.
- Image, product screenshot, illustration, or 3D object.
- Dense data region.
- Action cluster.
- Navigation or context bar.
- Negative space.

Balance mass optically, not only mathematically. A dark small object can outweigh a larger pale object. Arabic type can create a different silhouette from English.

## Step 3 — Choose a layout topology

Use a topology that supports the content:

- Split field.
- Editorial offset.
- Centered monument.
- Product stage.
- Dense command center.
- Timeline or process rail.
- Alternating narrative.
- Layered spatial scene.
- Modular magazine grid.
- Full-bleed sequence.

Do not default to equal cards. Record why the topology fits.

## Step 4 — Define the grid and exceptions

Specify:

- Container width.
- Column count.
- Gutters.
- Margins.
- Baseline or vertical rhythm.
- Full-bleed rules.
- Breakout zones.
- Alignment anchors.
- Intentional exceptions.

A grid creates shared relationships. Controlled exceptions create emphasis. Random exceptions create noise.

## Step 5 — Build three grayscale thumbnails

Create three composition thumbnails that differ in:

- Focal placement.
- Text/image relationship.
- Density.
- Reading path.
- Whitespace distribution.

Use real approximate content lengths. Do not use one-word lorem ipsum that hides wrapping problems.

Select one based on hierarchy and task fit before styling.

## Step 6 — Establish scale relationships

Define relative scales rather than isolated sizes:

- Display headline vs support copy.
- Hero object vs viewport.
- Primary action vs secondary action.
- Section heading vs body.
- Product proof vs decoration.
- Data hierarchy.

Use contrast deliberately. Five near-equal sizes create ambiguity.

## Step 7 — Control whitespace

Whitespace has roles:

- Separate unrelated groups.
- Join related elements through proximity.
- Protect a focal point.
- Slow narrative pacing.
- Create a transition between density modes.
- Preserve touch and reading comfort.

Avoid uniform padding everywhere. Space should reflect relationship and rhythm.

## Step 8 — Use asymmetry deliberately

Controlled asymmetry requires:

- A stable anchor.
- A counterweight.
- A readable path.
- Protected content.
- Defined behavior when width or direction changes.

Do not rotate, offset, or overlap elements merely to look creative. Every disruption must strengthen emphasis, identity, sequence, or spatial metaphor.

## Step 9 — Design section rhythm

For long pages, vary:

- Dense vs open.
- Static vs interactive.
- Text-led vs image-led.
- Light vs dark or low vs high contrast.
- Full-width vs contained.
- Fast explanation vs slow proof.

Do not make every section a title plus three cards. Build a narrative cadence.

## Step 10 — Product interface composition

For dashboards and tools:

- Prioritize task and status over decorative balance.
- Keep scope, filters, and active entity visible.
- Use density intentionally.
- Reserve strong contrast for attention and action.
- Align numbers for scanning.
- Avoid converting every metric into a card.
- Place related controls near the data they change.

## Step 11 — Responsive composition modes

For each breakpoint, choose one or more transformations:

- Reflow.
- Reorder.
- Collapse.
- Substitute.
- Crop.
- Scroll within a controlled region.
- Split into steps.
- Remove non-essential decoration.

Do not preserve desktop geometry at the cost of mobile hierarchy.

## Step 12 — Reference matching

When matching a supplied image, compare in this order:

1. Overall silhouette and dominant masses.
2. Focal placement.
3. Relative scale.
4. Container and margins.
5. Alignment anchors.
6. Whitespace.
7. Text wrapping and line count.
8. Image crop and perspective.
9. Decoration.

Fixing shadows before scale and layout wastes time.

## Required output

- Focal contract.
- Layout topology.
- Grid specification.
- Visual-mass map.
- Selected grayscale composition.
- Scale relationships.
- Section rhythm map.
- Responsive transformations.
- RTL composition notes.
- Composition acceptance checks.

Use `references/COMPOSITION-CONTRACT.md`.

## Failure modes

- Equal cards for unequal information.
- Decorative asymmetry without anchors.
- Excessive centered alignment.
- Large type that wraps unpredictably and blocks proof.
- Whitespace used as emptiness instead of relationship.
- Product screenshots too small to provide evidence.
- Long pages with identical section structure.
- Mobile layout produced by stacking every desktop element in source order.
- Pixel matching decoration before matching mass and hierarchy.

## Completion condition

Composition is ready for detailed styling when the primary scan path is obvious, visual masses are balanced, content lengths are realistic, the grid and exceptions are defined, and mobile/RTL transformations preserve the concept.

---

## Source: `skills/visual-composition/references/COMPOSITION-CONTRACT.md`

# Composition Contract

## Surface and viewport

- Surface:
- Primary viewport:
- Secondary viewports:
- Language/direction modes:

## Focal contract

- Primary focal point:
- Secondary support:
- Primary action/task:
- Proof:
- Delayed content:

## Layout topology

- Topology:
- Reading path:
- Stable anchors:
- Counterweights:

## Grid

- Container:
- Columns:
- Gutters:
- Margins:
- Breakouts:
- Baseline/vertical rhythm:

## Visual mass

| Element | Role | Relative mass | Contrast | Allowed movement |
|---|---|---:|---|---|
|  |  |  |  |  |

## Scale relationships

- Display/support:
- Visual/text:
- Primary/secondary action:
- Section/body:

## Whitespace and rhythm

- Tight relationships:
- Protected zones:
- Section intervals:
- Density transitions:

## Responsive transformations

| Width/content condition | Reflow | Reorder | Collapse | Substitute/remove | Notes |
|---|---|---|---|---|---|
|  |  |  |  |  |  |

## Acceptance checks

- [ ] The first scan reveals the intended priority.
- [ ] Real content does not collapse the layout.
- [ ] Product proof is legible.
- [ ] Exceptions have explicit reasons.
- [ ] Mobile and RTL preserve the concept rather than the exact geometry.
