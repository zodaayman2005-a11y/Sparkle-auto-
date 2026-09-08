# HDI Skill — content-information-design


---

## Source: `skills/content-information-design/SKILL.md`

---
name: content-information-design
description: "Turns complex product, service, policy, operational, or marketing information into clear message architecture, page narratives, labels, diagrams, comparisons, tables, annotations, progressive disclosure, and content models. Use when the design problem is partly one of hierarchy, comprehension, scanability, or information density."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Content and Information Design

## Goal

Make the right information understandable at the right moment, level of detail, and format so users can scan, decide, act, and recover without being buried in copy or misled by visual decoration.

## Use this skill when

- A page contains too much text or several competing messages.
- A technical, financial, operational, legal, or service explanation is hard to understand.
- A landing page needs a persuasive narrative grounded in product truth.
- A dashboard needs labels, grouping, comparison, annotation, or density strategy.
- Content must work across Arabic/English, desktop/mobile, novice/expert, or summary/detail modes.

## Do not use this skill when

- The content hierarchy and model are already locked and only copy polishing is requested.
- The main unknown is what users need; synthesize research first.
- The task is chart encoding for quantitative data; use `data-visualization` alongside this skill.

## Required reading and evidence

1. `PRODUCT.md`
2. `CONTENT.md`
3. `User research and terminology evidence`
4. `Current pages, navigation, flows, and content inventory`
5. `BRAND.md and DESIGN.md`
6. `Legal/commercial constraints and approved claims`
7. `Localization requirements and analytics when available`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Start with the user’s question or decision, not the organization’s department structure.
- One visual frame should have one dominant message even when supporting detail is rich.
- Progressive disclosure must preserve discoverability and should not hide critical conditions.
- Labels are interface controls; ambiguity creates operational cost.
- Use the representation that matches the thinking task: prose, list, steps, table, comparison, diagram, timeline, or chart.
- Do not compress complex information until meaning, exceptions, or trust is lost.
- Summary and detail should be connected through a clear information scent.
- Content hierarchy and visual hierarchy must agree.
- Write with real nouns and verbs; avoid inflated marketing abstractions and internal jargon.
- Design for content expansion, translation, missing values, errors, edge cases, and user-generated text.

## Step 1 — Inventory content and decisions

- Collect current copy, data fields, help content, claims, policies, labels, assets, and ownership.
- Mark source, approval status, freshness, legal sensitivity, and whether each item is required or optional.
- Identify the user questions, decisions, and actions each content unit must support.
- Find duplication, contradictions, orphan content, jargon, and content with no user role.
- Record missing product truth instead of filling it with persuasive fiction.

## Step 2 — Build the message and information ladder

- Define the primary promise, task, or conclusion for each page or state.
- Create a hierarchy from orientation to key answer, proof, detail, exception, and next action.
- For marketing, map awareness, problem recognition, method, proof, implementation, commercial terms, objections, and conversion only where true.
- For products, map object, status, priority, action, consequence, history, and recovery.
- Remove or sequence equal-weight messages that compete for the same attention.

## Step 3 — Choose information structures

- Use prose for explanation, bullets for independent points, steps for ordered actions, tables for precise comparison, diagrams for relationships, timelines for sequence, and charts for quantitative patterns.
- Define when a card, section, drawer, tooltip, disclosure, tab, or separate page is justified.
- Keep essential conditions visible near the decision they affect.
- For comparisons, normalize dimensions and expose missing or non-comparable values.
- For diagrams, define entities, relationships, direction, labels, legend, and accessible text equivalent.

## Step 4 — Design labels, microcopy, and annotation

- Create a controlled vocabulary using user language and domain accuracy.
- Make action labels describe the result, especially for destructive, financial, or irreversible actions.
- Write helper, validation, empty, loading, success, warning, and recovery copy as part of the state model.
- Use annotations to explain meaningful exceptions or evidence, not to decorate screenshots.
- Define terminology ownership and synonyms for search, localization, and support.

## Step 5 — Model content for reuse and variation

- Define content types, fields, relationships, required/optional rules, character guidance, localization notes, and ownership.
- Separate semantic content from presentation so the same truth can work across web, app, email, support, and campaigns.
- Define structured proof objects such as case study, testimonial, feature proof, pricing term, metric, or product screenshot with verification fields.
- Plan novice/expert and summary/detail modes without duplicating conflicting content.
- Create fallbacks for absent images, unknown data, unsupported locale, and expired content.

## Step 6 — Prototype scan paths and density

- Create low-fidelity content frames before visual polish.
- Mark first-screen answer, primary scan anchors, evidence path, action path, and deep-detail path.
- Test whether headings alone communicate the narrative.
- Check line length, chunk size, table density, annotation collision, and mobile reordering.
- Ensure visual emphasis reflects importance, not merely content length or stakeholder status.

## Step 7 — Stress-test comprehension

- Test long Arabic and English headings, pluralization, currency/date/number formats, mixed-direction data, and localized terminology.
- Test empty, partial, stale, conflicting, and error data.
- Ask representative users to explain key meaning and next action in their own words.
- Run a plain-language and ambiguity review without oversimplifying necessary precision.
- Map every major comprehension failure back to hierarchy, representation, label, content gap, or visual implementation.

## Required outputs

- Content inventory and ownership map
- User-question and decision map
- Message ladder and page narrative
- Representation decision matrix
- Controlled terminology and label system
- State and recovery copy
- Content model/schema
- Diagram/comparison/table specifications
- Scan-path and density plan
- Localization and content stress-test report

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every primary page or state has one dominant user question, answer, and action.
- Claims and proof are traceable to approved product truth.
- Critical terms and conditions are not hidden by progressive disclosure.
- Labels describe real outcomes and high-risk actions are unambiguous.
- Content model covers missing, error, long, and translated states.
- Arabic/English and mobile scan paths have been checked.
- Diagrams and non-text representations have accessible equivalents.
- No unresolved contradiction is silently published.

## Handoffs

- Send navigation, flow, and disclosure decisions to `ux-architecture`.
- Send type hierarchy to `typography-content` and layout needs to `visual-composition`.
- Send quantitative representation questions to `data-visualization`.
- Send commercial narrative and objections to `conversion-behavior-design`.
- Send locale-specific content rules to `localization-culturalization`.
- Send reusable content structures to engineering/CMS implementation through `design-to-code`.

## Anti-patterns

Reject or correct these failure modes:

- Turning every paragraph into a card
- A homepage that repeats the same claim in six forms
- Headings that are clever but not informative
- Tooltips used to hide required information
- Tables with incomparable rows or missing context
- Diagrams that only work visually
- Placeholder copy used to approve final layout
- Shrinking type to fit untranslated content
- Copying the company org chart into navigation

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/content-information-design/references/CONTENT-INVENTORY.md`

# Content Inventory and Decision Map

Use this worksheet to create an auditable project artifact.

## Content sources

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Approval and ownership

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## User questions

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Contradictions and gaps

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Required states

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/content-information-design/references/CONTENT-MODEL-AND-STRESS.md`

# Content Model and Stress Test

Use this worksheet to create an auditable project artifact.

## Types and fields

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Terminology

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Representations

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Long and translated content

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Missing/error states

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Comprehension evidence

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/content-information-design/references/MESSAGE-ARCHITECTURE.md`

# Message Architecture and Page Narrative

Use this worksheet to create an auditable project artifact.

## Primary message

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Supporting proof

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Sequence

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Scan paths

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Actions and objections

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Mobile/RTL order

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
