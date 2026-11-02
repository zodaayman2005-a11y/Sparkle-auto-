# Sparkle Auto landing page

## Current six-page review — updated 2 November 2026

The owner-approved primary label is now **Get Started / ابدأ الآن**, replacing all review/demo booking wording. Desktop retains its header action. Mobile shows the header action in the menu only. The owner subsequently restored the homepage hero action on both devices. End-of-page actions remain; footer navigation does not repeat the form link. Both pricing cards also use the central Get Started label beneath their prices. The existing contact form collects details for follow-up and setup; it does not create an account automatically.

The active site now has six pages in each locale: home (`/`), platform (`/platform`), the supplied film (`/film`), subscription (`/subscription`), FAQs (`/faq`) and contact (`/contact`). English uses the corresponding `/en` paths. The FAQ page preserves the owner's requested detailed answers with persistent search/categories. Product screenshots open in a borderless full-screen viewer: Close/Escape, direct image zoom and native panning replace the former title and mode toolbar. The October user direction supersedes the previous long single-page narrative described below. No deployment was performed.

The product is presented as a connected platform for management, operations and growth. Owner-confirmed car-wash and PPF pricing is maintained in `src/content/pricing.ts`, including pay-once/installments, monthly subscription, maintenance, branch fees and a 14-day free trial. The monthly subscription includes maintenance; pay-once maintenance starts after six months. PPF installments are explicitly confirmed as 3 × EGP 3,334 (EGP 10,002 total). Do not restore the historical three-tier prices or add-ons. Source image: `docs/references/owner-pricing-2026-11-01.jpg`.

The pricing page switches between pay-once and monthly terms, with larger prices and a concise list of included platform capabilities in both business cards. The owner explicitly confirmed that the first six months of maintenance are free with purchase; monthly subscriptions include maintenance throughout the subscription. The original “Not sure the system fits?” 14-day trial invitation remains below the prices. The mobile menu now covers the full screen, with plain page links, a booking action and language selection at the bottom. Page-name eyebrows and their decorative squares are removed; pricing FAQ disclosures use consistent plus/minus controls. Monthly applicability of the one-time additional-branch fee is awaiting owner clarification; the local review retains the existing source-table charges. Confirm that detail before release.

The supplied 9:52 Arabic film uses a complete 16:9 frame, a custom play cover, native playback/fullscreen controls after starting, opt-in loading and topic shortcuts. Why Sparkle combines its intro, three short points and booking action beside the player on laptops, then stacks them on phones. Its 720p web derivative is 64,536,476 bytes. The source file and poster are retained unchanged. No reviewed timed caption file was supplied. Header booking actions and Platform screenshot previews use the same dark-shadow press interaction as Home cards. The 14-day invitation uses the owner's preferred blue banner, large 14 and white booking button.

`npm run build` checks only assets used by the new site, then builds. `npm run test:website-contract` checks the running local server. The default Playwright suite is now `tests/website.spec.ts`; the retained older specs describe the superseded scroll page. The new Playwright suite was collected, not executed in this chat; direct browser QA and HTTP contract checks are recorded in `docs/WEBSITE-REFRESH-2026-10-31.md`.

The existing review receiver contract remains unchanged. Local delivery is unconfigured; a receipt is never shown without a confirmed successful receiver response. Deployment configuration must be verified separately.

## Previous single-page implementation reference

Arabic-first Next.js 16.3.4 / React 19.2.8 site with an independently composed English route. The project owner approved the complete Arabic and English website content on 13 September 2026. Public metadata is enabled for the confirmed production origin. Live lead delivery remains a separate technical dependency.

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

- `content/site.ts`: approved bilingual marketing copy, recorded as `user_approved`.
- `content/commercial.ts`: owner-approved plans, add-ons, FAQ and form fields.
- `Landing`: server composition. `StorySequence`: shared native-scroll behavior for focused audience/setup/strategy components. Pinning requires sufficient width, height, text fit and no reduced-motion preference.
- `ProductProof`: early real Overview and accessible original-image inspection. All seven `public/product/*.jpg` captures retain their supplied bytes, locale and dimensions. The mobile detail view is CSS cropping, not a repainted screenshot.
- `StrategyVideo`: simple linked play cover. The supplied Drive player demonstrably trapped Tab/Escape when embedded, so the final site uses native new-tab navigation, disclosed on the cover. Provider playback and automatic Arabic caption availability were observed; no reviewed transcript is supplied.
- `Modal`: native dialogs for the drawer and product inspection. `ReviewForm` and shared `content/validation.ts`: client/server validation, including Arabic/Persian numerals.
- `styles/tokens.css`: semantic palette, type, geometry and motion. Hero, story and proof styles have focused stylesheets.

When artwork changes, run `npm run assets:build` followed by `npm run assets:check`. The custom Next image loader selects pre-encoded WebP candidates from `public/delivery`; it does not depend on first-request image transformations. Do not upscale or modify real product captures. Keep original masters under `assets/`, which is excluded from deployment. There are no newly generated AI assets in the current hardening pass.

`/design`, `/design/motion` and `/api/test-video` are available only in development. Missing individual walkthrough slots and the missing booking-phone capture do not render deceptive placeholder controls or UI.

## Review request delivery

The form validates on both sides, retains values after an error and only shows receipt after a successful receiver response. With no receiver it returns 503 and explains that delivery is not connected. Loading/error/success fixtures are isolated tests, not evidence of a real lead being delivered.

When a receiver is available, copy `.env.example` to `.env.local` and set `OPERATIONS_REVIEW_WEBHOOK_URL` to its HTTPS URL. The receiver must accept the whitelisted JSON and return success only after storing the lead. Redirects are refused, the request timeout is 10 seconds, and input is limited to 10 KB. The URL stays server-side. Agree access/retention/privacy terms and verify actual receipt before enabling live delivery. No new paid service, analytics or lead storage was added.

`SITE_URL` can override the confirmed production origin. Without it, metadata and canonical links use `https://sparkle-auto-landing.vercel.app`.

## Current evidence

The independent phone redesign was undone at the owner's request. The earlier
responsive layouts and shared platform sections are restored. See
`docs/WEBSITE-REFRESH-2026-10-31.md` for current implementation and actual QA evidence.
The demo form refinement was reverted after the owner clarified that they meant
the Platform page. Platform now has consistent screenshot cards, phone layouts
and section shortcuts at the top; the demo page retains its earlier layout.
Only the main site header stays fixed while reading Platform.

- [Implementation and direction](artifacts/release-hardening/IMPLEMENTATION-MAP.md)
- [Asset manifest](artifacts/release-hardening/ASSET-MANIFEST.json)
- [Source and claim ledger](artifacts/visual/SOURCE-CLAIM-LEDGER.md)
- [Visual QA](artifacts/release-hardening/VISUAL-QA.md)
- [Release report](artifacts/release-hardening/RELEASE-REPORT.md)
- [Preview deployment history](docs/VERCEL-DEPLOYMENT.md)

Older `artifacts/visual` and refinement reports document earlier implementation stages. The current application code and latest release reports take precedence. Installed skill archives and original assets remain preserved.
