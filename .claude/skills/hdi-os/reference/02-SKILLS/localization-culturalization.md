# HDI Skill — localization-culturalization


---

## Source: `skills/localization-culturalization/SKILL.md`

---
name: localization-culturalization
description: "Adapts products and websites across languages, scripts, locales, markets, and cultural contexts beyond simple translation or RTL mirroring. Use for terminology, pluralization, dates, numbers, currency, names, addresses, input, legal/commercial differences, imagery, content expansion, journeys, and market-specific trust behavior."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Localization and Culturalization

## Goal

Make each supported locale feel understandable, credible, operable, and culturally appropriate while preserving product truth and brand identity—without word-for-word translation, mechanical mirroring, stereotype, or market-specific logic hidden in layout code.

## Use this skill when

- A product supports Arabic/English, RTL/LTR, or multiple locales/markets.
- Dates, numbers, currency, names, addresses, phones, measurements, calendars, or pluralization vary.
- Commercial, legal, payment, support, onboarding, or contact behavior differs by market.
- Images, icons, gestures, metaphors, color, or tone may carry local meaning.
- Translated content breaks layout or users distrust unnatural language.

## Do not use this skill when

- Only a single provided sentence needs direct translation.
- The request is to stereotype or imitate a culture without evidence.
- Legal or tax requirements are unknown; involve qualified local owners rather than inventing rules.
- RTL layout mechanics alone are the problem; use this with `responsive-rtl`, not as a replacement.

## Required reading and evidence

1. `PRODUCT.md`
2. `BRAND.md`
3. `CONTENT.md`
4. `DESIGN.md`
5. `Supported locale/market matrix`
6. `Approved translations, glossary, style guide, and user research`
7. `Local commercial, legal, payment, support, and channel requirements`
8. `Current i18n architecture and content model`
9. `Unicode CLDR/standards data through the project implementation when applicable`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Locale is not only language; it includes script, region, conventions, law, channels, and user expectations.
- Use native user terminology and professional translators/local reviewers for material content.
- Preserve semantic meaning and intent rather than sentence structure.
- Keep locale-specific data and formatting in structured configuration, not scattered conditionals.
- Design for expansion and contraction without shrinking text below readable levels.
- Direction-sensitive elements require semantic classification; do not mirror logos, embedded text, charts, physical directions, or product screenshots blindly.
- Names, addresses, phones, calendars, numerals, and currencies need flexible models.
- Cultural adaptation must be evidence-based and avoid stereotypes.
- Market-specific journey differences should be explicit product decisions.
- Fallback behavior must be visible and safe; mixed untranslated strings erode trust.

## Step 1 — Define locale and market scope

- List language, script, region, currency, time zone, calendar, numbering, measurement, and legal/commercial market for each supported configuration.
- Separate language-only variants from market variants such as ar-EG, ar-SA, or en-EG.
- Define primary/fallback locale, detection, selection, persistence, URL/routing, and account behavior.
- Identify owners and approval for translation, legal, pricing, support, and market content.
- Record unsupported combinations rather than silently falling back incorrectly.

## Step 2 — Build terminology and translation governance

- Create a glossary with source term, meaning, approved translations, prohibited variants, context, grammatical notes, and owner.
- Define voice/tone, formality, dialect/standard-language choices, transliteration, brand names, acronyms, and support vocabulary.
- Use message IDs and context notes; do not concatenate sentence fragments.
- Support plural/select/gender grammar through appropriate message formatting.
- Track translation status, review, version, and source-content changes.

## Step 3 — Model locale-sensitive data and input

- Specify number, decimal/grouping, currency display, sign, rounding, percent, date/time, relative time, week start, calendar, unit, and time-zone behavior.
- Design flexible names, honorifics, addresses, postal codes, phone numbers, national IDs, and organization fields based on actual need.
- Allow native input methods, pasted values, Arabic/Latin digits where appropriate, and normalized storage without surprising display.
- Keep codes, identifiers, email, URLs, and phone numbers directionally readable inside RTL contexts.
- Define validation by market and avoid one country’s format as a universal rule.

## Step 4 — Adapt layout, imagery, and interaction

- Classify elements as reading-direction, sequence-direction, physical/world-direction, invariant brand, or data-direction.
- Recompose hierarchy and asset placement for script shape and line length rather than globally mirroring.
- Create locale-specific crops/screenshots when embedded UI or composition changes.
- Review icons, gestures, maps, flags, people, clothing, environments, symbolism, humor, and color for local credibility.
- Adapt motion direction when it communicates sequence while preserving physical meaning.

## Step 5 — Adapt journeys and commercial truth

- Map local payment, tax/invoice, consent, age, delivery, appointment, phone/WhatsApp, support, identity, address, and cancellation behavior.
- Separate core product capability from market-specific availability and clearly label differences.
- Localize pricing, package terms, dates, service hours, contact channels, and legal disclosures from approved sources.
- Do not translate fake testimonials or imply availability where operations do not support it.
- Provide human escalation when localized self-service is incomplete.

## Step 6 — Engineer resilient content and fallback

- Externalize translatable content and semantic metadata.
- Use locale-aware formatting libraries/data and logical CSS properties.
- Define missing-key, stale translation, unsupported locale, partial rollout, and offline behavior.
- Keep SEO locale URLs, canonical/hreflang, metadata, and structured content aligned when public web discovery matters.
- Prevent fallback text from changing direction or critical meaning silently.

## Step 7 — Test with locale evidence

- Run pseudo-localization for expansion, accents, bidi isolation, and missing strings.
- Test longest/shortest content, mixed scripts, numerals, dates, prices, names, addresses, tables, charts, forms, error states, emails, PDFs, and notifications.
- Review with native/local users or qualified reviewers for terminology, tone, trust, and journey fit.
- Test keyboard/input methods, screen readers, voice, focus order, and direction-aware interaction.
- Record market-specific exceptions and retest after source-content changes.

## Required outputs

- Locale/market support matrix
- Detection/routing/fallback rules
- Terminology glossary and style guide
- Translation workflow and ownership
- Formatting and data-input contract
- Direction/asset classification
- Market-specific journey map
- Commercial/legal content source map
- Pseudo-localization and locale QA matrix
- Exception and unsupported-state register

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every supported locale/market has explicit language, format, direction, commercial, and support behavior.
- Critical terminology is approved and consistent.
- Dates, time zones, currency, numbers, names, addresses, phone, pluralization, and validation are locale-aware where relevant.
- RTL is not implemented by blind global mirroring.
- Legal/commercial differences come from qualified approved sources.
- No unresolved missing key, mixed-language critical state, or fake localized proof remains.
- Native/local review covers high-impact journeys and content.
- Pseudo-localization, expansion, mixed-direction, input, and fallback tests pass.

## Handoffs

- Send layout/direction implementation to `responsive-rtl` and `design-to-code`.
- Send terminology and message hierarchy to `content-information-design` and `typography-content`.
- Send culturally adapted imagery to `brand-world-building` and `asset-production-direction`.
- Send accessibility/literacy needs to `inclusive-accessibility-design`.
- Send locale dimensions/events to `product-metrics-instrumentation`.
- Send public locale discovery requirements to `seo-discoverability-information`.

## Anti-patterns

Reject or correct these failure modes:

- Word-for-word translation with broken intent
- Using one Arabic variant for every market without a decision
- Global `transform: scaleX(-1)`
- Mirroring logos, embedded text, maps, charts, or physical directions
- Hard-coded date/currency/phone formats
- Concatenated translation fragments
- Flag icons as universal language selectors
- Shrinking translated text until it fits
- Cultural stereotypes in imagery
- Machine translation published without review for critical content
- Locale logic scattered through UI components

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.

---

## Source: `skills/localization-culturalization/references/CULTURALIZATION-QA.md`

# Culturalization and Locale QA

Use this worksheet to create an auditable project artifact.

## Layout/direction

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Imagery and symbols

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Journey differences

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Pseudo-localization

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Native review

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Exceptions

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/localization-culturalization/references/LOCALE-MARKET-MATRIX.md`

# Locale and Market Matrix

Use this worksheet to create an auditable project artifact.

## Language/script/region

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Formats

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Commercial/legal

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Channels/support

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Routing/fallback

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Ownership

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

---

## Source: `skills/localization-culturalization/references/TERMINOLOGY-AND-DATA.md`

# Terminology and Locale Data Contract

Use this worksheet to create an auditable project artifact.

## Glossary

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Voice/tone

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Plural/select grammar

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Dates/numbers/currency

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Names/addresses/phones

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:

## Validation

- [ ] Evidence or decision:
- [ ] Owner/source:
- [ ] Confidence or status:
- [ ] Risks/unknowns:
