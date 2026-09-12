---
name: responsive-rtl
description: Designs and audits responsive, mobile, Arabic RTL, English LTR, localization, and mixed-direction interface behavior. Use for breakpoint strategy, recomposition, mobile navigation, long translated content, CSS logical properties, direction-aware icons and motion, prices, phone numbers, dates, tables, or any bilingual website or app.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Responsive and RTL Design

## Goal

Make one product feel intentionally composed across widths, input modes, languages, scripts, and directions. Preserve task priority and brand concept without treating mobile as a smaller desktop or Arabic as a mirrored English page.

## Use this skill when

- Supporting mobile, tablet, desktop, or large screens.
- Supporting Arabic RTL, English LTR, or mixed-direction content.
- A layout uses arrows, timelines, carousels, charts, devices, illustrations, or direction-sensitive motion.
- Translated copy changes line length and visual mass.
- Dense tables, navigation, filters, forms, or product screens must adapt.
- Auditing horizontal overflow, tap targets, source order, or content expansion.

## Required inputs

Read `PRODUCT.md`, `CONTENT.md`, `DESIGN.md`, UX flows, selected composition, `MOTION.md`, target device analytics when available, supported locales, and actual translated content.

## Principle: adapt the experience, not only the pixels

Responsive design includes layout, priority, interaction, content density, navigation, imagery, motion, and input method. RTL design includes reading order, spatial meaning, script behavior, mixed-direction content, and cultural context.

## Step 1 — Define environment priorities

For each environment record:

- User and context.
- Primary tasks.
- Frequency.
- Viewport range.
- Input method.
- Network/performance expectation.
- Orientation.
- Language/direction.
- Content density.

Do not assume desktop is primary because design work starts on a desktop monitor.

## Step 2 — Use content-driven breakpoints

Start with the smallest composition that works. Increase width until content relationships need a different mode.

Name layout modes by behavior, for example:

- Compact single-column.
- Compact split-action.
- Medium two-region.
- Wide editorial grid.
- Wide data-dense.

Avoid naming the design only “mobile/tablet/desktop” if the same device class can contain very different widths.

## Step 3 — Choose transformations

For every major module decide:

- **Reflow:** same information, new line/column relationship.
- **Reorder:** task priority changes position.
- **Collapse:** secondary detail moves behind disclosure.
- **Substitute:** component changes form, such as table to focused list.
- **Crop:** image framing changes while preserving focal point.
- **Split:** one complex screen becomes steps.
- **Persist:** essential action or context remains available.
- **Remove:** non-essential decoration disappears.

Record transformations in `references/RESPONSIVE-MATRIX.md`.

## Step 4 — Preserve semantic source order

Visual reordering must not create a confusing reading or focus order. Prefer source order that makes sense linearly, then use layout to create visual composition.

Check:

- Heading before related content.
- Labels before controls.
- Trigger before controlled region.
- Primary action in a logical focus sequence.
- Mobile and desktop orders both understandable to assistive technology.

## Step 5 — Design mobile navigation and actions

- Keep primary destinations reachable.
- Avoid moving all desktop navigation into an unstructured menu.
- Preserve active location and scope.
- Use sticky actions only for high-frequency or conversion-critical tasks.
- Respect safe areas and on-screen keyboards.
- Ensure menus, sheets, and drawers restore focus and close predictably.
- Avoid hover dependence.

## Step 6 — Transform dense data

For tables and dashboards choose based on the task:

- Horizontal scroll with frozen key columns.
- Priority-column reduction.
- Row-to-card or definition-list transformation.
- Drill-down into a focused record.
- Column chooser.
- Summary plus detail.
- Mobile-specific action menu.

Do not stack every table cell into an unreadable tall card by default.

## Step 7 — Arabic typography and composition

- Use a high-quality Arabic family and test actual copy.
- Do not apply Latin letter spacing to Arabic words.
- Allow Arabic headings to wrap differently from English.
- Balance visual mass separately; Arabic glyphs can create a different block shape.
- Use proper text alignment by context, not a global forced alignment for every data type.
- Keep codes, URLs, emails, and many identifiers LTR.
- Choose Arabic-Indic or Latin numerals intentionally based on audience and context.
- Test punctuation near embedded LTR sequences.

## Step 8 — Directional classification

Classify each visual or movement:

### Reading-direction dependent

Often mirrors or changes order:

- Breadcrumb chevrons.
- Back/forward indicators.
- Progress sequences.
- Stepper order.
- Some carousels and drawers.

### Physical or semantic direction

May not mirror:

- Maps and geographic orientation.
- Play icons.
- Media timelines in products with established convention.
- Physical object movement tied to a real scene.
- Brand marks.
- Graphs where time direction is explicitly defined.

### Direction-neutral

Usually unchanged:

- Plus, close, search, settings, download, camera, and many status icons.

Document decisions rather than relying on blanket CSS mirroring.

## Step 9 — Mixed-direction content

Test and isolate where needed:

- Phone numbers.
- Prices and currency.
- Dates and times.
- Percentages.
- IDs and booking codes.
- URLs and emails.
- Version numbers.
- Equations.
- English product names inside Arabic sentences.

Use semantic markup and direction isolation. Do not fix bidirectional problems with random spaces or reordered string concatenation.

## Step 10 — Images, product devices, and diagrams

For every asset decide:

- Same asset.
- Mirrored variant.
- Re-authored directional variant.
- Different crop.
- Different placement.
- Language-specific screenshot.

Do not mirror text embedded in an image. Do not mirror a person, product, or lighting setup when identity, handedness, logos, or physical meaning would become wrong.

## Step 11 — Direction-aware motion

Coordinate with `motion-interaction`:

- Reading-order entrances may reverse.
- Physical scene movement may not.
- Drawers and navigation transitions must match their actual edge.
- Progress and timeline motion must follow the defined order.
- Reduced-motion mode must remain directionally understandable.

## Step 12 — Localization expansion

Prepare for:

- Longer headings and labels.
- Different word-break opportunities.
- Plural forms.
- Gender and grammar.
- Different date, time, currency, and number formats.
- Text that cannot be truncated safely.

Avoid fixed-height text containers. Use truncation only where users can recover the full value.

## Step 13 — Test matrix

At minimum test:

- 360px compact mobile.
- 390px common mobile.
- 768px tablet.
- 1024px small desktop/tablet landscape.
- 1440px desktop.
- 200% zoom or equivalent reflow condition.
- Arabic RTL and English LTR.
- Long-content cases.
- Keyboard and touch.
- Reduced motion.

Adapt the matrix to actual product support and analytics.

## Required output

- Environment-priority table.
- Layout modes and content-driven breakpoints.
- Responsive transformation matrix.
- Source/focus order plan.
- Mobile navigation and action model.
- Data transformation plan.
- Arabic/English typography notes.
- Directional classification table.
- Asset and motion variants.
- Localization stress cases.
- Test matrix and findings.

## Failure modes

- Scaling desktop down.
- Stacking all desktop modules in source order regardless of priority.
- Hiding essential functionality on mobile.
- Treating Arabic as a global mirror.
- Mirroring logos, text images, or physical scenes incorrectly.
- Using left/right CSS properties instead of logical relationships without reason.
- Fixed-height controls that break with translation.
- Essential content available only on hover.
- Converting every table row into a huge card.
- Reviewing only one Arabic screenshot and declaring RTL complete.

## Completion condition

Responsive and RTL work is ready when required tasks remain clear in every supported mode, source and focus order are logical, mixed-direction data is readable, assets and motion have intentional direction rules, and real long content has been tested.
