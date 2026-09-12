# Independent visual QA — 2026-09-08

Scope: final first-party implementation, Arabic RTL and English LTR. This is a rendered review, supported by assertions and axe, not a certification of complete accessibility. Public-release truth gates remain open; see [RELEASE-REPORT.md](RELEASE-REPORT.md).

## Evidence and review passes

Applied HDI `visual-qa-refinement` after implementation. Reviewed the deployed baseline as implementation evidence, then reviewed the final build in separate truth, composition, typography, imagery/depth, interaction, responsive/RTL, motion/performance and brand passes. Kept the user-approved marketing copy and requested artwork sequence. Did not assign product truth to generated art or draft marketing text.

The final local production browser matrix completed at 2026-09-08 05:05 PDT. [qa/results.json](qa/results.json) records 12 passing combinations: both locales at 1440×1000, 1024×1000, 768×1024, 390×844, 360×800 and 320×800. All had no detected document overflow, out-of-bounds visible text/controls, broken images, captured console/page errors or axe WCAG 2 A/AA / 2.1 AA violations. This does not cover every possible accessibility condition.

Full-page captures exist for all 12. Critical section captures cover both locales at 1440, 768 and 390. Desktop captures also cover all five strategy states, seven real screens and setup scenes 1 and 5. Additional captures cover the drawer, focused controls, open FAQ, invalid form, original-image dialog, reduced-motion strategies and 720×500 CSS reflow (a 200% desktop-zoom equivalent, not a physical browser zoom/device test).

Pixels were inspected across desktop hero, definition, strategies, product showcase, pricing and footer; tablet hero/system/journey; mobile hero, compact audience, real proof, strategies, pricing, form, drawer, image inspection and final CTA; plus 1024 hero, 320/360 headings and 720 reflow. Full-page images provide context, while viewport captures were used to judge readable scale. Automated capture alone is not counted as visual inspection.

Representative final evidence:

- [Arabic 1440 hero](qa/ar-1440-hero.png), [English 1440 hero](qa/en-1440-hero.png), [Arabic 1024 hero](qa/ar-1024-hero.png).
- [Arabic compact audience](qa/ar-390-fit.png), [English 360 hero](qa/en-360-hero.png), [Arabic 320 hero](qa/ar-320-hero.png).
- [Arabic product showcase](qa/ar-1440-showcase.png), [mobile product detail](qa/ar-390-intro-proof.png), [original image dialog](qa/en-390-original.png).
- [Arabic strategy scene](qa/ar-1440-strategy-money.png), [English tablet journey](qa/en-768-journey.png), [mobile pricing](qa/en-390-pricing.png).
- [Mobile drawer](qa/ar-390-drawer.png), [validation](qa/ar-390-validation.png), [reflow](qa/en-200-percent-reflow.png), [reduced motion](qa/ar-390-reduced-motion.png).

## Findings and closure

Severity describes the defect before correction. Closed means final rendering or an interaction assertion verified the required behavior, not merely that code changed.

| ID / severity | Viewport / locale | Evidence and root cause | Required fix and final verification | State |
|---|---|---|---|---|
| V01 major | All / both | Empty booking-phone evidence and placeholder language could imply an unavailable real screen. | Omit missing capture; use only seven supplied originals. Final production tests assert no placeholder frames; all screenshots retain their source hashes. | Closed |
| V02 major | Desktop/mobile / both | Real product proof was buried and complete dashboards were too small on mobile. | Place real Overview immediately after hero; add truthful CSS detail crop and original-size inspection. Intro-proof/dialog captures and focus-return tests pass. | Closed |
| V03 major | 320–768 and short desktop / both | Desktop story tracks imposed empty scroll distance and could clip longer localized content. | Normal-flow compact composition; pin only with actual text fit, sufficient width/height and motion preference. Matrix bounds, story tests and reduced-motion captures pass. | Closed |
| V04 major | Fresh mobile / English especially | Runtime image transforms caused a repeatable first-load/no-JS wait over 45 seconds. | Pre-encode 96 real WebP candidates and use the existing Next loader API. No runtime transforms in final/live markup; no-JS regression passes; final LCP medians 2212/1480 ms. | Closed |
| V05 major | 390×844 deep link / both | Native global smooth hash animation raced delayed layout restoration and overshot into a later section. [Before](baseline/mobile-anchor-overshoot.png). | Remove global smooth hash animation, use absolute final target positioning, and stop pending restoration on explicit scrolling. [Final probe](anchor-probe.json): target top 120.3 px in both locales. Final production suite and live preview probes pass. | Closed |
| V06 major | 390 / both | Real Drive embed swallowed Escape and retained focus through 80 Tab presses; same defect in an inline player. [Provider evidence](baseline/provider-embed-check.json). | Use a native linked play cover with disclosed new-tab behavior. Actual popup opens supplied source; original focus returns and Tab continues; zero embedded frames. [Final check](video-check.json). | Closed |
| V07 major | Form mobile/desktop / both | Native numeric input and separate validation did not reliably accept Arabic/Persian digits; unconfigured receipt could be misunderstood. | Shared normalization/client-server rules; numeric keyboard with text fields; linked errors, preserved values, loading/retry and receipt only after verified success. Final API/form assertions pass; synthetic success is explicitly a test fixture. | Closed |
| V08 major | All / both | Draft commercial values and unknown production origin must not be silently promoted. Internal fixture routes must not be public evidence. | Keep explicit review/pricing/delivery notices and noindex; no guessed canonical. Design/motion/test-video return 404 in production locally and on Vercel. Content approval itself remains an external release blocker. | Implementation closed; approval open |
| V09 minor | Hero / both | Image fill/container and list-key issues produced framework warnings during earlier passes. | Correct container anatomy and stable keys. Final matrix captured no console/page errors; live smoke captured no warnings or errors. | Closed |
| V10 minor | Footer / both | Removed comparison left section-number gaps and outdated unpublished wording. | Continuous 09–12 final section markers; truthful review-status footer. Final captures inspected. | Closed |
| V11 minor | Shared code/styles | Repeated story rendering and stale mockup/comparison rules made responsive changes fragile. | Shared behavior with focused section composers, semantic tokens and dedicated hero/proof/story CSS. Lint, types, build and final 40 tests pass. | Closed |

No unresolved blocking or major first-party implementation finding was observed within this tested scope. Three external release blockers remain recorded separately. The supplied external video's full nine-minute content and automatic Arabic captions were not independently audited; do not claim provider accessibility or caption accuracy.

## Final critique and score

Heuristic **visual/experience score: 92/100**, using the HDI review categories. This is an agent assessment with stated deductions, not a measured product-quality metric or a public-release pass.

| Category | Score | Evidence / deduction |
|---|---:|---|
| Concept | 14/15 | Operational promise, supplied owner story and authentic proof have clear jobs. Preserved long narrative limits brevity. |
| Composition | 14/15 | Calm hero, light strategy, navy proof and quiet FAQ form a deliberate rhythm. Desktop dwell and requested 20 story images still make a long page. |
| Typography/content | 14/15 | Approved fonts, distinct locale wrapping, readable mobile and real bold weights. Copy is intentionally frozen; some narrow sections require substantial reading. |
| UX | 13/15 | Clear review path, usable drawer/FAQ/forms/original proof, deterministic deep links. External video introduces a disclosed context switch; actual conversion remains gated. |
| Brand | 10/10 | Blue/navy, editorial Arabic, controlled physical buttons and supplied coherent Owner imagery remain identifiable without repeating the logo. |
| Color/imagery/depth | 9/10 | Strong contrast, restrained outlines/shadows, untouched product UI. Supplied screen resolution limits legibility of tiny data until enlarged. |
| Motion | 9/10 | Deliberate native dwell; static mobile, text-fit and reduced-motion equivalents. No real-device motion testing claimed. |
| Responsive/RTL/accessibility | 9/10 | Matrix, keyboard/focus, bidi numbers, no-JS and reflow pass. No screen-reader, Safari or physical-device certification claimed. |

The palette and type remain recognizable with the logo hidden mentally; the real car-wash screens and purposeful 3D scenes anchor the site to Sparkle. Pricing, FAQ and navigation do not acquire decorative Owner figures. Product-proof UI colors are preserved. New decoration or a fresh art batch was not warranted.

## Performance scope

[performance.json](performance.json): three isolated cold-context runs per locale on the final production build, Chromium 390×844 DPR 1, 150 ms simulated latency, 1.6 Mbit/s download and 4× CPU slowdown. Arabic LCP median 2212 ms, max 2224; English median 1480 ms, max 1576. CLS 0.00001 Arabic, 0 English. Event Timing maxima were 144–168 ms Arabic and 184–200 ms English, sampled interactions rather than field INP. Transferred bytes including scripted FAQ lazy loads: 526,757 Arabic and 472,443 English. No field Core Web Vitals were available.
