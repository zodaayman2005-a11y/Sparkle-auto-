# Scroll illustration cutouts

## Scope and decisions
- User authorized local background removal. Reused the 21 existing illustrations: audience 01–11, strategies 01–05, setup 01–05. No new artwork or product screenshots generated.
- All originals remain at public/art/{audience,strategies,setup}. New lossless RGBA masters are in public/art/cutouts; responsive WebP delivery uses a new URL namespace, avoiding stale opaque cached images.
- Source RGB pixels are preserved exactly in the cutout masters. Only alpha changes. Browser delivery is optimized WebP, so it is not claimed to be lossless.
- Scene 10 uses a full-width mobile composition with a 260–360px image area instead of the previous 94–116px compact column.
- Product proof code/assets were excluded. Seven product files were compared by SHA256 and remain unchanged.

## Reproduction
Offline tools only; no Python, model or segmentation runtime is loaded by visitors.
1. In a separate Python environment install onnxruntime, numpy, Pillow, scipy.
2. Obtain BiRefNet-general-lite ONNX from https://github.com/danielgatis/rembg/releases/download/v0.0.0/BiRefNet-general-bb_swin_v1_tiny-epoch_232.onnx, store as ~/.u2net/birefnet-general-lite.onnx. Verified MD5: 4fab47adc4ff364be1713e97b7e66334. Model source/license: https://github.com/ZhengPeng7/BiRefNet (MIT).
3. Run scripts/extract-story-backgrounds.py then scripts/refine-story-masks.py. These masks are scoped to the current original asset dimensions; changing originals requires a fresh visual review.
4. Run npm run assets:build. Check all outputs before adoption.

BiRefNet extraction alone removed some light props. Reviewed color-connected masks and explicit prop polygons restored them without repainting the source. The initial u2netp sample was rejected. No fake checkerboard output was integrated.

## Evidence
- docs/scroll-cutout-manifest.json records 21 originals and cutouts, source hashes and alpha/RGB checks.
- 21/21 masters contain real transparent and opaque pixels; RGB equals the original.
- 84/84 responsive cutout files retain alpha. Build asset integrity now rejects an alpha mismatch.
- 320px delivery variants measure 19,544–30,884 bytes each. One responsive candidate is selected per image, not all four. These are file sizes, not field speed metrics.
- Local contact sheets in artifacts/scroll-cutouts/contact-{white,ice,navy}.jpg. White and navy sheets visually reviewed; scene 10 and strategy 01 calibrated before batch extraction.
- Browser/build verification recorded after integration below.

## Browser QA
- Arabic and English: 1440, 1024, 768, 390, 360 and 320 CSS px.
- All 21 illustration elements decoded and had a non-zero rendered size in every configuration.
- No document overflow and no page errors in the 12 configurations.
- Reduced-motion document-flow states inspected for scene 10, strategy 01 and setup 01.
- Desktop pinned state was navigated to scene 10 and visually inspected.
- Scene 10 is now legible at 390 and 320px, with the artwork below its copy instead of compressed into the compact side column.
- `npm run lint`, `npm run assets:check` and `npm run build` passed; the build completed TypeScript validation.
