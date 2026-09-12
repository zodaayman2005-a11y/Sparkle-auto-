# Advanced Motion, Scroll Storytelling, or 3D

```text
Use motion-interaction and advanced-experience only after the product story and
static composition are understood.

First prove that the proposed effect materially improves explanation,
orientation, causality, feedback, emotion, or brand memorability. Aesthetic
novelty alone is not enough.

Before writing animation or WebGL code, produce:
- Narrative thesis and scene sequence.
- For every scene: trigger, initial state, transition, final state, focal
  element, copy visibility, user control, interruption behavior, and exit.
- Asset list and ownership: HTML/CSS, SVG, image/video, 3D model, shader,
  particle system, real product UI, or generated artwork.
- Camera, lighting, material, and depth rules when 3D is present.
- Performance and loading budgets.
- Mobile substitute or recomposed sequence.
- Complete reduced-motion equivalent.
- Fallback for low-power devices, unsupported APIs, load failure, resize, and
  orientation change.
- RTL/LTR direction behavior and separate directional assets where needed.

Prototype the riskiest scene first. Test rapid scrolling, reverse scrolling,
interruption, focus, keyboard, touch, resizing, and route changes. Keep the
core message and primary action usable before the advanced layer loads.
```
