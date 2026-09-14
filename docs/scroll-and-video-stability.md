# Scroll and video stability — September 2026

Scope: correct the reported setup overlap and interrupted scroll behaviour on the current `main` implementation, enhance smaller viewports, and finish native video playback. Existing artwork, real screenshots, Arabic/English copy and commercial facts are preserved.

## Implementation and direction

| Region / state | Behaviour |
| --- | --- |
| Audience, strategies, product proof, setup | One `StorySequence` owner; native scroll and direct chapter anchors |
| Wide, sufficiently tall viewport | Sticky stage below the measured header; pin only when the real localized copy fits |
| Mobile, tablet, short viewport, enlarged text | Document flow; artwork enters by 12px over 520ms; text is always visible and stationary |
| Reduced motion / no JavaScript | Readable linear content, no artificial scroll distance or required animation |
| Fast forward / reverse | Latest step wins; outgoing copy is immediately hidden, no overlapping text or animation queue |
| Small boundary oscillations | Up to 20px hysteresis prevents repeated chapter swaps caused by input inertia |
| Resize during a story | Preserve the current chapter after all stories finish changing layout |
| Product screenshots | Short opacity transition only; preserve original screenshot content and geometry |
| Video | Shared native dialog, explicit user initiation, Escape/close, focus return, playback cleanup, localized error state |

The existing palette, typography, chapter dwell values and artwork remain in use. No animation library, tracking, paid service or generated imagery was added. Source authority: project landing director, scroll/video contract, motion-interaction, responsive-rtl and rendered visual QA.

## Root causes and corrections

| ID | Severity | Evidence / cause | Correction / verification |
| --- | --- | --- | --- |
| S01 | Major | Supplied recording: setup steps cross the title; an old `.setup-intro { position:sticky }` rule competed with the story stage | Title returned to document flow; desktop geometry and rendered setup screenshots |
| S02 | Major | Long simultaneous whole-scene fades allowed outgoing and incoming copy to overlap | Text changes without spatial animation; only active artwork animates; rapid forward/reverse assertions |
| S03 | Major | Eligibility excluded every viewport below 1024×800; linear mode had no motion | Content-fit desktop eligibility from 680px height; one-shot artwork entrances and current-step tracking in compact layouts |
| S04 | Major | Two hash-restoration owners used different step positions | Header hook owns hash restoration; direct chapter navigation and restoration land at step centres |
| S05 | Major | A resize changed CSS geometry before React modes; the old scroll calculation advanced to the wrong chapter | Freeze old-mode updates while crossing the breakpoint and restore after layout; explicit no-hash resize regression |
| V01 | Major | Strategy video linked to Drive MOV preview; system video embedded Drive | Locally served H.264/AAC MP4 files, faststart, byte-range delivery; real play/seek/close tests |
| V02 | Major in development | Strict Mode cleanup paused the newly mounted native video | Reapply explicit play intent during effect setup; browser policy fallback retains native controls |
| V03 | Major keyboard regression in WebKit | Pointer activation did not focus the video trigger, so the dialog captured the page body as its return target | Explicitly focus the trigger before opening; restore focus with `preventScroll` |

## Media manifest (REUSED → transcoded → integrated)

| Asset | Maintained source | Delivery file | Dimensions / duration / bytes |
| --- | --- | --- | --- |
| Strategies | Owner-supplied Drive `1fMEnIthjp5DJ_iot-cUua40-U6_ac1jR` (HEVC MOV, 607,790,525 bytes) | `public/media/strategy-overview.mp4` | 1280×720, 30fps, 549.267s, 18,765,300 bytes |
| System walkthrough | Owner-supplied Drive `1ywJ4_ug-PPe3wcLDJhO_D9tBZAptT_4r` (H.264 MP4, 329,129,477 bytes) | `public/media/system-overview.mp4` | 1680×720, 15fps, 1648.400s, 40,825,413 bytes |

Masters were downloaded intact to the local temporary `Sparkle-auto-video-source` directory; delivery versions are lossy web encodes, not unchanged originals. Strategy: libx264 CRF23, 1200k maximum bitrate, AAC96k stereo. System: libx264 CRF24, AAC64k mono; 15fps retains a readable screen demonstration with lower decoding cost. Both use yuv420p and MP4 faststart. Existing supplied thumbnails are reused. No AI generation or fake product footage.

Video elements and requests are absent before clicking Play. `src/content/media.ts` retains source provenance. Subtitles were not supplied; no fabricated caption tracks were created.

## Verification

Tests: `tests/scroll-stability.spec.ts`, `tests/native-video.spec.ts`, the existing site/audience/header/performance/release/review/motion suites. Screenshots and the submitted recording contact sheet are in `artifacts/scroll-stability/`.

Development verification: 66 existing and new production-scope tests passed in Chromium; native video playback/seek/error tests passed (3); development media/zero/one/two chapter fixtures passed (2). Additional no-hash resize regression passed after its root-cause fix. WebKit development run found a streaming/hydration mismatch and a development reload interruption; production verification is required before closure.

Production build: `npm run build`, `npm run lint`, `npm run typecheck` and `git diff --check` passed. Asset integrity checked 204 image candidates. `npx playwright test tests/scroll-stability.spec.ts --browser=webkit --workers=1 --output=test-results-webkit` passed all 12 tests against `next start`; neither the development hydration error nor reload interruption recurred.

One controlled Chromium run at 1366×768, with 4× CPU slowdown and native wheel input forward/reverse, recorded 317 frame intervals: median 16.7ms, p95 16.8ms, maximum 33.4ms; zero observed long tasks, page errors or horizontal overflow. Chapter progression went 2 → 3 → 4 → 3 → 2. Reproducible diagnostic: `node artifacts/scroll-stability/measure-scroll.mjs`; raw result: `artifacts/scroll-stability/scroll-lab.json`. This is a local laboratory sample, not an FPS guarantee or field Core Web Vitals.

Rendered review includes Arabic/English at 1440×900, 1366×768, 768×1024, 390×844 and 320×844 across all four stories; native video playing/seeked states; desktop reduced motion. Wider site tests cover 320/360/390/430/768/1024/1280/1440 widths, header/drawer, FAQ, forms and automated accessibility. Real physical iOS/Android devices and all network conditions were not tested. Existing live form delivery still requires its configured receiver; intercepted success tests are not real submissions.

`npm run test:production -- --workers=2 --output=test-results-production` passed all 70 Chromium tests against the production build in 5.5 minutes. A subsequent WebKit video check found V03, which was fixed; affected dialog/video checks are rerun after rebuilding. The WebKit media process also bypassed a mocked 404 response, so the error test now loads an actual missing media URL instead of relying on network interception.

After V03, rebuild/lint/typecheck passed again. Final affected checks: WebKit native video suite **3/3 passed**, including actual playback, seeking, focus/scroll restoration and a genuine missing-source error; Chromium video/dialog/inspection selection **7/7 passed**. No known blocking or major scroll/video finding remains in this tested scope. The full Chromium suite was run before this final focus-only correction; affected interactions were explicitly retested afterward.

## Release evidence

Implementation commit: `a906c1b02cc3f862087dac88fc3d41f418c9174d`, pushed to `main` at `https://github.com/zodaayman2005-a11y/Sparkle-auto-`.

`vercel --prod --yes` succeeded; `vercel inspect` confirmed **Ready**, deployment `dpl_5QWhMxKPdek9itPpNQvEJMSMbCgB`, immutable URL `https://sparkle-auto-landing-81pgp91w3-zodaayman2005-3362s-projects.vercel.app`, production alias `https://sparkle-auto-landing.vercel.app`. The remote build passed asset validation and TypeScript. Its npm tooling emitted a pending postinstall notice for existing `unrs-resolver@1.12.2`; no installation policy or dependency was changed to suppress it.

Live check completed 2026-09-14 01:10 UTC using `node artifacts/scroll-stability/verify-live.mjs`: Arabic and English at 1440×900 and 390×844 passed all four stories, setup title position, decoded artwork, no unintended horizontal overflow and no captured page errors. Both real videos played and sought to 75% on each mobile locale; closing preserved focus and scroll position. Both video URLs returned HTTP **206**, `video/mp4`, and the requested 1024-byte range. No video request occurred before interaction. Raw results: `artifacts/scroll-stability/live-verification.json`; four live screenshots use the `live-` prefix in the same directory.

**Verdict:** scroll/video corrections are released and verified within the stated browser, viewport and network scope. Full commercial launch remains distinct: the pre-existing form receiver configuration is still missing, and no real request-delivery success is claimed. Physical-device and field-performance coverage remains unavailable.
