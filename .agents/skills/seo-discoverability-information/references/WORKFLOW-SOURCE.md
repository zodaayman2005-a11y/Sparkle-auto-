---
name: seo-discoverability-information
description: "Connects public-web content architecture, semantic HTML, internal linking, metadata, structured data, rendering, performance, locale discovery, and answerability to real user needs. Use when websites must be crawled, indexed, understood, shared, and navigated without allowing SEO tactics to damage clarity or product truth."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# SEO, Discoverability, and Information Architecture

## Goal

Help the right audience discover, understand, trust, navigate, and share public content by aligning user questions, information architecture, semantics, technical delivery, and verified metadata—without keyword stuffing, doorway pages, hidden content, or fabricated structured data.

## Use this skill when

- A public website, landing page, documentation site, catalog, blog, portfolio, or local-service site must be discoverable.
- A redesign changes URLs, navigation, page hierarchy, rendering, metadata, or internal links.
- Content must answer search/user questions and support both humans and machine interpretation.
- Multiple languages/markets require locale URLs and discovery relationships.
- Structured data, social previews, canonicalization, redirects, sitemaps, robots, or crawl behavior must be designed.

## Do not use this skill when

- The experience is private/authenticated and public discovery is not intended.
- The request is to manipulate rankings through spam, hidden content, fake reviews, doorway pages, or misleading schema.
- Current search-engine requirements or legal claims are material but cannot be verified; research official sources first.

## Required reading and evidence

1. `PRODUCT.md`
2. `CONTENT.md`
3. `User research and search/question evidence`
4. `Current URL inventory, analytics/search-console data, redirects, index status, and content owners`
5. `Rendering stack and deployment architecture`
6. `Locale/market matrix`
7. `Performance and accessibility requirements`
8. `Approved organization, product, price, review, event, location, and author data`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Design for people-first usefulness; search systems should discover the same honest content users receive.
- Information architecture, page purpose, headings, links, and semantics come before metadata tricks.
- Every indexable URL should have a distinct user purpose and durable owner.
- Do not publish structured data for information not visibly present and verifiable.
- Internal-link labels should describe destinations, not repeat generic ‘learn more.’
- Rendering choices must preserve accessible content and reliable crawl/index behavior.
- Canonical, redirect, noindex, robots, and sitemap controls solve different problems; do not substitute one blindly.
- Locale discovery requires intentional URLs, content equivalence, canonical relationships, and hreflang strategy where applicable.
- Performance, accessibility, trust, and content quality reinforce discoverability.
- Current search-engine behavior is temporally unstable; verify official documentation for implementation-critical rules.

## Step 1 — Define audience questions and page purpose

- Map audience intents, questions, tasks, vocabulary, journey stage, and expected answer format.
- Define one primary purpose and target audience for every page type.
- Separate navigational, informational, commercial, local, support, and transactional intent.
- Identify content that should not be indexed because it is duplicate, private, thin, temporary, filtered, or unsafe.
- Connect query evidence to genuine product/content capability rather than creating pages for keywords alone.

## Step 2 — Design information architecture and URL model

- Create content types, hierarchy, hubs, detail pages, breadcrumbs, related-content rules, and internal-link pathways.
- Define stable, readable URL patterns independent from temporary UI state.
- Plan pagination/facets/search/filter URLs, canonicalization, and indexability intentionally.
- Map old-to-new redirects for redesigns and preserve meaningful inbound paths.
- Assign ownership, freshness, review, archive, and deletion rules to page types.

## Step 3 — Specify semantic content and metadata

- Define unique title, main heading, summary, description, author/organization, dates, image, and share-preview fields as appropriate.
- Use semantic HTML landmarks, headings, lists, tables, links, buttons, media, and form structure based on meaning.
- Write link text and headings that support scanning and destination understanding.
- Define canonical and locale relationships from the actual URL/content model.
- Keep metadata and visible content consistent; do not overpromise in snippets.

## Step 4 — Design crawl, index, and rendering controls

- Inventory public, private, duplicate, parameterized, staging, and retired routes.
- Define robots access, meta robots, authentication, canonical, redirect, HTTP status, sitemap, and error behavior with engineering/SEO owners.
- Ensure essential content and internal links are present in reliable rendered HTML and not gated behind user interaction unnecessarily.
- Design useful 404/410 and redirect behavior that preserves navigation and status truth.
- Prevent staging, preview, test data, private search results, or account content from accidental indexing.

## Step 5 — Use structured data only from verified truth

- Select schema types that match real visible content and official requirements.
- Map each field to an approved source, owner, freshness rule, and rendering location.
- Validate syntax and eligibility, but do not imply that markup guarantees a search feature.
- Remove stale price, availability, review, event, author, or organization data promptly.
- Never invent ratings, reviews, offers, addresses, dates, or entity relationships for markup.

## Step 6 — Design multilingual and local discovery

- Define locale-specific URLs, language/region targeting, canonical policy, language switcher behavior, and fallback.
- Ensure alternate pages are meaningfully equivalent where declared.
- Localize titles, headings, metadata, URLs where appropriate, structured content, dates, currency, organization/location/contact truth, and social images.
- Avoid automatic redirects that trap users away from a preferred locale.
- Coordinate local-service pages with real locations, service areas, hours, contact channels, and eligibility.

## Step 7 — Validate and monitor discoverability

- Crawl the built site, inspect status/canonical/index directives, rendered content, links, metadata, structured data, locale relationships, and sitemaps.
- Test keyboard/screen-reader navigation and content hierarchy because semantic discoverability and human navigation overlap.
- Measure impressions, clicks, landing engagement, task/conversion quality, index coverage, crawl errors, and content freshness without chasing rank alone.
- Annotate migrations, releases, experiments, and major content changes.
- Investigate declines with technical/content/user evidence before making broad SEO changes.

## Required outputs

- Audience intent and question map
- Page-purpose and indexability inventory
- Information architecture and internal-link model
- URL/canonical/redirect plan
- Semantic content and metadata schema
- Crawl/index/rendering contract
- Structured-data source map
- Locale/local discovery model
- Migration and error-page plan
- Validation and monitoring dashboard specification

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Every indexable page has a distinct user purpose, approved content source, and owner.
- No private, staging, test, duplicate, or misleading content is intentionally exposed for indexing.
- Titles, headings, metadata, canonical signals, visible content, and structured data do not contradict one another.
- Structured data contains only visible, current, verifiable information.
- Essential content and links are available through reliable semantic rendering.
- Redesign migrations include redirect/status/canonical validation.
- Locale relationships and fallbacks are tested.
- Implementation-critical current rules are verified against official search-engine documentation.

## Handoffs

- Send content hierarchy and page models to `content-information-design`.
- Send locale routes and alternate behavior to `localization-culturalization`.
- Send rendering/performance needs to `performance-perceived-quality` and `design-to-code`.
- Send structured-data/content ownership to `design-ops-handoff` and CMS owners.
- Send discovery events and migration annotations to `product-metrics-instrumentation`.
- Send semantic/accessibility review to `inclusive-accessibility-design` and `visual-qa-refinement`.

## Anti-patterns

Reject or correct these failure modes:

- Keyword stuffing
- Doorway/location pages with no real differentiated value
- Hidden text or links
- Fake review/rating/price schema
- One title and description copied across every page
- Generic ‘click here’ internal links
- Blocking all crawling to fix indexing
- Using canonical as a redirect or security control
- Client-only essential content that fails rendering
- Automatic locale redirects that trap users
- Deleting old URLs without redirects/status planning
- Optimizing search clicks while landing-page usefulness declines

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
