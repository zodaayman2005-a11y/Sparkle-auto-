# Vercel preview deployment

## Original-resolution hero update — 2026-09-12

- Current preview: https://sparkle-auto-landing-ckkv7q0t6-zodaayman2005-3362s-projects.vercel.app/ and /en.
- Supplied original PNG backgrounds: 6688×3764; Arabic 29,518,984 bytes, English 29,647,936 bytes. Both served byte-for-byte unchanged with optimization disabled for the hero, as explicitly requested.
- `vercel deploy --yes` and cloud build succeeded. Served files match downloaded original SHA-256 hashes; both locale images decoded in the browser.
- Local lint/build passed; six-width DOM checks in each locale and desktop/mobile image composition inspected. This scoped update does not inherit the previous lighter hero's performance numbers.
- Evidence: `artifacts/hero-originals-2026-09-12/REPORT.md`, `live-verification.json`, and `browser-verification.json`. Preview only; no production promotion.

## Current verified preview — release hardening, 2026-09-08

- URL: https://sparkle-auto-landing-2sq8r7it2-zodaayman2005-3362s-projects.vercel.app
- Deployment: `dpl_JC2ufL346c9DmDzDgUF6L4rawz22`.
- Target: **preview**; Vercel status **Ready**, independently inspected after deployment. This is deployment health, not product/commercial approval.
- Created: 2026-09-08 05:08:07 PDT. `vercel deploy --yes` completed in approximately 32 seconds; cloud build compiled and typechecked successfully.
- Arabic `/` and English `/en`: unauthenticated HTTP 200, correct language/direction, all images decoded, no observed console warnings/page errors or horizontal overflow at 1440 and 390. Drawer Escape/focus and mobile deep links passed. Seven published real capture hashes equal their source files.
- Source media: requested locale landscapes and story art; 96 static delivery candidates; real screenshots unmodified. Strategy play cover opens the supplied Drive source in a disclosed new tab after testing found a keyboard trap in its embedded player.
- Evidence: `artifacts/release-hardening/live/results.json`, `production-tests.json`, `VISUAL-QA.md` and `RELEASE-REPORT.md`.
- Public production release remains blocked by commercial/product approval, authorized lead delivery/privacy terms and a confirmed production origin. Noindex and explicit review notices remain. No live lead was sent, production promotion performed or new service added.
- Cloud npm reported a transitive `unrs-resolver` postinstall allow-scripts warning. Build succeeded; script permissions were not broadened. No browser runtime warning was observed in the live verification scope.

The entries below are historical previews and are not the current release verdict.

The user explicitly authorized uploading the current preview to Vercel after the earlier no-publish build scope.

- Project: sparkle-auto-landing
- Target: preview
- Status: READY; Arabic and English returned HTTP 200 in an unauthenticated Chromium browser.
- URL: https://sparkle-auto-landing-1bzl026dy-zodaayman2005-3362s-projects.vercel.app
- Framework: Next.js 16.3.4
- Deployment: dpl_BnQCNqdBSE1nK72vxgHbyi95e2KQ
- Cloud build/deployment: approximately 33 seconds reported by CLI.
- Git commit: none; deployed authorized local working-tree files through CLI.

Initial deployment used the project's Other framework preset and returned 404. Added vercel.json with the explicit nextjs preset, redeployed and verified actual pages. Raw browser checks: artifacts/visual/vercel-checks.json. Both locale headings and language attributes were correct, with no captured page errors. The Arabic deployment screenshot was visually inspected.

.vercelignore excludes skill archives, planning docs, original source artwork, tests, environment files and local build output. No webhook credentials, analytics, paid service, custom domain or Git push was added. Preview claims/media notices remain, as do noindex metadata and honest unconfigured-form behavior.

## Updated visual preview — 2026-09-07

- URL: https://sparkle-auto-landing-3mlwxz9rn-zodaayman2005-3362s-projects.vercel.app
- Deployment: dpl_7QNEpZqTXG7aFrZxSxM9WX33VhuF
- Target: preview, same linked Sparkle project; no production promotion.
- Cloud build and deployment completed successfully through `vercel deploy --yes`.
- Details and verification: artifacts/refinement/REFINEMENT-REPORT.md and live-verification.json.

## Preview update — audience story, 2026-09-08

- Preview: https://sparkle-auto-landing-esfeksep2-zodaayman2005-3362s-projects.vercel.app
- Direct scene entry: /#fit-case-1
- Deployment: dpl_7REAX745bFJTRczJ4KMN86Du4VgR
- Cloud build succeeded. Same linked project; preview only, no production promotion.
- Evidence: artifacts/audience-story/live-verification.json; DELIVERY.md; SCENE-BOARD.md.

2026-09-08 product screenshots preview: https://sparkle-auto-landing-aw7f6dr0l-zodaayman2005-3362s-projects.vercel.app — seven supplied real screens, preserved originals and full-size zoom.


2026-09-08 setup illustrated story preview: https://sparkle-auto-landing-nsb81c16i-zodaayman2005-3362s-projects.vercel.app — five illustrated setup steps, shared heavy native-scroll engine, original copy preserved.


2026-09-08 illustrated strategies preview: https://sparkle-auto-landing-i21vh19e9-zodaayman2005-3362s-projects.vercel.app — five supplied strategy illustrations, heavy native-scroll scenes, unchanged source copy.


Hero portrait preview: https://sparkle-auto-landing-kuepwvrye-zodaayman2005-3362s-projects.vercel.app — supplied portrait replaces hero mockup; original copy preserved.


Localized full hero backgrounds: https://sparkle-auto-landing-5ywo9g80m-zodaayman2005-3362s-projects.vercel.app — separate supplied Arabic and English landscape images.


Text-only actions preview: https://sparkle-auto-landing-fsfu0vprt-zodaayman2005-3362s-projects.vercel.app — arrow icons removed, spacing realigned.


Subscription comparison removed from both locales. Preview: https://sparkle-auto-landing-aauo03mpj-zodaayman2005-3362s-projects.vercel.app. Lint, deployment build and live browser absence/pricing/overflow checks passed.


Strategies video: https://sparkle-auto-landing-jxuuqevio-zodaayman2005-3362s-projects.vercel.app — simple pale cover/play button, user Drive video in lazy dialog.


Section contrast swap: https://sparkle-auto-landing-5n3919srb-zodaayman2005-3362s-projects.vercel.app — light strategies, navy real screenshots, matched text/link/focus colors. Build passed; scoped WCAG AA contrast check in both locales.

