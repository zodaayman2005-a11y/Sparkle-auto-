---
name: product-metrics-instrumentation
description: "Defines privacy-aware product events, properties, exposures, identities, funnels, task outcomes, quality metrics, dashboards, semantic naming, validation, governance, and analysis readiness. Use when design decisions, usability, conversion, experiments, performance, or product health must be measured reliably."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Product Metrics and Instrumentation

## Goal

Create trustworthy behavioral evidence that answers product and design questions without collecting unnecessary data, corrupting semantics, double-counting exposure, or turning dashboards into vanity reporting.

## Use this skill when

- A product or website needs event instrumentation, funnels, task success, conversion, retention, performance, or experiment measurement.
- Different teams disagree about metric definitions.
- Events are duplicated, missing, unstable, or include unsafe data.
- A redesign or new journey needs before/after evidence.
- Feature flags or experiments require assignment and exposure tracking.

## Do not use this skill when

- The task is to choose a business strategy without a known product question.
- The request is to collect sensitive personal data without necessity, consent, policy, or security review.
- A metric is being requested without defining user value, behavior, or decision it supports.

## Required reading and evidence

1. `PRODUCT.md`
2. `Research and usability findings`
3. `Critical journeys, conversion and experiment hypotheses`
4. `Current analytics taxonomy, warehouse/schema, identity model, consent/privacy policy, and retention rules`
5. `Technical architecture and event pipeline`
6. `Performance and error monitoring`
7. `Existing dashboards and known data-quality incidents`
8. `DECISIONS.md`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Start with a product/design question and decision, then define metrics and events.
- Metrics require exact numerator, denominator, population, window, unit, scope, and owner.
- Event names describe facts that happened; properties provide context.
- Assignment, exposure, interaction, and outcome are different events.
- Collect the minimum data needed; avoid raw text, secrets, tokens, full URLs with sensitive parameters, and unnecessary identifiers.
- Use stable semantic conventions and version changes deliberately.
- Client events alone may be insufficient for authoritative financial, security, or completion truth.
- Instrument failure, recovery, quality, and downstream outcomes—not only happy-path clicks.
- Validate telemetry end-to-end before trusting a dashboard.
- Analytics support interpretation; they do not reveal motivation without complementary evidence.

## Step 1 — Define questions and decision metrics

- List the product/design decisions, user jobs, risks, and hypotheses measurement must support.
- Define north-star or health measures only when they connect user value and sustainable business value.
- Create metric cards with formula, population, unit, window, grain, dimensions, exclusions, freshness, owner, and caveats.
- Separate outcome, behavior, quality, guardrail, operational, and diagnostic metrics.
- Reject vanity metrics that cannot change a decision.

## Step 2 — Model journeys, states, and event facts

- Map entry, eligibility, assignment, exposure, meaningful view, interaction, progress, completion, error, abandonment, recovery, and downstream outcome.
- Name events using a consistent object-action or domain convention.
- Define what system is authoritative for each event and how duplicates/retries are handled.
- Capture state transitions when they matter, not every render or hover.
- Include role, permission, locale, device, route/surface, version, and experiment context only when needed and safe.

## Step 3 — Define identity, sessions, consent, and privacy

- Define anonymous, authenticated, account/organization, device, and session identifiers and allowed joins.
- Document identity merge/split, logout, shared-device, cross-domain/app, and deletion behavior.
- Respect consent and collection modes by market and data category.
- Create allowlists for properties and prohibit passwords, tokens, payment details, private messages, raw form values, precise location, or sensitive URL parameters unless explicitly justified and protected.
- Define retention, access, redaction, deletion, and audit ownership.

## Step 4 — Create event and property contracts

- For each event, document description, trigger, source, required/optional properties, types/enums, example, deduplication ID, timestamp semantics, privacy class, version, and owner.
- Define stable IDs for content, component, variant, feature flag, experiment, locale, and product objects.
- Use semantic conventions where they fit, but do not force unrelated domain behavior into generic names.
- Distinguish user intent from system outcome; a button click is not a successful booking.
- Plan schema evolution and backward compatibility.

## Step 5 — Implement exposure and experiment semantics

- Track eligibility and assignment separately from actual rendered/meaningful exposure.
- Fire exposure once per defined unit/context, not on every render.
- Attach flag/variant/experiment identifiers and evaluation context without leaking sensitive targeting rules.
- Handle SSR/client, cache, cross-device, and delayed-consent consistency.
- Validate that metrics include only users who had a chance to experience the treatment.

## Step 6 — Validate the pipeline end to end

- Create test cases for every critical journey, error, retry, offline/queue, duplicate submission, locale, permission, and experiment variant.
- Inspect payloads at source, transport, processing, storage, semantic layer, and dashboard.
- Test deduplication, ordering, clock/time-zone behavior, identity merge, schema rejection, sampling, consent, and redaction.
- Reconcile authoritative business records with analytics outcomes where possible.
- Block release when critical events or privacy controls fail.

## Step 7 — Design analysis and dashboards

- Build dashboards around decisions and user journeys, not event-count walls.
- Show definitions, filters, time zone, freshness, release annotations, data-quality status, and confidence/limitations.
- Segment by predeclared relevant dimensions and protect small/sensitive groups.
- Pair funnels with error/recovery, qualification, performance, support, and downstream quality.
- Avoid causal claims from before/after correlation without appropriate design.

## Step 8 — Govern telemetry over time

- Maintain event/metric catalog, ownership, versioning, change review, deprecation, lineage, and consumer inventory.
- Alert on volume shifts, schema errors, missing fields, sample-ratio issues, latency, and privacy violations.
- Review whether collected properties are still necessary and delete unused data.
- Annotate releases, incidents, migrations, campaigns, and experiments.
- Feed validated learning to DECISIONS.md, design-system health, research, and roadmap planning.

## Required outputs

- Product/design question map
- Metric catalog with formulas and owners
- Journey and state measurement model
- Event/property taxonomy and schemas
- Identity/session/consent model
- Privacy classification and allow/deny list
- Experiment assignment/exposure contract
- End-to-end validation plan
- Decision-oriented dashboard specifications
- Telemetry governance and deprecation policy

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every metric and event answers a named question and has an owner.
- Metric definitions include population, formula, window, grain, filters, exclusions, and freshness.
- Assignment, exposure, interaction, completion, error, and recovery are not conflated.
- Sensitive data and URL/query content are minimized, redacted, consent-aware, and governed.
- Critical events are validated from UI/action through storage and dashboard.
- Authoritative outcomes are sourced appropriately and duplicate/retry behavior is defined.
- Dashboards expose definitions and data-quality limitations.
- Schema changes and deprecations are versioned without silently breaking analysis.

## Handoffs

- Receive hypotheses and guardrails from `experiment-optimization` and `conversion-behavior-design`.
- Receive usability/task and research measurement needs from relevant skills.
- Send event implementation to engineering through `design-to-code`/`design-ops-handoff`.
- Send performance event requirements to `performance-perceived-quality`.
- Send privacy/security review to `trust-privacy-security-ux`.
- Send data-display needs to `data-visualization` and validated insights back to `user-research-synthesis`/DECISIONS.md.

## Anti-patterns

Reject or correct these failure modes:

- Tracking every click without a question
- Calling a click a completed outcome
- No distinction between assignment and exposure
- Raw form text or private data in analytics
- Secrets/tokens/full sensitive URLs in events
- Metric definitions stored only in someone’s memory
- Duplicate events on rerender/retry
- Dashboards with no filters/freshness/definitions
- Causal claims from simple before/after charts
- Changing event meaning without versioning
- Collecting data forever because it may be useful

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
