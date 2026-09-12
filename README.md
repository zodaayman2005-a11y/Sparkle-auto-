# Sparkle Auto landing page

Arabic-first Next.js 16.3.4 / React 19.2.8 site with an independently composed English route. The current implementation is a review preview. Commercial approval, live lead delivery and public-release metadata remain gated; a successful build is not commercial approval.

## Run and verify

```powershell
npm ci
npm run assets:check
npm run dev
```

Arabic: http://127.0.0.1:3100/ · English: http://127.0.0.1:3100/en

Stop the dev server before `npm run build`, then use `npm run start` for production locally. Do not run dev and production against the same `.next` directory at once.

```powershell
npm run lint
npm run typecheck
npm test
```

`npm test` uses the running development server and includes two development-only fixtures. For a running production server use `npx playwright test tests/site.spec.ts tests/audience.spec.ts tests/release.spec.ts`. On a new machine install Chromium with `npx playwright install chromium`. No formatting checker is configured.

The final browser matrix and performance harnesses are `artifacts/release-hardening/browser-qa.mjs` and `performance.mjs`. Run performance separately from other browser/build work. Both support `QA_URL`; lab results are not field Core Web Vitals.

## Code and media

2026-09-12 hero update: the user explicitly requires original-quality delivery. `Hero.tsx` therefore serves `public/hero/hero-ar-original.png` (29,518,984 bytes) or `hero-en-original.png` (29,647,936 bytes), both 6688×3764, with Next Image `unoptimized`. These are exact supplied PNGs, archived in `assets/incoming`, with no resized/re-encoded delivery alternative. The static WebP pipeline below still applies to other artwork. Earlier September 8 performance measurements do not describe this substantially heavier hero. Source-integrity evidence is under `artifacts/hero-originals-2026-09-12/`.

- `content/site.ts`: frozen bilingual marketing copy. Its product claims still require the maintained approvals recorded in the source ledger.
- `content/commercial.ts`: explicitly provisional offers, FAQ and form fields; never remove the draft notice while keeping unapproved values.
- `Landing`: server composition. `StorySequence`: shared native-scroll behavior for focused audience/setup/strategy components. Pinning requires sufficient width, height, text fit and no reduced-motion preference.
- `ProductProof`: early real Overview and accessible original-image inspection. All seven `public/product/*.jpg` captures retain their supplied bytes, locale and dimensions. The mobile detail view is CSS cropping, not a repainted screenshot.
- `StrategyVideo`: simple linked play cover. The supplied Drive player demonstrably trapped Tab/Escape when embedded, so the final site uses native new-tab navigation, disclosed on the cover. Provider playback and automatic Arabic caption availability were observed; no reviewed transcript is supplied.
- `Modal`: native dialogs for the drawer and product inspection. `ReviewForm` and shared `content/validation.ts`: client/server validation, including Arabic/Persian numerals.
- `styles/tokens.css`: semantic palette, type, geometry and motion. Hero, story and proof styles have focused stylesheets.

When artwork changes, run `npm run assets:build` followed by `npm run assets:check`. The custom Next image loader selects pre-encoded WebP candidates from `public/delivery`; it does not depend on first-request image transformations. Do not upscale or modify real product captures. Keep original masters under `assets/`, which is excluded from deployment. There are no newly generated AI assets in the current hardening pass.

`/design`, `/design/motion` and `/api/test-video` are available only in development. Missing individual walkthrough slots and the missing booking-phone capture do not render deceptive placeholder controls or UI.

## Review request delivery

The form validates on both sides, retains values after an error and only shows receipt after a successful receiver response. With no receiver it returns 503 and explains that delivery is not connected. Loading/error/success fixtures are isolated tests, not evidence of a real lead being delivered.

When a receiver is approved, copy `.env.example` to `.env.local` and set `OPERATIONS_REVIEW_WEBHOOK_URL` to its HTTPS URL. The receiver must accept the whitelisted JSON and return success only after storing the lead. Redirects are refused, the request timeout is 10 seconds, and input is limited to 10 KB. The URL stays server-side. Agree access/retention/privacy terms and verify actual receipt before opening conversion publicly. No new paid service, analytics or lead storage was added.

`SITE_URL` is optional and must be the confirmed production origin. No canonical is inferred from a Vercel preview. Setting a hostname alone does not remove `noindex` or approve commercial claims.

## Current evidence

- [Implementation and direction](artifacts/release-hardening/IMPLEMENTATION-MAP.md)
- [Asset manifest](artifacts/release-hardening/ASSET-MANIFEST.json)
- [Source and claim ledger](artifacts/visual/SOURCE-CLAIM-LEDGER.md)
- [Visual QA](artifacts/release-hardening/VISUAL-QA.md)
- [Release report](artifacts/release-hardening/RELEASE-REPORT.md)
- [Preview deployment history](docs/VERCEL-DEPLOYMENT.md)

Older `artifacts/visual` and refinement reports document earlier previews. The release-hardening reports are the current evaluation. Installed skill archives and original assets remain preserved. Production publication requires the explicit approvals listed in the release report; no production promotion is part of this work.
