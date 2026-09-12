# Domain Pack — Immersive and 3D Web

## Primary outcome

Use spatial, cinematic, or generative interaction to make a product, story, or brand idea more understandable and memorable without blocking access to content or action.

## Dominant priorities

- Strong static first frame.
- One coherent spatial metaphor.
- Scene continuity.
- User control.
- Semantic content outside advanced rendering.
- Performance and loading.
- Mobile/no-WebGL/reduced-motion alternatives.
- Clear business or communication value.

## Entry gate

Do not use this pack unless the advanced mechanism improves explanation or brand impact enough to justify production and performance cost.

## Story structure

- Define what each scene teaches or changes.
- Storyboard before coding.
- Keep text, action, and product truth readable.
- Permit fast scrolling and reversal.
- Do not force users to watch an intro before acting.

## Technical behavior

- Choose the least complex renderer that preserves the idea.
- Separate DOM and canvas responsibilities.
- Optimize geometry, textures, materials, and post-processing.
- Pause offscreen loops.
- Provide static/video fallback.
- Test slow network, low power, resize, orientation, and failed assets.

## Visual behavior

- Camera, lighting, material, typography, and DOM surfaces belong to one art direction.
- Avoid generic chrome objects on black gradients.
- Protect product screenshots from unreadable perspective.
- Use effects sparingly enough that focal hierarchy survives.

## Common failures

- WebGL chosen as a status symbol.
- Multiple competing effects.
- Essential content only inside canvas.
- Scroll-jacking.
- Heavy desktop scene copied to mobile.
- No reduced-motion or failure mode.
- Long loading with no value.
- Beautiful scene disconnected from product truth.

## Recommended skill order

`design-director` → `reference-intelligence` → `ux-architecture` → `visual-composition` → `color-imagery` → `typography-content` → `motion-interaction` → `advanced-experience` → `responsive-rtl` → `design-to-code` → `visual-qa-refinement`

## Additional hard gates

- [ ] Advanced technology has a written justification.
- [ ] Semantic content and primary action work without the effect.
- [ ] Scene board, performance budget, and asset manifest exist.
- [ ] Mobile, no-WebGL, and reduced-motion experiences are usable.
- [ ] Fast scroll, reverse, resize, and failed assets do not break state.
