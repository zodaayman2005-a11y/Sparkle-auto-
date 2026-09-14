# Slower image stories

Purpose: show a clear, restrained image change and give each chapter more reading
distance without adding input lag or an animation queue.

| Story | Previous scroll distance per chapter | New distance | Image entrance |
|---|---|---|---|
| Audience | 86svh | 120.4svh | 620ms fade and 18px rise |
| Strategies | 112svh | 156.8svh | 620ms fade and 18px rise |
| System screens | 125svh | 175svh | 520ms fade only |
| Setup | 100svh | 140svh | 620ms fade and 18px rise |

Geometry includes the existing small track/stage offset. The shared multiplier
preserves relative dwell times. Text stays unanimated; only the active image
enters. Rapid/reverse navigation selects the latest chapter without queuing.
Both locales use the same direction-neutral motion. Native scroll, chapter links
and skip links remain the controls.

Mobile keeps readable flowing chapters, 620ms image entrances and slightly more
vertical padding (28 to 36px; compact audience rows 24 to 32px). Reduced motion
removes animations and pinning. No dependencies, image generation, blur or
per-frame React updates were added.

Verification: production build and lint passed; Chromium 14/14 and WebKit 2/2
passed. Coverage includes actual entrance opacity, increased physical distance,
interruption before completion, rapid and reverse navigation, resize, reduced
motion and the no-JavaScript fallback. Arabic setup screenshots at 120ms and after
settling were inspected in `artifacts/story-pacing/`. Physical devices and frame
rate were not measured. Existing motion/router skills guided this limited change.
