# HDI Skill — prototype-usability-testing


---

## Source: `skills/prototype-usability-testing/SKILL.md`

---
name: prototype-usability-testing
description: "Plans, conducts, or structures moderated and agent-assisted usability tests for prototypes and implemented flows. Use to evaluate whether representative users can understand and complete realistic tasks, capture observable evidence, assign severity, and turn findings into verified design revisions."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Prototype Usability Testing

## Goal

Determine whether representative users can complete important tasks and recover from problems in realistic conditions, then translate observed breakdowns into prioritized design changes without confusing personal taste, facilitator bias, or agent simulation with real user evidence.

## Use this skill when

- A prototype, coded flow, or clickable concept needs task-based validation.
- A team is debating whether a journey is understandable.
- A high-risk form, onboarding, purchase, booking, permissions, or operational flow has changed.
- Visual review passed but actual task usability is unknown.
- The team needs a repeatable test script, observation model, severity system, and retest plan.

## Do not use this skill when

- There is no testable artifact or task; first create the minimum prototype.
- The only question is broad market demand or unmet need; use discovery research rather than usability testing.
- An AI persona is being proposed as a replacement for representative human participants; it may be a preflight only.

## Required reading and evidence

1. `PRODUCT.md`
2. `User-research synthesis and behavioral segments`
3. `Current journey map and task priorities`
4. `Prototype or deployed test environment`
5. `Known analytics, accessibility requirements, and support failures`
6. `DECISIONS.md and QUALITY-GATES.md`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Test a task and decision, not whether a participant ‘likes’ the interface.
- Observe behavior before asking for explanations.
- Do not teach, lead, defend, or rescue prematurely.
- A simulated or expert walkthrough is a preflight, not evidence of human usability.
- Use realistic content, data, devices, language, and permissions whenever safe.
- Record task success, errors, hesitations, backtracking, questions, confidence, and recovery.
- One participant can reveal a severe issue; prevalence claims require appropriate evidence.
- Separate prototype limitations from actual design failures.
- Accessibility and localization scenarios are part of usability, not optional audits afterward.
- Fixing symptoms without identifying the broken expectation causes recurring problems.

## Step 1 — Define test decisions and risk

- State what decision the test will support and what evidence would change that decision.
- Choose the critical jobs, journey stages, and failure risks; avoid testing every screen equally.
- Define participant characteristics behaviorally, including experience, device, language, context, and assistive needs where relevant.
- Choose formative, comparative, benchmark, or validation mode.
- Set success criteria before observing results.

## Step 2 — Prepare realistic tasks and environment

- Write scenario-based tasks that provide motivation and context without naming the UI control or revealing the answer.
- Use realistic names, data ranges, content length, permissions, and error conditions.
- Prepare starting state, account state, device, locale, connectivity assumptions, and reset procedure.
- Include at least one recovery or exception scenario for high-risk flows.
- Pilot the script to remove accidental hints and broken prototype paths.

## Step 3 — Create the moderation and observation protocol

- Use a neutral welcome, consent/privacy statement, think-aloud guidance when appropriate, and non-leading follow-ups.
- Define when the moderator may intervene and log each intervention.
- Capture timestamped observations separately from interpretation.
- Track completion, critical error, non-critical error, hesitation, detour, abandonment, confidence, and time only when time is meaningful.
- Avoid collecting unnecessary personal data in recordings or notes.

## Step 4 — Run preflight checks

- Perform expert heuristic, accessibility, content, responsive, and technical walkthroughs before spending participant time.
- Use agent-assisted exploration only to identify candidate edge cases or test-script gaps.
- Verify prototype links, form validation, states, account reset, recording setup, and backup plan.
- Confirm that the participant can use their natural language and input method.
- Label any simulated findings clearly so they cannot be reported as participant evidence.

## Step 5 — Conduct sessions and preserve evidence

- Observe silently until intervention criteria are met.
- Ask retrospective questions about expectations and interpretations after the relevant behavior.
- Do not translate every hesitation into a problem; connect it to task impact and repeated evidence.
- Log environmental factors such as interruptions, network failure, or prototype artifacts.
- Conduct daily debriefs without prematurely redesigning after the first session.

## Step 6 — Analyze and assign severity

- Aggregate by task, expectation, journey stage, segment/context, and outcome—not by screen alone.
- State each finding as evidence, user impact, likely cause, scope, confidence, and recommended design response.
- Rate severity using task failure, harm/risk, frequency evidence, recoverability, and strategic importance.
- Separate usability defects from preference comments, missing product capability, content issue, technical bug, and research question.
- Preserve disagreements and explain what additional evidence is needed.

## Step 7 — Revise, verify, and retest

- Map every blocking or major finding to an owner and proposed change.
- Update the prototype and verify the exact failed scenario rather than only the happy path.
- Run accessibility and localization checks on revisions.
- Retest high-risk changes with representative participants or an appropriately scoped follow-up.
- Update DECISIONS.md and close findings only with evidence, not because the screen changed.

## Required outputs

- Test objective and decision statement
- Participant and sampling profile
- Task/scenario script
- Moderation guide
- Observation sheet
- Task success and issue evidence
- Severity-ranked findings
- Revision map
- Retest plan and closure evidence

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Tasks do not reveal target controls or desired answers.
- Participant evidence and simulated/expert findings are visibly separated.
- Every finding includes observable evidence and user/task impact.
- Severity reflects risk and recoverability, not stakeholder preference.
- Privacy, consent, and recording/access rules are respected.
- Prototype limitations are labeled.
- Blocking and major issues have owners and retest conditions.
- The report does not generalize prevalence beyond the evidence.

## Handoffs

- Send flow and expectation failures to `ux-architecture`.
- Send labeling and comprehension failures to `content-information-design` and `typography-content`.
- Send accessibility barriers to `inclusive-accessibility-design`.
- Send localized behavior failures to `localization-culturalization`.
- Send technical or visual defects to `design-to-code` and `visual-qa-refinement`.
- Send uncertain causal hypotheses to `experiment-optimization`.

## Anti-patterns

Reject or correct these failure modes:

- Asking ‘Do you like it?’ as the main method
- Leading participants to the answer
- Testing internal employees as the only users
- Calling an AI walkthrough user research
- Reporting opinions without behavior
- Treating task time as universally meaningful
- Redesigning after one comment without assessing impact
- Closing findings without retesting
- Hiding prototype breakage inside usability severity

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/prototype-usability-testing/references/FINDINGS-AND-RETEST.md`

# Findings and Retest Register

Use this worksheet to create an auditable project artifact.

## Finding evidence

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Impact and severity

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Likely cause

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Design response

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Owner

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Retest result

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/prototype-usability-testing/references/SESSION-OBSERVATION.md`

# Usability Session Observation Sheet

Use this worksheet to create an auditable project artifact.

## Session context

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Task evidence

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Errors and recovery

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Questions and expectations

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Moderator interventions

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Debrief

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/prototype-usability-testing/references/TEST-PLAN.md`

# Prototype Usability Test Plan

Use this worksheet to create an auditable project artifact.

## Decision and risk

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Participants

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Tasks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Environment

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Success criteria

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Ethics and privacy

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
