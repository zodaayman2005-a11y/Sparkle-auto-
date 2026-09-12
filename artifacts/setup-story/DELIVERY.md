# Setup illustrated story
User request: five supplied illustrations, heavy static scroll animation; preserve all existing copy.
Mapping by depicted action (source photo -> existing step): 5 -> Understand operation; 1 -> Configure system; 2 -> Train roles; 3 -> Start real operations; 4 -> Review result.
Reused the AudienceStory native-scroll engine with a setup variant, keeping one listener lifecycle and latest-target transitions per instance. Five full portrait images, no recoloring/mirroring; originals archived in assets/brand/setup-originals. WebP 960x1200 delivery assets. Images are illustrative storytelling, not product screenshots.
Desktop dwell: 104svh per step. Mobile dwell: 92svh per step. Existing 720/920ms tactile transition. Skip and direct step anchors. Reduced motion and short/narrow screens: complete natural-flow list. Existing heading/body/CTA content unchanged.

Validation: ESLint and production build passed. 16 responsive checks (Arabic/English x eight widths) and seven audience-regression tests passed. Setup scene navigation, heavy dwell, reverse navigation, image decoding, copy bounds and reduced-motion fallback passed at 390/1440 in both locales. Scoped axe: zero violations. All headings and paragraphs match previous deployment exactly. Initial axe harness corrected to use browser.newContext; rerun passed. No field CWV or real form submission tested.
Preview: https://sparkle-auto-landing-nsb81c16i-zodaayman2005-3362s-projects.vercel.app/#setup

