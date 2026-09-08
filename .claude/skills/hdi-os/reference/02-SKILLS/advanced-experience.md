# HDI Skill — advanced-experience


---

## Source: `skills/advanced-experience/SKILL.md`

---
name: advanced-experience
description: Plans and governs justified 3D, WebGL, shaders, generative visuals, pinned-scroll storytelling, cinematic product scenes, spatial interfaces, and other advanced web experiences. Use only when immersive technology materially improves explanation or brand impact and needs storyboarding, performance budgets, mobile fallbacks, reduced motion, and progressive enhancement.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Advanced Experience

## Goal

Create difficult, high-impact web experiences without confusing spectacle for design quality. Require a clear communication or brand reason, a scene and interaction plan, realistic production constraints, and an equivalent usable experience when advanced rendering is unavailable.

## Use this skill when

- The concept calls for Three.js, WebGL, R3F, shaders, particles, generative visuals, or interactive 3D.
- A landing page uses pinned scroll, camera travel, scene transitions, or immersive storytelling.
- Product devices or objects need cinematic staging.
- The team wants an advanced effect and needs to decide whether it is justified.

Do not activate for ordinary card hover, simple reveal, standard carousel, or decoration that CSS can handle clearly and cheaply.

## Entry gate — justify the technology

Answer:

1. What must the user understand or feel?
2. Why static composition or lightweight motion is insufficient.
3. Which business, product, or brand outcome the effect supports.
4. What input and control the user retains.
5. What happens on mobile, low power, slow network, reduced motion, and no WebGL.
6. What performance and maintenance cost is accepted.

If these answers are weak, use a simpler approach.

## Step 1 — Define the experience thesis

Write:

> The advanced experience uses **[spatial/visual mechanism]** to help **[user]** understand or feel **[specific outcome]**, while keeping **[task/content]** usable without the effect.

Define one dominant advanced device. Do not combine 3D, video, particles, heavy blur, multiple canvases, and aggressive scroll simply to maximize novelty.

## Step 2 — Storyboard before implementation

Create scenes with:

- User understanding.
- Static composition.
- Camera or viewport.
- Objects.
- Lighting and material state.
- Trigger.
- Transformation.
- Text relationship.
- Exit state.
- Mobile alternative.
- Reduced-motion/static alternative.

Use `references/ADVANCED-SCENE-CONTRACT.md`.

## Step 3 — Choose the rendering architecture

Consider:

- CSS/DOM.
- SVG.
- Canvas 2D.
- WebGL/Three.js/R3F.
- Video/image sequence.
- Lottie or vector animation.
- Hybrid DOM plus canvas.

Choose the least complex technology that preserves the concept and interaction. Record trade-offs.

## Step 4 — Separate content from rendering

Essential text, actions, navigation, and product truth should remain semantic DOM where possible. Canvas or 3D should not be the only representation of critical information.

Define:

- DOM content.
- Canvas/3D content.
- Overlay relationships.
- Focus and pointer behavior.
- Screen-reader alternative.
- Failure behavior.

## Step 5 — Asset pipeline

For every model, texture, environment, image sequence, or shader:

- Source and license.
- Poly/vertex complexity.
- Texture dimensions and compression.
- Material count.
- Animation clips.
- LOD or simplified variant.
- Loading priority.
- Caching.
- Mobile variant.
- Fallback image/video.

Optimize before integration; do not rely on runtime to rescue oversized assets.

## Step 6 — Camera, lighting, and material system

Define:

- Camera type, FOV, distance, and safe framing.
- Scene scale.
- Light rig.
- Exposure and tone mapping.
- Material roughness/metalness/transmission rules.
- Shadow policy.
- Background/DOM color integration.
- Responsive camera positions.
- RTL placement variants when the composition requires them.

Avoid generic glossy objects on dark gradients unless that material world is central to the concept.

## Step 7 — Interaction and scroll model

Specify:

- Normal scroll vs pinned segments.
- Scene boundaries.
- Progress mapping.
- Reversibility.
- Fast-scroll behavior.
- Pointer/touch gestures.
- Keyboard access.
- Click targets and occlusion.
- Pause/resume.
- Deep links or restored state.

Do not hijack scrolling or trap users in a scene.

## Step 8 — Progressive enhancement

Layer the experience:

1. Semantic content and primary task.
2. Static approved composition.
3. Lightweight transitions.
4. Advanced rendering when capability and preference allow.

No-WebGL or failed-asset mode must still deliver the product message and action.

## Step 9 — Mobile strategy

Choose intentionally:

- Simplified 3D.
- Static scene.
- Video or image sequence.
- Shorter narrative.
- Stacked scenes.
- Different camera.
- Reduced particles/shadows/postprocessing.
- Disabled interaction with equivalent explanation.

Do not run the desktop scene at a smaller canvas and hope it performs.

## Step 10 — Reduced motion

- Remove camera travel, parallax, and continuous motion.
- Present scenes as readable static states.
- Preserve controls and task feedback.
- Avoid flashing transitions.
- Keep the story order clear.

## Step 11 — Performance budget

Define measurable budgets appropriate to the product:

- Initial advanced payload.
- Total asset payload.
- Texture memory target.
- Draw calls/materials.
- Frame-time target on target devices.
- Main-thread work.
- Interaction responsiveness.
- Loading placeholder duration.
- Battery/thermal behavior when relevant.

Do not use aspirational budgets without testing real target hardware.

## Step 12 — Failure and fallback testing

Test:

- WebGL unavailable.
- Asset load failure.
- Slow connection.
- Low-memory device.
- Tab hidden/resumed.
- Resize/orientation change.
- Fast scroll and reverse.
- Reduced motion.
- Keyboard navigation.
- Arabic and English composition.
- Screenshot capture and server rendering constraints.

## Step 13 — Production review

Ask:

- Does the effect clarify the message or merely decorate it?
- Is the static first frame already strong?
- Can users reach the action without completing the show?
- Are text and product proof readable throughout?
- Does the scene maintain identity across responsive modes?
- Is the technical cost acceptable for the value?

## Required output

- Technology justification.
- Experience thesis.
- Scene board.
- Rendering architecture.
- DOM/canvas responsibility map.
- Asset manifest and optimization plan.
- Camera/light/material contract.
- Interaction/scroll model.
- Mobile, no-WebGL, and reduced-motion alternatives.
- Performance budget.
- Failure test plan.

## Failure modes

- Choosing WebGL because it looks advanced.
- Coding timelines before storyboarding.
- Essential copy trapped inside canvas.
- Multiple advanced effects competing.
- Heavy desktop scene copied to mobile.
- No reduced-motion or no-WebGL fallback.
- Unoptimized models and textures.
- Scroll-jacking.
- Product screenshots made unreadable by perspective.
- Glossy generic 3D unrelated to brand meaning.
- Long intro preventing users from reaching the task.

## Completion condition

Advanced production may begin only when the concept is justified, scenes are approved, semantic content survives without the effect, fallbacks are defined, and budgets can be tested on target devices.

---

## Source: `skills/advanced-experience/references/ADVANCED-SCENE-CONTRACT.md`

# Advanced Scene Contract

## Thesis

- User outcome:
- Spatial/visual mechanism:
- Why lightweight design is insufficient:
- Primary task preserved:

## Rendering architecture

- DOM:
- SVG:
- Canvas/WebGL:
- Video/image fallback:
- Input model:

## Scene board

| Scene | Understanding | Camera | Objects/material | Trigger | Transition | Text/action | Mobile | Reduced motion | No-WebGL |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |  |  |  |

## Asset manifest

| Asset | Source/license | Geometry | Textures | Materials | Load priority | Mobile/LOD | Fallback |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |

## Performance budget

- Initial payload:
- Total advanced payload:
- Frame-time target:
- Target devices:
- Draw calls/materials:
- Texture memory:
- Main-thread budget:

## Failure tests

- [ ] No WebGL.
- [ ] Slow/failed asset.
- [ ] Resize/orientation.
- [ ] Fast scroll/reverse.
- [ ] Hidden/resumed tab.
- [ ] Reduced motion.
- [ ] Keyboard.
- [ ] Mobile low power.
