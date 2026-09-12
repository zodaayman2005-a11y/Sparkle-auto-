# Performance, stability and UX audit — 2026-09-12

Scope: latest main at `3bafa67`, preserving the supplied artwork, real product captures, Arabic-first identity and native story scrolling. This is an implemented performance/UX update, not commercial release approval.

## Direction and implementation map

- **Images:** retain the two 29 MB original hero PNGs unchanged. Serve content-hashed WebP candidates at 640/960/1280/1920/2560, with an inline 48 px blur preview and responsive preload. `scripts/build-assets.mjs`, `src/content/hero-media.json`, `src/lib/image-loader.ts`, `Hero.tsx`.
- **Below-fold media:** add responsive delivery for the supplied phone/laptop illustrations and both video posters. Strategy poster no longer loads eagerly. Video embeds still load only after user action. `Narrative.tsx`, `StrategyVideo.tsx`, `SystemOverviewVideo.tsx`.
- **Brand mark:** original JPG retained; losslessly encoded 144 px delivery image supports the existing 48 CSS px mark at 3x. `Primitives.tsx`.
- **Caching:** immutable caching only for content-hashed hero files; bounded caching for other delivery assets and local fonts. `next.config.ts`.
- **Hero layout:** compact layouts use a real image area in document flow, rather than a bottom offset tied to copy height. At 768–1199 px, preserve the full 16:9 composition. Arabic reassurance uses available width to avoid an orphaned ending. `src/styles/hero.css`.
- **Accessibility:** darken question numbers in the operations-pressure section, fixing the contrast failure found in both locales. `operations-pressure.css`.
- **Reproducibility:** replace `latest` dependency declarations with already-installed lockfile versions; add asset validation before every build. No framework/router upgrade, new runtime dependency or scroll library.
- **Test organisation:** fix selectors referring to superseded screen-chapter markup. Remove the obsolete assertion freezing all site copy to an archived snapshot; retain SHA-256 checks on all real product captures. Separate development-only fixtures from production tests, without disabling either suite.

## Asset manifest and provenance

| Category | Action and evidence |
| --- | --- |
| CODE | Responsive loader, blur placeholder, CSS layout, cache headers and prebuild asset checks |
| REAL | Existing product captures unchanged; original capture hashes verified by release tests |
| REUSED | User-supplied locale hero scenes, brand mark, device illustrations and video posters |
| GENERATED | No AI artwork generated. Only deterministic image delivery derivatives were produced |
| OMITTED | Original 29 MB hero downloads and premature video/poster requests from initial loading |

Hero source hashes, exact byte counts, output sizes and preview data are in `src/content/hero-media.json`. Original files remain under `public/hero/`; derivatives under `public/delivery/hero/`. Existing art derivatives remain unchanged; 16 JPG-derived art candidates and one brand candidate are added.

Arabic hero: original **29,518,984 bytes**; delivery **25,566 / 47,060 / 76,442 / 163,450 / 293,850 bytes**. English hero: original **29,647,936 bytes**; delivery **25,424 / 47,018 / 75,504 / 151,496 / 264,280 bytes**. The mobile DPR 2 test selects 960 px, about 47 KB, a 99.84% transfer reduction. These delivery images are resized, high-quality lossy WebP, not byte-identical originals. Original master quality is preserved separately.

## Measured lab evidence

`scripts/measure-loading.mjs` measures a local production server in Chromium 153, cold cache, 6 Mbps download, 80 ms latency, CPU 4x slowdown, DPR 1. Each file records exact conditions and individual resource timings. These are individual laboratory observations, not field Core Web Vitals or a guarantee of instant loading.

| Width | Before hero decoded | After first pass | After layout refinement |
| --- | ---: | ---: | ---: |
| 390 | 42,038 ms | 3,446 ms | 3,485 ms |
| 1440 | 41,575 ms | 2,620 ms | 2,929 ms |

Sources: `before.json`, `after.json`, `after-final.json`. Desktop LCP changed from **42,624 ms** to **2,608–2,768 ms** across these after observations. Mobile LCP is text, not the below-fold artwork: **2,548 ms before**, **2,544–2,636 ms after**. Hero transfer was the dominant image issue, but this does not establish LCP ≤2.5s on all devices. No field INP data is available. Observed initial layout-shift sum was 0; this is a sum during the measurement window, not a full field CLS/session-window calculation.

## Findings and independent rendered review

| ID | Severity | Finding / root cause | Fix and verification |
| --- | --- | --- | --- |
| PERF-01 | major | Both locales delivered a 29 MB unoptimized hero even to phones | Responsive preload and hashed candidates; DPR 2 network assertions, measured timing and rendered hero review |
| PERF-02 | major | Supplied JPG illustrations/posters bypassed the existing delivery pipeline; strategy poster eager | Extend deterministic pipeline; responsive sources and lazy poster; asset validation and browser requests |
| UX-01 | major | Hero artwork position depended on bottom offsets and copy height | Flow-contained compact image area; automated copy/image separation at 390, 768, 1024 in both locales |
| UX-02 | major | At 768 px fixed image height cropped the character's head; 1024 desktop cover overlapped the copy region | Full-ratio tablet composition and earlier reflow; regenerated 768/1024 hero evidence inspected |
| A11Y-01 | major | Six operations-pressure numbers failed text contrast in both locales | Existing dark token; full-page axe re-run in both languages passed |
| UX-03 | minor | Arabic reassurance ended with a separate short line on desktop | Remove unnecessary max-width within Arabic hero; rendered 1440 inspection |
| MAINT-01 | major | Regression suite contained obsolete selectors and a copy-freezing snapshot | Current component contracts tested, real asset hashes retained; production/development suites run separately |
| PERF-03 | minor | 48 px brand mark fetched a 111 KB JPG | 144 px lossless WebP delivery, 12,448 bytes, original retained |

Visual evidence: eight `hero-{ar,en}-{390,768,1024,1440}.png` captures here and full-page captures in `artifacts/visual/final-*.png`. Desktop and mobile are intentionally different compositions. No subjective 90/100 score substitutes for unresolved commercial gates.

## Checks performed

- `npm install --package-lock-only --ignore-scripts`: passed; installed versions preserved.
- `npm ls --depth=0`: clean dependency tree.
- `npm audit --omit=dev`: 0 reported vulnerabilities. This is dependency audit evidence, not a comprehensive security certification.
- `npm run assets:build` and `npm run assets:check`: responsive candidates generated/validated; source SHA manifest verified.
- `npm run lint`, `npm run typecheck`, `npm run build`: passed.
- `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3131 npm run test:production`: **45 passed** after hero/contrast fixes.
- `PLAYWRIGHT_BASE_URL=http://127.0.0.1:3100 npm run test:development`: **2 passed**.
- Initial failures were investigated: actual contrast defects fixed; FAQ expectation corrected to the two maintained English Excel entries; development-only routes correctly return 404 in a production build, so their fixture tests run against development.
- Reflow/runtime checks: Arabic and English at 320, 360, 390, 430, 768, 1024, 1280, 1440. Also 720×500 for 200% desktop reflow equivalent; DPR 2 mobile hero; reduced motion; JavaScript disabled.
- Interactions: drawer Escape/focus/scroll unlock, locale switch, FAQ search/recovery/keyboard, monthly/annual toggle, story deep links/reversal/skip, screenshot dialog/pan/focus, form validation and invalid server requests. Loading/error/success tested only with intercepted local responses; no real lead sent.

Local build note: OneDrive marked an old `.next/static` directory as a reparse point and Next's cleanup failed with EPERM. The owned local servers were stopped and the generated cache was preserved in `.next-audit-backup`, excluded from Git and deployment. A fresh build succeeded. No source files were deleted.

## Remaining release gates

**Not ready for unrestricted commercial release.** The performance/UX changes can ship, but these existing external truth/configuration gates remain:

1. `vercel env ls production` returned no configured environment variables. No authorized `OPERATIONS_REVIEW_WEBHOOK_URL` exists; real request delivery cannot be claimed. The form handles this honestly.
2. Maintained base-price/annual commercial content still carries provisional approval status. New user-provided add-ons/FAQ decisions are preserved; this audit does not invent approval of remaining commercial terms.
3. No owner-confirmed `SITE_URL` is configured. Existing preview/noindex metadata is retained rather than publishing an invented canonical or hiding unresolved release gates.

Deployment and final brand-delivery verification are recorded below after completion.
