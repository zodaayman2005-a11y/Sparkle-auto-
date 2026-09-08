# HDI Skill — data-visualization


---

## Source: `skills/data-visualization/SKILL.md`

---
name: data-visualization
description: "Designs charts, tables, KPI views, maps, dashboards, and analytical interactions from user questions and data semantics. Use to choose accurate encodings, comparisons, scales, annotations, uncertainty, color, accessibility, responsive behavior, and data-quality states instead of decorating dashboards with arbitrary charts."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Data Visualization

## Goal

Help users correctly see, compare, explain, and act on quantitative information while preserving data meaning, uncertainty, provenance, and accessibility across charts, tables, devices, languages, and interaction states.

## Use this skill when

- A dashboard or report needs charts, tables, KPIs, maps, or analytical exploration.
- The current visualization is decorative, confusing, misleading, or not actionable.
- Users must compare time, categories, distributions, relationships, flows, or targets.
- Data quality, uncertainty, filters, drill-down, or responsive behavior must be designed.
- Arabic/English labels, numbers, dates, currencies, or mixed-direction analytical UI are involved.

## Do not use this skill when

- The data question and metric definitions are unknown; resolve product/measurement truth first.
- A simple exact lookup is better served by text or a table.
- The task is general page hierarchy with no quantitative reasoning; use content and visual composition skills.

## Required reading and evidence

1. `PRODUCT.md`
2. `Metric catalog and event definitions`
3. `Data schema, grain, units, time zone, freshness, and quality notes`
4. `User research and analytical tasks`
5. `Current dashboard/report and export needs`
6. `DESIGN.md, accessibility, responsive, and localization requirements`
7. `Privacy and permission rules`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Start with the user’s question and action, not a preferred chart type.
- Use position and length for precise comparison before area, angle, volume, or decorative depth.
- Zero baselines, scale choices, binning, smoothing, and normalization must be explicit and defensible.
- A KPI without definition, comparison period, freshness, and direction is incomplete.
- Tables are often the correct answer for exact lookup, scanning, and operational action.
- Color should encode a defined role and never be the only channel for meaning.
- Uncertainty, missingness, suppression, estimation, and data quality are part of the design.
- Do not put 3D perspective, animation, or pictorial decoration ahead of accurate reading.
- Filtering and drill-down must preserve context and make current scope visible.
- Responsive design may change representation while preserving the analytical question.

## Step 1 — Define analytical questions and decisions

- List the exact questions users ask, the decisions/actions they take, and the frequency/urgency of use.
- Define audience data literacy, domain vocabulary, and required precision.
- Identify whether the task is lookup, monitor, compare, rank, trend, distribute, relate, compose, locate, explain, or predict.
- Specify what a wrong interpretation could cost.
- Separate executive overview from operational detail and exploratory analysis.

## Step 2 — Audit metric and data semantics

- Record metric name, definition, numerator/denominator, unit, grain, dimensions, filters, time zone, update cadence, owner, and caveats.
- Identify derived, estimated, sampled, forecast, lagging, or incomplete data.
- Define valid comparisons and prohibit invalid aggregation or denominator changes.
- Map permissions, privacy thresholds, suppression, and export constraints.
- Stop if two teams use the same label for different metrics.

## Step 3 — Choose representation and encoding

- Map exact lookup and multi-column operations to tables; trend to lines; category comparison/ranking to aligned bars; distribution to histograms/box/dot views; relationship to scatter or appropriate matrix; composition only when parts and whole are stable.
- Avoid pie/donut charts when precise comparison or many categories matter.
- Choose orientation, ordering, grouping, small multiples, reference lines, and baseline based on the question.
- Document alternatives considered and why they were rejected.
- Use a chart only when it answers faster or more accurately than text/table.

## Step 4 — Design scales, labels, annotation, and uncertainty

- Define domain, zero/baseline, linear/log scale, bins, ticks, units, rounding, and significant precision.
- Label directly where possible and keep legend relationships obvious.
- Annotate events, thresholds, goals, changes, exceptions, and definitions that support interpretation.
- Represent confidence intervals, ranges, missing values, provisional data, and suppressed cells honestly.
- Make comparison periods and filter scope visible next to the result.

## Step 5 — Design analytical interaction

- Define filter hierarchy, defaults, dependencies, reset, applied-state visibility, and shareable/exportable scope.
- Specify hover, focus, touch, keyboard, selection, zoom, drill-down, cross-filter, and details-on-demand behavior.
- Preserve context during drill-down and provide a clear path back.
- Design loading, empty, no-result, partial, stale, permission-denied, error, and delayed-data states.
- Avoid hidden hover-only information that mobile or keyboard users cannot reach.

## Step 6 — Design tables and operational actions

- Define columns by task priority, data type, alignment, width, truncation, wrapping, sorting, filtering, pinning, selection, and bulk action.
- Align numbers and units consistently and preserve identifiers exactly.
- Keep row actions discoverable without overwhelming scanning.
- Support dense desktop and transformed mobile views based on the primary job; do not turn every cell into a giant card by default.
- Define pagination/virtualization and state persistence based on dataset size and workflow.

## Step 7 — Validate accuracy, accessibility, and comprehension

- Test with representative edge datasets: zero, negative, outlier, single point, many series, long labels, missing data, and extreme values.
- Check color contrast, color-vision independence, keyboard access, focus, screen-reader names/summaries, and text/table alternative.
- Test Arabic/English formatting, numerals, dates, currency, units, and RTL chart direction intentionally.
- Ask users to state the conclusion and action; compare with the intended answer.
- Review with the metric/data owner before production approval.

## Required outputs

- Analytical question and action map
- Metric/data dictionary
- Question-to-representation matrix
- Chart and table specifications
- Scale and encoding contract
- Annotation and uncertainty rules
- Filter/drill-down interaction model
- Data-quality and permission states
- Responsive/RTL behavior
- Accessibility and comprehension test evidence

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every visualization names the user question and metric definition.
- Scale, baseline, units, aggregation, comparison period, and filters cannot mislead silently.
- Missing, uncertain, estimated, suppressed, and stale data have explicit representations.
- Color is not the only carrier of meaning.
- Keyboard, touch, screen-reader, and text/table access are covered.
- Edge datasets do not break or reverse interpretation.
- Metric/data owner validates semantics.
- Decorative 3D or animation does not impair comparison.

## Handoffs

- Send metric/event definition gaps to `product-metrics-instrumentation`.
- Send page hierarchy and explanation to `content-information-design`.
- Send reusable chart/table primitives to `component-system` and `design-system-governance`.
- Send responsive and bilingual needs to `responsive-rtl` and `localization-culturalization`.
- Send privacy/permission constraints to `trust-privacy-security-ux`.
- Send implementation and rendered verification to `design-to-code` and `visual-qa-refinement`.

## Anti-patterns

Reject or correct these failure modes:

- Choosing a chart because it looks modern
- 3D bars or perspective-distorted values
- Dual axes without a compelling, clearly labeled reason
- Truncated axes that exaggerate change
- A KPI with no definition or comparison period
- Red/green as the only status signal
- Pie charts with many similar slices
- Hover-only essential detail
- Dashboard tiles with fake or decorative numbers
- Aggregating incompatible data
- Turning an operational table into unreadable mobile cards

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/data-visualization/references/EDGE-DATA-TESTS.md`

# Data Visualization Edge Tests

Use this worksheet to create an auditable project artifact.

## Zero/negative

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Outliers

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Missing/stale

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## High cardinality

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Long/localized labels

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Permissions

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Comprehension results

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/data-visualization/references/QUESTION-TO-ENCODING.md`

# Question-to-Encoding Map

Use this worksheet to create an auditable project artifact.

## User question

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Decision/action

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Metric semantics

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Representation candidates

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Chosen encoding

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Rejected alternatives

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/data-visualization/references/VISUALIZATION-CONTRACT.md`

# Visualization Contract

Use this worksheet to create an auditable project artifact.

## Scales and units

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Labels and annotations

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Filters and drill-down

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Uncertainty and quality

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Responsive/RTL

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Accessibility

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
