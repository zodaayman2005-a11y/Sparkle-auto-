---
name: user-research-synthesis
description: "Synthesizes interviews, field notes, support logs, reviews, surveys, sales conversations, and behavioral evidence into traceable jobs, mental models, friction, trust needs, segments, opportunities, and design requirements. Use after user evidence exists and before committing important UX, content, product, or conversion decisions."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# User Research Synthesis

## Goal

Convert messy qualitative and quantitative user evidence into a decision-ready model of what people are trying to accomplish, how they currently behave, where they struggle, what they trust, and what the design must support—while preserving a chain from every conclusion back to evidence.

## Use this skill when

- Interviews, observation notes, support tickets, call transcripts, reviews, surveys, analytics, or sales notes must inform a design.
- Different teams disagree about the user, pain, priority, or reason for drop-off.
- A redesign risks solving an internal assumption rather than an observed problem.
- The team needs behavioral segments, jobs, mental models, or evidence-backed opportunity statements.
- Research from several sources or time periods must be combined without flattening contradictions.

## Do not use this skill when

- No user evidence exists and the task is to plan future research; use a research-plan workflow instead of fabricating synthesis.
- The request is only for competitive or trend research; route to the relevant web-research skills.
- A tiny visual polish change has no meaningful user-behavior implications.

## Required reading and evidence

1. `PRODUCT.md`
2. `DECISIONS.md`
3. `Existing research repository or supplied evidence`
4. `Analytics definitions and known data-quality notes`
5. `Current flows, screens, support taxonomy, and sales funnel when available`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Evidence is not insight. Preserve raw observation, interpretation, and design implication as separate layers.
- A memorable quote never outweighs a repeated behavior or a contradictory data pattern by itself.
- Frequency is not the same as severity, reach, strategic importance, or confidence.
- Do not treat participants as demographic stereotypes; segment by behavior, context, capability, motivation, and constraints when evidence supports it.
- Keep negative cases and contradictions visible. They often reveal boundary conditions or distinct segments.
- Do not manufacture consensus. Report minority patterns, unknowns, and weak evidence honestly.
- Every design requirement must link to one or more findings, and every finding must link to source evidence.
- Remove or redact unnecessary personal and sensitive information before synthesis.
- Analytics can show what happened; qualitative evidence is usually needed to explain why.
- User requests are inputs, not automatically the right solution. Translate them into underlying jobs and constraints.

## Step 1 — Inventory and protect the evidence

- Create an evidence ledger with source ID, method, date, participant/context, market/language, owner, consent or access constraints, and reliability limitations.
- Remove duplicate records and mark derived summaries so they are not counted as independent evidence.
- Redact names, contact details, credentials, medical details, financial details, and other unnecessary sensitive data.
- Record sampling gaps: missing roles, locations, devices, accessibility needs, customer stages, and non-users.
- Define the decisions this synthesis must support; do not synthesize the whole universe without a question.

## Step 2 — Atomize observations

- Split notes into atomic units that describe one observed behavior, stated belief, failure, workaround, question, trigger, or outcome.
- Tag each unit by source, journey stage, user role, context, task, emotion only when explicitly evidenced, and confidence.
- Separate verbatim evidence from researcher interpretation and from proposed solution.
- Mark whether the unit is observed behavior, self-report, business report, or instrumentation signal.
- Keep a direct excerpt only when needed for traceability and within source-use limits.

## Step 3 — Cluster patterns without erasing differences

- Cluster by job, trigger, decision, workaround, friction, trust concern, capability, and environment—not by convenient screen names alone.
- Name clusters as behavioral statements, such as ‘needs proof before delegating,’ rather than vague themes like ‘trust.’
- Count unique sources and participants behind a cluster; do not count repeated comments from one person as broad evidence.
- Create a contradiction register showing evidence that does not fit the dominant cluster.
- Identify temporal changes and distinguish current patterns from legacy complaints.

## Step 4 — Build jobs, mental models, and behavioral segments

- Express jobs as progress in context: situation, motivation, desired outcome, and obstacle.
- Map the user’s current mental model, vocabulary, sequence, decision rules, and expected feedback.
- Create the minimum useful behavioral segments only when they lead to different design needs.
- For each segment, state evidence, context, primary job, anxieties, trust signals, capability constraints, and design implications.
- Do not infer identity attributes or sensitive traits from behavior.

## Step 5 — Prioritize friction, trust, and opportunity

- Rate each finding by evidence confidence, frequency, severity, reach, strategic relevance, and reversibility of a wrong decision.
- Distinguish usability friction, comprehension gaps, missing capability, process failure, policy constraint, and expectation mismatch.
- Map where trust is gained, lost, repaired, or transferred to a human channel.
- Write opportunity statements in the form ‘How might we help [behavioral group] achieve [progress] when [context] without [risk]?’
- Avoid solution-shaped opportunities such as ‘How might we add a dashboard?’

## Step 6 — Translate findings into design requirements

- Write requirement IDs with the user condition, required behavior or information, evidence links, priority, confidence, and test method.
- Separate must-support requirements from hypotheses and optional opportunities.
- Map requirements to journeys, content, components, states, accessibility, localization, trust, and measurement.
- Define failure conditions so downstream teams know what would violate the insight.
- Route unresolved questions into a research backlog rather than guessing.

## Step 7 — Review with evidence owners and affected disciplines

- Check interpretations with researchers or source owners when available.
- Ask product, support, sales, engineering, and design to challenge missing cases and operational constraints—not to vote insights into existence.
- Mark accepted, disputed, superseded, and unverified findings.
- Record decisions made from the synthesis in DECISIONS.md with evidence IDs.
- Define when the synthesis expires or needs refreshing.

## Required outputs

- Evidence ledger and privacy/redaction log
- Atomic observation table
- Pattern and contradiction map
- Jobs and mental-model model
- Behavioral segment cards
- Friction and trust hierarchy
- Prioritized opportunity statements
- Traceable design-requirement register
- Research gaps and refresh date

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every finding cites source IDs and does not rely on an unattributed summary.
- Observation, interpretation, and recommendation remain distinguishable.
- Contradictory and minority evidence is recorded rather than discarded.
- No behavioral segment is based only on stereotypes or unsupported identity inference.
- Sensitive data is minimized and access restrictions are respected.
- Every high-priority design requirement has evidence, confidence, and a validation method.
- Unknowns are placed in a research backlog rather than filled with invented certainty.

## Handoffs

- Send jobs, journeys, terminology, and requirements to `ux-architecture` and `content-information-design`.
- Send trust needs and objections to `conversion-behavior-design` and `trust-privacy-security-ux`.
- Send segment and cultural findings to `localization-culturalization` and `inclusive-accessibility-design`.
- Send testable uncertainties to `prototype-usability-testing` or `experiment-optimization`.
- Send measurement needs to `product-metrics-instrumentation`.

## Anti-patterns

Reject or correct these failure modes:

- A quote wall with no synthesis
- Personas invented from demographics
- Affinity clusters named with vague nouns
- Counting repeated comments from one source as frequency
- Mixing feature requests with underlying needs
- Ignoring non-users, failed users, or contradictory cases
- Using analytics events with unknown definitions as ground truth
- Publishing sensitive raw evidence in design files

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
