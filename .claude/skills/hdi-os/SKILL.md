---
name: hdi-os
description: HDI-OS design intelligence system — 34 web-design skills (art direction, UX architecture, component systems, RTL/responsive, motion, accessibility, conversion, visual QA) plus 9 domain packs, research templates, prompt libraries and QA rubrics. Use for any substantial web design or frontend UI work — designing or redesigning a page, choosing layout/type/color/motion direction, building a component system, reviewing visual quality, or planning a landing page, SaaS product page, ecommerce, editorial or mobile-app surface.
---

# HDI-OS v1.2.0 — Design Intelligence System

Reference library for substantial design work. **Do not load every file.** Route to the
minimum set the current decision needs.

## Read order

1. `reference/01-CORE/core.md` — always, for any design task.
2. The one or two relevant files from `reference/02-SKILLS/`.
3. The single matching pack from `reference/04-DOMAIN-PACKS/`.
4. Support folders (research, prompts, QA, templates) only when the task needs them.

## Routing table

| Decision at hand | Load |
|---|---|
| Overall art direction, taste, what the page should feel like | `02-SKILLS/design-director.md`, `02-SKILLS/visual-composition.md` |
| Page structure, flow, information hierarchy | `02-SKILLS/ux-architecture.md`, `02-SKILLS/content-information-design.md` |
| Color, palette, imagery treatment | `02-SKILLS/color-imagery.md` |
| Type scale, copy voice | `02-SKILLS/typography-content.md` |
| Buttons, cards, tokens, reusable anatomy | `02-SKILLS/component-system.md`, `02-SKILLS/design-system-governance.md` |
| Arabic / RTL, breakpoints, mobile recomposition | `02-SKILLS/responsive-rtl.md`, `02-SKILLS/localization-culturalization.md` |
| Animation, hover, scroll behavior | `02-SKILLS/motion-interaction.md` |
| Contrast, keyboard, focus, reduced motion | `02-SKILLS/inclusive-accessibility-design.md` |
| CTA, forms, funnel, persuasion | `02-SKILLS/conversion-behavior-design.md`, `02-SKILLS/trust-privacy-security-ux.md` |
| Turning a design into markup | `02-SKILLS/design-to-code.md` |
| Reviewing what was built | `02-SKILLS/visual-qa-refinement.md`, `reference/06-QUALITY/quality-rubrics-evals.md` |
| Load speed, perceived quality | `02-SKILLS/performance-perceived-quality.md` |
| Domain framing | `04-DOMAIN-PACKS/{landing-pages,saas-product,service-business,ecommerce,editorial-portfolio,mobile-app,immersive-web,data-enterprise}.md` |

## Working rules

- Establish art direction **before** implementation. Then render, critique, refine — do not
  declare work final on first pass.
- Preserve existing project truth, tokens, and source code. Project decisions outrank this library.
- These are direction ranges, not formulas. Do not mechanically apply every heuristic to every section.
- For Sparkle Auto work, this library is the *generic* layer — the
  `hdi-web-visual-art-director` skill's brand overlay carries the binding brand contract
  and takes precedence.

`reference/00-START-HERE.md` has the full file index.
