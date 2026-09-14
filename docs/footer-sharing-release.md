# Footer, identity and share preview

Scope: owner-requested footer redesign, official favicon/touch icon, supplied social image, and the empty-looking area at the bottom of an iPad screenshot. Based on current `main` (`6b02acf`) and existing Sparkle tokens, logo, route and conversion contracts. Used the landing director, responsive RTL, discoverability, visual QA, and visual art/brand-overlay reuse guidance.

## Changes and decisions

- Extracted `Footer.tsx`; removed the old footer markup and unused CSS. Navy surface, authentic logo on white, two navigation groups, review CTA, language and back-to-top links. Arabic and English are independently set; compact widths stack without hiding navigation.
- Native root `overscroll-behavior:none` on HTML/body, with a navy root surface matching the footer. `.site` contains its own flow and retains white section surfaces. The tested WebKit build lacks this CSS capability, so `ScrollBoundary.tsx` activates only when unsupported: it cancels outward vertical wheel/touch input at document edges, preserving inward input, nested scroll owners, native form/media controls and pinch zoom. No fixed body, artificial document height or replacement scrolling engine.
- Before the change, desktop geometry showed document height 45205px and footer bottom 45204.9375px: no DOM space after the footer. The supplied iPad image is consistent with elastic boundary scrolling; it is not evidence of a 500px footer padding rule. Current boundary tests check document/footer equality and wheel input at the bottom.
- Sharing metadata no longer disappears when optional `SITE_URL` is absent. It uses the owner's existing public address, `https://sparkle-auto-landing.vercel.app`, as the fallback sharing origin. Canonical opt-in and existing noindex/commercial status remain separate and unchanged. Static locale metadata puts the tags in the initial head.

## Asset manifest

| Kind | Source | Delivered file | Treatment |
| --- | --- | --- | --- |
| REAL / REUSED logo | `public/brand/logo.jpg` | `src/app/favicon.ico` | 16/32/48px RGBA PNG entries, original colors and proportions |
| REAL / REUSED logo | same | `src/app/icon.png`, `src/app/apple-icon.png` | 192px and 180px PNG resizes |
| USER-SUPPLIED / REUSED artwork | attached Photo 1 | `public/brand/share-cover-v1.jpg` | Exact original JPEG, 1280×720, 108063 bytes, no crop or recompression |
| CODE | existing tokens/components | `src/components/Footer.tsx`, `src/styles/footer.css` | Semantic HTML, responsive grids and native links |
| OMITTED | — | — | No generated art, social/contact claims, tracking, new package or PWA promises |

Image SHA256 matches attachment: `141EC4C2D0C5BF80DB0993F41ABFF0CA78F70CC411258CADB8B98EAB8F5F1560`.
Reproduce icons: `node scripts/build-brand-icons.mjs`.

## Findings and checks

- Missing favicon and conditional absence of OG/Twitter image: corrected with actual files and public absolute image URLs.
- Initial icon conversion exposed Next's requirement for RGBA PNG entries inside ICO: corrected and production build passed.
- Initial footer CTA inherited white text on blue (2.75:1): corrected to navy and checked with axe in both locales.
- The general navigation check caught short footer labels with a target narrower than 44px. Added explicit minimum target widths without changing text size; included the check in the footer regression suite.
- WebKit returned an empty computed overscroll property; this was treated as a missing capability, not a passing native guard. Added the fallback and behavioral checks for outward input, nested scroll, inward movement and zoom gestures.
- Footer visual review covers 320/390/1024/1440 Arabic and English; actual screenshots live in `artifacts/footer-sharing/`.
- Build, asset integrity, lint, typecheck and whitespace checks passed. Broad Chromium run: 48/49 passed, with the remaining short-link target fixed. Final affected run: 13/13 passed (footer, sharing, fallback and mobile menu). WebKit final run: 12/12 passed, including the actual unsupported-CSS fallback. The earlier broad run covered all story transitions, responsive layouts, reduced motion, screenshot dialogs, FAQ and form behavior. Final sharing metadata and deployment are verified below.

## Limits

Browser chrome and older operating-system elastic scrolling cannot be universally controlled by a website. The implemented native CSS boundary and root surface are tested in Chromium/WebKit; physical iPads and every OS/browser version were not available. No promise of universal suppression is made. Sharing apps own their preview caches and final crop/display; the supplied image is served intact with correct metadata, but previously cached messages cannot be forcibly rewritten. No messages were sent to others during testing.

## Final build verification

The final production build passed using SPARKLE_BUILD_DIR=.next-footer-verify after OneDrive locked the default generated icon directories. No locked cache was deleted; the optional output setting retains .next as the production default. Lint and typecheck passed. The final raw-head sharing-bot test passed for both locales and four bot user agents; Next normalizes the root og:url without a trailing slash.

## Published verification

Implementation commit: e3cc146. Production deployment dpl_BkFSfx2KbnEzntF3w2YaZfbJm6PP is Ready and aliased to https://sparkle-auto-landing.vercel.app.

The complete footer-sharing suite against production passed 12/12 in 43.2 seconds. Actual inspected widths: 320, 390, 1024 and 1440 in Arabic and English. Live screenshots are in artifacts/footer-sharing/live. Raw sharing metadata and image/icon responses passed without JavaScript for the tested bot user agents. Visual review confirmed the Arabic mobile and English desktop footer. No full-site performance score is claimed by this scoped change.

