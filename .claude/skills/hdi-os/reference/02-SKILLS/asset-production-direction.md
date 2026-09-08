# HDI Skill — asset-production-direction


---

## Source: `skills/asset-production-direction/SKILL.md`

---
name: asset-production-direction
description: "Creates production-ready art direction, generation briefs, shot lists, identity locks, technical specifications, QA, rights tracking, and delivery matrices for photography, illustration, 3D, icons, product mockups, generated imagery, and motion-ready assets."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Asset Production Direction

## Goal

Produce coherent, usable, legally trackable visual assets that fit the approved design world, composition, responsive crops, motion needs, and technical pipeline—without identity drift, fake product proof, random style changes, or last-minute export failures.

## Use this skill when

- A site or campaign needs photography, illustration, 3D, icons, generated images, mockups, or motion assets.
- AI-generated characters or scenes drift between outputs.
- Design layouts depend on specific crops, perspective, lighting, transparency, or responsive variants.
- Assets need consistent file naming, rights/provenance, formats, compression, or delivery.
- A design reference must become an original production brief rather than a copied image.

## Do not use this skill when

- Only an existing approved asset needs to be placed in code.
- The brand world or composition is not yet approved; route back before mass production.
- The user asks to reproduce a protected or proprietary source exactly without rights or authorization.

## Required reading and evidence

1. `BRAND.md`
2. `DESIGN.md`
3. `Brand-world bible and originality audit`
4. `Approved layouts/storyboards and responsive crops`
5. `MOTION.md`
6. `Real product screens and asset truth`
7. `Rights, consent, licensing, privacy, and platform requirements`
8. `Performance budgets and target formats`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Every asset has a job, placement, crop, and success condition.
- Art direction and technical delivery are one contract.
- A reference may guide principles; do not reproduce distinctive protected expression or unlicensed assets.
- Product screenshots shown as real must be authentic, approved, and current.
- Generated assets require provenance, prompt/version records, and human QA.
- Identity consistency depends on explicit anchors: face, silhouette, proportions, wardrobe, materials, camera, light, and forbidden drift.
- Create responsive and motion variants intentionally rather than stretching one master asset everywhere.
- Text should normally remain in HTML/UI, not baked into raster art, unless the artwork itself requires it.
- Optimize from a high-quality master and preserve editable sources.
- Accessibility requires alt purpose, non-text alternatives, contrast, and a plan for meaningful motion/audio.

## Step 1 — Create the asset register

- List every required asset with ID, role, placement, message, source type, dimensions/aspect, locale/direction, state, owner, deadline, rights, and approval status.
- Separate brand assets, real product proof, original commissioned/generated artwork, stock/licensed material, and temporary placeholders.
- Identify reusable families and avoid producing isolated assets without a system.
- Mark assets that contain people, private data, trademarks, or sensitive locations for additional review.
- Link each asset to the layout or storyboard frame it serves.

## Step 2 — Write visual production briefs

- Define subject, action, emotion, narrative role, environment, composition, focal point, negative space, crop safety, camera, lens feel, perspective, lighting, material, palette, texture, and finish.
- Specify exact product or operational truth and prohibit invented UI, metrics, devices, or capabilities.
- Include inspiration principles and explicit do-not-copy boundaries.
- Define required variants: desktop/mobile, RTL/LTR, light/dark surface, static/motion, transparent/background, and fallback.
- Write acceptance criteria that can be judged from the delivered asset.

## Step 3 — Lock continuity for recurring worlds

- Create identity sheets for characters, products, props, vehicles, environments, icon families, and 3D materials.
- Record invariant geometry, proportions, colors, wardrobe, marks, camera height, perspective, light direction, and scale.
- Maintain pose/expression/angle libraries without changing identity.
- For generated imagery, preserve model/tool/version, seed/reference inputs when available, prompt, negative constraints, and edit history.
- Reject outputs with anatomy, typography, perspective, reflection, product, or brand inconsistencies.

## Step 4 — Plan capture or creation workflow

- Create shot/scene/task lists ordered by dependency and reuse.
- Plan plates, clean backgrounds, masks, depth passes, alpha, shadows, separate layers, motion handles, and retouching needs.
- For 3D, specify model topology, materials, textures, rig, LOD, coordinate scale, camera, lighting, and render/export targets.
- For icons/illustration, define grid, stroke/shape language, optical corrections, state variants, and export sizes.
- For photography, define releases, safety, styling, set continuity, color chart, and backup coverage.

## Step 5 — Produce and review in context

- Review early contact sheets or roughs inside the real layout, not only as isolated art.
- Check focal hierarchy, crop resilience, text-safe areas, RTL/LTR composition, mobile legibility, and interaction/motion compatibility.
- Compare asset family consistency with identity locks and approved brand-world proof.
- Separate fixable production defects from a wrong concept; do not over-retouch a failed direction.
- Record review rounds and accepted deviations.

## Step 6 — Prepare technical delivery

- Maintain editable masters and generate platform-appropriate derivatives.
- Choose SVG, PNG, AVIF/WebP/JPEG, video, Lottie, GLB/gltf, texture, or sprite formats based on content and browser support.
- Define pixel dimensions, density, compression, color profile, transparency, poster frame, loop, audio, and metadata handling.
- Strip unnecessary private metadata and preserve required rights/provenance metadata separately.
- Use deterministic file naming and a manifest mapping source to derivatives.

## Step 7 — Run final rights, quality, and performance gates

- Verify license, consent/model/property release, trademark use, generated-asset policy, and expiration/territory/channel limits.
- Check image artifacts, anatomy, text, geometry, UI accuracy, color, crop, alpha edges, seams, compression, animation loop, and fallback.
- Measure delivered weight and decode/render impact against budgets.
- Write alt text or decorative treatment based on purpose; provide transcripts/captions for meaningful media.
- Archive masters, prompts/inputs where permitted, approvals, and manifest.

## Required outputs

- Asset register
- Production briefs
- Shot/scene list
- Character/product/prop/environment identity locks
- Responsive and locale variant matrix
- Generation/capture provenance
- Technical export specification
- Rights and consent register
- Contextual QA report
- Delivery manifest and archive map

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every final asset has an approved role, source/provenance, rights status, owner, and delivery specification.
- Assets presented as real product proof are accurate and current.
- Recurring identity and perspective locks pass across variants.
- Required mobile/desktop and RTL/LTR crops exist where composition changes.
- No placeholder, watermark, private data, or unlicensed source remains.
- Performance budgets and fallback formats pass.
- Meaningful non-text content has an accessibility treatment.
- Editable masters and derivative mappings are preserved.

## Handoffs

- Receive world grammar from `brand-world-building` and image roles from `color-imagery`.
- Send 3D scene assets to `spatial-3d-world-building` and experimental effects to `creative-coding-lab`.
- Send motion-ready layers to `motion-interaction`.
- Send optimized derivatives and manifests to `design-to-code` and `performance-perceived-quality`.
- Send final rendered placements to `visual-qa-refinement`.
- Send reusable asset rules to `design-system-governance`.

## Anti-patterns

Reject or correct these failure modes:

- Generating assets before layout and message are known
- One image stretched across all breakpoints
- Characters whose face, body, clothes, or materials drift
- Fake dashboards in product marketing
- Baked-in text that cannot localize
- Using a copyrighted reference as an exact generation target
- No provenance or rights record
- Reviewing assets only outside the layout
- Exporting huge masters directly to production
- Throwing away editable sources and masks

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/asset-production-direction/references/ASSET-QA-DELIVERY.md`

# Asset QA and Delivery Manifest

Use this worksheet to create an auditable project artifact.

## Context review

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Technical checks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Performance

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Accessibility

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Rights approval

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Masters and derivatives

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/asset-production-direction/references/ASSET-REGISTER.md`

# Asset Register and Rights Ledger

Use this worksheet to create an auditable project artifact.

## Asset role

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Source and provenance

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Rights/consent

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Variants

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Owner/status

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Delivery mapping

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/asset-production-direction/references/PRODUCTION-BRIEF.md`

# Visual Asset Production Brief

Use this worksheet to create an auditable project artifact.

## Narrative and subject

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Composition/camera

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Light/material/style

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Identity locks

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Responsive/locale variants

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Negative constraints

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Acceptance criteria

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
