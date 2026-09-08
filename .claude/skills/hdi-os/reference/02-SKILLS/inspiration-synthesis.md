# HDI Skill — inspiration-synthesis


---

## Source: `skills/inspiration-synthesis/SKILL.md`

---
name: inspiration-synthesis
description: Converts researched websites, products, visual references, cultural material, and distant-domain analogies into original design territories. Use after sources have been collected and decomposed, when the agent must avoid fixation, combine multiple principles, generate genuinely different concepts, preserve provenance, and prove that the proposed direction is adaptation rather than imitation.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Inspiration Synthesis

## Goal

Transform a diverse evidence base into an original, coherent design grammar. Preserve what each source teaches while preventing a single attractive example from becoming the hidden template for the whole project.

This skill begins **after** credible sources have been collected. It does not browse for evidence and does not choose the final direction on behalf of `design-director`.

## Use this skill when

- Internet research or supplied references must become an art direction.
- The user wants a design “inspired by” one or more sites without copying.
- References are numerous, contradictory, or visually homogeneous.
- The work risks design fixation, style soup, or a near-clone.
- The team needs to explain exactly how evidence became design decisions.
- Three genuinely distinct directions must be produced from the same brief.

## Required inputs

Read:

1. Project truth files and locked decisions.
2. `RESEARCH-PLAN.md` and `RESEARCH-REPORT.md` when present.
3. `SOURCES.jsonl` and `EVIDENCE-MATRIX.md`.
4. Structured reference cards from `reference-intelligence`.
5. Competitive, trend, cultural, and user-research outputs when relevant.
6. The selected domain pack.

Do not synthesize from unattributed screenshots alone. Unknown origin and ownership are risks to record, not details to ignore.

## Core principles

1. Inspiration is a transformation process, not a similarity target.
2. Organize evidence by **principle and problem**, not by website.
3. Separate observation, inference, principle, and proposed adaptation.
4. Abstract a source one level before applying it.
5. Use multiple source families in every direction.
6. A direct competitor can teach conventions but should not define identity.
7. Distinct directions must use different conceptual engines, not cosmetic variations.
8. Originality does not mean novelty at every layer. Keep useful conventions and innovate where it creates value.
9. Preserve provenance so each design decision can be defended or reconsidered.
10. Run an explicit fixation and originality audit before recommending a direction.

## Step 1 — Normalize the evidence

Convert each relevant source into four layers:

| Layer | Question |
|---|---|
| Observation | What is visibly or behaviorally present? |
| Interpretation | Why might it work in that source’s context? |
| Transferable principle | What general rule survives without the source’s brand expression? |
| Adaptation hypothesis | How could that rule solve this project’s problem differently? |

Example:

```text
Observation: the page reveals one proof point at a time while a stable object remains pinned.
Interpretation: continuity reduces the cost of understanding a multi-step story.
Principle: preserve one spatial anchor while changing supporting evidence.
Adaptation: keep the real product device fixed while operational states reorganize around it.
```

Never jump directly from observation to “copy this layout.”

## Step 2 — Extract design grammar

For each selected reference, extract only the relevant grammar:

- Narrative model.
- Information sequence.
- Layout topology.
- Focal strategy.
- Scale relationships.
- Density and whitespace rhythm.
- Typography behavior.
- Color roles and contrast logic.
- Material/depth model.
- Image and asset system.
- Interaction model.
- Motion purpose and choreography.
- Responsive transformation.
- RTL/localization implications.
- Trust and conversion mechanisms.

Use `references/DESIGN-GRAMMAR.md`.

A grammar describes relationships and behaviors. It must not contain source-owned copy, logos, illustrations, exact geometry, or signature assets.

## Step 3 — Cluster by principle

Group evidence under decision themes such as:

- “Make operational complexity feel controllable.”
- “Create trust without fake social proof.”
- “Show real product proof at readable scale.”
- “Turn a long process into a spatial story.”
- “Keep Arabic editorial type expressive without hurting scanability.”

For each cluster, record:

- Supporting sources.
- Contradicting sources.
- Audience fit.
- Category convention or exception.
- Risks.
- Design opportunities.

Use `references/SYNTHESIS-MATRIX.md`.

## Step 4 — Break fixation deliberately

Run the de-fixation protocol before concept generation:

1. Hide source screenshots temporarily and work from written principles.
2. Name the most visually dominant source and state what must not be inherited from it.
3. Add at least one adjacent-domain and one distant-domain analogy.
4. Add one negative example that clarifies a refusal rule.
5. Generate a direction that contradicts the dominant source while solving the same user problem.
6. Change medium: translate a web pattern into an editorial, spatial, industrial, cinematic, or service metaphor.
7. Change scale, order, density, focal point, and interaction rather than only color.
8. Reopen the sources only to validate principles and provenance.

Read `references/DEFIXATION-PROTOCOL.md`.

## Step 5 — Build analogy ladders

Move between levels of abstraction:

```text
source detail → local mechanism → general principle → distant analogy → project-specific expression
```

Example:

```text
train-station departure board
→ rapidly scannable changing status
→ stable grid plus high-salience exceptions
→ car-wash operations control surface
```

Use `references/ANALOGY-LADDER.md` to prevent both literal copying and vague moodboarding.

## Step 6 — Apply transformation operators

Transform principles using one or more operators:

- **Invert** — swap foreground/background, control/chaos, reveal/conceal.
- **Reorder** — change narrative or interaction sequence.
- **Scale** — turn a micro-detail into the dominant spatial device or reduce a dominant trope to a quiet cue.
- **Subtract** — remove the expected component and solve the task through hierarchy.
- **Translate medium** — editorial to spatial, packaging to UI, signage to navigation, film titles to motion.
- **Change density** — alternate compressed operational proof with open emotional space.
- **Change metaphor** — preserve the principle but replace the source’s visual object.
- **Localize** — adapt script, reading flow, service behavior, symbols, and cultural credibility.
- **Material shift** — change from glass/digital glow to paper, blueprint, metal, fabric, foam, ceramic, or another justified world.
- **Interaction shift** — convert scroll reveal to direct manipulation, tabs, timeline, comparison, or progressive disclosure.

A transformation must improve audience fit or concept coherence, not merely make the result different.

## Step 7 — Create three synthesis territories

Produce exactly three territories for high-ambition or underspecified work. Each territory must combine at least three source families, for example:

- One functional/product source.
- One visual/craft source.
- One cultural, adjacent, or distant-domain source.

Each territory must define:

- Concept thesis.
- User and brand fit.
- Source-principle ingredients.
- Narrative and layout topology.
- Focal system.
- Typography strategy.
- Color/material/imagery model.
- Interaction and motion model.
- Responsive and RTL transformation.
- What remains conventional for usability.
- What becomes distinctive.
- Risks and production complexity.
- Refusal rules.
- Evidence traceability.

Two territories fail the difference test unless at least four of these change materially: narrative, topology, focal point, typography behavior, image system, material model, motion model, density/rhythm.

## Step 8 — Run the originality audit

For every territory, answer:

- Can a reviewer identify one source as the page template?
- Does any section preserve the same distinctive hierarchy, geometry, copy role, asset placement, and motion sequence as a source?
- Are source-owned assets, logos, illustrations, screenshots, or proprietary UI being reused without permission?
- Does the concept depend on a signature interaction associated with one work?
- Is the direction merely a style collage with no unifying thesis?
- Could the same direction be relabeled for five unrelated brands?
- Are category conventions retained only where they improve comprehension?
- Can every borrowed principle be described without naming the original website?

Use `references/ORIGINALITY-AUDIT.md`. Any high-risk answer blocks handoff.

## Step 9 — Produce a source-to-decision map

For every major design choice, record:

```text
decision → user/brand reason → supporting principles → source IDs → transformation used → non-copy boundary
```

This map serves three purposes:

- It makes the design defensible.
- It makes later changes easier.
- It exposes accidental imitation before implementation.

## Required output

Produce an **Inspiration Synthesis Dossier** with:

1. Evidence scope and quality caveats.
2. Dominant patterns and contradictions.
3. Design-grammar clusters.
4. De-fixation actions taken.
5. Analogy ladders.
6. Three synthesis territories.
7. Difference-test result.
8. Source-to-decision matrix.
9. Originality audit.
10. Recommended territory and trade-offs for `design-director`.
11. Unresolved questions.
12. Proposed refusal rules for `DECISIONS.md`.

## Failure modes

- Showing a moodboard without explaining decisions.
- Using one reference for layout, type, color, images, and motion.
- Combining attractive fragments that do not share a concept.
- Calling palette changes separate directions.
- Preserving a source’s distinctive hero composition and replacing only the logo.
- Treating “inspired by” as legal or ethical permission to copy.
- Chasing novelty in navigation or forms where convention protects usability.
- Removing source links after the direction is selected.
- Using cultural motifs as decoration without meaning or local credibility.
- Ignoring mobile and RTL until implementation.

## Completion condition

Synthesis is complete when the result can be explained as a coherent project-specific grammar, every major decision has traceable evidence and a transformation rationale, no single source acts as a hidden template, three required territories are materially different, and the originality audit passes before `design-director` selects the final direction.

---

## Source: `skills/inspiration-synthesis/references/ANALOGY-LADDER.md`

# Analogy Ladder

Use this structure:

```text
source detail
→ mechanism
→ general principle
→ adjacent/distant analogy
→ project-specific expression
```

## Example

```text
airport departure board
→ stable locations with changing high-salience status
→ preserve spatial memory while updating state
→ branch operations overview
→ fixed branch rows with state exceptions and next actions
```

## Quality checks

- The final expression solves a named user or brand problem.
- The analogy changes medium or context rather than copying appearance.
- The ladder is specific enough to guide composition or behavior.
- Cultural analogies are contextualized and not stereotypical.

---

## Source: `skills/inspiration-synthesis/references/DEFIXATION-PROTOCOL.md`

# De-fixation Protocol

Run before generating final directions.

1. Identify the visually dominant source.
2. Write its transferable principles without viewing the screenshot.
3. Write five source-owned traits that must not transfer.
4. Add one adjacent-domain analogy.
5. Add one distant-domain analogy.
6. Add one negative example and convert it into a refusal rule.
7. Create an opposite-direction solution to the same user problem.
8. Change at least four: narrative, topology, focal point, type behavior, image system, material model, motion, density.
9. Reopen sources only to verify the principle and source mapping.
10. Run the originality audit.

## Warning signs

- The proposed wireframe overlays cleanly on one source.
- Source names are being used as style labels instead of principles.
- The team cannot explain a decision without saying “because that site did it.”
- All references came from the same feed, award aesthetic, or category.

---

## Source: `skills/inspiration-synthesis/references/DESIGN-GRAMMAR.md`

# Design Grammar Extraction

A design grammar records relationships and behavior rather than pixels.

## Grammar fields

- Problem solved.
- Narrative model.
- Information sequence.
- Layout topology.
- Focal contract.
- Primary anchors and counterweights.
- Scale relationships.
- Density and whitespace rhythm.
- Typography roles and behavior.
- Color roles and contrast logic.
- Material and depth model.
- Image/illustration/product-proof system.
- Interaction model.
- Motion purpose, timing, and continuity.
- Responsive transformation.
- RTL/localization transformation.
- Trust/conversion mechanism.
- Failure conditions.

## Abstraction test

A grammar is abstract enough when it remains understandable after removing the source name, brand, exact colors, copy, assets, and measurements. It is still useful only if another designer can turn it into a specific decision.

---

## Source: `skills/inspiration-synthesis/references/ORIGINALITY-AUDIT.md`

# Originality and Non-copy Audit

## Blocking checks

- One source acts as the page template.
- Distinctive composition and asset placement are substantially preserved.
- Source copy, logos, illustrations, proprietary UI, screenshots, or signature assets are reused without permission.
- A signature interaction is recreated without a project-specific reason and transformation.
- The output could plausibly be mistaken for the source brand.

Any blocking check requires redesign or explicit licensed permission.

## Quality checks

- At least three source families contribute to each territory.
- Each contribution is abstracted as a principle.
- A transformation operator and project-specific reason are recorded.
- Conventions retained for usability are identified.
- Distinctive expression emerges from product and brand truth.
- Mobile, RTL, accessibility, and performance do not depend on source assumptions.

## Source-to-decision record

| Decision | User/brand reason | Principle | Source IDs | Transformation | Non-copy boundary | Risk |
|---|---|---|---|---|---|---|

---

## Source: `skills/inspiration-synthesis/references/SYNTHESIS-MATRIX.md`

# Synthesis Matrix

Organize by design problem, not source.

| Problem/principle | Supporting source IDs | Contradictions | Audience fit | Opportunity | Risk | Candidate transformation |
|---|---|---|---|---|---|---|

## Territory ingredients

Each high-ambition territory should combine at least:

- One product/functional principle.
- One visual/craft principle.
- One adjacent, distant, or cultural principle.

Record what remains conventional for usability and what becomes distinctive for brand expression.
