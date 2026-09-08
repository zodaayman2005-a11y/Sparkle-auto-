# HDI Skill — design-ops-handoff


---

## Source: `skills/design-ops-handoff/SKILL.md`

---
name: design-ops-handoff
description: "Turns approved design work into an owned, traceable production package across product, design, engineering, content, assets, analytics, QA, accessibility, localization, and release. Use to define readiness, source of truth, dependencies, acceptance criteria, implementation review, change control, and post-release learning."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Design Operations and Handoff

## Goal

Eliminate ambiguity between approved intent and shipped experience by packaging decisions, content, states, assets, tokens, behavior, accessibility, localization, measurement, and acceptance evidence into an executable cross-functional contract.

## Use this skill when

- A design is moving from exploration to implementation.
- Several disciplines or repositories must coordinate a release.
- Teams frequently ship from screenshots without states, behavior, or content truth.
- Scope, ownership, dependencies, change approval, or definition of done is unclear.
- A design-system, redesign, migration, or multi-language rollout needs controlled adoption.

## Do not use this skill when

- The concept/direction has not passed approval gates.
- The task is a tiny implementation change with an established ticket template and no cross-functional risk.
- The request is to throw files over the wall without implementation review or shared accountability.

## Required reading and evidence

1. `DECISIONS.md`
2. `PRODUCT.md`
3. `BRAND.md`
4. `DESIGN.md`
5. `CONTENT.md`
6. `MOTION.md`
7. `QUALITY-GATES.md`
8. `Approved flows, screens, prototypes, components, assets, and research evidence`
9. `Repository/system architecture and release process`
10. `Measurement, accessibility, localization, privacy/security, SEO, and performance contracts`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Handoff is a collaboration phase, not a file delivery event.
- The source of truth for each decision, asset, token, component, and content field must be explicit.
- Screenshots do not specify interaction, states, data, accessibility, or responsive behavior.
- Acceptance criteria should describe observable outcomes and evidence.
- Every dependency and unresolved question needs an owner and due condition.
- Design changes during implementation must be reviewed and recorded; pixel drift should not become undocumented product policy.
- Reuse existing system primitives when fit, but expose justified exceptions.
- QA should trace back to user jobs, risks, and approved contracts.
- Release readiness includes content, assets, analytics, permissions, localization, performance, and rollback—not only code completion.
- Post-release evidence feeds future design decisions.

## Step 1 — Confirm readiness and freeze the right decisions

- Verify direction, primary flows, content truth, states, responsive/RTL, accessibility, performance, security/privacy, measurement, and required assets have owners or approved unknowns.
- Separate locked decisions from implementation choices and open questions.
- Record scope, non-scope, release stages, supported platforms/locales, and feature-flag strategy.
- Reject handoff when core screens are still placeholders or critical rules are implicit.
- Set change-control and decision owners for implementation discoveries.

## Step 2 — Create the source-of-truth map

- Map Figma/design file, code repository, token source, component library, content/CMS, asset master, analytics plan, API/schema, localization source, and ticket tracker.
- Declare which system wins when representations conflict.
- Use stable links/IDs/version/commit/frame references rather than screenshots detached from source.
- Mark experimental, deprecated, and production-ready artifacts.
- Define access and backup/archive responsibility.

## Step 3 — Package behavior, states, and content

- Document user stories/jobs, flow entry/exit, navigation, permissions, validation, business rules, loading, empty, error, success, partial, offline, and recovery states.
- Specify component anatomy, variants, content constraints, focus/keyboard, touch, screen-reader, motion, and responsive/locale behavior.
- Provide real approved content/data examples and edge cases.
- Link every high-risk decision to its source and test.
- Make implementation assumptions visible and assign an owner to resolve them.

## Step 4 — Package visual and asset implementation

- Provide semantic tokens, component mappings, layout constraints, grids, breakpoints/transformations, typography, icons, image crops, 3D/motion assets, and export manifests.
- Describe intended relationships and priority rather than arbitrary coordinates alone.
- Identify new system additions versus product-specific compositions.
- Supply performance budgets and fallback assets/modes.
- Confirm rights, provenance, and approval for every production asset.

## Step 5 — Plan implementation, dependencies, and rollout

- Break work by vertical user outcome when possible, not only design layers.
- Map frontend/backend/data/content/asset/analytics/localization/security/release dependencies and sequencing.
- Define feature flag, migration, backward compatibility, data migration, staged rollout, rollback, and monitoring as applicable.
- Estimate risk and assign design/engineering/content/QA owners.
- Define review checkpoints for graybox, component, integrated, responsive, locale, and final builds.

## Step 6 — Define acceptance and evidence

- Write acceptance criteria for functional behavior, content truth, visual hierarchy, states, responsive/RTL, accessibility, performance, analytics, privacy/security, SEO, and asset quality.
- Specify required screenshots/video/traces/tests and target environments.
- Link blocking/major defect severity and closure rules.
- Require design review in the actual browser/device with real content.
- Avoid pixel-perfect comparison where adaptive rules and semantics are the actual contract.

## Step 7 — Review implementation and manage change

- Compare implementation to approved intent and system contracts at defined checkpoints.
- Classify differences as bug, implementation constraint, better discovered solution, content/data change, or scope change.
- Resolve and record decisions rather than silently matching whichever artifact is newest.
- Update design/source documentation when implementation changes the approved behavior.
- Keep a release decision log and outstanding-risk register.

## Step 8 — Release, monitor, and close the loop

- Run final readiness checklist, migration/rollback rehearsal where needed, instrumentation verification, content/localization freeze, and asset/license check.
- Monitor errors, performance, support, accessibility, conversion/task outcomes, and user feedback after release.
- Compare expected and actual behavior by segment/locale/device.
- Run a retrospective that captures reusable system, process, and design learning.
- Close or schedule remaining debt with owners and dates; do not label it ‘future polish’ indefinitely.

## Required outputs

- Readiness and scope decision
- Source-of-truth map
- Handoff package for flows/states/content/components/assets
- Dependency and ownership map
- Implementation and rollout plan
- Acceptance criteria and evidence matrix
- Change-control and decision log
- Release/rollback/monitoring checklist
- Post-release retrospective and debt register

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Approved direction and critical product/content truth are stable enough to implement.
- Every artifact and open question has a source/owner/status.
- All relevant states, roles, permissions, responsive/RTL/localization, accessibility, performance, and recovery behavior are specified.
- Production assets have rights/provenance and delivery manifests.
- Analytics/events and acceptance evidence are testable before release.
- Changes discovered during implementation are recorded and reflected in the source of truth.
- Blocking and major issues are closed or explicitly accepted by the accountable owner.
- Release has monitoring and rollback/recovery appropriate to risk.

## Handoffs

- Coordinate implementation through `design-to-code` and component/system work through `component-system`/`design-system-governance`.
- Use `visual-qa-refinement` for rendered acceptance evidence.
- Use `product-metrics-instrumentation` and `experiment-optimization` for measurement/rollout.
- Use accessibility, localization, performance, security/privacy, SEO, and asset skills for specialist sign-off.
- Write final decisions to DECISIONS.md and update product/system documentation after release.

## Anti-patterns

Reject or correct these failure modes:

- Throwing a Figma link over the wall
- Handoff made only of screenshots and redlines
- No state or edge-case documentation
- Ambiguous source of truth
- Pixel-perfect review that ignores adaptive behavior
- Silent design changes in code
- A giant ticket with no owners or dependencies
- Analytics added after launch
- Placeholder content/assets in production
- No rollback or monitoring for risky release
- Calling unresolved major debt ‘polish’

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/design-ops-handoff/references/ACCEPTANCE-RELEASE.md`

# Acceptance and Release Evidence

Use this worksheet to create an auditable project artifact.

## Acceptance criteria

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Review environments

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Defects/change log

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Rollout/rollback

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Monitoring

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Retrospective/debt

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/design-ops-handoff/references/HANDOFF-SOURCE-MAP.md`

# Handoff Source-of-Truth Map

Use this worksheet to create an auditable project artifact.

## Scope/status

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Design/code/tokens

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Content/data

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Assets

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Analytics

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Localization/accessibility/security

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Owners

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/design-ops-handoff/references/IMPLEMENTATION-CONTRACT.md`

# Implementation Contract

Use this worksheet to create an auditable project artifact.

## Jobs/flows

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## States/rules

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Components/tokens

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Responsive/locale

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Assets/motion

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Performance/security

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Dependencies

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
