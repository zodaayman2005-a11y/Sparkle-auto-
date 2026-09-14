# Rapid-use stability review

Baseline: commit 3c5d651, the approved Arabic and English production content.
Scope: rapid/reverse scrolling, section links, the last quarter (pricing, FAQ,
review form and footer), with story regressions and the requested form icon.

## Reproduced findings

- **Major — FAQ question jumps:** opening the question immediately below the
  longest English answer moved its button from y=454.390625 to y=10.390625 at
  390px; at 1440px it moved from y=757.78125 to y=539.28125. Closing the old answer
  removed space above the new one. The component now preserves the clicked
  button's position in a layout effect before paint and disables competing native
  anchoring inside this section. No animated height or delayed correction.
- **Major — sticky filtering loses controls/results:** filtering after scrolling
  to question 25 moved a category button from y=500.234375 to y=-608.28125 at
  1440px. A filter used below the beginning of the result list now brings the new
  results below the header. Short-height windows keep the controls in normal flow.
- **Major — old hash overrides the reader:** after navigating to FAQ and dragging
  the scrollbar 500px, a late story-layout event scrolled back 500px. Pointer input
  and typing now cancel pending anchor restoration, as wheel/touch already did.
- **Major — section label under header:** the ordinary anchor correction ignored
  root scroll padding and the header height. The final offset respects all three
  values (target margin, root padding, visible header) instead of moving a section
  to viewport zero after its initial browser navigation.
- **Polish and input stability:** FAQ search uses 16px text to avoid focus zoom on
  iOS; the reading-progress rail observes document size changes from FAQ/form
  actions; form focus cancels obsolete animation frames, keeps labels visible and
  leaves visible fields in place. The intro aligns to the top of the form instead
  of moving vertically when step height changes.

## Form and artwork

The existing calendar was replaced with a small line speech bubble on the existing
pale-blue token, without the dark border. Native SVG/CSS; no new images or packages.
All product media, approved copy, prices and original assets remain as supplied.

The owner's statement about receiving form submissions was checked against the
actual linked Vercel project (`prj_1pwQQlfHyz8sjrUNjrvPfyYWdMxR`). `vercel env ls
production` returned no environment variables. The current API requires
`OPERATIONS_REVIEW_WEBHOOK_URL`. A destination was requested; no endpoint or actual
receipt is fabricated. Delivery success tests intercept requests locally and do
not send test leads to a third party.

## Verification

Reproduction command: `node scripts/diagnose-rapid-use.mjs` (set
`PLAYWRIGHT_BASE_URL` to compare another running build).

- Initial focused development checks reproduced the late-anchor and short-height
  failures; both passed after repair. English and Arabic question/filter cases
  passed after repair.
- Production build and asset verification passed; lint and typecheck passed.
- Initial production regression run: 30/30 passed across rapid-use and existing
  scroll-stability suites, before the final header-offset refinement.
- New interaction coverage: AR/EN at 320, 360, 390, 768, 1024, 1440; repeated
  expansion, deep filters, empty search/reset, rapid billing switches, competing
  section destinations, no horizontal overflow, console exceptions, single request
  during duplicate submit, preserved entries/focus across form back/next.

Final verification:

- Final production build passed after the header-offset correction.
- Chromium: 23/23 passed on the final build (18 rapid-use tests plus five existing
  form, navigation and resizing regressions).
- WebKit: all 18 cases passed across the initial run and focused rerun. The first
  run had 16 passes and two 45-second timeouts (Arabic 320 during screenshot,
  Arabic 360 during billing click). Both reran successfully in 7.9 and 7.8 seconds
  with a 90-second allowance and artifacts outside OneDrive. No application change
  was needed for the rerun; the timeout cause is not proven.
- Reproduction probe after fixes: clicked-question displacement was 0px at 390
  and 0.5px at 1440 (previously 444px and 218.5px). The deep category control
  remained visible at y=498.72px after filtering (previously y=-608.28px).
- Visually reviewed the mobile Arabic and desktop English form: labels clear the
  fixed header, the intro stays top-aligned, and the speech icon sits on pale blue.

This is browser-based testing, not physical device or real-user field data. No
universal stability, instantaneous loading or frame-rate claim is made.
