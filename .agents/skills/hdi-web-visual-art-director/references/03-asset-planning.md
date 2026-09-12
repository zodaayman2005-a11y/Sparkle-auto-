CORE MODULE 03 — ASSET PLANNING AND BRIEFS

Section map, asset plan, and production briefs

Plan all visible elements; generate only the right ones

Create a row for the hero artwork, proof screens, logo, major props, persistent motifs,
meaningful icons, and interactive modules. Group repeated simple icons/components
instead of adding one row for each border or checkmark. “All elements identified” does
not mean “all elements generated.”

|Type                                            |Default route|Reason                         |
|------------------------------------------------|-------------|-------------------------------|
|Header, copy, CTA, form, prices, FAQ            |CODE         |Editable, semantic, interactive|
|Real product UI, logo, customer evidence        |REAL         |Truth and brand accuracy       |
|Existing suitable artwork                       |REUSE        |Consistency and lower effort   |
|Character acting, custom scene, complex prop    |GENERATE     |Unique narrative asset         |
|Arrow, simple trail, underline, geometric accent|CODE         |Crisp, light, responsive       |
|Unnecessary floating badge or filler prop       |OMIT         |Preserve focus                 |

Use licensed/approved icon assets as REAL/REUSE when appropriate. Generating a raster
image for every tiny interface icon is not the default.

Section map

Each section needs: section ID, user question, one message, proof, dominant focal
point, layout family, intensity (quiet/supporting/heroic), art need, CTA if any,
mobile priority, RTL/LTR treatment, and its transition to the next section.

Storytelling images should answer a question. A nice-looking owner pose without a
narrative job fails the brief even if the rendering is excellent.

Minimal brief for every generative asset

```text
ASSET_ID / SECTION / STATUS
BUSINESS GOAL / USER QUESTION / ONE MESSAGE
VISUAL VERB / PRIMARY METAPHOR
SUBJECT / ACTION / EMOTION
IDENTITY SOURCE / INVARIANTS / ALLOWED VARIATION
MAIN PROP / SCALE / OPTIONAL SUPPORTING PROPS
IMAGE ROLE: CUTOUT | OPAQUE_SCENE | FULL_WIDTH_PLATE
CAMERA / LIGHT / MATERIALS / PALETTE
LAYOUT SLOT / ASPECT / TARGET DISPLAY SIZE
FOCAL POINT / CONTACT POINTS / SAFE CROP AREAS
COPY POSITION: OUTSIDE_ASSET or explicitly defined overlay safe area
DESKTOP / TABLET / MOBILE COMPOSITION
RTL / LTR CHANGES
REAL PRODUCT SOURCE: separate asset; never sent for UI regeneration
LAYER PLAN / ALPHA NEED / BACKGROUND SURFACES
SPARK OR MOTIF FUNCTION: verb, or NONE
MOTION NEED / STATIC FALLBACK
ALT PURPOSE / ALT TEXT
SOURCE RIGHTS / SENSITIVE DATA
FORMAT / SIZE BUDGET / PLANNED OUTPUT PATH
ACCEPTANCE CRITERIA / DO NOT
```

Do not fill unknowns with fabricated facts. Use missing, not required, or
proposed; not approved where appropriate.

Brief versus tool request

Keep the durable brief thorough. Compile only the relevant details into a concise,
concrete tool request; do not paste a whole 100-section brand manual into every call.
A tool-ready request should prioritize identity, action, composition, style, and the
few important exclusions. Tool parameters are configured separately when supported.

Composition contracts

Decide page geometry before the image. Record where the image lives, what can overlap,
and which content must remain unobscured.

For a cutout placed in its own grid column, do not waste half the image on artificial
“space for text” already provided by another HTML column. Keep enough transparent
edge room for hands/props/shadows and crop safely.

For a full-width image behind HTML copy, define an intentional low-detail copy-safe
zone. The text itself still stays outside the image. Verify contrast on the final
background; low detail alone does not guarantee legibility.

Normalized anchors (0–1) may guide target geometry. They are design constraints, not
a promise that image generation will place pixels exactly. Measure/adjust the output.

Variant decision tree

Can one approved master preserve the focal point and crop across both breakpoints?
Use delivery-size variants, not a fresh generation.

Does mobile require a different relationship/pose because a crop loses the metaphor?
Create a true mobile art-direction variant.

Does changing language require a different gaze/contact or screen arrangement?
Create a directional variant. Never mirror written UI or asymmetric character identity.

Does only a simple arrow need reversing? Change the SVG/CSS arrow, not the whole image.

Dependency order

1. Actual identity and truth sources.
2. Page slots and mobile composition.
3. Shared style anchor/calibration asset.
4. Main storytelling assets.
5. Needed variants and supporting props.
6. Export derivatives and lightweight accents.

Keep selected originals outside public delivery where practical. Publish only the
assets the page loads. A single large original does not justify making every visitor
transfer it.

Asset budgets are planning targets

Start with a small illustrative set rather than one new scene per section. A typical
long marketing page may need only three signature scenes plus reusable small props;
this is a planning example, not a minimum, benchmark, or law.

Set byte targets after the actual slot and image complexity are known. A provisional
combined mobile hero-image target of 200–400 KB can guide the first pass, but record
exceptions and judge measured loading plus visual quality. Do not destroy identity
or product legibility to satisfy an arbitrary byte cap.

────────

