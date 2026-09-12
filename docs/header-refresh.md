# Header refresh — 2026-09-12

Scope: existing eight destinations; no marketing or commercial content changes.

- One stylesheet (`src/styles/header.css`) replaces header, drawer and wordmark rules previously spread across three stylesheets.
- At 1280px and above: brand, seven section links, language and review CTA. Below 1280px: drawer. Below 600px: review CTA lives in the drawer to preserve space.
- Arabic keeps RTL navigation; the Latin wordmark is isolated LTR. AUTO uses equally distributed letters instead of trailing letter spacing.
- Added the missing `fit` section anchor. Drawer closes on desktop resize and retains existing Escape, focus-return and scroll-lock behavior.
- Existing official logo reused unchanged; no assets generated or dependencies added.

Verification: production build, lint and TypeScript passed. Header regression tests passed in both locales at 320, 360, 390, 599, 600, 768, 1024, 1279, 1280 and 1440px. Existing mobile-menu regression passed. Full-page automated accessibility passed in both locales after correcting the AUTO accessible role. Short-height 720×400 reduced-motion drawer checks passed. These are browser/lab checks, not a user study or a claim of complete accessibility.

Rendered desktop, mobile and drawer screenshots inspected in `artifacts/header-refresh/`. All eight drawer targets resolve; header regions do not overlap at tested widths. No production form data submitted.
