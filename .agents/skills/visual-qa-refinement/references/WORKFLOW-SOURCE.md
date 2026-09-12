---
name: visual-qa-refinement
description: Independently reviews rendered websites and apps, captures multi-viewport evidence, audits visual hierarchy, fidelity, usability, states, responsive behavior, Arabic RTL, accessibility, and generic AI patterns, then prioritizes fixes and repeats verification. Use before final approval, after implementation, or when a design “feels wrong” but needs a specific diagnosis.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Visual QA and Refinement

## Goal

Judge the rendered experience as an independent critic. Convert vague dissatisfaction into evidence-based findings, fix the highest-leverage root causes, and prevent a build from being called final merely because it runs or resembles the design at one viewport.

## Use this skill when

- A page or product screen has been implemented.
- Matching a reference or approved design.
- The user says the design looks weak, generic, broken, or inconsistent.
- Preparing a release or client review.
- Auditing responsive, RTL, accessibility, states, motion, or product truth.
- Comparing multiple variants.

## Independence rule

The critic must not defend implementation choices merely because it or another agent made them. Evaluate against truth files, approved direction, user tasks, rendered evidence, and quality gates.

Never use “looks good” as a conclusion without evidence.

## Required inputs

Read:

- `DECISIONS.md`.
- `PRODUCT.md`.
- `BRAND.md`.
- `DESIGN.md`.
- `CONTENT.md`.
- `MOTION.md`.
- `QUALITY-GATES.md`.
- Approved design/reference targets.
- Run instructions and relevant routes/states.

## Step 1 — Establish the review contract

Define:

- Build/commit/URL.
- Scope.
- Primary user journey.
- Primary conversion/task.
- Required viewports.
- Required languages and directions.
- Required states and fixtures.
- Reference or design target.
- Score threshold.
- Known exclusions.

Do not review an undefined moving target.

## Step 2 — Run deterministic checks

Where tooling exists, check:

- Build, types, lint, and tests.
- Console errors.
- Broken links and controls.
- Unintended horizontal overflow.
- Missing assets.
- Invalid landmarks/headings.
- Keyboard access and focus visibility.
- Accessible names/roles/states.
- Color contrast.
- Reduced-motion behavior.
- Missing required states.
- Token drift or raw one-off values when auditable.

A deterministic pass does not prove visual quality; it removes preventable failures.

## Step 3 — Capture rendered evidence

Capture full-page and critical-crop screenshots for the configured matrix. A default robust set:

- 1440px desktop.
- 1024px small desktop/tablet landscape.
- 768px tablet.
- 390px mobile.
- 360px compact mobile.
- Arabic RTL desktop and mobile.
- English LTR desktop and mobile.
- Reduced-motion state when motion is significant.

Capture interaction states or short recordings for menus, overlays, flows, and narrative motion.

Do not infer the final appearance from code or component previews alone.

## Step 4 — Review in passes

### Pass A — Truth and completeness

- Correct copy, features, pricing, data, screenshots, and assets.
- Missing or duplicated content.
- Placeholder or fake product proof.
- Correct language and direction.

### Pass B — Macro composition

- Overall silhouette.
- Focal point.
- Visual mass.
- Section rhythm.
- Container and margins.
- Product proof scale.
- Density transitions.

### Pass C — Typography and content

- Font fidelity.
- Hierarchy.
- Wrapping.
- Measure.
- Contrast.
- Arabic quality.
- Numerals and mixed-direction data.
- CTA clarity.

### Pass D — Color, imagery, and depth

- Role consistency.
- Surface hierarchy.
- Contrast peaks.
- Image crop and quality.
- Asset style consistency.
- Perspective and lighting.
- Product screenshot legibility.

### Pass E — UX and interaction

- Primary task.
- Navigation and scope.
- Forms.
- Feedback.
- Loading/empty/error/success.
- Permission behavior.
- Recovery and undo.

### Pass F — Responsive and RTL

- Recomposition.
- Source/focus order.
- Long content.
- Touch targets.
- Dense data transformation.
- Direction-sensitive assets and motion.

### Pass G — Motion and performance

- Purpose.
- Timing.
- Interruption.
- Competing movement.
- Reduced motion.
- Jank, loading, and offscreen behavior.

### Pass H — Genericity and brand distinction

- Could this be relabeled for unrelated brands?
- Are component-library defaults visible?
- Are trendy effects substituting for a concept?
- Does the direction have recognizable visual rules?

## Step 5 — Compare references or variants

When a target exists, compare in this order:

1. Missing/wrong elements.
2. Layout topology.
3. Relative scale and visual mass.
4. Typography and line breaks.
5. Spacing/alignment.
6. Color and surface hierarchy.
7. Crop/perspective/depth.
8. Motion.
9. Decoration.

For multiple variants, use pairwise comparison on specific criteria. Do not average vague impressions.

## Step 6 — Create findings

Every finding needs:

- ID.
- Severity: blocking, major, or minor.
- Viewport/language/state.
- Evidence.
- Violated truth, decision, or principle.
- User/business impact.
- Root cause.
- Required fix.
- Verification method.

Avoid feedback such as “make it more premium.”

### Severity

- **Blocking:** task failure, false product claim, broken required viewport/language, serious accessibility issue, or contradiction of a locked decision.
- **Major:** material harm to hierarchy, comprehension, conversion, task speed, brand distinction, or consistency.
- **Minor:** polish issue without material functional or strategic impact.

## Step 7 — Score honestly

Use the project rubric or default:

| Category | Weight |
|---|---:|
| Concept and distinctiveness | 15 |
| Composition and hierarchy | 15 |
| Typography and content | 15 |
| UX clarity and task efficiency | 15 |
| Brand coherence | 10 |
| Color, imagery, and depth | 10 |
| Motion and interaction | 10 |
| Responsive, RTL, and accessibility | 10 |

Do not compensate for a failing category with unrelated visual spectacle. Respect category minimums and hard gates.

## Step 8 — Prioritize root-cause fixes

Fix in this order:

1. Truth and functionality.
2. Macro structure and hierarchy.
3. Type and content.
4. Responsive/RTL/task behavior.
5. Color, assets, and depth.
6. Motion.
7. Micro-polish.

Group findings with one root cause. Example: ten spacing inconsistencies may come from missing semantic tokens rather than ten local fixes.

## Step 9 — Revise and re-capture

After fixes:

- Re-run affected deterministic checks.
- Re-capture affected viewports/states.
- Verify the exact finding.
- Check for regression in other modes.
- Update status and score.

Do not close a finding because code changed; close it because evidence passes.

## Step 10 — Final verdict

Approve only when:

- All hard gates pass.
- No blocking finding remains.
- Major findings are resolved or explicitly accepted by the decision owner.
- Score threshold and category minimums are met.
- Required evidence exists.
- Remaining limitations are documented.

## Anti-self-deception checks

- Did the reviewer inspect rendered pixels or only code?
- Were Arabic and mobile reviewed as full compositions?
- Did ideal mock data hide empty/error/long-content failures?
- Did a beautiful hero distract from a weak task or conversion path?
- Are screenshots large enough to prove the product?
- Is “premium” coming from blur, gradients, and large type only?
- Did the reviewer compare against the locked direction rather than personal taste?

## Required output

Use `references/REVIEW-REPORT.md` and produce:

- Review contract.
- Deterministic results.
- Evidence inventory.
- Findings sorted by severity.
- Scorecard with reasons.
- Fix plan by root cause.
- Recheck results.
- Final verdict and limitations.

## Failure modes

- Approving from one desktop screenshot.
- Reviewing code only.
- Vague taste feedback.
- Fixing micro-details before hierarchy.
- Ignoring states and real content.
- Treating RTL as a checkbox.
- Scoring generously because implementation was difficult.
- Closing findings without re-rendering.
- Comparing details before composition.
- Using one total score to hide a critical weak category.

## Completion condition

Review is complete when evidence covers the required experience, every blocking and major issue has a verified disposition, the score is supported by examples, and the final verdict follows the configured quality gates.
