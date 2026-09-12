---
name: creative-coding-lab
description: "Rapidly prototypes generative art, Canvas, SVG, WebGL shaders, particles, physics, procedural typography, and novel interactions in isolated experiments. Use to test aesthetic and technical feasibility before committing experimental code to a production experience."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Creative Coding Lab

## Goal

Explore original computational visuals and interactions quickly enough to learn, while containing technical risk, protecting accessibility and performance, and producing evidence for a deliberate adopt/adapt/reject decision rather than allowing experiments to leak directly into production.

## Use this skill when

- A concept calls for generative graphics, particles, shaders, procedural patterns, canvas, custom SVG, physics, or unusual interaction.
- The team needs to test whether an advanced visual metaphor is technically and aesthetically viable.
- A brand-world motif could be generated algorithmically.
- Several implementation approaches need an isolated benchmark.
- An immersive idea needs a low-cost proof before full spatial production.

## Do not use this skill when

- A standard CSS/SVG animation or existing component solves the problem cleanly.
- The experiment has no defined role in the approved concept.
- The task is full production 3D scene direction; use `spatial-3d-world-building`.
- The request would hide essential content or controls inside inaccessible canvas without an equivalent.

## Required reading and evidence

1. `DESIGN.md`
2. `Brand-world thesis and visual verbs`
3. `MOTION.md`
4. `Approved concept/storyboard`
5. `Target devices/browsers and performance budget`
6. `Accessibility, reduced-motion/data, and fallback requirements`
7. `Existing repository and rendering stack only when integration is in scope`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Begin with one visual or interaction hypothesis, not a list of technologies.
- Keep experiments isolated from production architecture until they pass gates.
- Expose meaningful parameters so the concept can be art-directed rather than hard-coded by accident.
- Use deterministic seeds when reproducibility matters.
- The static first frame and fallback must carry the core meaning.
- Canvas/WebGL may enhance semantics; essential content and controls should remain in accessible DOM whenever possible.
- Budget GPU, CPU, memory, battery, network, and motion—not only frame rate on one laptop.
- Prefer the simplest technique that produces the intended visual behavior.
- Design interruption, resize, visibility, tab backgrounding, and cleanup from the start.
- A technically impressive prototype is not automatically a useful product direction.

## Step 1 — Frame the experiment

- Write the concept role, user-facing effect, question to answer, target devices, and decision after the experiment.
- Choose one dominant technique and list alternatives considered.
- Define success in aesthetic, interaction, performance, accessibility, and production terms.
- Set time/resource limits and non-goals to prevent open-ended exploration.
- Identify what can be faked in the prototype and what must be measured realistically.

## Step 2 — Choose rendering model and architecture

- Compare DOM/CSS, SVG, Canvas 2D, WebGL, WebGPU when available, or hybrid approaches based on scale, interaction, browser support, and accessibility.
- Define scene/data model, coordinate system, update loop, input events, and ownership of layout.
- Plan resize, pixel ratio, color space, loading, pausing, disposal, and server/client boundaries.
- Keep experimental code in a sandbox route/package with a clear removal path.
- Avoid adding large dependencies before a minimal native proof shows the need.

## Step 3 — Build parameterized visual behavior

- Create controls for density, scale, speed, seed, palette roles, turbulence/noise, interaction force, typography, camera, or other concept variables.
- Separate semantic design parameters from low-level implementation constants.
- Use brand tokens and world grammar rather than random aesthetic defaults.
- Record preset configurations that correspond to art-direction states.
- Prevent parameter combinations that create flashing, illegibility, extreme motion, or runaway resource use.

## Step 4 — Design input and narrative integration

- Define pointer, touch, keyboard, scroll, device orientation, audio, or data input only when it advances the concept.
- Make behavior robust to rapid input, interruption, reverse direction, and no input.
- Ensure scroll experiments do not hijack navigation or trap users.
- Define how the effect enters, idles, responds, exits, and hands back to page content.
- Provide non-motion or reduced-motion equivalents and avoid relying on hover alone.

## Step 5 — Benchmark and stress test

- Test representative desktop/mobile devices, high/low pixel ratio, throttled CPU, memory pressure, resize, tab backgrounding, and long sessions.
- Measure frame pacing, main-thread work, GPU/memory indicators when tools permit, load weight, time to first useful frame, and cleanup.
- Stress object counts, input bursts, data extremes, and unsupported capabilities.
- Check screenshot/static export quality and fallback behavior.
- Record failure thresholds and graceful degradation order.

## Step 6 — Critique aesthetic quality

- Review the effect inside the approved composition and with real content.
- Check whether it expresses the brand-world verb and creates a useful focal or explanatory role.
- Compare presets pairwise and remove complexity that does not improve the concept.
- Check visual artifacts, aliasing, banding, flicker, accidental symbols, and typography distortion.
- Run an originality audit against references and common demo aesthetics.

## Step 7 — Decide and package the learning

- Choose adopt, adapt, reserve for campaign, or reject.
- If adopted, define production architecture, parameter contract, budgets, fallbacks, tests, and ownership.
- If rejected, record the evidence so the idea is not repeatedly rediscovered.
- Export a minimal reproducible demo and capture representative images/video.
- Remove experimental dependencies and secrets before handoff or archive.

## Required outputs

- Experiment brief and non-goals
- Technique decision
- Isolated reproducible prototype
- Parameter and preset model
- Input/narrative contract
- Performance and capability benchmark
- Fallback/reduced-motion design
- Aesthetic and originality critique
- Adopt/adapt/reject memo
- Production handoff or archived learning

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- The experiment answers a named decision and has bounded scope.
- Essential meaning and controls remain accessible outside experimental rendering.
- Representative mobile/desktop and reduced-capability modes are tested.
- The effect pauses/disposes correctly and does not leak resources through route changes.
- Budgets and graceful degradation order are explicit.
- No flashing, motion, or input behavior creates known avoidable accessibility risk.
- Adopted experiments have production owners, contracts, and regression tests.
- Rejected experiments are removed cleanly and documented.

## Handoffs

- Send adopted art direction and assets to `brand-world-building` and `asset-production-direction`.
- Send spatial/camera-heavy concepts to `spatial-3d-world-building`.
- Send interaction choreography to `motion-interaction`.
- Send performance/fallback budgets to `performance-perceived-quality`.
- Send production implementation to `design-to-code` and review to `visual-qa-refinement`.
- Store reusable primitives through `design-system-governance` only after repeated need is proven.

## Anti-patterns

Reject or correct these failure modes:

- Starting with ‘use particles, shaders, and physics’ before a concept
- Shipping a CodePen-like demo as production architecture
- Canvas-only navigation or essential text
- No cleanup on unmount
- Unlimited device pixel ratio or object count
- Scroll hijacking
- Random parameters with no brand logic
- A fallback that is an empty box
- Benchmarking only on a high-end desktop
- Adding dependencies for effects achievable with simple CSS/SVG

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
