# HDI Skill — ux-architecture


---

## Source: `skills/ux-architecture/SKILL.md`

---
name: ux-architecture
description: Designs information architecture, navigation, user journeys, forms, screen anatomy, task priority, permissions, and loading-empty-error-success states. Use before styling dashboards, SaaS products, mobile apps, onboarding, booking, checkout, admin tools, or any interface where usability and workflow structure matter.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# UX Architecture

## Goal

Create an interface structure that helps the right user complete the right job with clear priority, predictable navigation, complete states, and safe recovery. Visual design must reinforce this architecture rather than disguise weak structure.

## Use this skill when

- Building or redesigning task-heavy products.
- Defining navigation, screen hierarchy, onboarding, booking, checkout, setup, or forms.
- A dashboard has too many pages, cards, tabs, metrics, or overlapping concepts.
- Mobile behavior is unclear.
- Permissions, branches, roles, statuses, or state transitions affect what users can do.
- A marketing page requires narrative architecture and conversion sequencing.

## Required inputs

Read `PRODUCT.md`, `CONTENT.md`, `DECISIONS.md`, available analytics/research, current routes, permissions, data models, and representative screens. Mark unsupported assumptions.

## Step 1 — Define the experience unit

State:

- User.
- Trigger.
- Job.
- Context and frequency.
- Desired outcome.
- Risk of failure.
- Evidence of success.

Do not begin with a list of screens. Screens are consequences of tasks and information.

## Step 2 — Prioritize jobs

Create a P0/P1/P2 job table.

- **P0:** the experience fails without it.
- **P1:** important but not required in every session.
- **P2:** infrequent, supporting, or administrative.

Place P0 information and actions where they are easiest to scan and reach. Do not give every feature equal visual and navigational weight.

## Step 3 — Map the journey

For each P0 journey, document:

1. Entry conditions.
2. Trigger.
3. Required information.
4. Steps.
5. Decisions.
6. Validation.
7. Permissions.
8. Loading or delay.
9. Error cases.
10. Recovery.
11. Success confirmation.
12. Next useful action.

Use `references/JOURNEY-TEMPLATE.md`.

## Step 4 — Design the information architecture

Group by user mental model and task relationship, not implementation tables or company departments.

For every destination, define:

- User question answered.
- Primary action.
- Frequency.
- Parent and siblings.
- Required context.
- Permission visibility.
- Mobile access path.

### Naming test

Navigation labels should be:

- Familiar to the user.
- Distinct from siblings.
- Short enough to scan.
- Consistent in grammatical form.
- Translatable without losing meaning.

Avoid two destinations that users cannot explain as different.

## Step 5 — Define screen anatomy

For every important screen, identify:

- Context: where am I and which entity/branch/account is active?
- Status: what is happening now?
- Priority: what requires attention?
- Primary action.
- Secondary actions.
- Data or evidence.
- Filters and scope.
- Help or explanation.
- State feedback.

Do not start with a collection of cards. Choose modules based on user questions.

## Step 6 — Build the state matrix

Every data-bearing or interactive module should consider:

- Initial.
- Loading.
- Empty first-use.
- Empty filtered.
- Partial data.
- Success.
- Recoverable error.
- Blocking error.
- Offline or stale data, when relevant.
- Permission denied.
- Disabled or unavailable.
- Destructive confirmation.
- Undo or recovery.

Use `references/STATE-MATRIX.md`.

## Step 7 — Forms and progressive disclosure

- Ask only for information needed now.
- Group fields by user intent.
- Put explanation near the decision it supports.
- Validate at the right time; do not wait until the final submit for obvious errors.
- Preserve entered data after recoverable failures.
- Use conditional fields only when their trigger is understandable.
- Make optional status explicit.
- For long forms, show progress based on real steps.
- Provide a clear review stage for consequential actions.

## Step 8 — Navigation and context

Define:

- Global navigation.
- Local navigation.
- Entity/branch/account switchers.
- Breadcrumb or back behavior.
- Search.
- Notifications.
- Persistent context.
- Deep-link behavior.
- Mobile navigation.

Do not mix scope switching with content filtering without clear labels and persistence.

## Step 9 — Marketing narrative architecture

For landing pages, map the user's decision journey:

1. Recognition: is this for me?
2. Problem understanding.
3. Reframe or point of view.
4. Solution method.
5. Product proof.
6. Fit and implementation.
7. Commercial truth.
8. Objection handling.
9. Action.

Do not force this exact sequence when evidence supports a different one. One section should have one dominant communication job.

## Step 10 — Mobile task architecture

Do not merely hide desktop features. Decide:

- Which tasks are essential on mobile.
- Which information is summarized first.
- Which actions become persistent.
- Which tables transform into lists, drill-down, or focused views.
- Which interactions depend on hover and need alternatives.
- How keyboard, camera, calls, maps, and native share may help.

## Step 11 — Validate with task scenarios

Create concrete scenarios:

- New user.
- Returning expert.
- User with no data.
- User with high data volume.
- User with restricted permission.
- Error or interruption.
- Small-screen user.
- Arabic and English user where relevant.

Walk each scenario through the architecture before visual polish.

## Required output

- Experience definition.
- Job-priority table.
- Journey maps.
- Information architecture or route map.
- Navigation model.
- Screen/section anatomy.
- State matrix.
- Form logic.
- Mobile task plan.
- Assumptions and open questions.
- Acceptance scenarios.

## Failure modes

- Designing screens from a feature list.
- Equal priority for all metrics and actions.
- Navigation based on database names.
- Empty state treated as “No data” only.
- Hidden permissions discovered only after an action.
- Filters that lose scope or reset unexpectedly.
- Forms that erase work after errors.
- Dashboard layout optimized for a screenshot, not repeated use.
- Landing-page sections chosen from a template instead of the buyer's decision sequence.

## Completion condition

The architecture is ready for visual design when P0 journeys are complete, navigation and scope are understandable, key screens have anatomy, required states are defined, and mobile behavior is intentional.

---

## Source: `skills/ux-architecture/references/JOURNEY-TEMPLATE.md`

# Journey Template

## Journey name

- User:
- Trigger:
- Frequency:
- Context:
- Desired result:
- Business result:

## Flow

| Step | User question | Information needed | Action | System response | Error/recovery | Permission |
|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |

## Completion

- Success confirmation:
- Next useful action:
- Data created or changed:
- Notification or audit requirement:

## Stress cases

- No data:
- High volume:
- Slow network:
- Interrupted session:
- Restricted role:
- Mobile:
- Arabic/English:

---

## Source: `skills/ux-architecture/references/STATE-MATRIX.md`

# State Matrix

| Component or screen | Initial | Loading | Empty-first | Empty-filtered | Partial | Success | Recoverable error | Blocking error | Permission | Disabled | Offline/stale |
|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |  |

For each state define:

- What the user sees.
- What the user can do.
- What information is preserved.
- What the system announces accessibly.
- How the state resolves.
