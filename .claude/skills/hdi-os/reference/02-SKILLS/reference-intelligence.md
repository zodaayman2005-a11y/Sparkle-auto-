# HDI Skill — reference-intelligence


---

## Source: `skills/reference-intelligence/SKILL.md`

---
name: reference-intelligence
description: Decomposes selected website, app, brand, typography, motion, product, and image references into transferable design principles. Use after sources are supplied or discovered, for detailed reference-image analysis, composition and behavior benchmarking, execution matching, and transfer-versus-non-copy decisions; use web-design-research to find sources and inspiration-synthesis to combine them into original directions.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Reference Intelligence

## Goal

Turn selected references into structured evidence for design decisions. Extract why each reference works, identify what is safe to transfer as a principle, distinguish source-owned expression, and hand the analyzed evidence to `inspiration-synthesis`. This skill analyzes sources; it does not own open-web discovery or final concept combination.

## Use this skill when

- The user supplies screenshots, URLs, moodboards, competitors, or visual references.
- A current research session has selected sources that need detailed analysis.
- The user asks for a style associated with a site, studio, movement, or product.
- A team needs a benchmark for composition, typography, motion, product UX, or responsive behavior.
- The design risks becoming a collage of fashionable details.


## Boundaries and prerequisites

- Use `web-design-research` first when sources must be discovered, validated, dated, or recorded from the live web.
- Use `competitive-experience-intelligence` when the question concerns category journeys, conventions, or differentiation rather than one reference’s craft.
- Use `trend-cultural-intelligence` when recency, trend lifespan, language, script, market, or cultural credibility affects interpretation.
- Use `inspiration-synthesis` after analysis to combine principles into original territories and run de-fixation/originality checks.
- A search thumbnail or snippet is not an analyzed reference. Open the actual source or state the limitation.

## Research ethics and integrity

- Analyze; do not reproduce a source's distinctive layout, copy, brand assets, illustration, photography, code, or proprietary interaction.
- Use multiple references for synthesis.
- Treat screenshots as evidence of a specific viewport and state, not a complete system.
- Record source and context.
- Prefer official live products, design-system documentation, case studies, and primary material when studying behavior.
- Do not claim a pattern is effective merely because it is visually popular.

## Step 1 — Confirm the analysis question

Reference analysis must answer a decision, such as:

- How can this operations product communicate remote control to a low-tech owner?
- What layout topologies support dense comparison without equal cards?
- How do strong Arabic editorial pages balance large headlines and product proof?
- How can a pinned sequence explain a five-step process with a static mobile fallback?

When discovery is still required, hand the question to `web-design-research` rather than performing an unstructured gallery search.

## Step 2 — Classify needed evidence

Select only relevant evidence types:

| Evidence | Best for |
|---|---|
| Marketing sites | Narrative, conversion, brand expression, section pacing |
| Product flows | Tasks, navigation, states, forms, density, error recovery |
| Design systems | Tokens, components, behavior, accessibility, consistency |
| Editorial work | Typography, hierarchy, rhythm, art direction |
| Motion case studies | Choreography, continuity, scroll sequences, timing |
| Architecture/material/product design | Spatial and material metaphors |
| Cultural/local references | Audience familiarity, authenticity, visual language |

Do not use marketing inspiration as the sole source for a dashboard.

## Step 3 — Confirm a bounded reference set

For one direction, prefer three to seven strong references:

- One composition reference.
- One typography or editorial reference.
- One product/UX reference when behavior matters.
- One imagery/material reference.
- One motion reference when animation matters.

Add more only when a missing decision requires it. Too many references increase contradiction and imitation risk.

## Step 4 — Analyze each reference

Use `references/REFERENCE-CARD.md`. At minimum inspect:

### Context

- Surface, audience, business objective, viewport, state, language.

### Composition

- Layout topology.
- Focal point.
- Visual mass.
- Grid and breakouts.
- Whitespace.
- Overlap and edge relationships.
- Section rhythm.

### Typography

- Display/body relationship.
- Scale contrast.
- Measure and wrapping.
- Script behavior.
- Numeric treatment.

### Color and material

- Dominant, support, and accent roles.
- Surface hierarchy.
- Contrast model.
- Depth and texture.

### Imagery

- Photography, illustration, 3D, product screenshots, iconography.
- Cropping, perspective, lighting, consistency, information role.

### Interaction and motion

- Trigger.
- Start/end state.
- Purpose.
- Choreography.
- User control.
- Mobile/reduced-motion behavior when observable.

### Why it works

Tie success to hierarchy, comprehension, task speed, persuasion, identity, or emotion. Avoid “it looks clean.”

## Step 5 — Split transferable principle from owned expression

### Usually transferable as a principle

- Using scale to establish a focal point.
- Alternating dense and open sections to control pacing.
- Revealing product proof after a problem statement.
- Keeping persistent filters near a dense table.
- Using shared-object continuity to explain state change.

### Usually source-owned expression

- Exact section order and geometry.
- Brand copy.
- Custom illustrations or characters.
- Unique 3D scenes.
- Proprietary product UI.
- Distinctive motion choreography closely associated with one source.

Record both. Never hide the line between learning and copying.

## Step 6 — Build an analysis matrix for synthesis

Create a synthesis matrix:

| Decision | Source evidence | Selected principle | Adaptation to this product | Conflict/risk |
|---|---|---|---|---|
| Hero composition |  |  |  |  |
| Type behavior |  |  |  |  |
| Product proof |  |  |  |  |
| Motion |  |  |  |  |
| Mobile |  |  |  |  |

The matrix is an input to `inspiration-synthesis`; do not quietly turn one reference into the design template or merge unrelated “best parts.”

## Step 7 — Convert references into rules

Write rules that can guide design and implementation:

Weak:

> Use lots of whitespace like the reference.

Strong:

> Keep the primary proof block within a narrow visual field, reserve one full viewport-height open interval before the comparison section, and prevent decorative content from occupying the CTA's contrast zone.

Weak:

> Use bold typography.

Strong:

> Use one editorial display line as the dominant mass, keep the support copy below 45–65 Latin characters or an optically equivalent Arabic measure, and avoid a second heading competing within the initial viewport.

## Step 8 — Produce the reference brief

Update `REFERENCE-BRIEF.md` or create an equivalent containing:

- Research question.
- Selection criteria.
- Source list.
- Reference cards.
- Transfer/non-copy split.
- Synthesis matrix.
- Direction hypotheses.
- Risks and unresolved evidence.

## Reference-image execution mode

When a supplied image is the execution target:

1. Identify viewport and probable crop.
2. Inventory every visible element.
3. Map bounding relationships and relative scale.
4. Separate code-rendered UI, real product content, custom artwork, and brand assets.
5. Define layout constraints rather than copying raw pixel positions blindly.
6. Produce or acquire missing authorized assets.
7. Implement and render at the target viewport.
8. Compare hierarchy, spacing, scale, alignment, crop, type wrapping, and contrast.
9. Fix the largest visual difference first.
10. Test responsive modes independently; the reference may not reveal them.

## Failure modes

- Collecting screenshots without analysis.
- Using one site as a template.
- Mixing marketing spectacle into product UX.
- Copying exact composition while changing colors.
- Ignoring the source's content density and audience.
- Treating a desktop screenshot as a responsive specification.
- Choosing references only because they are trendy.
- Citing “inspiration” as proof that a pattern is usable or accessible.

## Completion condition

The skill is complete when every selected reference has enough context and detailed analysis, transferable principles are separated from source-owned expression, limitations are explicit, and the evidence is ready for `inspiration-synthesis` or reference-matching execution.

---

## Source: `skills/reference-intelligence/references/REFERENCE-CARD.md`

# Reference Card

## Identity

- ID:
- Source title:
- URL or file:
- Date reviewed:
- Surface:
- Viewport/state/language:
- Intended audience and objective, when known:

## Why selected

[Which design question this reference helps answer.]

## Composition

- Layout topology:
- Focal point:
- Visual mass:
- Grid/alignment:
- Whitespace:
- Section rhythm:
- Overlap/edge behavior:

## Typography

- Display/body relationship:
- Scale contrast:
- Measure/wrapping:
- Script/numeral behavior:

## Color, material, and depth

- Dominant roles:
- Accent behavior:
- Surface hierarchy:
- Depth/texture:

## Imagery and iconography

- Type:
- Information role:
- Crop/perspective/lighting:
- Consistency rules:

## Motion and interaction

- Trigger:
- Purpose:
- Sequence:
- User control:
- Mobile/reduced-motion evidence:

## Why it works

- 

## Transferable principles

- 

## Source-owned expression — do not copy

- 

## Risks when adapting

- 

## Project adaptation rule

[Specific design rule derived for the current product.]

---

## Source: `skills/reference-intelligence/references/SOURCE-MAP.md`

# Reference Source Map

Use source categories according to the question. Availability and access may change; verify current terms and behavior.

## Marketing and art direction

- Awwwards, SiteInspire, Godly, Land-book, Lapa Ninja.
- Use for composition, section pacing, visual concept, and presentation.
- Do not use as the only evidence for task-heavy UX.

## Product UX

- Live products, official documentation, Mobbin-style flow libraries, platform guidelines, and user research.
- Use for journeys, states, navigation, forms, and interaction patterns.

## Typography

- Type foundry specimens, Fonts In Use, Typewolf, editorial publications, and local-script examples.
- Verify licensing separately from visual suitability.

## Motion and creative development

- Codrops, GSAP Showcase, official library demos, studio case studies, and live product interactions.
- Study purpose and choreography, not only effect names.

## Design systems

- Apple HIG, Material, Carbon, Fluent, Spectrum, Atlassian, Polaris, Radix, and the project's existing system.
- Use for principles and behavior. Do not automatically impose their visual identity.

## Cultural and material sources

- Architecture, signage, packaging, industrial interfaces, local editorial design, service environments, objects, and vernacular graphics.
- Use to build a credible visual world rather than a generic digital trend stack.
