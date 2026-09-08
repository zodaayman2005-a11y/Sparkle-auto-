SPARKLE MODULE 01 — BRAND WEB CONTRACT

Sparkle Auto — normalized web production contract

Derived from the user’s Web Execution Edition 1.0, sections 0–117. This is an execution
interpretation, not a replacement for the original brand system or a verbatim archive.
Where a project source resolves a conflict, record the decision in the project’s
DECISIONS rather than silently changing the brand.

1. Identity and hierarchy

The page should feel like the Sparkle world, not a SaaS template decorated with an
Owner. Use stylized 3D for emotion/metaphor; real UI for credibility; navy-edged web
components for structure; editorial type for communication; spark motion for guidance;
white space for clarity; Egyptian human copy for relevance and conversion.

The user’s directional visual mix favors clean surfaces/whitespace, then real product
proof, then selective 3D, then small accents. Percentages are not a literal area formula
and should not force each section to contain every layer.

Product truth and usable/accessibile execution are hard constraints. Identity, palette,
and current approved decisions define the allowed visual solution. A gorgeous decorative idea
cannot justify false UI, a wrong face, or unreadable buttons.

2. Palette and surfaces

|Token                       |Value                                          |Role                                          |
|----------------------------|-----------------------------------------------|----------------------------------------------|
|primary / blue              |#01A2FF                                        |Action surface and energetic accents          |
|primary-dark / dark-blue    |#0C264B                                        |Supporting structure and readable dark text   |
|ink / navy                  |#03132E                                        |Main text, border, physical shadow            |
|soft-blue                   |#91B1D8                                        |Noncritical supporting color; contrast checked|
|white / background / surface|#FFFFFF                                        |Main page and clean panels                    |
|surface-soft                |controlled near-white blue derived from palette|Quiet section contrast                        |

Example proposed pale surface: #F2FAFF. It is a derived implementation value, not a new
brand accent or a claim that this exact hex was approved in the source.

White is the default. Pale blue adds rhythm. Deep navy is reserved for a strong
transition/final CTA/footer, not an entirely dark site. A bright blue climax is possible
only with readable text pairings and enough restraint.

Do not introduce orange, yellow, coral, mint, purple, neon, or rainbow gradients as
brand graphics. Red is reserved for genuine errors/critical warning. Skin/hair/beige
wardrobe and authentic product semantic colors are not recolored to force the palette.
Use monochrome approved social/contact marks unless the actual brand policy permits
their official colors. A generated green success treatment is not automatically approved as a new brand color.

3. Borders, shadows, corners, spacing

Default border 2 px navy; emphasis 3 px; 4+ px exceptional. Avoid barely visible gray
borders everywhere, pure-black brutalism, and aggressive oversized shadows.

The source gives prose examples (4/6 px) and token examples (3/5/7 px). Recommended
normalization: use the provided semantic token system consistently (3/5/7 px) rather
than mixing all offsets arbitrarily. Record that normalization as an implementation
decision; preserve existing approved values if already established.

Corners: small 8 px, medium 12 px, large around 18 px, extra-large 24 px. Buttons usually
10–14 px, cards 16–20 px, large frames 20–24 px. No pill for everything or random corners.

Full spacing scale: 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 120, 144 px. Typical section
space: desktop 96–144 px; mobile 64–96 px. Vary rhythm meaningfully instead of identical
section padding throughout. Existing 128 px tokens can remain when part of the current
approved implementation; do not create competing scales without a reason.

A concise token starting point:

```css
:root {
  --sa-blue: #01A2FF;
  --sa-dark-blue: #0C264B;
  --sa-navy: #03132E;
  --sa-soft-blue: #91B1D8;
  --sa-white: #FFFFFF;
  --sa-surface-soft: #F2FAFF; /* proposed derivation; reconcile with project tokens */
  --sa-text-primary: var(--sa-navy);
  --sa-text-secondary: var(--sa-dark-blue);
  --sa-on-blue: var(--sa-navy);
  --sa-border: 2px solid var(--sa-navy);
  --sa-radius-sm: 8px;
  --sa-radius-md: 12px;
  --sa-radius-lg: 18px;
  --sa-radius-xl: 24px;
  --sa-shadow-sm: 3px 3px 0 var(--sa-navy);
  --sa-shadow-md: 5px 5px 0 var(--sa-navy);
  --sa-shadow-lg: 7px 7px 0 var(--sa-navy);
  --sa-content-max: 1240px;
}
```

This is a starting specification, not a complete component stylesheet. Merge with
existing tokens centrally; never scatter silent token variations across sections.

4. Grid and page composition

Desktop: 1440 design canvas, 1200–1280 max content with 1240 preferred, 12 columns, 24–32
px gutters, 32–64 px outer safety. Tablet: 768–1199, 8 columns, 24–32 px outer margin.
Mobile: 320–767, 4 columns, 16–20 px margins, 390 px target canvas.

Use editorial 5/7, 7/5, 4/8, full-width stages, centered headlines, selected sticky
visuals, proof rails, and calm commercial grids. Do not alternate 50/50 split sections
for the entire page. Do not repeat the same family more than twice in succession.

Copy measure: roughly 560–680 px for substantial paragraphs; headlines can be wider
when composition needs it. Avoid full-page-width paragraphs. The design must survive
zoom and real content rather than depending on pixel-fixed text boxes.

5. Type and Arabic

Bold, friendly, confident, editorial, Arabic-first. No family is mandated by the source:
use the current approved family, or propose one and a typography sheet. Do not bundle
font files. Verify licensing and script coverage in the actual project.

Desktop hero 56–76 px, H2 42–56, H3 28–36, large body 20–22, body 16–18, small 14–16.
Mobile hero 36–46, H2 30–38, H3 24–30, body 16–18. These are art-direction ranges, not
reasons to clip at narrow widths. Rewrap/recompose rather than reducing hero text to 24 px.

Arabic layout is primary, not an afterthought. Keep headlines short, use deliberate
line breaks where stable, avoid justification and arbitrary letter spacing, and keep
comfortable line length. Test actual glyphs and line height; a word-count heuristic
is not a replacement for rendered text inspection.

English gets its own headline measure, wrapping, device position, and CTA grouping.
Avoid mechanical full-image mirroring. Headline, support, and CTA remain HTML.

6. Components and interaction

Header: quiet logo/navigation/language/primary action. No decorative 3D, oversized
navbar, unnecessary mega-menu, or 8–10 links. Mobile uses a clear compact menu/drawer
with visible language access. Do not show both full desktop navigation and a redundant
hamburger just because the image does.

Primary button: blue surface, navy border, high-contrast label, controlled hard shadow,
strong weight. Desktop height 52–58 px; mobile 50–56; project minimum touch target
44×44 px. Secondary: white/navy border, less shadow. Tertiary: meaningful link/arrow.
This 44 px is the brand target, not a claim that all WCAG versions share that minimum.

Hover/press: small physical translation with compressed shadow; approximately 120–220
ms, no giant scaling/glow/pulse/infinite bounce. Preserve a visible, sufficiently
contrasting keyboard focus ring. Never remove outline without an effective alternative.

Use cards where they group decisions: pricing, steps, important pain groups, form,
selected proof. Do not wrap every sentence, icon, feature, and screenshot in a card.
Typical card: white, 2 px navy, 16–20 px corner, optional hard shadow, 24–32 px padding.

Icons: one consistent family, simple/bold/geometric, navy/blue, coherent stroke.
No randomly mixed icon sets or unrelated multicolor/gradient 3D icon packs.

Reusable components: Header, MobileDrawer, buttons/link, SectionHeading/Eyebrow,
ProductFrame/DeviceMockup, EditorialCard/StepCard/PricingCard, Badge, Accordion,
FormField/RadioCard/Checkbox, CTAPanel, Footer, SparkAccent, SectionContainer.
Reuse component anatomy, not a single composition for all sections.

7. Narrative and section families

Move through recognition → pain → solution → understanding → proof → value → trust
→ commercial decision → action. The 15-section source sequence is a starting structure,
not permission to invent content or keep redundant sections.

Families: editorial split; giant story stage; real-product proof stage; selected
sticky visual story; large editorial number system; proof rail; commercial grid;
conversion stage. Use one or two major scroll-story moments at most by default.

Hero: one result, not a feature catalogue. Prioritize promise, authentic proof, CTA,
support, and optional Owner. One device cluster only when both device roles matter.
No web card swarm around the character. Mobile simplifies before adding decoration.

Problem: strong Owner acting and one giant prop/physical pressure/pull/chase/editorial
metaphor. Short copy. Do not humiliate the owner or turn him into a helpless stereotype.

Definition/proof: quieter illustrations, clear definition, real screen, 2–4 supported
outcomes. Product showcase belongs to the product, not the mascot. Segment fit may
use typographic labels/simple branch props rather than five stock photos.

Strategies/setup: editorial numbers, short actions, small related props. Journey:
booking/arrival/service/payment/close only as verified in the product, with one action
and proof per beat; a spark can connect the steps. Do not turn the journey into a
fake animated product simulation.

Pricing: calm and readable; name, audience, verified price, inclusions, action. Emphasis
through border/blue/badge, not animated flashing or a giant character. Trial is a
review-to-action transition with explicit verified terms. FAQ is a spacious keyboard-
usable accordion with visible state. Form is an authentic conversion interaction.

Final CTA: one earned message, one main action, optionally one genuinely distinct
contact action. Owner can return in a relief/control scene; a dark/light palette
pairing must remain readable. Footer stays quiet and focused, not a giant sitemap.

8. Artwork and product relationship

Main scenes should allow character/prop group, atmosphere, motif, and code-built UI
to remain independently useful. Separate contact-heavy groups only when technically
coherent. The tool does not automatically provide layered 3D source files.

Do not bake Arabic headline, CTA, approved logo, or real screen into generative art.
Use transparent assets when supported and verified, or deliberate background-separated
plates. Preserve facial features, hands/feet, and primary prop when cropping.

Device screens must use authentic Sparkle captures. Keep the screenshot separate from
generation. Crop, mask, frame, and moderate perspective are possible, but do not redraw
content, invent graphs/notices, or obscure necessary context. Annotations are clearly
explanatory and outside the UI; no fake product popup/tooltips.

Record screen name, capture version/date, locale, device, source, and approved crop.
Demo data is labeled and cannot become a claim of customer results. Update proof when
the product version makes the capture misleading.

9. Motion and decorative restraint

Microinteractions 120–250 ms; component entrances 300–600 ms; selected large editorial
transitions 600–1000 ms. No four-second hero reveal. FAQ movement approximately 200–300
ms when animated. These are bounded direction ranges, not identical durations everywhere.

Approved: small translate/fade, purposeful mask/clip reveal, limited scale, spark path,
physical prop entry, short layered device movement, controlled parallax. Forbidden:
constant bobbing, random particles, continuous glow, cursor-following everything,
spinning text/screens, huge mouse parallax, and scroll hijacking.

Reduced motion removes parallax and scroll-linked transforms; content and state stay
understandable. Mobile reduces motion and heavy layers. A static key frame must carry
the idea. Use tiny spark/glint/underline/patch/arrow/number/impact accents only where
useful; generally 1–4 per viewport, zero also acceptable.

10. Conversion, forms, and trust

Egyptian copy should sound like the owner: «اعرف حالة العربيات وإيراد اليوم من مكان
واحد» rather than corporate digital-transformation jargon. Verify the underlying
capabilities before making that statement. Short headline, short support, clear proof.

Use one consistent label for the same action. Preserve the review-first funnel from
current decisions unless explicitly changed. Do not mix review/trial/demo/WhatsApp
as four equal primary actions.

Forms: labels remain visible; large fields 48–56 px; logical order; short choices;
optional staged steps if useful. Required fields follow actual operational need,
not a generic ten-field template. Explain purpose/privacy without inventing guarantees.
Errors use text plus state, not red alone. Loading, success, error, and retry belong
to a genuine submission lifecycle. Success is not a default decorative panel.

Proof hierarchy: real product, real process, real customer evidence, verified numbers,
then claims. No placeholder client logos, invented testimonials, or fake wash counts.

11. Accessibility, performance, and export

Semantic HTML, correct headings, keyboard access, visible focus, labels, alt purposes,
contrast, adequate targets, and reduced-motion support are mandatory. Primary text
must not be embedded only in images. Meaningful alt describes the situation; decoration
uses empty alt. Do not claim universal certification from a checklist.

White/#01A2FF fails normal and large text contrast; use navy/blue pairing or an approved
dark surface/white pairing. Soft blue on white is also unsuitable for essential text.
Actual screenshots retain their truth; do not recolor product internals for the page.

Optimize LCP candidate, responsive delivery, intrinsic dimensions, layout stability,
image count, and motion cost. Use AVIF/WebP where the pipeline supports and preserves
quality/alpha, with appropriate fallback. No unnecessary 4000 px mobile assets or heavy
autoplay hero video. Record measured evidence and not-run gates.

Naming: SA_LP_[SECTION]_[DIRECTION]_[BREAKPOINT]_[ROLE]_V01.ext, adding ROLE to the
source pattern when it prevents collisions. Derivatives must identify their parent.
Not every asset needs all direction/breakpoint variants. Record why each is needed.

12. Approval tests

Apply all ten source QA groups: brand, story, product truth, layout, type, character,
responsive, interaction, accessibility, performance. Then review one-second meaning,
proof without marketing copy, brand without logo, and mobile thumb operation.

Do not proceed from “this visual is attractive” directly to a final claim. Generate,
assemble, inspect, correct, and record what is still provisional.

────────

