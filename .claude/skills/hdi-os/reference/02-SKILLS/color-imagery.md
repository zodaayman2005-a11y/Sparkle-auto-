# HDI Skill — color-imagery


---

## Source: `skills/color-imagery/SKILL.md`

---
name: color-imagery
description: Creates role-based color systems and coherent photography, illustration, iconography, product-screenshot, and 3D asset direction. Use for palette design, contrast, light/dark surfaces, semantic colors, visual material, AI image consistency, asset briefs, and replacing generic gradients or mismatched imagery.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Color and Imagery

## Goal

Build a visual material system in which color and imagery communicate hierarchy, state, identity, and evidence. Avoid palettes that are attractive in isolation but fail in real interface use, and avoid mixed asset styles that make the product feel synthetic or untrustworthy.

## Use this skill when

- Creating or revising a palette.
- Defining light/dark surfaces and semantic colors.
- Choosing photography, illustration, 3D, iconography, or product screenshot direction.
- Generating AI assets that must remain consistent across a project.
- The design relies on generic gradients, random blobs, stock SaaS illustrations, or visually incompatible assets.
- Real product proof needs to coexist with expressive brand artwork.

## Required inputs

Read `BRAND.md`, `DESIGN.md`, `PRODUCT.md`, the selected direction, content hierarchy, real product assets, platform requirements, and accessibility constraints.

## Step 1 — Define color jobs

Start with roles, not swatches:

- Background field.
- Surface hierarchy.
- Foreground/text.
- Structural or brand primary.
- Secondary support.
- Accent/attention.
- Interactive states.
- Success, warning, danger, and information.
- Data categories.
- Focus indicator.
- Selection.
- Overlay and scrim.

A color may serve more than one compatible role, but do not let one saturated accent become background, text, status, and action simultaneously without testing.

## Step 2 — Define the color economy

Specify:

- Dominant neutral or field.
- Brand-color coverage.
- Accent frequency.
- Saturation budget.
- Contrast peaks.
- Quiet zones.
- Dark-mode relationship.
- Image interaction.

Use color scarcity to create meaning. When everything is accented, nothing is prioritized.

## Step 3 — Build semantic ramps

Create sufficient steps for:

- Text and icon contrast.
- Borders and dividers.
- Hover/active/selected states.
- Subtle and strong surfaces.
- Disabled states.
- Charts or data categories when needed.

Avoid generating arbitrary tints independently in component files. Store semantic tokens centrally.

## Step 4 — Test contrast in context

Evaluate actual combinations for:

- Body and small text.
- Large display text.
- Button labels.
- Disabled states.
- Placeholder vs entered text.
- Focus rings.
- Text on images or gradients.
- Error and success messages.
- Data visualization.

Do not assume a color is accessible because it appears bright. Verify required contrast and preserve non-color cues for state.

## Step 5 — Define material and depth

Choose a coherent depth model:

- Flat and typographic.
- Border-led.
- Hard shadow or neo-brutalist.
- Soft layered surfaces.
- Translucent or glass-like.
- Spatial/3D.
- Textured or editorial.

For each depth device define where it is allowed, its strength, and its purpose. Do not mix hard shadows, glass blur, soft skeuomorphism, and glossy 3D without one unifying material logic.

## Step 6 — Choose imagery roles

Every image must have a job:

- Product evidence.
- Emotional context.
- Explanation.
- Brand recognition.
- Spatial environment.
- Decorative rhythm.

Product evidence should remain legible and truthful. Decorative artwork must not compete with it.

## Step 7 — Photography direction

Define:

- Subject.
- Environment.
- Camera distance and angle.
- Lighting.
- Color temperature.
- Depth of field.
- Crop behavior.
- Human authenticity.
- Retouching.
- Representation and cultural context.
- Mobile crop and focal point.

Avoid vague “premium lifestyle photography.” Describe observable production decisions.

## Step 8 — Illustration and 3D direction

Define:

- Dimensionality.
- Proportions.
- Geometry.
- Material roughness/gloss.
- Lighting setup.
- Perspective/camera.
- Edge treatment.
- Detail level.
- Character consistency.
- Prop system.
- Color relationship.
- Background integration.
- Animation readiness.

Use an asset identity sheet for recurring characters or objects. Lock features that must not drift.

## Step 9 — Product screenshot rules

- Use real UI for real claims.
- Identify the exact screen, state, data source, and privacy treatment.
- Keep content large enough to provide proof.
- Do not place unreadable screenshots only as decoration.
- Avoid perspective distortion that destroys legibility.
- Use consistent device frames or deliberately use no frame.
- Mask sensitive data.
- Specify Arabic/English variants and directional crops.
- Record which parts are code, screenshot, artwork, and brand asset.

## Step 10 — Iconography

Define:

- Library or custom source.
- Stroke or fill.
- Optical size.
- Corner and terminal character.
- Detail level.
- Container usage.
- Active/selected behavior.
- Direction-sensitive icons.
- Accessible labeling.

Do not use emoji as a substitute for a coherent icon system unless the product explicitly uses emoji as content.

## Step 11 — AI-generated asset protocol

Before generation, create an asset brief with:

- Asset ID and role.
- Exact subject and action.
- Composition and camera.
- Lighting and material.
- Palette.
- Background and transparency.
- Character/prop locks.
- Negative constraints.
- Required dimensions and crop-safe zones.
- Direction variant.
- Relationship to existing assets.

After generation, review:

- Identity drift.
- Anatomy and geometry.
- Lighting consistency.
- Perspective.
- Brand colors.
- Unwanted text or fake UI.
- Edge quality and transparency.
- Crop and responsive use.

Never ask an image model to generate critical product UI as if it were real.

## Step 12 — Asset manifest

Maintain a manifest containing:

- ID.
- Role.
- Source/license.
- Production status.
- Language/direction variants.
- Dimensions.
- Crop rules.
- Alt text intent.
- Optimization format.
- Usage locations.

## Required output

Use `references/COLOR-IMAGE-CONTRACT.md` and include:

- Role-based palette.
- Color economy.
- Semantic ramps and states.
- Contrast decisions.
- Material/depth model.
- Photography/illustration/3D direction.
- Product screenshot rules.
- Iconography rules.
- AI asset protocol.
- Asset manifest.

## Failure modes

- Palette selected only from a moodboard.
- Brand accent used everywhere.
- Text placed over busy imagery without protection.
- Semantic state communicated only by color.
- Mixed illustration and 3D styles.
- Stock images that contradict the audience's real environment.
- Fake dashboard artwork.
- Tiny unreadable product screenshots.
- AI-generated characters drifting between scenes.
- Decorative gradients acting as the entire identity.

## Completion condition

Color and imagery are ready when each token and asset has a role, real product evidence is protected, recurring assets are consistent, all critical color combinations are verified, and the visual material supports one coherent direction.

---

## Source: `skills/color-imagery/references/COLOR-IMAGE-CONTRACT.md`

# Color and Imagery Contract

## Color roles

| Token/family | Role | Large area? | Text/icon? | Interactive? | States | Avoid |
|---|---|---:|---:|---:|---|---|
|  |  |  |  |  |  |  |

## Color economy

- Dominant field:
- Brand coverage:
- Accent frequency:
- Contrast peaks:
- Quiet zones:
- Dark-mode relationship:

## Material and depth

- Model:
- Border logic:
- Shadow/elevation logic:
- Texture/transparency:
- Forbidden combinations:

## Imagery

### Photography

- Subject/environment:
- Camera/crop:
- Lighting/color:
- Authenticity/representation:

### Illustration/3D

- Geometry/proportions:
- Material/lighting:
- Camera/perspective:
- Character/prop locks:

### Product proof

- Real screen source:
- Required state/data:
- Device treatment:
- Privacy:
- Language variants:

### Iconography

- Source/style:
- Optical sizing:
- Containers:
- Direction-sensitive icons:

## Asset manifest

| ID | Role | Source/license | Status | Dimensions | Variants | Crop rules | Usage |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |
