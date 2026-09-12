---
name: spatial-3d-world-building
description: "Directs production-grade spatial and 3D web experiences: environment, camera language, lighting, materials, asset hierarchy, scale, LOD, interaction, scene continuity, scroll narrative, audio role, performance, fallback, and accessibility. Use after an advanced 3D direction is justified and needs detailed world and scene contracts."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Spatial 3D World Building

## Goal

Create spatial experiences that communicate a coherent story and brand world, preserve user control and content accessibility, and remain technically viable across required devices rather than becoming disconnected 3D spectacle.

## Use this skill when

- An approved concept genuinely requires a navigable or cinematic 3D environment.
- A WebGL/Three.js scene needs camera, lighting, material, scale, and narrative direction.
- Scroll or interaction moves through several connected spatial scenes.
- 3D assets require LOD, loading, collision, picking, animation, or continuity rules.
- A product/world metaphor must be staged in depth across desktop and fallback modes.

## Do not use this skill when

- The idea is still an unproven experiment; use `creative-coding-lab` first.
- A simple 3D illustration or product render only needs asset direction.
- 3D is requested only as a fashionable effect with no content or interaction role.
- The experience cannot provide an equivalent for users or devices that cannot render it.

## Required reading and evidence

1. `Approved design direction and scene thesis`
2. `BRAND.md and brand-world grammar`
3. `MOTION.md`
4. `Narrative/content sequence`
5. `Target devices, browsers, input modes, and performance budgets`
6. `3D asset inventory and rights`
7. `Accessibility/reduced-motion/data and non-WebGL requirements`
8. `Existing rendering stack and deployment constraints`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- The world needs a spatial thesis: why depth, place, camera, and movement help the story.
- Camera language is editorial language; every move changes meaning, attention, and comfort.
- Use a consistent scale, coordinate system, light logic, material response, and visual hierarchy.
- Limit scene complexity through asset hierarchy and LOD rather than compressing everything at the end.
- Keep semantic text, navigation, and essential actions accessible in DOM or an equivalent layer.
- Users must retain orientation, control, and a way to skip or exit narrative sequences.
- Design for pointer, touch, keyboard, reduced motion, no hover, no WebGL, low power, and failure.
- Spatial transitions need continuity of object, direction, light, or narrative—not arbitrary camera teleportation.
- Audio can reinforce place but must never be required without accessible alternatives and user control.
- Performance quality is part of art direction: lighting, material, resolution, and density must fit the budget.

## Step 1 — Write the spatial thesis and scene grammar

- State why the story needs a world rather than flat composition.
- Define viewer role: observer, operator, traveler, curator, or participant.
- Choose world geometry and metaphor: room, corridor, landscape, machine, orbit, stage, map, or abstract field.
- Define coordinate scale, horizon, gravity/up direction, depth layers, and spatial motifs.
- Name refusal rules such as no game-like controls, no endless orbit, or no photorealism.

## Step 2 — Storyboard scenes and continuity

- Create scene cards with message, focal object, start/end state, camera, subject action, text state, trigger, duration/scroll range, and exit.
- Map continuity anchors between scenes: shared object, direction, color/light, scale transition, or causal transformation.
- Keep one dominant message and visual event per scene.
- Define skip, reverse, fast scroll, route return, and interrupted-load behavior.
- Create a complete reduced-motion/static sequence that preserves narrative order.

## Step 3 — Direct camera and interaction language

- Define camera type, field of view, near/far planes, height, framing, motion limits, easing, damping, and collision/constraint behavior.
- Use cuts, dollies, pans, orbits, cranes, zoom-like moves, and focus changes deliberately; avoid motion that causes disorientation.
- Define pointer/touch/keyboard controls and whether user input modifies camera, objects, or information.
- Preserve a stable orientation reference and visible route back.
- Test camera paths with real text overlays and safe areas.

## Step 4 — Design environment, lighting, and materials

- Create environment zones, architecture, negative space, fog/atmosphere, background, floor/contact logic, and depth cues.
- Define key/fill/rim/environment light roles and how they change across scenes.
- Use a bounded material family with roughness/metalness/transmission/emission/texture rules tied to the brand world.
- Plan shadows, reflections, probes/environment maps, post-processing, and color management within budget.
- Avoid materials or lighting that hide silhouettes, text, interaction targets, or real product UI.

## Step 5 — Plan assets, hierarchy, animation, and LOD

- Classify hero, supporting, background, repeated, interactive, and decorative assets.
- Set polygon/texture/animation budgets and LOD/simplification rules by importance and viewing distance.
- Specify pivots, scale, coordinates, naming, rigs, clips, morphs, instancing, collision/picking meshes, and compression.
- Separate real product screens/labels from textures that would become illegible or unlocalizable.
- Define loading order, placeholders, reveal, and scene streaming.

## Step 6 — Integrate content, UI, and accessibility

- Decide which information lives in DOM overlays, world-space labels, screen-space HUD, audio, captions, or separate text mode.
- Maintain keyboard focus and reading order independently from camera choreography.
- Provide text descriptions, captions/transcripts, reduced-motion, pause, skip, and static equivalents.
- Ensure targets are visible, large enough, and usable without precise pointer motion.
- Prevent canvas from trapping scroll, focus, or screen-reader navigation.

## Step 7 — Prototype and performance-gate each scene

- Build graybox geometry and camera paths before final assets/materials.
- Benchmark scene load, first useful frame, steady/transition frame pacing, memory, GPU/CPU stress, input latency, and cleanup on target classes.
- Test no-WebGL, context loss, failed asset, slow network, background/resume, resize/orientation, and long sessions.
- Define adaptive quality tiers for resolution, shadows, effects, texture, geometry, and density.
- Do not approve final asset production until graybox narrative and budgets pass.

## Step 8 — Polish continuity and ship with evidence

- Review camera comfort, focal hierarchy, light/material continuity, object scale, transitions, and text timing.
- Capture required viewport/locale/capability variants and compare with the storyboard.
- Profile final builds, validate disposal and route transitions, and audit third-party assets/licenses.
- Document scene state machine, asset manifest, quality tiers, fallbacks, and ownership.
- Preserve a strong static first frame and metadata/semantic content for discovery and sharing.

## Required outputs

- Spatial thesis and viewer role
- World/coordinate grammar
- Scene storyboard and state machine
- Camera language and control contract
- Environment/light/material bible
- Asset hierarchy, LOD, and animation specification
- Loading/streaming/quality-tier plan
- DOM/content/accessibility integration
- Reduced-motion/no-WebGL/static modes
- Performance evidence and scene manifest

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- 3D has a documented narrative or interaction purpose.
- Graybox scene, camera, and performance pass before high-cost final production.
- Essential content/actions remain accessible and usable without WebGL or full motion.
- Camera paths preserve orientation, control, skip, reverse, and interruption behavior.
- Asset, texture, effect, memory, and quality-tier budgets are explicit.
- Reduced-motion, touch, keyboard, low-power, slow-network, context-loss, and failed-load modes are tested.
- Real product UI/text is not baked into illegible unlocalizable textures when it needs interaction or localization.
- Final scenes dispose resources and survive route changes/resizes.

## Handoffs

- Receive concept and world grammar from `design-director` and `brand-world-building`.
- Send model/render production specs to `asset-production-direction`.
- Use `creative-coding-lab` for uncertain shaders/effects before commitment.
- Coordinate choreography with `motion-interaction` and budgets with `performance-perceived-quality`.
- Send implementation to `design-to-code` and final evidence to `visual-qa-refinement`.
- Send accessible equivalents to `inclusive-accessibility-design`.

## Anti-patterns

Reject or correct these failure modes:

- 3D because competitors use it
- Starting final modeling before graybox/camera validation
- Camera teleportation with no continuity
- Endless auto-orbit hero
- Canvas-only essential content and navigation
- Photoreal materials that conflict with brand/performance
- No touch or reduced-motion mode
- One huge scene loaded before any useful content
- No LOD or texture budget
- Baked text and fake product UI in textures
- Leaking render loops/resources after navigation

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
