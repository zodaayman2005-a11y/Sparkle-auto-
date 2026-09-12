# Audience scene board — 2026-09-08

## Decision
User explicitly supplied ten illustrations and requested a fixed/sticky scroll-animated audience section with substantial weight. The previous copy freeze remains. The new request authorizes these specific images now; the separate product screenshot step remains deferred.

## Scene mapping

| Scene/source | Existing message | Meaning |
|---|---|---|
| 01 | audience[0] | Busy single-branch operation |
| 02 | audience[1] | Different reports across branches |
| 03 | audience[2] | Bookings split between calls, WhatsApp and notebook |
| 04 | audience[3] | Vehicle status and responsible worker |
| 05 | audience[4] | Revenue tied to service, car and branch |
| 06 | audience[5] | Inventory shortage during rush |
| 07 | audience[6] | Clear team workflow without owner presence |
| 08 | audience[7] | Customer and vehicle visit history |
| 09 | audience[8] | Repeatable operations for growth |
| 10 | Existing first fit-notes paragraph | Approachable use by each role |

The qualification paragraph remains after the sequence. Original heading and all case text are unchanged in both languages. Only functional navigation labels/numerals were added; no new business claim. These illustrations are storytelling assets, not product screenshots or customer proof. User-provided natural colors and all composition details were preserved. No image generation or recoloring was used.

## Motion contract

- One CSS sticky stage. Desktop: 86svh native scroll distance per case; mobile: 76svh per case. All ten cases retain their dwell interval, including the last.
- Fixed image/text stage with measured opacity (720ms) and 24px/1.5% settling (920ms) transitions. No elastic bounce, looping motion or wheel interception.
- One active case, directly derived from scroll position. Fast scroll/reversal updates the latest target, without a queued sequence.
- Native scrolling remains in control. Numbered real links support keyboard selection and direct case hashes; skip goes to the qualifying paragraph after the story. Passive listeners and requestAnimationFrame; no animation package added.
- Desktop: text and full portrait alongside each other. Mobile: image above text, 5x2 navigation targets at least 44px high. Neither language mirrors the artwork.
- Sticky only at widths >=768 with height >=740, or widths 360–767 with height >=800, and no reduced-motion preference. Narrow/short screens, reduced motion and no-JavaScript receive ten normal-flow scenes without a long empty pin.
- Source paragraphs stay in the DOM; the active animated scene is exposed with its corresponding numbered link. Inactive animated scenes are aria-hidden; static fallback exposes all scenes.
- No focus pulling when scrolling. Resize/preference/locale change removes the listeners; direct hash selection is restored when entering the active mode.

## Asset delivery

Original JPEGs preserved in assets/brand/audience-originals/. Optimized 960x1200 WebP derivatives under public/art/audience/, preserving the whole supplied image. Total derivative source bytes: see assets.json (about 684KB for all ten before responsive Next image delivery). Responsive sizes and native lazy-loading used. No source file overwritten and no UI screenshots replaced.

## Validation

See automated tests/audience.spec.ts, calibration.json, content-check.json and the final test/deployment note. The dedicated tests exercise all ten cases in each language at 390/1440, caption/image framing, small-scroll dwell, direct navigation, reverse selection, keyboard, skip, hashes, reduced-motion/short-height fallback and no-JavaScript content. Browser screenshots reviewed at 390/1440. Images remain contained with no new crop; first calibration exposed intrinsic image height growing the desktop row and was corrected before delivery.

Not covered by desktop browser automation: physical touch devices, Safari, Firefox, screen reader speech, or live product screenshot truth (those assets are still missing).
