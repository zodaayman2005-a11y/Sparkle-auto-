# HDI — Quality Rubrics Evals


---

## Source: `evals/COMPARISON.template.md`

# Eval Comparison — [Case ID]

- Model/host:
- Date:
- Baseline context:
- Skill-assisted context:
- Target skill version:

## Hard assertions

| Assertion | Baseline | Skill | Evidence |
|---|---|---|---|
|  | Pass/Fail | Pass/Fail |  |

## Quality assertions

| Assertion | Baseline 0–2 | Skill 0–2 | Evidence |
|---|---:|---:|---|
|  |  |  |  |

## Pairwise verdict

- Better outcome:
- Better process:
- Better design quality:
- Better efficiency:
- New regression:
- Triggering accuracy:

## Decision

Keep / revise instructions / revise description / split skill / remove change.

## Next edit

[Smallest change likely to improve the next run.]

---

## Source: `evals/RUNBOOK.md`

# Skill Evaluation Runbook

## Purpose

A skill is useful only if it improves observable behavior. Compare the same model and task with and without the skill in a clean context.

## A/B protocol

### Run A — Baseline

- Use a clean project copy.
- Do not mention or expose the target skill.
- Give the exact case prompt and fixtures.
- Record output, commands, tokens/time when available, and screenshots.

### Run B — Skill-assisted

- Reset to the same clean project copy.
- Expose and explicitly activate the target skill.
- Give the exact same prompt and fixtures.
- Record the same evidence.

### Optional Run C — Implicit routing

- Expose the skill but do not name it.
- Test whether the description triggers correctly.

## Evaluate four dimensions

1. **Outcome:** Did the requested artifact or decision succeed?
2. **Process:** Did the agent follow the intended gates and use the right evidence?
3. **Style/quality:** Did the result meet design and UX criteria?
4. **Efficiency:** Did the skill reduce thrashing without unacceptable context or execution cost?

## Scoring

- Hard assertions are pass/fail.
- Quality assertions use 0–2: absent, partial, strong.
- Compare pairwise before assigning an overall score.
- Record regressions as seriously as improvements.

## Keep or revise a skill

Keep the change when it improves target outcomes across representative cases and does not create broad over-triggering or harmful rigidity. Revise descriptions when activation is wrong; revise instructions when execution is wrong; move heavy content to references when context cost is high.

## Evidence folder

For each run store:

```text
evals/results/<case-id>/<date>/
├── baseline/
├── skill-assisted/
├── implicit-routing/
├── comparison.md
└── screenshots/
```

## v1.2 coverage rule

Every v1.2 specialist skill has three cases:

- **Positive:** intended complete use.
- **Boundary:** proves the skill does not over-trigger or create unnecessary process.
- **Adversarial:** rejects invalid shortcuts while preserving a practical path to the legitimate objective.

A skill is not considered mature merely because its positive case passes. Boundary and adversarial regressions can make the overall agent worse.

---

## Source: `examples/sparkle-auto-mini/QUALITY-GATES.md`

# Sparkle Auto — Quality Gates

## Product truth

- [ ] No fake feature, integration, metric, review, testimonial, or guarantee.
- [ ] Every real product claim is supported by the approved product truth.
- [ ] Every product screen presented as real is an approved Sparkle Auto screenshot.

## Brand and visual identity

- [ ] Palette stays inside the approved blue, navy, quiet blue, white, and semantic warning system.
- [ ] Owner identity, wardrobe, body proportions, and rendering style do not drift.
- [ ] The result does not collapse into generic blue SaaS design.
- [ ] Every section has one primary visual message and one focal contract.
- [ ] Product proof is large enough to read and understand.

## Arabic, English, and responsive behavior

- [ ] Arabic desktop and mobile reviewed.
- [ ] English desktop and mobile reviewed.
- [ ] Numbers, phone fields, prices, dates, and mixed product names are readable.
- [ ] Directional assets are selected correctly; embedded text and logos are not mirrored.
- [ ] Mobile composition preserves promise, proof, and primary action without becoming a compressed desktop collage.
- [ ] No unintentional horizontal overflow at 360, 390, 768, 1024, and 1440 widths.

## UX and conversion

- [ ] Primary CTA is obvious without overwhelming every section.
- [ ] WhatsApp action is identifiable and usable on touch.
- [ ] Qualification form labels, validation, loading, success, and error behavior exist.
- [ ] Navigation and sticky behavior do not cover content or trap keyboard users.

## Accessibility and motion

- [ ] Essential text and controls meet the project contrast requirements.
- [ ] Keyboard sequence and visible focus are verified.
- [ ] Semantic headings and landmarks are coherent.
- [ ] Touch targets and input ergonomics are reviewed on a real mobile viewport.
- [ ] Reduced motion provides a complete equivalent experience.
- [ ] Pinned scenes do not block reading, scrolling, resizing, or mobile use.

## Approval

- [ ] No blocking findings.
- [ ] No unresolved major findings.
- [ ] Master score is at least 88/100.
- [ ] No category falls below its category minimum.
- [ ] Final evidence includes rendered screenshots for required languages and viewports.

---

## Source: `project-templates/QUALITY-GATES.template.md`

# QUALITY-GATES.md — {{PROJECT_NAME}}

Status: Active  
Minimum approval score: **88/100** unless explicitly changed in `DECISIONS.md`.

## Hard gates

A single failed hard gate blocks final approval.

### Truth and integrity

- [ ] Claims, pricing, metrics, testimonials, features, and integrations are sourced.
- [ ] Real product surfaces use real screenshots or clearly labeled prototype data.
- [ ] No placeholder copy or asset remains in production scope.


### Research and originality — when live research informs the direction

- [ ] Research questions name the decisions they affect.
- [ ] Accepted sources have provenance, retrieval date, state/viewport/locale where relevant, evidence role, limitations, and confidence.
- [ ] Search snippets, thumbnails, Tier-D leads, and unattributed reposts are not treated as evidence.
- [ ] Current facts, product behavior, standards, and technical claims use appropriate primary or official sources where available.
- [ ] The source set passes its configured diversity and concentration thresholds.
- [ ] Web content was treated as untrusted; no secret/private data, embedded instructions, unknown code, sign-in, form submission, or unauthorized external action entered the workflow.
- [ ] Observations, source claims, inferences, principles, and adaptations are distinguishable.
- [ ] No single source acts as the hidden template.
- [ ] Source-owned copy, assets, product UI, distinctive geometry, and signature interaction are not reused without permission.
- [ ] A source-to-decision map and originality audit support the selected direction.

### Functional

- [ ] Primary user journey succeeds.
- [ ] Links, forms, controls, menus, dialogs, and navigation work.
- [ ] Loading, empty, success, error, disabled, and permission states exist where relevant.
- [ ] No uncaught console error blocks the experience.

### Responsive

- [ ] No unintended horizontal overflow at required widths.
- [ ] Layout is recomposed rather than merely shrunk.
- [ ] Content stress cases do not break controls or hierarchy.
- [ ] Critical tasks remain usable on the smallest supported viewport.

### Arabic, RTL, and localization

- [ ] Arabic and English are reviewed independently when both are supported.
- [ ] Mixed-direction numbers, phones, prices, dates, and identifiers remain readable.
- [ ] Arrows, progress, timelines, icons, and motion use intentional direction logic.
- [ ] Arabic text does not receive inappropriate Latin letter spacing.

### Accessibility

- [ ] Semantic structure and headings are logical.
- [ ] Keyboard navigation and focus order are correct.
- [ ] Focus indicators are visible.
- [ ] Controls have accessible names, roles, and states.
- [ ] Text and essential UI meet the project's contrast requirements.
- [ ] Reflow and zoom remain usable.
- [ ] Touch targets meet the project's minimum size.
- [ ] Reduced-motion experience is defined and tested.

### Performance

- [ ] Images and media are correctly sized and lazy-loaded where appropriate.
- [ ] Advanced effects have a loading, mobile, and fallback strategy.
- [ ] No large dependency is added for a trivial effect.
- [ ] The experience remains responsive during interaction.

### Design-system integrity

- [ ] Approved tokens are used consistently.
- [ ] Component variants cover real states.
- [ ] One-off values are justified or promoted into the system.
- [ ] Existing design-system contracts are not silently replaced.

## Scored rubric

| Category | Weight | Minimum category score |
|---|---:|---:|
| Concept and distinctiveness | 15 | 11 |
| Composition and hierarchy | 15 | 11 |
| Typography and content | 15 | 11 |
| UX clarity and task efficiency | 15 | 11 |
| Brand coherence | 10 | 7 |
| Color, imagery, and depth | 10 | 7 |
| Motion and interaction | 10 | 7 |
| Responsive, RTL, and accessibility | 10 | 8 |

No category may be rescued by unrelated strengths. A visually impressive page with weak usability still fails.

## Severity

- **Blocking:** prevents task completion, violates truth, creates serious accessibility failure, breaks required viewport/language, or contradicts a locked decision.
- **Major:** materially harms hierarchy, comprehension, consistency, conversion, task speed, or brand distinction.
- **Minor:** polish issue that does not materially block the experience.

## Evidence required

- [ ] Full-page screenshots for required viewports.
- [ ] Critical interaction crops or recordings.
- [ ] Language-mode evidence.
- [ ] State matrix results.
- [ ] Hard-gate checklist.
- [ ] Score with reasons and examples.
- [ ] Remaining limitations.

---

## Source: `rubrics/ANTI-GENERIC-AUDIT.md`

# Anti-Generic Audit

Mark each as **Absent**, **Justified**, or **Unjustified**. A justified pattern needs a product/brand purpose and bounded use.

| Pattern | Status | Evidence/reason | Replacement or control |
|---|---|---|---|
| Centered generic hero |  |  |  |
| Blue-purple gradient default |  |  |  |
| Everything in rounded cards |  |  |  |
| Three equal feature columns |  |  |  |
| Icon tile over every heading |  |  |  |
| Excessive pills/badges |  |  |  |
| Gradient text as emphasis |  |  |  |
| Tiny low-contrast copy |  |  |  |
| Floating fake dashboard |  |  |  |
| Generic stock SaaS illustration |  |  |  |
| Random blobs/sparkles |  |  |  |
| Same radius everywhere |  |  |  |
| Glassmorphism without material logic |  |  |  |
| Same fade-up everywhere |  |  |  |
| Default component-library appearance |  |  |  |
| Desktop simply shrunk on mobile |  |  |  |
| Mechanical RTL mirror |  |  |  |

## Final diagnostic

- Could the brand name be replaced without changing the layout?
- Does the design have one visual verb or spatial rule unique to its concept?
- Are the strongest visual decisions connected to product truth?
- Which repeated pattern is doing the most unearned work?

---

## Source: `rubrics/HARD-GATES.md`

# Master Hard Gates

A failed hard gate blocks final approval.

## Truth

- [ ] Product features and availability match `PRODUCT.md`.
- [ ] Pricing, trial, guarantee, metrics, testimonials, and claims are sourced.
- [ ] Product UI presented as real is real.
- [ ] Prototype data is labeled and excluded from production claims.
- [ ] No placeholder copy or unauthorized asset remains.

## Primary outcome

- [ ] The primary task or conversion is clear.
- [ ] The P0 journey succeeds end to end.
- [ ] Success is confirmed and the next state is understandable.
- [ ] Recoverable failures preserve user work.

## Interaction and states

- [ ] Controls work with the required input methods.
- [ ] Default, focus, disabled, loading, error, and success states exist where relevant.
- [ ] Destructive actions have safe confirmation or undo according to product rules.
- [ ] Permission restrictions are visible before or at the relevant decision.

## Responsive

- [ ] No unintended horizontal overflow.
- [ ] Small-screen layouts are intentionally recomposed.
- [ ] Long content does not obscure controls or essential information.
- [ ] The smallest supported viewport can complete its selected P0 tasks.

## RTL and localization

- [ ] Arabic and English are reviewed independently when supported.
- [ ] Mixed-direction data is readable.
- [ ] Direction-sensitive icons, timelines, navigation, assets, and motion follow an explicit rule.
- [ ] Arabic text does not use inappropriate Latin letter spacing.
- [ ] Translations do not create clipped or fixed-height failures.

## Accessibility

- [ ] Semantic landmarks and heading order are logical.
- [ ] Keyboard navigation and focus order are correct.
- [ ] Focus is visible.
- [ ] Controls have names, roles, states, labels, and error relationships.
- [ ] Contrast meets the project requirement.
- [ ] Information is not communicated by color alone.
- [ ] Zoom/reflow remains usable.
- [ ] Reduced-motion mode preserves meaning and task feedback.

## Performance and resilience

- [ ] The interface remains responsive during primary interactions.
- [ ] Media is sized and loaded intentionally.
- [ ] Advanced effects have mobile, reduced-motion, no-capability, and failed-load behavior.
- [ ] No large dependency is used for a trivial effect without justification.
- [ ] Critical content and action remain available when optional effects fail.

## System integrity

- [ ] Approved design tokens are used.
- [ ] Component variants cover real states and content.
- [ ] Existing design-system contracts are not silently broken.
- [ ] One-off values are justified or converted into a stable rule.

---

## Source: `rubrics/MASTER-SCORECARD.md`

# Master Design Scorecard — 100 Points

Score only after hard gates pass. Use rendered evidence and user-task evidence. Do not award points for effort.

## 1. Concept and distinctiveness — 15

### 13–15

A precise concept shapes composition, type, color, imagery, motion, and refusals. The design is recognizably tied to the product, audience, and brand and cannot be relabeled easily for unrelated companies.

### 10–12

A clear direction exists with some distinctive decisions, but several modules still fall back to common patterns.

### 6–9

Style is visible but the concept is vague or inconsistently applied. The design depends on trends more than product meaning.

### 0–5

Generic template, incoherent mixture, or direct imitation.

Questions:

- What is the concept sentence?
- Which visible decisions prove it?
- What does this design deliberately refuse?
- Could five competitors use it unchanged?

## 2. Composition and hierarchy — 15

### 13–15

Primary scan path is immediate; visual mass, grid, whitespace, scale, and section rhythm reinforce user priority. Asymmetry and exceptions have stable anchors.

### 10–12

Hierarchy is clear with a few weak density transitions, repeated modules, or imbalanced regions.

### 6–9

Several elements compete; cards and sections have equal weight; focal points shift accidentally.

### 0–5

Confused reading path, broken layout, or decoration dominates the task.

Questions:

- What is seen first, second, and third?
- Is product proof large enough?
- Does the page vary rhythm intentionally?
- Does mobile preserve the hierarchy?

## 3. Typography and content — 15

### 13–15

Type roles are semantic and expressive; real content wraps intentionally; body text is comfortable; Arabic/Latin, numerals, labels, and actions are handled natively.

### 10–12

Strong general hierarchy with isolated wrapping, measure, script, or label issues.

### 6–9

Font choice carries most of the style; hierarchy is size-only; copy is vague or translated mechanically.

### 0–5

Unreadable, clipped, misleading, or semantically confused text.

Questions:

- Are the font choices justified and licensed?
- Are Arabic and English composed separately?
- Do buttons describe outcomes?
- Do long and error states still work?

## 4. UX clarity and task efficiency — 15

### 13–15

P0 journeys are obvious, efficient, complete, safe, and recoverable. Navigation, scope, states, forms, and feedback match the user's mental model.

### 10–12

Primary tasks work with a few avoidable decisions or secondary-state gaps.

### 6–9

Interface is usable but feature-led, inconsistent, or incomplete in realistic states.

### 0–5

Primary task fails, critical scope is hidden, or the interface misleads users.

Questions:

- Can the user explain where they are and what happens next?
- Are loading, empty, error, permission, and success states complete?
- Does the design prevent and recover from mistakes?

## 5. Brand coherence — 10

### 9–10

Voice, visuals, assets, content, and interaction express one credible brand across surfaces without forcing identical density or composition.

### 7–8

Mostly coherent with isolated generic or off-brand modules.

### 4–6

Brand appears mainly through logo and color; other decisions feel borrowed.

### 0–3

Contradictory, unrecognizable, or inappropriate for the audience.

## 6. Color, imagery, and depth — 10

### 9–10

Color roles, semantic states, material model, product proof, iconography, and recurring assets are coherent, accessible, and purposeful.

### 7–8

Good system with isolated contrast, crop, consistency, or overuse issues.

### 4–6

Attractive palette but weak roles; mixed assets; fake depth; unreadable product images.

### 0–3

Misleading, inaccessible, inconsistent, or unauthorized visual content.

## 7. Motion and interaction — 10

### 9–10

Motion communicates orientation, causality, feedback, hierarchy, continuity, or story; it is interruptible, performant, and has meaningful reduced-motion behavior.

### 7–8

Mostly purposeful with a few uniform or unnecessary effects.

### 4–6

Decorative animation dominates; interactions are slow or inconsistent.

### 0–3

Motion blocks tasks, breaks state, causes accessibility risk, or lacks fallback.

## 8. Responsive, RTL, and accessibility — 10

### 9–10

Required environments feel intentionally designed; tasks, source/focus order, long content, mixed direction, touch, zoom, keyboard, and reduced motion all work.

### 7–8

Strong adaptation with isolated issues that do not block P0 tasks.

### 4–6

Mechanical stacking/mirroring, content stress failures, or accessibility gaps.

### 0–3

Required viewport, language, or access mode is broken.

## Approval rules

- Total score ≥ 88.
- No hard-gate failure.
- No category below its project minimum.
- No unresolved blocking issue.
- Major issues require resolution or explicit accepted-risk decision.

---

## Source: `rubrics/MOTION-AUDIT.md`

# Motion Audit

For every significant effect record its purpose: orientation, causality, feedback, hierarchy, continuity, story, or bounded ambient decoration.

| Effect | Trigger | Purpose | User control | Interruptible | Mobile | Reduced motion | Performance evidence | Verdict |
|---|---|---|---|---:|---|---|---|---|
|  |  |  |  |  |  |  |  |  |

## Checks

- [ ] No frequent task waits for decorative motion.
- [ ] Open/close and route transitions can reverse safely.
- [ ] Rapid repeated input does not leave invalid state.
- [ ] Staggers follow semantic groups.
- [ ] Essential content is not hover-only.
- [ ] Scroll behavior preserves normal control.
- [ ] Offscreen loops pause.
- [ ] Mobile uses an intentional alternative.
- [ ] Reduced motion preserves feedback and meaning.

---

## Source: `rubrics/PAIRWISE-COMPARISON.md`

# Pairwise Direction or Variant Comparison

Compare A and B directly. Do not score both in isolation first.

| Criterion | A wins | B wins | Tie | Evidence |
|---|---:|---:|---:|---|
| Audience recognition |  |  |  |  |
| Primary task/conversion clarity |  |  |  |  |
| Product proof |  |  |  |  |
| Brand distinction |  |  |  |  |
| Composition |  |  |  |  |
| Typography |  |  |  |  |
| Content resilience |  |  |  |  |
| Mobile |  |  |  |  |
| Arabic/RTL |  |  |  |  |
| Accessibility |  |  |  |  |
| Motion purpose |  |  |  |  |
| Performance/production risk |  |  |  |  |
| Maintainability |  |  |  |  |

## Decision

- Winner:
- Why:
- Strength from the rejected variant worth preserving as a principle:
- Elements that must not be merged because they conflict:
- Risks accepted:

---

## Source: `rubrics/README.md`

# Quality Rubrics

Use hard gates before scores. A score describes quality only after truth, function, required responsive modes, and accessibility basics are working.

The default approval threshold is 88/100 with category minimums. Projects may set a stricter threshold in `DECISIONS.md`; lowering it requires an explicit decision and accepted risk.

---

## Source: `rubrics/RTL-AUDIT.md`

# Arabic, RTL, and Bilingual Audit

## Typography

- [ ] Arabic family tested with real copy.
- [ ] No inappropriate Arabic letter spacing.
- [ ] Heading wraps are intentional in Arabic and English.
- [ ] Numeral style is explicit.
- [ ] Prices, percentages, dates, phones, IDs, URLs, and emails are readable.

## Structure

- [ ] Source and focus order remain logical.
- [ ] Navigation order follows user expectation.
- [ ] Mixed-direction strings use semantic isolation.
- [ ] Tables and forms align by meaning, not global mirroring only.

## Visual direction

- [ ] Each icon is classified as reading-direction, physical/semantic, or neutral.
- [ ] Logos and text embedded in images are not mirrored incorrectly.
- [ ] Device screenshots have correct language variants.
- [ ] Illustration gaze, object motion, and lighting remain physically credible.

## Motion

- [ ] Reading-order transitions adapt.
- [ ] Physical movement is not reversed mechanically.
- [ ] Drawers, carousels, timelines, and progress use defined direction rules.
- [ ] Reduced motion remains understandable in both directions.

## Content stress

- [ ] Long Arabic labels.
- [ ] Long English labels.
- [ ] Mixed brand/product names.
- [ ] Error and help text.
- [ ] Mobile navigation.
- [ ] 200% zoom/reflow.

---

## Source: `rubrics/STATE-COVERAGE.md`

# Interface State Coverage

| Screen/component | Initial | Loading | Empty-first | Empty-filtered | Partial | Success | Recoverable error | Blocking error | Disabled | Permission | Offline/stale | Destructive | Undo |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |  |  |  |  |  |  |

For each applicable state verify:

- [ ] Message answers what happened.
- [ ] Available action is clear.
- [ ] User work is preserved where possible.
- [ ] State change is announced accessibly.
- [ ] Visual treatment does not rely on color alone.
- [ ] Arabic and English content fit.
- [ ] Mobile remains usable.
