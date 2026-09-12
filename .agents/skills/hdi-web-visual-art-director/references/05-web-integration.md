CORE MODULE 05 — WEB INTEGRATION

Web integration, responsive art direction, and delivery

The page is not a raster poster

Build semantic HTML for all primary communication and interaction. Images supply
story, material, emotion, or authentic visual proof; they do not replace navigation,
prices, CTA, form fields, accessible headings, or responsive layout.

Keep the existing framework and component system unless the task calls for changing
them. Do not add a new heavy animation/3D dependency merely to place an image.

Layer contract

A useful section can contain:

```text
section: semantic heading/copy/action + explicit background
  layout grid
    copy column: eyebrow, heading, support, primary/secondary action
    art stage: intrinsic aspect and reserved dimensions
      optional atmosphere      z0   decorative
      story asset/prop group   z1   meaningful or decorative as appropriate
      real product frame      z2   truthful, unaltered source
      selected foreground     z3   only if it does not hide UI/copy/face
      small motif             z4   pointer-events:none
```

Z numbers are a local ordering example, not global project tokens. Avoid large
uncontrolled z-index values. Never place an invisible art overlay above a button.
Reserve copy-safe areas based on the actual font and language, not a placeholder line.

Product proof

Use the real approved product capture, with screen name, source, capture date/version,
locale, device class, and permitted crop/redaction. Actual demo data can be used when
labeled appropriately; it is not customer results or proof of revenue uplift.

Allowed presentation: geometric crop, code-built frame, deterministic masking,
moderate perspective, and external explanatory annotations. Preserve original data,
labels, relationships, and layout. Do not repaint product internals or turn a crop
into a misleading claim by hiding necessary context.

For mobile, a selected real detail crop often communicates better than a whole tiny
dashboard. Keep the original accessible in a larger view if the page promises detailed
inspection. A screenshot is an image, not a functional interactive demo.

Responsive recomposition

Define desktop, tablet, and mobile as actual compositions. Define language/direction
independently from device width.

Desktop may pair copy and product in an asymmetric grid. Tablet may reduce supporting
props. Mobile may stack headline → short support → CTA → real proof → story asset, or
use another deliberate sequence. Do not place a full-height character before every
primary action and push the product multiple screens down.

Use natural document order and explicit layout rules. Ensure visual order does not
contradict reading/focus order. Logical properties help spacing/direction, but do not
solve editorial composition on their own.

Use image art-direction sources when a real crop/composition change is needed. Use
responsive image candidates for resolution changes. The native HTML picture mechanism
is documented in W3/09-sources.md; adapt syntax to the project’s framework.

Tiny implementation example

The file paths below are illustrative, not bundled images. Replace them only with
manifest-verified outputs. This example demonstrates selection, not a complete component.

```html
<picture>
  <source media="(max-width: 767px)" srcset="/art/problem-mobile.webp">
  <img
    src="/art/problem-desktop.webp"
    alt="صاحب مغسلة تشغله مكالمات التشغيل عن إدارة شغله."
    width="1200"
    height="900"
    loading="lazy"
    decoding="async"
    class="story-art"
  >
</picture>
```

Reserve the correct aspect ratio for each breakpoint, especially if the mobile source
has a different aspect. Inspect the resulting browser layout. Avoid loading both mobile
and desktop pictures just to hide one with CSS.

An above-the-fold LCP image should not inherit this below-fold loading="lazy" example.
Choose loading priority from the actual page’s LCP candidate and measurement. If a
framework’s image component already controls optimization/preload, do not duplicate it.

RTL and LTR

Do not apply scaleX(-1) to a character, product screenshot, logo, or image with writing
as a default localization strategy. Recompose or use a true directional view. A simple
neutral arrow or geometric motif may be mirrored when its meaning calls for it.

Plan character gaze, gestures, contact, and visual weight relative to the copy. Do not
assume Arabic means every image belongs on the right. A good default split can place
Arabic copy on the right and art on the left, but the brief and reading balance decide.

Preserve watch side, hair parting, product UI direction, physical light consistency,
and asymmetric marks. An English UI screenshot must remain an English UI screenshot,
not become mirrored Arabic through CSS.

Image accessibility

Use alt="" for purely decorative art whose meaning is already fully conveyed.
For a meaningful story illustration, describe the operational meaning briefly. For
real product proof, provide a meaningful accessible description or nearby explanation
of the verified capability. Do not stuff alt text with marketing keywords.

Keep duplicate decorative layer images hidden from the accessibility tree so one
scene is not announced five times. Essential explanations must not require seeing an
animation. Controls need semantic elements, visible focus, and usable labels.

Test contrast against actual surfaces and computed colors. Large brand headlines are
not exempt from contrast. Focus rings must remain visible on both blue and white
surfaces; use an appropriate contrasting outline or two-tone treatment.

Motion

Animation must explain sequence, relation, or interaction; no perpetual floating
phones, arbitrary particle clouds, scroll hijacking, or entrance delay that hides the
main message. Prefer a few short transitions to animating everything.

Respect reduced-motion preferences and make state changes clear without spatial
motion. A story image should still work as a static frame. On mobile remove layers
and motion that do not help comprehension. Text remains readable before animation.

Performance contract

Preserve high-quality masters privately; deliver optimized derivatives from those
masters. Select formats supported by the project’s tooling and target browsers.
Check alpha and edge quality after conversion. Do not rename extensions without encoding.

Use correct intrinsic dimensions/aspect; size assets to displayed need and device
resolution; avoid default 4K delivery; lazy-load below fold; avoid simultaneous hidden
variants; keep decorative layers few; avoid default autoplay hero video.

Measure the actual site. Record asset bytes, viewport, connection/device assumptions,
LCP, layout shift, and interaction findings. Standard Core Web Vitals good thresholds
are LCP ≤2.5 s, CLS ≤0.1, INP ≤200 ms at the 75th percentile (W2). These are field-quality
targets, not proof that a local screenshot or a single Lighthouse run passes them.
Without field data, label lab evidence as lab evidence and field assessment as pending.

Failure resilience

The copy and CTA must still work when art is slow or fails. Test an image error and
reduced motion. Do not use image onload to unlock essential page content. Keep stable
spacing without an enormous permanent blank gap. Avoid unrequested backend, routing,
or analytics changes during art integration.

────────

