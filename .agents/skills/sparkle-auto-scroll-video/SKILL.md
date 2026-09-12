---
name: sparkle-auto-scroll-video
description: "Sparkle scroll storytelling and video: one reusable engine for five strategies and seven product chapters, with accessible fallbacks."
metadata:
  package-version: "1.0.0"
  author: "Hyzex / Sparkle project packaging"
---

# Sparkle Auto — Scroll Stories and Video
Authored adapter to master-plan §§6–7 and §14. Read those contracts and
`references/MEDIA-KEYS.json`; the original FullScreenScrollFX is source material,
not a drop-in implementation or proof it has run.
Pair with motion-interaction, inclusive-accessibility-design and performance-perceived-quality.

## Architecture
Build one reusable ScrollStory with data-driven chapters and one shared video player.
Native scrolling remains native. Prefer a readable document-flow text column and a
sticky proof stage on sufficient desktop space. Do not mix two owners for pinning.
Use the existing framework and actual installed animation library; verify changing
technical APIs against current official documentation during implementation.
Do not install a scrolling library or rewrite the application merely for the demo.

## State rules
The visible chapter follows the latest scroll target, including a fast jump over
several chapters. Do not queue intermediate animations until the display lags behind.
Use one authoritative chapter state. Direct links/buttons select the actual chapter
using real layout geometry and account for the sticky header. Do not steal focus or
scroll the visitor on passive chapter changes. Inactive media cannot trap keyboard focus.
A chapter contains its strategy and its in-product application once, not repeated below.

## Interaction
Provide a readable count, chapter navigation and a bypass path for a long section.
Keyboard controls use native buttons/anchors. Existing labels are localized.
Videos play only after an explicit action; scroll is not a video seek bar.
Never hide product evidence inside aria-hidden decorative backgrounds.

## Mobile, reduced motion, changing environments
Narrow or short viewports use linear content or a fully accessible disclosure layout
with no forced horizontal swipe. The plan's default is linear chapters.
Reduced motion removes pinning, scrubbed transforms and artificial spacer heights;
every chapter remains reachable and readable. Listen for preference changes.
Clean up tweens, triggers, RAF, timers, observers and listeners on unmount, locale
change and layout mode change. Resizing must not leave duplicated scenes or dead gaps.
Ensure anchors and copy work with motion unavailable; do not wait for assets to reveal text.

## Media lifecycle
The twelve stable keys in MEDIA-KEYS are authoritative for this plan. At installation,
sources are unknown, not supplied. During implementation locate real repository media
before marking an asset missing. A missing video means no non-working public Play button.
DEV may show its exact missing key. Keep real proof and the written explanation.
Do not invent file paths, durations, language tracks, subtitles or approval.
Record a real source, poster, language, actual duration when known and caption tracks.
Keep video download/player construction deferred until the user asks to play.
For self-hosted media, use controls, playsInline and preload=none where appropriate.
A third-party embed needs the existing approved provider/privacy policy.

## Player/dialog
Open the correct chapter, keep a visible close control, constrain focus appropriately,
support Escape, stop playback on close and restore focus to the trigger. Keep both
the page scroll position and current chapter stable. Background scrolling locks only
while the dialog is open; clean it up on every close/error/unmount path.
Captions and language labels must describe actual supplied content, not an empty VTT.

## Tests
Zero / one / many chapters; first/last; rapid and reverse scroll; direct jump; entering
and leaving the section; keyboard; touch; resize; short viewport; locale change;
live reduced-motion change; missing/failed media; opening and closing a playing video;
return focus; scroll restoration; duplicate listener/trigger checks.
Record actual outcomes. Do not call source analysis a passed runtime test.
