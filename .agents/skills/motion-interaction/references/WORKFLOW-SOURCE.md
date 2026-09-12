---
name: motion-interaction
description: Designs purposeful UI motion, microinteractions, state transitions, scroll storytelling, choreography, easing, timing, gesture behavior, and reduced-motion alternatives. Use for animated websites, product feedback, menus, overlays, onboarding, shared-element transitions, GSAP/Framer Motion work, or when motion feels random, excessive, or disconnected from meaning.
license: Proprietary
metadata:
  author: Hyzex
  version: "1.0.0"
---

# Motion and Interaction

## Goal

Use movement to explain orientation, causality, feedback, hierarchy, continuity, or story. Create a consistent motion personality that supports the user's control and the product's brand without slowing tasks or turning every element into spectacle.

## Use this skill when

- Adding non-trivial animation or microinteraction.
- Designing menus, dialogs, drawers, tabs, filters, drag/gesture behavior, loading, or success states.
- Building scroll-based storytelling, pinned sections, or product walkthroughs.
- Using Framer Motion, GSAP, CSS animation, Web Animations, Lottie, or 3D motion.
- Existing motion feels random, uniform, distracting, or inaccessible.

## Required inputs

Read `MOTION.md`, `DESIGN.md`, UX flows and states, the selected art direction, device priorities, performance constraints, and RTL requirements.

## Step 1 — Name the purpose

Every animation must serve at least one role:

- **Orientation:** where did this object or view come from?
- **Causality:** which action caused which result?
- **Feedback:** was the input received and what is happening?
- **Hierarchy:** where should attention move next?
- **Continuity:** what remained the same through a transition?
- **Story:** what sequence must be understood over time?

If an effect has no purpose, remove it or classify it as limited ambient decoration with an explicit budget.

## Step 2 — Define motion personality

Use observable properties:

- Energy: calm to energetic.
- Weight: light to heavy.
- Precision: mechanical to organic.
- Elasticity: none to expressive.
- Spatial depth: flat to cinematic.
- Rhythm: immediate, measured, or staged.
- Brand motif: a repeated motion verb, not a repeated plugin effect.

Connect the personality to brand and product. A finance operation tool and a music festival should not share the same spring behavior by default.

## Step 3 — Define motion families

Create families for:

- Immediate control feedback.
- Small state change.
- Component open/close.
- Layout change.
- Navigation or page transition.
- Narrative reveal.
- Ambient loop.

For each family define duration range, easing character, distance/scale relationship, interruption, and reduced-motion behavior.

Do not use one duration and easing for every transition.

## Step 4 — Preserve causality and spatial logic

- New content should appear from a location or relationship users can understand.
- Menus and overlays should relate to their trigger.
- Shared objects should maintain continuity when possible.
- Removing an item should reveal how surrounding layout changes.
- Loading should occupy the region that will update.
- Success feedback should confirm the actual result.

Avoid objects flying from arbitrary directions.

## Step 5 — Choreograph attention

For staged sequences, define:

1. What appears first.
2. What the user must understand before the next event.
3. Which elements move together.
4. Which element anchors the scene.
5. How the sequence exits.
6. What happens if the user interrupts or scrolls quickly.

Stagger by semantic group, not every individual child. Excessive cascade slows comprehension.

## Step 6 — Interaction states

Design motion for:

- Hover and pointer movement, when available.
- Press/tap.
- Focus and keyboard.
- Drag/gesture.
- Selection.
- Loading.
- Success.
- Error.
- Destructive confirmation.
- Undo.

Do not make essential information available only on hover.

## Step 7 — Scroll storytelling

Before writing timeline code, create a scene table using `references/SCENE-BOARD.md`.

A scroll narrative must answer:

- Why time-based sequencing communicates better than static layout.
- What remains under user control.
- What the pinned region explains.
- How users skip or reverse.
- How content remains understandable if scripts fail.
- What mobile and reduced-motion users receive.

Avoid scroll-jacking. Preserve normal scrolling and input expectations.

## Step 8 — RTL and direction

Classify movement:

- Directional by language reading order.
- Directional by physical/spatial meaning.
- Direction-neutral.

Do not reverse physical meanings automatically. A “back” transition may follow platform convention, while a car moving east in a scene should not reverse merely because text is Arabic.

Test arrows, carousels, timelines, progress, drawers, and scene entrances in both directions.

## Step 9 — Reduced motion

Create an alternate experience:

- Remove parallax, large spatial travel, and non-essential loops.
- Replace with opacity or instant state changes where useful.
- Preserve focus, feedback, progress, and error communication.
- Convert pinned narratives to static stacked scenes.
- Avoid forcing zero-duration transitions that cause confusing flashes.

## Step 10 — Performance

- Prefer compositor-friendly transforms and opacity for frequent animation.
- Measure heavy layout, filter, blur, shadow, canvas, and WebGL effects.
- Limit simultaneous animation.
- Pause offscreen or hidden loops.
- Respect low-power/mobile modes.
- Load motion assets intentionally.
- Avoid a large animation dependency for a trivial transition.

## Step 11 — Interruption and reversal

Test:

- Rapid repeated clicks.
- Reversing an open/close transition.
- Route change during animation.
- Scroll past a scene quickly.
- Drag cancellation.
- Backgrounding and returning.
- Slow device or throttled CPU.

The UI must land in a correct state, not only look good during the ideal recording.

## Step 12 — Motion review

Review rendered interaction, not code only:

- Is purpose visible?
- Is the user ever waiting for decoration?
- Does motion preserve reading and task priority?
- Are simultaneous effects competing?
- Does the sequence remain coherent at different speeds?
- Does reduced motion preserve meaning?
- Does RTL behavior remain intentional?

## Required output

- Motion purpose map.
- Motion personality.
- Timing/easing families.
- Component transition rules.
- Scene board for narrative work.
- RTL direction table.
- Reduced-motion alternatives.
- Performance budget.
- Interruption test plan.

## Failure modes

- “Smooth animations everywhere.”
- Same fade-up on every section.
- Motion used to hide weak composition.
- Long animations delaying frequent tasks.
- Hover-only essential content.
- Staggering every child.
- Scroll-jacking.
- Pinned desktop story with no mobile alternative.
- Reduced motion implemented as broken zero-duration choreography.
- Physical movement reversed mechanically for RTL.
- An animation that ends in an invalid state after rapid input.

## Completion condition

Motion is ready when each effect has a purpose, timing families are consistent, interaction remains interruptible and accessible, narrative scenes have static fallbacks, and performance is verified on target devices.
