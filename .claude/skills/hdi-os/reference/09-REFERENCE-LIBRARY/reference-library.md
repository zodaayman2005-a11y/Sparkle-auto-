# HDI — Reference Library


---

## Source: `reference-library/README.md`

# Reference Library

This library stores analysis, not copied design assets. Live-web discovery and provenance belong in `research-system/`; close source decomposition and long-term reusable design lessons can become Reference Cards here.

## Files

- `reference-card.schema.json` — analyzed-reference contract.
- `reference-card.template.json` — blank card.
- `archetypes.json` — twenty original concept archetypes.
- `SOURCE-CATALOG.md` — source families organized by research question.
- `RESEARCH-QUESTIONS.md` — prompts that prevent vague searches.

## Research-to-reference flow

```text
web-design-research → SOURCES.jsonl
→ reference-intelligence → structured reference card
→ inspiration-synthesis → source-to-decision map
```

Not every source becomes a permanent reference card. Promote only sources with reusable lessons and clear provenance.

## Rules

1. Do not store third-party screenshots, fonts, code, or assets without rights.
2. Keep original location, date, viewport, state, market/language, and limitations.
3. Treat one screenshot as one state—not a whole system.
4. Separate observation, interpretation, transferable principle, and adaptation.
5. Explicitly list source-owned expression that must not be copied.
6. Use multiple source families to synthesize a direction.
7. Do not retrieve an archetype by style name alone; match product, user, task, content density, market, and behavior.
8. An award or visual popularity is not proof of UX, accessibility, or commercial effectiveness.

---

## Source: `reference-library/RESEARCH-QUESTIONS.md`

# Reference Research Questions

Use a concrete question before opening an inspiration index.

## Strategy

- What must the audience understand in the first five seconds?
- What visual world would make this promise credible for this exact audience?
- Which category norms should be preserved for comprehension, and which should be rejected for distinction?

## Composition

- Which layout topology makes the primary message and proof visible without equal cards?
- How can density change across the page to control pacing?
- What stable anchor allows controlled asymmetry?

## Typography

- How do strong examples in the target script create display hierarchy without hurting body readability?
- How are numbers, prices, dates, and mixed scripts treated?

## Product UX

- How do mature products expose scope, status, filters, errors, and permissions for this task?
- What happens in loading, empty, partial, and high-volume states?

## Motion

- Which transitions make cause and effect understandable?
- How is the experience interrupted, reversed, reduced, or adapted to mobile?

## Imagery

- What camera, crop, lighting, geometry, or material decisions make the visual world coherent?
- Which assets provide evidence rather than decoration?

## Responsive and RTL

- What actually changes at compact widths?
- Which visual relationships depend on reading direction, and which depend on physical meaning?

---

## Source: `reference-library/SOURCE-CATALOG.md`

# Source Catalog by Evidence Role

Verify current access, terms, dates, and content before use. These are discovery indexes and source families; HDI-OS does not authorize copying protected work.

## Primary reality and product behavior

- Live competitor/product/service websites and applications.
- Official product documentation, release notes, help centers, and design systems.
- Approved user interviews, usability studies, analytics, support logs, reviews, and sales objections.

Use for: product truth, real journeys, states, constraints, user expectations, and implementation feasibility.

## Distinctive marketing and art direction

- Awwwards — https://www.awwwards.com/
- SiteInspire — https://www.siteinspire.com/
- Godly — https://godly.website/
- Land-book — https://land-book.com/
- Lapa Ninja — https://www.lapa.ninja/

Use for: discovering composition, section rhythm, art direction, hero topology, and presentation craft. Open the original live site and pair visual evidence with functional/user evidence. Awards and gallery placement are not proof of usability or conversion.

## Product flows and real interface patterns

- Live products and official product documentation.
- Mobbin — https://mobbin.com/
- Page Flows — https://pageflows.com/
- Apple HIG — https://developer.apple.com/design/human-interface-guidelines/
- Material Design — https://m3.material.io/
- IBM Carbon — https://carbondesignsystem.com/
- Microsoft Fluent — https://fluent2.microsoft.design/
- Adobe Spectrum — https://spectrum.adobe.com/
- Atlassian Design System — https://atlassian.design/
- Shopify Polaris — https://polaris.shopify.com/
- Radix Primitives — https://www.radix-ui.com/primitives

Use for: navigation, flows, forms, states, behavior, accessibility, density, and system thinking. Do not treat a system's default appearance as the brand.

## Typography and editorial craft

- Typewolf — https://www.typewolf.com/
- Fonts In Use — https://fontsinuse.com/
- Type-foundry specimens and language/script specimens.
- Current editorial publications in the target language and market.

Use for: role relationships, pairing, measure, hierarchy, numerals, script behavior, and actual context. Verify font licensing separately.

## Motion and creative development

- Codrops — https://tympanus.net/codrops/
- GSAP Showcase — https://gsap.com/showcase/
- Official Web Animations, Motion, GSAP, Three.js, React Three Fiber, browser, and framework documentation.
- Studio case studies that explain intent and production.

Study trigger, purpose, timing, choreography, continuity, interruption, performance, mobile fallback, and reduced motion—not effect names alone.

## Accessibility, performance, and verification

- WCAG — https://www.w3.org/TR/WCAG22/
- ARIA Authoring Practices — https://www.w3.org/WAI/ARIA/apg/
- Web performance/browser/platform documentation.
- Playwright — https://playwright.dev/
- Storybook — https://storybook.js.org/

## Competitive and substitute research

Include:

- Direct competitors.
- Indirect methods.
- Manual substitutes such as calls, WhatsApp, paper, spreadsheets, and staff memory.
- Aspirational products solving the same trust or complexity problem in another category.

Compare defined journeys and states—not homepage aesthetics alone.

## Local and cultural evidence

Use current local products, user behavior, language/dialect, publishing, packaging, signage, architecture, service rituals, tools, uniforms, transport, entertainment, and craft. State the exact audience, locality, and period. Avoid tourist shorthand and stereotypes.

## Adjacent and distant-domain analogies

Consider maps, industrial controls, architecture, exhibitions, film titles, editorial systems, packaging, wayfinding, scientific diagrams, and physical service environments. Translate mechanisms into project-specific design principles; do not imitate appearance literally.

## Negative evidence

Record confusing, inaccessible, misleading, slow, generic, or brittle examples when they clarify a refusal rule. Do not publicly shame individuals; describe the observable failure and its effect.
