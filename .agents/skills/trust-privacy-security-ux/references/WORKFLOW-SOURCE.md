---
name: trust-privacy-security-ux
description: "Designs understandable permissions, consent, data visibility, authentication, recovery, destructive actions, audit trails, billing/security messages, and high-stakes confirmations. Use when users must decide who can access data, understand consequences, recover safely, or trust sensitive workflows without fear-based or manipulative design."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Trust, Privacy, and Security UX

## Goal

Enable users to make informed, safe decisions about identity, access, data, money, and irreversible actions while reducing accidental harm, preserving agency, and explaining protection without overwhelming or frightening them.

## Use this skill when

- The interface handles sign-in, recovery, permissions, roles, consent, private data, payments, or security settings.
- An action is destructive, irreversible, high-cost, legally significant, or affects other people.
- Users need to understand data collection, visibility, retention, sharing, or audit history.
- A product needs secure defaults, step-up verification, warnings, or incident/recovery messaging.
- Trust is failing because the UI hides consequences or uses generic security language.

## Do not use this skill when

- The task is a penetration test, cryptographic design, or legal opinion; involve qualified specialists.
- The interface contains no meaningful trust, privacy, security, permission, billing, or irreversible decision.
- The request is to conceal collection, weaken consent, evade policy, or make cancellation/recovery harder.

## Required reading and evidence

1. `PRODUCT.md`
2. `Roles, permissions, data-flow, retention, billing, and security policies`
3. `Threat model and risk classification from qualified owners`
4. `User research and support incidents`
5. `Legal/compliance-approved text where required`
6. `Current authentication/recovery/destructive flows`
7. `Localization, accessibility, and audit requirements`
8. `DECISIONS.md`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Use least surprise, least privilege, and safe defaults.
- Explain user-visible consequences in plain language; do not expose unnecessary implementation jargon.
- Ask for sensitive data or permissions at the point of need with a real reason.
- Consent must be specific, informed, reversible where applicable, and not bundled through coercion.
- Warnings should be proportional to risk and actionable, not constant alarm noise.
- High-risk confirmation should verify intent and target, not merely add a generic modal.
- Recovery is part of security; dead ends push users toward unsafe workarounds.
- Show current scope, actor, object, time, and status for permission and audit decisions.
- Do not claim security or privacy guarantees beyond verified controls and policy.
- Accessibility and localization failures can become security failures when users misunderstand actions.

## Step 1 — Model actors, data, permissions, and risk

- Map actors, roles, resources, actions, visibility, data categories, sensitivity, retention, sharing, and system boundaries.
- Identify who could be harmed by error, abuse, disclosure, lockout, fraud, or irreversible change.
- Classify actions by reversibility, detectability, blast radius, frequency, and urgency.
- Separate policy truth, technical enforcement, and interface explanation.
- Stop and escalate when policy or control truth is unknown.

## Step 2 — Design permission and consent moments

- Request the minimum scope at the moment it becomes relevant.
- Explain why access is needed, what changes, who can see/use it, duration, and how to revoke.
- Show current permission state and consequences of granting/denying.
- Provide granular choices when materially meaningful; avoid fake granularity that cannot be enforced.
- Keep optional consent separate from core service access unless genuinely necessary.

## Step 3 — Design authentication and recovery

- Choose authentication steps proportional to risk and context.
- Design clear account, device, session, and verification states.
- Provide recovery that balances identity assurance with realistic user capability and local channel availability.
- Protect against account enumeration and oversharing while keeping error/recovery guidance useful.
- Support lost device/credential, expired link/code, rate limit, suspicious activity, and support escalation states.

## Step 4 — Design destructive and high-stakes actions

- State the exact object, scope, consequence, downstream effects, and reversibility before action.
- Use friction selectively: re-authentication, typed confirmation, preview, delay/undo, second approver, or review step based on risk.
- Differentiate delete, archive, cancel, revoke, refund, reset, and deactivate accurately.
- Preserve context and provide receipt/audit evidence after completion.
- Design partial failure and recovery when an operation affects many items.

## Step 5 — Design data visibility and auditability

- Show who can see what, why, and under which role or sharing rule.
- Provide understandable activity history for meaningful access and changes.
- Represent pending, inherited, temporary, expired, revoked, and conflicting permission states.
- Expose data export, correction, deletion, retention, and contact routes where applicable and approved.
- Redact sensitive values in logs, URLs, screenshots, analytics, and support surfaces.

## Step 6 — Write trust and incident communication

- Use verified, specific language that distinguishes prevention, detection, limitation, and response.
- Avoid generic lock/shield decoration as substitute for real explanation.
- For incidents or risk notices, state what happened/was detected, affected scope if known, required action, support path, and update status without speculation.
- Keep reassurance honest and avoid fear-based upselling.
- Localize terms carefully because legal/security words may not have direct colloquial equivalents.

## Step 7 — Validate misuse, accessibility, and recovery

- Run abuse/misuse and accidental-error scenarios with security/privacy owners.
- Test keyboard, screen reader, cognitive clarity, low literacy, mixed language, mobile, and interrupted-session behavior.
- Test denial, cancellation, revocation, timeout, expired, duplicate, offline, partial failure, and support handoff.
- Verify UI state against actual backend enforcement and audit behavior.
- Record residual risks and owner decisions instead of masking them with copy.

## Required outputs

- Actor/resource/data/permission map
- Risk and reversibility matrix
- Consent and permission contract
- Authentication and recovery state model
- Destructive-action safeguards
- Visibility and audit-trail design
- Trust/security content system
- Incident and recovery communication
- Misuse/accessibility/localization test plan
- Residual-risk and escalation register

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Policy, technical enforcement, and UI wording agree.
- Sensitive permissions/data requests are necessary, scoped, explained, and revocable where applicable.
- High-risk actions identify target, scope, consequence, and recovery or irreversibility.
- Authentication and recovery cover realistic failure states without exposing sensitive information.
- No deceptive consent, coercive cancellation, fear-based upsell, or unverifiable security claim remains.
- Sensitive data is minimized in URLs, logs, analytics, screenshots, and support views.
- Accessibility and localization have been tested for critical decisions.
- Qualified security/privacy/legal owners review areas outside design authority.

## Handoffs

- Send policy/technical gaps to security, privacy, legal, billing, and backend owners.
- Send flow and state requirements to `ux-architecture` and `component-system`.
- Send plain-language and disclosure needs to `content-information-design`.
- Send locale-specific legal/commercial behavior to `localization-culturalization`.
- Send event/redaction needs to `product-metrics-instrumentation`.
- Validate sensitive flows through `prototype-usability-testing` and `visual-qa-refinement`.

## Anti-patterns

Reject or correct these failure modes:

- A generic ‘Are you sure?’ modal
- Prechecked consent
- Bundling optional marketing permission with service access
- Security theater icons without explanation
- Fear-based upgrade messages
- Recovery dead ends
- Detailed authentication errors that reveal accounts
- Sensitive tokens or personal data in URLs/analytics
- Making delete/cancel visually hidden
- UI permissions that do not match backend enforcement
- Claiming ‘100% secure’ or equivalent unverifiable guarantees

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
