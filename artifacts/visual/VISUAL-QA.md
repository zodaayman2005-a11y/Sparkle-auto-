# Visual QA and delivery evidence

## Status

Full v2 page implemented as an unpublished local preview. V00-V08 implementation is present. V09 is conditional: real product proof, commercial approval and live form reception remain external delivery gates. Do not label this production-approved or user-approved.

## Actual verification

- Optimized Next.js build, TypeScript and ESLint passed.
- Production browser suite: 26 tests passed in Chromium, including both languages at 320/360/390/430/768/1024/1280/1440.
- Development-only prototype/video suite: 2 tests passed (zero/one/two chapters; user-triggered playback, close/Escape/focus return, reopen and failed-media handling).
- Axe WCAG 2 A/AA and 2.1 AA scans returned no violations on both language pages. This is automated coverage, not accessibility certification.
- Keyboard drawer and screenshot dialog: opening, Escape, focus containment/return; FAQ states; pricing toggle; fast forward/reverse chapter scrolling; direct anchors; locale switch; short viewport; reduced-motion normal flow; no-JavaScript English content.
- Form: required fields, inline errors, preserved values, loading lock, failure and retry. Success tested with intercepted responses only. Actual local adapter returned 503 with no destination; invalid input/origin rejected. No real lead transmitted.
- All in-page anchor targets resolved in Arabic/English at 1440/390. No page errors or horizontal overflow in the width matrix.
- Test video and motion fixture endpoints return 404 under production.
- Final skill-integrity recheck: all 329 files enumerated by the package manifest match their supplied SHA-256 and byte lengths; the manifest itself is the additional package file. No payload rewritten. Native Codex discovery remains unverified.

## Defects found and resolved

- Desktop menu trigger accidentally visible through CSS precedence: fixed explicit header rule.
- Muted chapter counters: darkened for contrast.
- Screenshot transition opacity briefly lowered contrast: removed opacity modulation; retained short translate.
- Form origin comparison differed between Next's internal URL and browser host: compare parsed origin host to request host; malformed origins rejected.
- Next route announcer made a test alert locator ambiguous: narrowed to the actual form-error alert.
- Narrow language/brand/footer targets: expanded to the project's 44px target; 7 targeted production tests passed after the final CSS build: Arabic/English 320/390 reflow, both axe scans, and mobile navigation with explicit 44px hit-area assertions.
- Removed an unused pricing-event dispatch and corrected proof frame captions to identify each screen.

## Visual review

Opened all eight hero A/B × Arabic/English × 1440/390 captures. Selected A as agent_selected: simultaneous copy/proof on desktop, clear mobile sequence. B remains in the design lab.

Opened full-page desktop overview and representative production viewports for hero, telephone problem, strategies, product stage, pricing, form, final CTA, English phone composition and 320px Arabic hero. Screenshots are under artifacts/visual. Sticky full-page captures do not show every active stage in one image; additional scrolled viewport captures verify the actual sticky states.

Final WOW review: three visual peaks are hero, operating/proof middle and blue final CTA. White definition, audience wall, journey, setup and commercial content separate the peaks. Repeated detached cards are limited mainly to pricing; audience is one shared grid, journey a rail, setup numbered dividers, FAQ shared rows. The blue middle is followed by a white product stage. Product-first intent is established, but product-proof strength and readability cannot pass until real screenshots replace authorized placeholders.

The one 3D receiver preserves a single phone metaphor. Its placement was inspected at desktop/mobile scale. No Owner pose or invented dashboard was generated.

## Performance evidence

One cold-cache local Chromium sample at 390×844, CPU slowdown 4×, simulated latency 150ms and download 1.6Mbps: observed LCP 2200ms, layout-shift sum 0.00506, transferred subresources approximately 269KB, zero video elements/bytes before interaction. This is one lab observation, not field Core Web Vitals or a real-device guarantee. Raw resources and conditions: production-audit.json; reproducible script: tests/production-audit.mjs.

Telephone: transparent 800×800 WebP, 50,692 bytes, below-fold loading. Local subset fonts, reserved media ratios, native scroll, no animation library, no autoplay and no analytics. Re-measure after real screenshots/videos arrive; the current payload is a placeholder preview.

## Not run / pending

- Safari, Firefox, physical iOS/Android, screen-reader/voice/switch testing, disabled-user usability sessions, native 200–400% browser zoom, field RUM/INP and deployment checks were not run. Width-based reflow and reduced-motion checks were run.
- Product screenshot accuracy/readability/crops and actual video/captions: pending supplied files.
- Approved prices, taxes, 600-vehicle period, annual/trial terms and feature availability: pending business verification.
- Real webhook delivery, external receiver storage/privacy policy and contact/legal destinations: pending actual configuration.
- Local preview remains noindex and explicitly marked. No website was deployed, no commercial offer approved, no external customer message sent.

## Maintained scope

New application: src/app, src/components, src/content, src/styles. Tests and package setup added; official source assets retained. Sources, claim ledger, design map, generation record and asset manifest are saved. Relevant installed skills were read progressively; no claim that all 41 workflows were executed. The earlier installation-only report remains a historical record and is not rewritten as build evidence.
