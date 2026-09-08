---
name: hdi-web-visual-art-director
description: Visual art direction and asset workflow for building visually rich, brand-specific websites — owns the loop from message to art direction to asset plan to generation to browser composition to focused revision. Includes the binding Sparkle Auto brand contract (palette, borders/shadows, grid, Arabic-first RTL, section map, product-truth gates). Use for any Sparkle Auto page or marketing site, and for any web work where art direction and image assets must be planned together rather than a beautiful isolated picture.
---

# HDI — Web Visual Art Director

Co-design the page and its assets. A beautiful isolated image is not the deliverable;
a useful, truthful, accessible, coherent web experience is.

Works for any brand. **Load the Sparkle overlay only for Sparkle Auto.**

## Load progressively

| Need | Load |
|---|---|
| Full generic workflow: capabilities/execution, art direction, asset briefs, generation, integration, QA | `reference/part1-generic-core.md` |
| Sparkle direction, hard invariants, production split, contrast rules | `reference/sparkle-overlay-intro.md` |
| Sparkle tokens, palette, borders, grid, type, components, motion, a11y | `reference/sparkle-01-brand-web-contract.md` |
| Sparkle page section map and asset register | `reference/sparkle-02-section-asset-plan.md` |
| Writing an actual generation brief | `reference/sparkle-03-production-briefs.md` |
| Resolving a source conflict | `reference/sparkle-04-decisions-sources.md` |

`reference/FULL-SOURCE.md` is the unsplit original.

## Sparkle Auto — the rules that bind every build

Read `sparkle-01-brand-web-contract.md` before writing CSS. The short form:

**Palette** — `#01A2FF` blue (action), `#0C264B` dark blue (structure/text),
`#03132E` navy (main text, borders, shadows), `#91B1D8` soft blue (non-critical),
`#FFFFFF` (default surface), `#F2FAFF` (derived quiet surface).
No orange, yellow, coral, mint, purple, neon, or rainbow gradients. Red = real errors only.

**Contrast (hard gate)** — white on `#01A2FF` is ~2.76:1 and **fails**. Navy `#03132E`
on that blue is ~6.70:1. Use navy text on the primary blue surface. Small blue-on-white
text also needs correction; use navy/dark blue for readable copy and links.

**Surfaces** — white is the default. Pale blue adds rhythm. Deep navy is reserved for a
strong transition / final CTA / footer. **Not an entirely dark site.**

**Physical style** — 2 px navy borders (3 px emphasis), hard offset shadows on the
3/5/7 px token scale, corners 8/12/18/24 px (buttons 10–14, cards 16–20, frames 20–24).
No barely-visible gray borders, no pure-black brutalism, no pill-everything.

**Grid** — 1440 canvas, 1240 preferred max content, 12 cols; tablet 8; mobile 4 at 390 px.
Copy measure 560–680 px. Vary section rhythm (desktop 96–144 px, mobile 64–96 px);
do not alternate 50/50 splits down the whole page.

**Arabic/RTL is primary**, English/LTR complete and independently composed — not a
mechanical mirror. Headlines short, no justification, no arbitrary letter spacing.

**Motion** — micro 120–250 ms, entrances 300–600 ms, large editorial 600–1000 ms.
Forbidden: constant bobbing, random particles, continuous glow, cursor-following,
spinning, huge parallax, scroll hijacking. Reduced motion drops scroll-linked transforms.

**Product truth (hard gate)** — no false prices, features, notices, customer claims, or
made-up operational metrics. Real product UI stays real: never pass a screenshot through
generation, never publish generated UI as proof. Missing real proof stays explicit rather
than being filled with an invented number or testimonial.

**Conversion** — review-first funnel. Default primary CTA «احجز مراجعة تشغيل» /
"Book an Operations Review". Do not offer review/trial/demo/WhatsApp as four equal
primary actions. Never show a success confirmation before an actual successful submission.

**Production split** — GENERATE story scenes and custom props; BUILD text, header, CTA,
pricing, forms, FAQ, outlines, shadows, layout, spark paths, numbers, diagrams and
product frames as real web components; USE REAL logo, verified screenshots, current terms.

## Final checks

Brand readable without the logo; one-second section meaning; real proof survives hiding
the marketing copy; readable Arabic *and* English; mobile thumb operation; no repeated
card template; keyboard and form states; reduced motion; measured delivery.

Do not claim a production-ready page without the corresponding approval and evidence.
