CORE MODULE 09 — SOURCES AND PROVENANCE

Sources, provenance, and factual boundaries

Project-provided sources

The skill may rely on project-local material such as:

• brand/design-system documentation,
• product documentation,
• approved logos and identity assets,
• real product screenshots,
• pricing and commercial records,
• current copy/content,
• codebase tokens/components,
• prior explicit project decisions.

These sources define truth and constraints.
Do not treat generated artwork as proof of product behavior or commercial facts.

For Sparkle Auto, the textual web design system supplied by the project is the brand-production source.

Existing HDI material

If an HDI-OS archive is present in the current project, inspect only the relevant maintained modules.
Historical examples do not override newer project decisions.
Do not assume every archive item is current production truth.

Official technical sources

Use official current documentation when a technical detail can change implementation.
Examples include:

|Source type                          |What it governs                                                     |
|-------------------------------------|--------------------------------------------------------------------|
|OpenAI image-generation documentation|Actual supported generation/editing workflow and tool limitations   |
|Codex skill documentation            |Skill structure and loading behavior                                |
|MDN responsive-image documentation   |`<picture>`, `srcset`, sizes, responsive delivery                   |
|WCAG/W3C guidance                    |Contrast, keyboard, focus, reduced-motion/accessibility expectations|
|Framework/runtime docs               |Correct implementation for the current codebase                     |

External documentation informs technical implementation only.
It does not replace the project’s brand, product, or commercial truth.

Contrast calculation

When a brand color pairing is questionable, calculate contrast rather than guessing.
For the Sparkle tokens used in this package:

• #FFFFFF on #01A2FF is approximately 2.76:1.
• #03132E on #01A2FF is approximately 6.70:1.

Therefore default to Deep Navy text on Sparkle Blue for normal text/buttons unless another tested,
approved combination satisfies the applicable accessibility requirement.

Factual authority order

When sources disagree, use this order:

1. Product truth and maintained business data.
2. Safety, privacy, legal, and accessibility requirements.
3. Current explicit project decisions.
4. Current brand identity/design system.
5. Current code/runtime constraints.
6. Art direction.
7. Decorative preference.

Never allow attractive generated art to overrule real product facts.

Evidence limits

This skill can define a production workflow without proving that:

• a specific image model guarantees perfect recurring-character identity,
• every runtime supports the same input/output options,
• every desired alpha/transparency workflow is available,
• current pricing or product behavior matches old project examples,
• a generated visual is legally licensed for every downstream use.

At runtime, inspect the actual tool contract and project sources.
State uncertainties precisely instead of inventing certainty.

────────

