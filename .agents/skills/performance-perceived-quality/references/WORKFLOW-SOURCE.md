---
name: performance-perceived-quality
description: "Designs real and perceived speed, loading behavior, progressive rendering, image/video/font/3D budgets, skeletons, optimistic states, transition continuity, error recovery, and progressive enhancement. Use when performance materially affects UX, conversion, accessibility, or advanced visual fidelity."
license: Proprietary
metadata:
  author: Hyzex
  version: "1.2.0"
---

# Performance and Perceived Quality

## Goal

Deliver experiences that become useful quickly, remain visually stable and responsive, communicate honest progress, and degrade gracefully—while preserving the approved design concept within explicit performance budgets.

## Use this skill when

- A page includes heavy images, video, custom fonts, animation, canvas, WebGL, maps, charts, or third-party scripts.
- Users experience slow loading, input delay, layout shift, blank screens, or uncertain progress.
- A visually ambitious design needs a mobile/low-power/failure strategy.
- Skeletons, lazy loading, optimistic UI, transitions, or streaming content must be designed.
- Core Web Vitals or product performance affects acquisition, conversion, or daily workflow.

## Do not use this skill when

- A tiny static page change has no material performance impact.
- The request is only backend capacity planning; this skill focuses on user-facing delivery and interaction.
- Performance claims cannot be measured in the target environment; define instrumentation before declaring success.

## Required reading and evidence

1. `PRODUCT.md`
2. `DESIGN.md`
3. `MOTION.md`
4. `Target devices, networks, browsers, markets, and usage environments`
5. `Current lab and real-user performance data`
6. `Asset register and bundle/dependency inventory`
7. `Critical journeys and conversion/task priorities`
8. `Accessibility and reduced-motion requirements`

Missing evidence must be recorded explicitly. Do not convert assumptions into facts.

## Core operating rules

- Optimize for user-perceived usefulness, stability, and responsiveness—not one synthetic score alone.
- Measure both controlled lab conditions and real-user distributions when possible.
- Loading UI must represent real structure or progress; deceptive progress damages trust.
- Reserve space for late content to prevent layout shift.
- Prioritize critical content and interaction before decorative or below-fold work.
- Use progressive enhancement so essential content and actions survive missing JavaScript, slow networks, no WebGL, or failed third parties where feasible.
- Skeletons are not automatically better than clear static placeholders or immediate partial content.
- Optimistic updates require safe rollback and status clarity.
- Animation and transitions must not delay frequent tasks or hide slowness.
- Performance budgets are design constraints and must be enforced in production and over time.

## Step 1 — Define performance experience and targets

- Identify critical routes, first meaningful content, first usable action, frequent interactions, and high-risk transitions.
- Segment target conditions by device class, network, browser, geography, authentication, cache state, and user journey.
- Define budgets for page weight, critical JS/CSS, images, fonts, video, 3D, third-party scripts, requests, and interaction work.
- Set target distributions for loading, responsiveness, and visual stability using current standards and product needs.
- Name which visual qualities may degrade first under constraints and which must remain invariant.

## Step 2 — Map the critical rendering and interaction path

- Identify render-blocking resources, hydration/client boundaries, data dependencies, font swaps, image dimensions, and third-party gates.
- Prioritize semantic content, primary proof, navigation, and primary action.
- Defer or progressively load below-fold, ambient, analytics, and advanced effects appropriately.
- Plan route transitions, prefetching, caching, and state reuse based on likely journeys rather than loading everything.
- Prevent advanced visual layers from owning essential content or controls.

## Step 3 — Design loading and continuity states

- Choose immediate content, reserved placeholder, skeleton, progress indicator, staged reveal, or background load based on duration and certainty.
- Make skeleton geometry match likely final layout closely enough to avoid false affordances and shift.
- Preserve user-entered data and context through transitions and retries.
- Show stale-but-useful data with freshness status when appropriate rather than unnecessary blank states.
- Define timeout, partial success, offline, retry, cancellation, and failed-dependency behavior.

## Step 4 — Optimize media, fonts, motion, and advanced layers

- Choose responsive image sizes, modern formats with fallbacks, intrinsic dimensions, loading priority, and crop strategy.
- Subset and preload fonts sparingly; define fallback metrics and acceptable font-loading behavior.
- Use posters, adaptive resolution, reduced data, pause/offscreen behavior, and explicit play for video/3D when appropriate.
- Limit main-thread animation and coordinate with reduced-motion and low-power fallbacks.
- Compress meshes/textures, use LOD/instancing, and isolate experiments behind capability gates.

## Step 5 — Design responsive interaction quality

- Keep input feedback immediate even when server confirmation is pending.
- Use optimistic behavior only for reversible, predictable operations and provide rollback/error status.
- Prevent duplicate submissions and ambiguous disabled/loading controls.
- Break long work into cancellable or incremental phases when possible.
- Test rapid input, interruption, route changes, and concurrent requests.

## Step 6 — Instrument and test realistically

- Capture lab traces for deterministic diagnosis and real-user measurements for actual distributions.
- Measure by route, device, network, locale, release, and experiment exposure while protecting privacy.
- Test cold/warm cache, throttled CPU/network, low memory, reduced motion/data, no WebGL, blocked third party, and error paths.
- Track regressions in CI and production against explicit budgets.
- Connect performance findings to user outcomes without claiming causality from correlation alone.

## Step 7 — Govern regression and trade-offs

- Assign owners to budgets and define approval for exceptions.
- Record visual/performance trade-offs in DECISIONS.md with evidence and expiration.
- Prevent new dependencies and assets from entering without budget impact review.
- Use representative performance dashboards and alerts, not vanity averages.
- Revisit budgets as product behavior and target markets change.

## Required outputs

- Critical-journey performance map
- Device/network/market target matrix
- Resource and interaction budgets
- Critical rendering strategy
- Loading/skeleton/progress contract
- Media/font/3D optimization plan
- Progressive enhancement and failure modes
- Measurement plan
- Regression gates and ownership
- Trade-off log

Use the local worksheets in `references/` when the task needs a durable artifact.

## Hard gates

Do not approve or hand off the work until all applicable conditions pass:

- Critical content and primary actions do not depend on decorative advanced layers.
- Target budgets and measurement conditions are explicit.
- Final layout reserves space and avoids preventable shifts.
- Loading, partial, timeout, offline, retry, and failure states are designed where applicable.
- Optimistic actions have rollback and duplicate-submission protection.
- Reduced-motion/data and no-WebGL/low-power alternatives preserve meaning.
- Both lab and real-user evidence are used appropriately when available.
- Exceptions have owners, rationale, and review dates.

## Handoffs

- Send media and derivative needs to `asset-production-direction`.
- Send code/bundle/render implementation to `design-to-code` and advanced fallbacks to `advanced-experience`.
- Send motion constraints to `motion-interaction`.
- Send real-user event requirements to `product-metrics-instrumentation`.
- Send regression checks to `visual-qa-refinement` and `design-system-governance`.
- Send SEO-related rendering/crawl trade-offs to `seo-discoverability-information`.

## Anti-patterns

Reject or correct these failure modes:

- A blank splash screen for brand theater
- Skeletons unrelated to final geometry
- Loading every animation and third party before content
- Claiming one Lighthouse run proves user performance
- Average-only reporting that hides slow users
- Optimistic success with no rollback
- Disabling controls without status
- Autoplaying heavy video/3D on constrained devices
- Shrinking image dimensions only with CSS
- Treating performance as engineering cleanup after design approval

## Completion report

Return a compact report containing:

- Scope and evidence used.
- Decisions made and their rationale.
- Produced artifacts.
- Tests or checks performed.
- Blocking and major findings resolved.
- Remaining uncertainty, risk, and next owner.
