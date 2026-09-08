# HDI Skill — design-system-governance


---

## Source: `skills/design-system-governance/SKILL.md`

---
name: design-system-governance
description: "Governs design tokens, components, patterns, documentation, ownership, contribution, versioning, deprecation, migration, visual regression, and cross-brand evolution. Use when a design system must scale across teams, products, codebases, themes, or AI agents without inconsistency or accidental breaking changes."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Design System Governance

## Goal

Keep a design system coherent, useful, accessible, and evolvable as products and teams grow by making decisions, ownership, compatibility, quality, and migration explicit rather than allowing libraries to become unreviewed collections of components.

## Use this skill when

- Tokens or components are duplicated, inconsistent, undocumented, or drifting between design and code.
- Several products, brands, teams, or repositories share a system.
- A major component or token change may break consumers.
- Contributions, ownership, releases, deprecation, or migration lack a defined process.
- AI agents must extend the system without inventing one-off patterns.

## Do not use this skill when

- A single component needs to be designed or implemented inside already-governed rules; use `component-system`.
- The project has no repeated patterns yet and governance overhead would exceed benefit.
- The request is only a visual rebrand; first define the new brand and token architecture.

## Required reading and evidence

1. `DESIGN.md`
2. `DECISIONS.md`
3. `QUALITY-GATES.md`
4. `Current token sources and generated artifacts`
5. `Figma libraries, code packages, Storybook/docs, release history, and consumer inventory`
6. `Accessibility, localization, brand, and browser support requirements`
7. `Existing contribution and ownership policies`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Govern decisions and compatibility, not merely files.
- There must be one declared source of truth per token or component layer.
- Use semantic tokens to express purpose; raw values alone do not create a system.
- A design-system component earns its place through repeated product need and stable behavior.
- Avoid both premature abstraction and uncontrolled one-off divergence.
- Accessibility, localization, states, and responsive behavior are part of component contracts.
- Versioning and deprecation must describe consumer impact and migration, not just release notes.
- Automated checks support judgment; they do not replace product-context review.
- Multi-brand support should isolate shared behavior from brand expression.
- Every exception needs an owner, rationale, scope, and expiration or review condition.

## Step 1 — Inventory the system and consumers

- Map token sources, aliases, generated formats, component packages, Figma libraries, documentation, themes, products, repositories, and owners.
- Identify duplicate tokens/components, private forks, one-off overrides, outdated consumers, and inaccessible variants.
- Measure actual usage before removing or redesigning an API.
- Classify system maturity and decide whether the priority is consolidation, stabilization, expansion, or migration.
- Record unsupported or orphaned artifacts explicitly.

## Step 2 — Define architecture and sources of truth

- Separate primitive, semantic, component, motion, data-viz, and brand/theme token layers.
- Declare where tokens are authored, transformed, validated, distributed, and consumed.
- Define component taxonomy: foundations, primitives, composites, patterns, templates, and domain-specific modules.
- Separate behavior primitives from visual identity and product-specific composition.
- Document naming, aliases, modes, fallback behavior, and platform mappings.

## Step 3 — Establish ownership and contribution

- Assign accountable owner and subject-matter reviewers for foundations, accessibility, localization, content, engineering, and brand.
- Create contribution stages: problem evidence, consumer demand, proposal, prototype, review, pilot, documentation, release, adoption.
- Require real use cases and stress states before accepting a generalized component.
- Define decision rights, response expectations, escalation, and exception process.
- Store architecture decisions and rejected alternatives in a durable log.

## Step 4 — Define component and token contracts

- For each component, document purpose, non-use, anatomy, API/props, variants, states, content rules, responsive behavior, RTL, accessibility, dependencies, and examples.
- For each token, document semantic purpose, allowed use, contrast/interaction dependencies, brand modes, and migration impact.
- Use composition APIs instead of growing giant components with mutually incompatible boolean props.
- Define escape hatches narrowly and instrument or review their use.
- Include content and data edge cases, not only polished default stories.

## Step 5 — Version, deprecate, and migrate safely

- Classify changes as additive, corrective, behavior-changing, visually breaking, API breaking, or security/accessibility critical.
- Create release notes with affected consumers, before/after, rationale, migration steps, codemods where feasible, and deadline.
- Mark deprecation in design, docs, code, and telemetry consistently.
- Provide a supported overlap period for significant migrations and identify owners for high-risk consumers.
- Remove only after usage evidence and migration gates pass.

## Step 6 — Automate quality and regression evidence

- Run schema/token validation, linting, type tests, unit/integration tests, accessibility checks, visual regression, RTL/localization stories, and browser/device coverage.
- Maintain representative stories for every state, size, theme, and high-risk content case.
- Review visual diffs with declared baselines and explain intentional changes.
- Track adoption, exceptions, forks, defects, support burden, and migration progress.
- Prevent generated artifacts from being edited manually when the source lies elsewhere.

## Step 7 — Review health and evolve deliberately

- Run periodic health reviews using adoption, usability, defect, accessibility, performance, and contribution evidence.
- Retire patterns that no longer serve product needs rather than preserving them for completeness.
- Pilot major changes in representative consumers before system-wide rollout.
- Keep system principles stable while allowing product-specific patterns outside the core when justified.
- Publish a current roadmap and mark experimental components visibly.

## Required outputs

- System and consumer inventory
- Token/component architecture
- Source-of-truth map
- Ownership and contribution model
- Component/token contract template
- Versioning and change policy
- Deprecation and migration plan
- Regression test matrix
- Exception register
- System health metrics and roadmap

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every shared artifact has an owner and declared source of truth.
- Breaking and visually significant changes include consumer impact and migration instructions.
- Core components cover required states, accessibility, responsive, and RTL/localization behavior.
- A generalized component has evidence from repeated real use cases.
- Visual/token diffs are reviewable and intentional changes are documented.
- Deprecated APIs are discoverable and usage is measured before removal.
- Exceptions are scoped and do not silently become permanent forks.
- Current W3C design-token drafts are treated as evolving specifications rather than falsely claimed as final standards.

## Handoffs

- Send component design and implementation details to `component-system` and `design-to-code`.
- Send brand/theme rules to `brand-world-building` and `color-imagery`.
- Send accessibility and localization contracts to their specialist skills.
- Send regression evidence to `visual-qa-refinement`.
- Send adoption and exception events to `product-metrics-instrumentation`.
- Send asset families governed by the system to `asset-production-direction`.

## Anti-patterns

Reject or correct these failure modes:

- A component library with no ownership
- Tokens that are only a list of hex values
- Editing generated files by hand
- Giant universal components with dozens of booleans
- Breaking visual releases labeled as patch changes
- Deprecation without migration path
- Adding every one-off product pattern to the core
- Forking the library per team
- Visual snapshots approved without inspecting diffs
- Claiming draft specifications are final standards

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/design-system-governance/references/CONTRIBUTION-AND-CHANGE.md`

# Contribution and Change Policy

Use this worksheet to create an auditable project artifact.

## Admission criteria

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Review stages

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Decision rights

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Versioning

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Deprecation

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Migration

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Exceptions

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/design-system-governance/references/SYSTEM-INVENTORY.md`

# Design System Inventory

Use this worksheet to create an auditable project artifact.

## Sources of truth

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Tokens

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Components and patterns

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Consumers

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Owners

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Duplicates and forks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/design-system-governance/references/SYSTEM-QUALITY-MATRIX.md`

# Design System Quality Matrix

Use this worksheet to create an auditable project artifact.

## States and variants

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Accessibility

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Responsive/RTL/localization

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Visual regression

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Performance

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Adoption and health

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
