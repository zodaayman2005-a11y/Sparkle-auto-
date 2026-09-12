# Original hero images — 2026-09-12

User decision: use both supplied high-resolution files as the official locale hero backgrounds without reducing image quality. This overrides the former hero WebP delivery budget; no new AI image was generated.

| Locale | Supplied file | Bytes | Dimensions | Served path |
|---|---|---:|---|---|
| English | IMG_4180.PNG / Drive 1Pw5KwZLzf-V4n3Bm65d88z2F9vxyrYg4 | 29,647,936 | 6688×3764 | public/hero/hero-en-original.png |
| Arabic | IMG_4181.PNG / Drive 1b2qcHexCeIOAkmw17M2yXF3Bn_f1CC26 | 29,518,984 | 6688×3764 | public/hero/hero-ar-original.png |

Drive metadata confirmed MIME/size. The connected fetch returned remote file references; authenticated Drive browser downloads materialized the originals locally. Source files, archived copies under assets/incoming and public copies match by SHA-256. See source-verification.json. Existing small chat JPEGs are retained separately and are not used by the hero.

Implementation: only the Hero image source/delivery changed. Next Image retains fill/preload and decorative alt, with `unoptimized` so the browser receives the supplied PNG rather than the custom resizing loader. A locale renders one original; the counterpart is not preloaded. No CSS mirroring, image re-encoding, file downscaling, generative edits or changed marketing copy. Existing CSS fits the source to each viewport; natural browser display scaling/cropping does not alter the delivered file.

The exact-original requirement adds about 29.5 MB to each first locale load and can materially delay the background on slower connections. Earlier LCP/transfer figures and the September 8 full-page score are historical and are not current performance claims. Text/actions retain the existing independent HTML rendering. No new full-site accessibility/performance certification is implied by this scoped image replacement.

Verification completed:

- `npm run lint`: passed in the repository.
- `npm run build`: passed in the clean local build copy, including TypeScript; the Vercel build independently passed.
- `node artifacts/hero-originals-2026-09-12/verify-files.mjs`: source/archive/public hashes and metadata passed.
- The same script against `http://127.0.0.1:3102` and the preview URL passed: both responses are HTTP 200, image/png, exact source byte counts and SHA-256. See local-verification.json and live-verification.json.
- Browser DOM checks on both locales at 1440, 1024, 768, 390, 360 and 320: full 6688×3764 source decoded, no srcset/downsized candidate, no document overflow. Inspected desktop and mobile image/text compositions in the browser; both published locale originals completed loading. No captured warning/error in the reviewed tab. Temporary viewport override reset.
- This was a scoped image replacement, not a rerun of the previous 40-test/full-page accessibility/performance audit.

Preview: https://sparkle-auto-landing-ckkv7q0t6-zodaayman2005-3362s-projects.vercel.app/ (Arabic) and /en (English). Updated with `vercel deploy --yes` under existing preview authorization; no production promotion. Existing commercial/lead/domain release gates remain unchanged.
