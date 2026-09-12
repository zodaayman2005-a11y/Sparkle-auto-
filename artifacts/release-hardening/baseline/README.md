# Sparkle Auto landing page

Arabic-first, bilingual Next.js 16 / React 19 implementation of the supplied v2 plan. The complete page is a local review preview, not a published or commercially verified website.

## Run

```powershell
npm ci
npm run dev
```

Open http://127.0.0.1:3100 (Arabic) or http://127.0.0.1:3100/en (English).
For production locally: stop the dev server, run `npm run build`, then `npm start`.

## Review and checks

- `/design?variant=a&locale=ar`: selected hero and design specimens.
- `/design?variant=b&locale=en`: alternate hero and English specimens.
- `/design/motion`: development-only 0/1/2 chapter and synthetic video fixtures; unavailable in production.
- `npm run lint`, `npm run typecheck`, `npm run build`.
- With a dev server running: `npm test` (28 browser tests).
- With a production server running: `npx playwright test tests/site.spec.ts` (26 browser tests). Development fixture tests are intentionally excluded.
- On a new machine: `npx playwright install chromium` before browser tests.

## Content and real media handoff

`src/content/site.ts` contains bilingual content, `commercial.ts` draft offers and form fields, and `media.ts` proof/video registries. The full supplied plan and appendices are preserved in `docs/project-sources/SPARKLE-AUTO-MASTER-PLAN-v2.0.0.md`; visible copy is editorially arranged. The missing subscription-copy cross-reference is recorded in the claim ledger.

The user authorized neutral screenshot placeholders: desktop 4:3, phone 9:22. Supply actual screenshots under `public/`, then update proof entries with real paths, dimensions, language, version/date and ready status. Preserve screenshot pixels and actual language. Review readability after replacement.

Twelve video keys are prepared. Missing and disabled videos expose no play button. Set ready only with an actual video and poster; add supplied caption tracks. The synthetic file in `tests/fixtures` is never product proof. Its endpoint returns 404 in production.

Official assets in `assets/brand/originals` are untouched. The blue telephone is an optimized generated marketing prop, separate from product UI.

## Operations-review delivery

The form validates locally and on the server, preserves inputs after failure, prevents duplicate submission, and has loading/error/receipt states. No destination was supplied, so the adapter returns 503 and clearly reports that the request was not sent.

When an approved receiver exists, copy `.env.example` to `.env.local` and set `OPERATIONS_REVIEW_WEBHOOK_URL` to its HTTPS endpoint. It must accept whitelisted form JSON and return a successful HTTP status only after storing the lead. Redirects are refused; timeout is 10 seconds. The endpoint stays on the server. Test actual receipt before removing preview messaging. UI success was tested with intercepted responses; no real lead was transmitted.

## Publication gates

Real screenshots, approved pricing/taxes/vehicle-limit period/trial terms, live receiver and genuine contact/legal destinations are still required. Metadata remains `noindex`; do not remove it merely because a build passes. No deployment, analytics or paid service was added.

## Design and evidence

- `artifacts/visual/VISUAL-DIRECTION.md`: direction and hero comparison.
- `artifacts/visual/SECTION-VISUAL-MAP.md`: section roles and composition.
- `artifacts/visual/SOURCE-CLAIM-LEDGER.md`: unresolved facts.
- `artifacts/visual/ASSET-MANIFEST.json`: actual assets and pending proof.
- `artifacts/visual/GENERATION-LOG.md`: one telephone generation.
- `artifacts/visual/VISUAL-QA.md`: checks, limits and delivery status.

Installed skill sources remain unchanged. Installation history is in `docs/sparkle-skills-install/INSTALLATION-REPORT.md`; native Codex discovery remains unverified. Relevant skills were read through project paths progressively during this build.
