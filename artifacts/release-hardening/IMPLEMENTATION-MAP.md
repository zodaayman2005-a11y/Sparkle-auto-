# Implementation and refactor map — 2026-09-08

Mode: corrective refinement of the existing Next 16.3.4 / React 19.2.8 application. npm and package-lock retained. No framework, router, typeface or major dependency replacement. Prior user authorization permits a preview update to the linked Vercel project; no production promotion is authorized.

## Authority and direction

Read root AGENTS, WEB_DESIGN_SYSTEM, BRAND_ASSETS, the Sparkle landing director/project contract, HDI entry/setup, design-director and landing-pages pack. Applied component-system, responsive-rtl, visual-art-director web integration, accessibility/performance/SEO workflows and independent visual QA progressively. The accepted visual direction already exists; another three-direction exploration or external gallery research would not improve a material decision. The archived `docs/hdi-library/examples/sparkle-auto-mini/` truth files are examples, not maintained commercial sources.

Current user choices retained: supplied locale-specific hero backgrounds; five strategies on a light surface; seven ordered real screens on navy; supplied audience/setup/strategy illustrations; simple strategy video cover and play icon; text actions without decorative arrows; subscription comparison removed. Current marketing copy is frozen in `baseline/site.ts` and checked against the live content file. Commercial copy remains explicitly provisional, not silently promoted to a public offer.

## Change map

| Layer | Implementation | Reason |
|---|---|---|
| Page composition | Landing becomes a server component | Static copy no longer requires the whole page to be a client boundary; locale comes from server routing |
| Story behavior | StorySequence + small Audience/Setup/Strategy composers | One native scroll engine; no mode-dependent giant renderer; actual text-fit gate; inactive scenes inert; offscreen work suspended |
| Responsive story | Compact audience rows; normal-flow mobile/short/reduced-motion scenes | Removes long empty mobile scroll tracks while retaining every illustration and paragraph |
| Navigation | useAnchorRestoration; native instant anchor positioning | Deep links recover after fonts and progressive story heights settle. Global smooth hash animation removed after a production-only overshoot was reproduced; explicit user scroll interrupts pending restoration |
| Product evidence | IntroProof and ScreenshotDialog | Real Overview appears immediately after hero; repeated definition screenshot removed; truthful detail crops on narrow screens with complete original access |
| Interactions | Modal separated; ReviewForm and FAQ separated from Commercial | Small boundaries, shared focus/scroll locking, explicit form feedback |
| Form boundary | Shared validation, bounded streaming body, whitelist, origin/type checks | Arabic/Persian numeric input; equivalent client/server rules; no fabricated receipt; uncertain receipt wording is honest |
| Media | Registry includes supplied Drive overview; native new-tab play cover | Real testing found the provider's embedded player trapped Tab and Escape. Removed the iframe, retained the simple cover, disclosed new-tab behavior and verified keyboard navigation |
| Styles | Dedicated hero/story/product styles + semantic tokens | Removes old mockup, comparison, placeholder and obsolete story rules; central geometry/motion roles |
| Delivery | Static image candidates and Next custom loader | Eliminates first-visit runtime image transformations; source screenshots stay unchanged |
| SEO | Shared locale metadata, robots, optional confirmed SITE_URL | No guessed production canonical; noindex remains while release gates are open |
| Internal routes | /design, /design/motion, /api/test-video development-only | Internal fixtures cannot be used as public product evidence |

## Section rhythm

Hero: supplied calm scene and editorial promise. Intro: broad real proof. Problem: telephone metaphor. Definition: quiet paired text. Fit: illustrated recognition, compact mobile rows. Strategies: light numbered story plus simple video cover. Showcase: navy, real UI and focused inspection. Journey: connected code/SVG process. Setup: five illustrative chapters. Pricing: explicitly draft commercial review. FAQ: quiet disclosure. Review: real validated form boundary awaiting a receiver. Final: reused resolution art and review action.

No new AI artwork was requested or generated. Existing telephone assets were reused; supplied product captures were neither generated nor repainted.

Final QA refinement: re-numbered section markers after removing the comparison, clarified the footer's review status, and updated README to remove obsolete placeholder/test/deployment guidance. The video's external navigation is an evidence-led exception to the initially planned embedded player; see `baseline/provider-embed-check.json` and the current `video-check.json`.
