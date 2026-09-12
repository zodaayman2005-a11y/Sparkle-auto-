# MOTION.md — {{PROJECT_NAME}}

Status: Draft  
Last updated: {{DATE}}

## Motion thesis

[One sentence describing how movement expresses the brand and helps the user.]

## Purpose taxonomy

Every animation must serve one or more roles:

- Orientation: show where something came from or went.
- Causality: connect an action to its result.
- Feedback: confirm input, progress, success, or failure.
- Hierarchy: guide attention in the correct order.
- Continuity: preserve object or spatial relationships.
- Story: explain a sequence that static layout cannot communicate as clearly.

Decorative movement without a defined role requires explicit approval.

## Motion personality

- Energy:
- Weight:
- Precision:
- Playfulness:
- Spatial model:
- Brand motif:

## Timing families

| Family | Typical use | Duration range | Easing character | Interruptible? |
|---|---|---|---|---:|
| Instant feedback |  |  |  | Yes |
| Small transition |  |  |  | Yes |
| Layout transition |  |  |  | Yes |
| Narrative reveal |  |  |  | Usually |
| Ambient loop |  |  |  | N/A |

Use ranges as guidance; tune by distance, scale, input method, and platform.

## Interaction choreography

- Entry order:
- Exit order:
- Parent/child staggering:
- Shared-element behavior:
- Loading behavior:
- Error behavior:
- Success behavior:

## Scroll motion

- Is scroll storytelling justified? Why?
- Pinned sections:
- Scene sequence:
- User control:
- Skip behavior:
- Mobile alternative:
- Reduced-motion alternative:

## Directionality

- RTL travel direction:
- LTR travel direction:
- Direction-neutral effects:
- Icons/arrows requiring transformation:
- Gestures that must not be reversed:

## Performance budget

- Animated properties:
- Maximum simultaneous heavy effects:
- Asset loading strategy:
- WebGL fallback:
- Low-power/mobile behavior:

## Reduced motion

Define a meaningful alternate experience, not merely `duration: 0`:

- Replace spatial movement with opacity/state change where appropriate.
- Remove non-essential parallax and looping motion.
- Preserve task feedback and state clarity.
- Ensure pinned narratives remain understandable as static stacked content.

## Motion QA

- Keyboard and touch behavior.
- Interruption and reversal.
- Rapid repeated input.
- Background tab/resume.
- Slow device behavior.
- Reduced motion.
- RTL and LTR.
