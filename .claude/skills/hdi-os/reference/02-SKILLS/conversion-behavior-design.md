# HDI Skill — conversion-behavior-design


---

## Source: `skills/conversion-behavior-design/SKILL.md`

---
name: conversion-behavior-design
description: "Designs ethical decision journeys for landing pages, pricing, onboarding, booking, checkout, lead forms, trial activation, and human handoff. Use to align promise, proof, objections, trust, commitment, CTA hierarchy, and measurable hypotheses without dark patterns, fake urgency, or fabricated social proof."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Conversion and Behavior Design

## Goal

Help qualified users make informed progress toward a valuable action by reducing uncertainty, explaining consequences, showing credible proof, and matching commitment to readiness—without manipulating attention or hiding material information.

## Use this skill when

- A landing page, pricing page, trial, demo, booking, checkout, application, or lead form must convert.
- Users express objections, uncertainty, mistrust, or abandonment at a commercial decision.
- The team needs CTA hierarchy, proof sequencing, form strategy, or human handoff.
- A redesign needs hypotheses and measurement beyond visual attractiveness.
- The current journey relies on discounts, urgency, friction, or fake proof rather than clarity.

## Do not use this skill when

- The product-market question is unknown and there is no evidence of user need; do discovery research first.
- The task is to create deceptive scarcity, hidden opt-outs, disguised ads, forced continuity, confirmshaming, or another dark pattern.
- The journey is high-stakes and legal/compliance truth is unavailable; record the block rather than improvise.

## Required reading and evidence

1. `PRODUCT.md`
2. `CONTENT.md`
3. `Pricing, commercial terms, eligibility, and approved claims`
4. `User research, objections, support and sales evidence`
5. `Current funnel analytics and event definitions`
6. `Trust/privacy/security constraints`
7. `Brand and channel rules`
8. `DECISIONS.md`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Conversion quality includes fit, comprehension, downstream success, retention, and trust—not clicks alone.
- The value proposition must be specific, credible, and connected to a real user situation.
- Proof should answer the claim nearest to it.
- Commitment should increase gradually and transparently.
- Users must understand price, risk, scope, renewal, cancellation, data use, and next steps before commitment.
- A CTA hierarchy is a decision architecture, not a row of equally loud buttons.
- Human contact can be part of the product journey when it matches local behavior and complexity.
- Never fabricate urgency, scarcity, testimonials, logos, metrics, ratings, or guarantees.
- Do not use friction to trap users; use friction only when it protects safety, quality, qualification, or informed consent.
- Measure harmful trade-offs and downstream outcomes, not only the primary conversion event.

## Step 1 — Define the conversion and qualification truth

- Name the primary valuable action, who it is for, who it is not for, and what happens after it.
- Separate business conversion from user success and define both.
- Record real eligibility, price, trial, setup, cancellation, support, timing, and operational constraints.
- Identify false-positive conversions that create poor-fit leads, abandonment, refunds, or support burden.
- Define the ethical boundary and forbidden tactics before designing.

## Step 2 — Map the decision journey

- Map entry intent, awareness level, key questions, perceived risks, alternative behaviors, proof needs, and readiness stages.
- Identify moments where users need orientation, evidence, comparison, reassurance, commitment, or a human answer.
- Separate content needed before the primary CTA from detail that can follow without hiding material facts.
- Map mobile, social, search, referral, WhatsApp/phone, and returning-user entry paths when relevant.
- Define recovery paths for hesitation, ineligibility, errors, and incomplete applications.

## Step 3 — Create the promise and proof architecture

- State the promise in the user’s context with an observable outcome or mechanism.
- Match each claim to the strongest available proof: real product, process, data, case, policy, guarantee, demo, or transparent limitation.
- Place proof near the claim and label prototype or illustrative material clearly.
- Define what cannot be claimed and what evidence is still missing.
- Use specificity to build trust without overpromising certainty.

## Step 4 — Sequence objections and trust

- Cluster objections by relevance and stage: fit, capability, implementation, effort, price, risk, support, privacy, switching, and credibility.
- Answer the highest-impact objection at the moment it blocks progress.
- Use pricing comparisons and package differences with normalized dimensions and explicit exclusions.
- Design risk reversal only when the operational promise is real and sustainable.
- Provide visible human support and recovery routes when self-service is not enough.

## Step 5 — Design commitment and forms

- Create a commitment ladder from low-risk exploration to informed action.
- Choose the minimum fields necessary for the next operational step, not every field the business may want someday.
- Explain why sensitive or unusual information is requested.
- Use clear labels, input formats, validation, save/resume, privacy expectations, and success/next-step states.
- Do not preselect paid extras, hide opt-outs, or make refusal harder than acceptance.

## Step 6 — Define CTA and interaction hierarchy

- Assign one primary action per decision frame and create secondary/tertiary paths by readiness.
- Write CTA labels as outcomes, not generic ‘Submit’ or manipulative pressure.
- Keep critical conditions and consequences adjacent to the action.
- Ensure sticky CTAs, modals, banners, and chat do not obscure content or coerce interaction.
- Make keyboard, screen-reader, mobile, RTL, and reduced-motion behavior part of the contract.

## Step 7 — Create measurable hypotheses and guardrails

- Write hypotheses with audience, change, mechanism, primary outcome, guardrails, and failure interpretation.
- Instrument exposure, meaningful interaction, completion, qualification, downstream activation, cancellation/refund, and support impact as relevant.
- Define segmentation before reading results and avoid post-hoc storytelling.
- Use usability testing for comprehension and experiments for causal comparison when appropriate.
- Record what result would cause adoption, iteration, or rejection.

## Required outputs

- Conversion and qualification definition
- Decision-journey map
- Promise-to-proof matrix
- Objection and trust sequence
- Commitment ladder
- CTA hierarchy
- Form field and state strategy
- Pricing/comparison contract
- Human handoff and recovery paths
- Ethical-risk checklist
- Experiment hypotheses and guardrail metrics

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- All claims, prices, terms, proof, and urgency are verifiable.
- Material conditions are visible before commitment.
- Acceptance and refusal/cancellation paths are understandable and not coercively asymmetric.
- Form fields are necessary, explained where sensitive, and protected appropriately.
- The journey defines downstream user success and poor-fit conversion risk.
- CTA hierarchy reflects readiness and one primary decision.
- Accessibility, mobile, RTL, error, and recovery states are covered.
- No dark-pattern tactic remains.

## Handoffs

- Send message hierarchy and proof content to `content-information-design`.
- Send form flow and state behavior to `ux-architecture`.
- Send privacy, consent, billing, permission, and destructive-action concerns to `trust-privacy-security-ux`.
- Send hypotheses to `experiment-optimization` and events to `product-metrics-instrumentation`.
- Send visual execution to `visual-composition`, `typography-content`, and `design-to-code`.
- Validate key journeys with `prototype-usability-testing`.

## Anti-patterns

Reject or correct these failure modes:

- Fake countdowns or scarcity
- Fabricated testimonials, logos, ratings, or metrics
- Hidden recurring charges or exclusions
- Preselected consent or paid extras
- Confirmshaming and guilt copy
- A CTA on every visible object
- Form fields collected only for internal convenience
- Optimizing clicks while qualified success declines
- Hiding price behind a lead form without a truthful operational reason
- Trust badges unrelated to actual safeguards

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/conversion-behavior-design/references/DECISION-JOURNEY.md`

# Conversion Decision Journey

Use this worksheet to create an auditable project artifact.

## Audience and readiness

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Questions and risks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Promise and proof

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Objections

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Commitment ladder

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Recovery and human handoff

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/conversion-behavior-design/references/ETHICAL-EXPERIMENTS.md`

# Ethical Conversion Hypotheses

Use this worksheet to create an auditable project artifact.

## Hypothesis

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Mechanism

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Primary outcome

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Guardrails

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Segments

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Decision thresholds

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Dark-pattern audit

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/conversion-behavior-design/references/FORM-AND-CTA-CONTRACT.md`

# Form and CTA Contract

Use this worksheet to create an auditable project artifact.

## Primary/secondary actions

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Fields and rationale

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Validation and states

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Privacy explanations

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Success and follow-up

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Accessibility and mobile

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
