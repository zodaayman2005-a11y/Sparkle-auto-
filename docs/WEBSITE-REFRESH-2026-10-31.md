# Sparkle Auto: six-page review version

## Scope and authority

User direction on 31 October 2026: shorten the old landing experience into four to six **separate pages**, correct the limited accounting/system positioning, update retired commercial information, and use the supplied film to carry the story. This version now uses six public content pages, each in Arabic and English, after the requested FAQ restoration. It is local review work, not a deployment.

Base: Vercel project `prj_1pwQQlfHyz8sjrUNjrvPfyYWdMxR`, production source `b1b73f7ea14e11e8cc68427e881b9100a834e330`, GitHub `zodaayman2005-a11y/Sparkle-auto-`, main. Working branch: `codex/landing-refresh-20261031`.

Product evidence: the Sparkle Auto project source pack reviewed 22 October 2026 at main `07718566ca65055cb9814588b47f1904389aa79c`, especially CURRENT_STATE, product overview, subscriptions, workforce and operations contracts. This is product-reference evidence, not a new live audit of every application feature. The supplied user corrections take priority over older landing copy.

## Information architecture

| Page | Arabic route | English route | Visitor question |
|---|---|---|---|
| Home | `/` | `/en` | What is Sparkle Auto, and where do I go next? |
| Platform | `/platform` | `/en/platform` | How does it connect operations, people, finance and growth? |
| Film | `/film` | `/en/film` | What does the business journey look like? |
| Pricing | `/subscription` | `/en/subscription` | What are the payment options and ongoing costs? |
| FAQs | `/faq` | `/en/faq` | What does the platform do, and how does it fit my operation? |
| Contact | `/contact` | `/en/contact` | How do we discuss my operation? |

Header/footer and language links preserve the current page. Old major homepage hashes route to their new page. No pinned scroll scenes remain in the active site. Historical code and assets are retained.

## Commercial and product claims

- One complete paid offering replaces the retired Operations/Growth/Expansion tiers.
- Owner-confirmed pricing from 1 November 2026 is maintained in `src/content/pricing.ts`; see the pricing update below. Old tier/add-on prices stay retired.
- The owner's new price sheet lists a fourteen-day free trial for car washes and PPF centres.
- Booking, schedule, operations board, workforce/payroll, finance/inventory, customer experience, campaigns, loyalty, memberships, store and branches are grouped by business use.
- Mobile and detailing/PPF are identified as supported operating workflows with suitable setup, not separate unlimited promises.
- No new guarantee of customer acquisition, online payments or unrestricted WhatsApp sending was added.
- Existing supplied product captures are reused unchanged. Their age is not hidden behind an "updated/live UI" claim.

## Film provenance

Source: `SparkleAuto_فيلم_المغسلة_v3_تزامن_مظبوط-1.mp4` supplied by the user; 183,479,500 bytes; duration 592 seconds; original 1920×1080, 30 fps, AAC stereo. Source SHA-256: `2f84e83e543e1d1774fabd6cb691e1ff4267a70973833c9060b428818f9c2a79`.

Web derivative: `public/media/sparkle-auto-film.mp4`, 1280×720, H.264/AAC, fast-start, 64,536,476 bytes. SHA-256: `0cff6b61c1a1a7ababecdeda9ed6080ee6d432115a803c15cedd68d423ff6270`. No cuts, speed changes or narrative edits. Poster is a source-video frame. Topic links were selected from sampled visual content, not a reviewed audio transcript.

Native controls, no autoplay, `preload="none"`. Direct cold-start chapter seeking was observed at 220 seconds with duration 592 and playback active. No reviewed timed captions exist yet; full caption accessibility is not claimed.

## Verification

- TypeScript: passed.
- ESLint over source and tests: passed.
- Standard `npm run build`, including the active asset prebuild check: passed after the final compact contact layout adjustment.
- HTTP contract checks: 19 passed, covering ten locale routes, canonical/language metadata, asset availability, video byte-range support, unknown-route 404 and API invalid-input rejection.
- Direct browser QA: all five pages in both locales at widths 320, 360, 390, 768, 1024 and 1440 (60 route/viewport checks); no horizontal overflow, missing images or wrong root locale; one H1 on every page.
- Screenshots inspected: Arabic homepage and platform desktop; English subscription mobile; Arabic contact mobile. Final review captures are saved separately in task outputs.
- Mobile menu opens; Escape closes and restores trigger focus; language switch preserves subscription page; menu navigation opens film.
- Arabic-digit phone input normalizes, empty form validation focuses the first field, and Back retains entered values.
- New Playwright suite: 18 tests collected; not executed by CLI. Direct browser checks above are separate evidence, not a claim that the automation suite passed.
- Legacy scroll-page tests remain preserved and are no longer the default suite because their architecture was removed intentionally.
- Local review receiver is unconfigured. No successful lead receipt or production delivery is claimed; no production test lead was sent.

## WhatsApp follow-up

The owner asked to add two-way WhatsApp messaging and will provide replacement product screenshots. Added a compact bilingual WhatsApp section on the existing Platform page, with inbound messages to the connected business number, inbox replies and booking/service message settings. No screenshots were fabricated; the new section remains text-only until real captures arrive.

Evidence: the current product repository's owner-Inbox implementation and the 29 October closeout/current Inbox records in `docs/09-operations/whatsapp-production-cutover.md`, plus the owner's current description. Those records retain the existing Inbox while closing the bounded automatic dispatch trial; therefore this copy does not advertise unrestricted or universally active automatic sending. Setup/connection/activation is stated at the point of the feature description. No message, setting, connection or product deployment was changed.

Requested capture direction: light theme, Arabic first, original full-width files; matched English captures are useful where available. Prioritise Inbox and automatic-message settings, then the platform screens the owner wants replaced. Keep each capture in its actual source language; no generated or repainted UI.

## Hero image correction

The owner identified the supplied seaside Owner scene as the homepage's main image. Restored the repository's original Arabic and English 6688×3764 PNG scenes, unchanged, as the full-bleed hero. The current short platform headline and description remain semantic HTML. The film cover is no longer used as the homepage hero; the film remains on its dedicated page and is linked by the secondary action. Hero originals are served without re-encoding, consistent with the retained original-quality delivery instruction.

## Supplied product screenshots — 31 October

The owner supplied five Arabic/light desktop PNGs and explicitly asked to put
them in the landing website. Integrated all five into the existing Platform page:
bookings → operations, workforce → team, finance → finance, customer profile →
growth, and the new Inbox capture → WhatsApp. The page count remains five and the
accepted seaside homepage hero is unchanged.

Copies under `public/product/2026-10-31/` are byte-for-byte originals, with exact
dimensions reserved in the markup. `product-screenshots-2026-10-31.json` records
capture source, locale, date, dimensions, size and SHA-256. Both website locales
identify the source interface as Arabic; no English screenshots were fabricated.
Each image has an accessible description and a full-size link. At small widths,
the image frame scrolls horizontally, with a visible hint and keyboard focus,
instead of shrinking the whole dashboard to unreadable mobile text.

Verification: asset checks passed (12 images), TypeScript and changed-source
ESLint passed, the isolated Next production build passed, and all 26 HTTP checks
passed. Browser checks covered both Platform locales at 320/360/390/768/1024/1440
pixels: five screenshots and five full-size links, with no page overflow. All
five Arabic images loaded with nonzero natural width; native keyboard scrolling
of the mobile WhatsApp image was verified. Representative desktop/mobile images
were inspected. No new automated test suite or performance benchmark is claimed.

This screenshot update is available in the local preview on port 3100. No commit,
push or public deployment of the landing redesign was performed.

## FAQ and image-viewer follow-up — 31 October

The owner asked to retain the detailed FAQs and keep their heading, search and
topic filters visible while scrolling. Added `/faq` and `/en/faq` as the sixth
content page, within the approved four-to-six-page limit. Header/footer/locale
links and the old `#faq` redirect reach it. Retained the original question topics,
updated commercial answers to the current complete-platform offering and added
the WhatsApp question (31 total). The overview, finance/POS comparison, WhatsApp
and support answers explain the connected operation without promising unrestricted
automatic sending, a response-time SLA or a newly invented price. Home and
Platform copy now name WhatsApp and platform support as part of the workspace.

The previous sidebar was sticky only above 900px height. It now stays alongside
questions on ordinary laptops, with an internally scrollable tools panel on very
short windows. On mobile/tablet, compact heading/search and horizontally scrollable
categories stay above the results. Filtering while scrolled brings the first new
answer below those tools; no-results reset restores all questions and search focus.

The owner also reported getting stuck in the raw full-size image tab. Screenshot
triggers now open the existing native dialog component inside the site. Close X,
Back to the platform, Escape and backdrop click return to the same page and restore
trigger focus. Actual-size mode provides native panning; fit mode shows the full
capture. No source image was edited.

Verification: TypeScript, changed-source ESLint, production build, asset checks
and 28 HTTP contract checks passed. Browser checks at six widths in both locales
confirmed 31 questions, no horizontal page overflow and persistent tools, including
the short laptop height. Search, category filtering from a scrolled position,
no-results/reset, focus restoration and all four image close paths passed. At
320×568, Close and Back stayed visible in actual-size mode with no page overflow.
Desktop/mobile captures were inspected. No Playwright CLI suite or performance
benchmark was executed for this follow-up; browser checks are separate evidence.

Local preview only; no public landing deployment or production form submission.

## Platform section consistency — 31 October

The owner identified WhatsApp's separate laptop layout, longer copy and different
box styling. All five Platform areas now render through the same section loop and
the same layout/screenshot components. WhatsApp uses the common image column,
heading scale, gap, padding, alternating surfaces and three-bullet list. Its copy
is shorter; number connection and service activation remain explicit. The four
homepage overview links are preserved. Removed the unused WhatsApp-only CSS.

TypeScript, changed-source ESLint, production build and 28 HTTP checks passed.
Browser comparisons at 320/360/390/768/1024/1440 in Arabic and English confirmed
equal image widths and horizontal positions, equal column gaps and heading sizes,
three bullets in each of five sections, and no page overflow. Desktop WhatsApp
output was inspected; the image viewer remains the shared in-page dialog.
This remains a local preview, with no public landing deployment.

## Matched English screenshots — 31 October

The owner supplied the five matching English-interface captures and requested
that screenshots follow the website language. Added unchanged originals under
`public/product/2026-10-31/en/`, with provenance and hashes in
`product-screenshots-en-2026-10-31.json`. The existing Arabic captures are intact.
Each screenshot record now has an Arabic and English source, including exact
intrinsic dimensions. The in-page image and enlarged dialog both select the source
using the active locale; captions and alt text identify the corresponding language.
Mobile panning follows that language's reading direction without mirroring pixels.

Client-side locale navigation retains Next's root layout. The header now keeps
the document language/direction in sync with its locale so changing languages
also updates HTML lang and RTL/LTR, while preserving existing Link navigation.

TypeScript, changed-source lint, asset checks (17 images) and production builds
passed. The HTTP contract now validates actual rendered image src attributes
against each route's locale, rather than serialized props containing both sources;
all 33 HTTP checks passed.
Browser checks switched Arabic↔English twice, verifying all five selected sources,
document language/direction and each locale's WhatsApp dialog source. Both mobile
locales retained five equal-width screenshot frames and no page overflow. Existing
five-section consistency and image close/return behavior remain in use.

Local review only; no public landing deployment was performed.

## Independent mobile composition (subsequently undone)

The owner's latest clarification expands the mobile task beyond adapting laptop
widths. At 900px and below, the site now uses a four-destination thumb navigation,
an image-first home composition, full-width feature links, a two-column page menu,
and a tabbed platform explorer showing one capability at a time. All five areas,
including WhatsApp, use the same mobile card and their existing localized captures.
Hash links select and reveal the corresponding tab in both reading directions.
The native screenshot dialog fills the phone viewport, with persistent close,
actual-size/fit and return controls. Original pixels remain unchanged.

Film chapters become horizontally scrollable cards, subscription context becomes
a compact trial band, and the contact page uses a single-column form without the
duplicate introductory sidebar. Existing FAQ search and categories remain sticky.
The homepage heading now has four explicit lines, with “One platform” larger,
including on desktop. Desktop platform sections retain their shared layout.

Validation: production build, TypeScript, changed-source ESLint, 17-image asset
verification and 33 HTTP contract checks passed. Actual CUA browser checks covered
all six pages in both languages at 320, 360, 390, 768, 1024 and 1440 pixels: 72
route/width combinations had one H1 and no horizontal document overflow. Inspected
phone home, platform, menu, screenshot dialog and film visually. Exercised all five
tabs, keyboard Home/End, Arabic deep linking, locale switching, actual-size/return
and restored focus. FAQ search filtered results and remained below the header.
Contact validation focused the first invalid field; step navigation retained entered
test data. No real lead was sent. The standalone Playwright suite was not run.
The final optimized build is served locally at port 3100; no public deployment.

## Clear page names and booking action

The owner rejected vague “Let’s talk” wording and questioned the changed page
names. The selected replacement is “Book a demo” / “احجز عرض توضيحي”, repeated
across the navigation, hero, repeated CTA and form heading. The final submit action
says “Request a demo”; the contact introduction explains that details are sent so
the team can arrange a walkthrough. It does not claim instant appointment booking.
“Pricing” / “الأسعار” replaces the Subscription navigation label; URLs stay stable.
The exact replacement wording is agent-selected in response to the owner's clarity
request, overriding the older skill's review-first label. No new numeric prices,
trial terms, delivery integration or public deployment were introduced.

The optimized build, changed-source lint and all 33 HTTP checks passed. Browser
inspection verified both affected pages in Arabic and English at 390 and 1440px:
eight route/width cases had the intended headings, no old labels in visible copy
and no horizontal overflow. No form submission was made.

## Mobile redesign undone

The owner's explicit “undo the phone ui” request removes the separate phone
stylesheet, bottom navigation, mobile explorer and compact screenshot renderer.
The earlier responsive layout is restored across all six pages: original menu,
text-first home, shared five-section platform page and previous film, subscription,
contact and screenshot-modal layouts. The independently requested four-line hero
heading, localized product captures, current content and later Pricing / Book a
demo labels are preserved. No public deployment was performed.

Build (including TypeScript), changed-source lint and all 33 HTTP checks passed.
Browser checks of six pages in both languages at 320 and 390px covered 24 cases:
no horizontal overflow or mobile redesign components remained; platform pages
had all five shared sections. The standalone Playwright suite was not executed.

## Focused demo form refinement (reverted after scope clarification)

Following the mobile rollback, the owner requested improvements to the form itself,
especially on phones and also on desktop. Changes are scoped to the demo request
page and its compact form variant. Other mobile site layouts stay as restored.

The contact introduction is shorter. On phones the form follows it directly,
without the three process cards delaying the first field. The form has localized
step headings, a two-step indicator, required-field guidance, useful example
placeholders, 16px input text and 54px actions. Desktop retains a two-column form
beside a navy panel explaining the walkthrough. No fields or qualification rules
were removed. Existing pricing remains unchanged.

The valuable action remains a demo request followed by human contact; it does not
book an appointment immediately. Button-adjacent copy explains the next step.
Validation focuses the invalid field. Step changes now focus the new heading so
the user sees where they are before continuing; Back retains both steps' values.
The existing receiver, duplicate-submit lock and real-receipt success requirement
remain. No analytics, tracking, made-up trust claims or production test leads.

Hypothesis (unmeasured): placing the first field earlier and clarifying the two
steps should reduce confusion and unnecessary phone scrolling. There is no claim
of measured conversion improvement; qualification and field requirements stay fixed.

Validation: production build including TypeScript, changed-source ESLint and all
33 HTTP checks passed. Browser verification of the final build covered both steps
in Arabic and English at 320, 360, 390, 768, 1024 and 1440px (24 states): no page
overflow, input text at least 16px, correct field counts and heading focus after
advancing. Invalid empty, phone and branch values were rejected locally; Back
retained entered values, and keyboard Tab from the step heading reached the first
field. Desktop English and mobile Arabic/English were visually inspected. No real
demo request was submitted; the standalone Playwright suite was not run. Local
preview only, without publishing. Skills additionally applied: conversion behavior
design and responsive RTL, with the existing bilingual and React checks.

## Platform page refinement — corrected scope

The owner clarified that “platform” had been misheard as “form” and explicitly
requested reverting the demo changes. The demo stylesheet, compact form redesign,
placeholders, step heading/focus changes, sidebar, shortened contact copy and
Arabic title change were removed. The preceding Book a demo / Pricing naming
decision remains. Browser checks confirmed the original blue demo section, process
cards and controls in both locales at 390 and 1440px, with no redesign nodes.

The new work is scoped to Platform. All five areas remain visible in the document,
using one shared card structure, including WhatsApp. On phones, each heading is
followed by the full fitted screenshot before the supporting text and features.
The screenshots no longer require horizontal scrolling just to see their overview.
Laptop retains a text/image composition with more room for the real UI capture.
The localized originals remain byte-for-byte unchanged.

A sticky section menu highlights the area being read and pans horizontally to keep
its selected item visible in either reading direction. Native anchor links and
keyboard navigation remain available; section jumps account for the header and
menu without adding the site's old scroll padding twice. This does not restore
the withdrawn whole-site phone redesign, bottom dock or tabbed hidden sections.

Each screenshot is a labeled button. The existing dialog keeps Escape, close,
return and focus restoration; on phones it fills the screen and initially shows
the original-size capture for readable panning, with Fit to screen available.

Validation: production build including TypeScript, changed-source ESLint and all
33 HTTP contract checks passed. Final-build browser checks covered Platform in
both locales at 320, 360, 390, 768, 1024 and 1440px: 12 layouts had five fitted
screenshots and no document overflow. All five section jumps were exercised at
every locale/width (60 jumps), with correct selected links and unobscured targets.
Phone English/Arabic screenshot sources, original-size/fit, return, Escape and
restored trigger focus were checked. Phone and laptop compositions were visually
inspected. The standalone Playwright suite was not run. Local preview only; no
landing deployment or real lead submission was made.

## Remove the second fixed bar

The owner reported that two stacked fixed bars consumed too much reading space.
The Platform section menu is now ordinary document content and scrolls away; only
the existing site header remains fixed. The menu uses native server-rendered anchor
links, with its scroll tracking and automatic horizontal panning removed. Section
offsets now account for just the main header. Card, text and screenshot sizing stay
unchanged: at 390px the workforce image remained 308px wide and its heading 27px;
at 1280px they remained approximately 656.93px and 33.28px respectively.

Build, TypeScript, changed-component lint and all 33 HTTP checks passed. Browser
checks covered both locales at 320, 390, 1024 and 1280px (eight layouts), with no
horizontal overflow. All 40 native section jumps kept their target below the main
header. Section-menu controls scrolled above the visible reading area. Phone and
laptop screenshots were saved. No public deployment.

## Story navigation button (reverted: owner meant the name)

The owner requested a more appealing treatment for the Watch the story link.
Its existing name and destination stay intact. Desktop navigation and the phone
menu now use a compact navy surface, cyan play icon and the supplied film's 9:52
duration. The decorative icon/duration do not change the accessible link name.
The header remains 88px and the desktop button 44px high. No extra navigation bar.

Production build including TypeScript, changed-source lint and 33 HTTP checks
passed. Browser checks found no overflow in both locales at 1024/1280px. The
390px phone menu link opened the film page, closed the menu and left autoplay off.
No public deployment.

## Story navigation wording

The owner clarified they wanted a more appealing name, rather than a visual
redesign. The previous navy/play/duration treatment was removed and the original
link styling restored. The selected name is “See Sparkle in Action” / “شوف سباركل
أوتو بيشتغل”, shared by the header, mobile menu and footer. The film URL and player
are unchanged. Production build including TypeScript, changed-source lint and 33
HTTP checks passed. Browser checks confirmed both labels fit at 1024px and the
390px mobile menu reached the film. The Playwright menu expectation was updated;
the standalone suite was not run. Local preview only.

## Approved film navigation name

The owner rejected “See Sparkle in Action” and explicitly approved “Why Sparkle?”
/ “ليه سباركل؟”. Applied that name to the shared navigation record, covering the
header, phone menu and footer, with the original link styling and film route.
Build including TypeScript, changed-source lint and 33 HTTP checks passed. Browser
inspection confirmed the English header/footer and Arabic phone-menu destination.
The existing Playwright menu expectation was updated, without running that suite.
Local preview only.

## Match the film page heading to its navigation name

The owner noted that selecting Why Sparkle still displayed an unrelated heading.
The film page H1, small page label and metadata title now also use “Why Sparkle?”
/ “ليه سباركل؟”. Film content, styling, route and playback are unchanged. Build
including TypeScript, changed-source lint and 33 HTTP checks passed. Browser
inspection confirmed matching visible headings and document titles in both locales.
Local preview only.

## Homepage primary booking wording

The owner requested the original “Book an Operations Review” wording on the main
homepage action. Added a localized hero-specific CTA record: “احجز مراجعة تشغيل”.
The existing contact destination and button styling are unchanged. This is scoped
to the hero action; other page names and form copy were not renamed. Build including
TypeScript, changed-source lint and 33 HTTP checks passed. Browser checks confirmed
both labels and contact links at 320/1280px without horizontal overflow. Local only.

## Header booking wording

The owner confirmed that the header button should also say “Book an Operations
Review” / “احجز مراجعة تشغيل”. It now uses the same localized record as the hero,
retaining its contact link and styling. Build including TypeScript, changed-source
lint and 33 HTTP checks passed. Both header labels fit at 1024px without overflow
or increasing the 88px header height. Local preview only.

## Consistent operations-review naming

The owner explicitly requested “Book an Operations Review” instead of “Book a demo”
on the booking page and all remaining booking buttons. The shared CTA now references
the hero's approved bilingual record. Contact navigation, H1/metadata, page label,
form heading, repeated CTAs and final submit all use that record. Contact intro and
receipt copy now describe arranging an operations review. Routes, layout, validation
and submission behavior are unchanged. No public deployment or test lead was sent.

Build including TypeScript, changed-source lint and all 33 HTTP checks passed.
Browser inspection of all 12 localized page routes found no old demo labels on
links, buttons or page/form headings. Both form submit labels were checked at 320px
after advancing the first step, with no overflow and without submitting the form.

## Homepage connected-platform overview

The owner requested a visual redesign of the flat four-column homepage section
on laptop and mobile. It now uses a two-line heading, short supporting introduction,
four white capability cards with semantic icons and concise supported summaries,
and a clear Explore the platform link. Cards retain the four real section anchors;
growth uses a shorter homepage title. WhatsApp/platform support and operating types
remain visible below. No fabricated screenshots, metrics or product capabilities.

The laptop layout has four equal cards, tablet two columns, and phones full-width
compact rows with 17px headings and a fully clickable surface. Changes are isolated
to HomePlatformOverview and its stylesheet; other pages and navigation are intact.
The section is a Server Component without new client JavaScript or dependencies.

Build including TypeScript, changed-source lint and all 33 HTTP checks passed.
Browser verification covered both locales at 320, 360, 390, 768, 1024 and 1440px
(12 layouts): four cards, intended column count and no document overflow. All eight
localized card destinations were clicked and reached the expected Platform anchors.
Laptop English and phone Arabic/English were visually inspected. Screenshots saved
for review. The standalone Playwright suite was not run. Local preview only.

## Homepage film button matches Why Sparkle

The owner identified the remaining “Watch the full story” hero button. It now
reads the approved film title record: “Why Sparkle?” / “ليه سباركل؟”, retaining its
play icon, styling and film destination. Build including TypeScript, changed-source
lint and 33 HTTP checks passed. Browser checks confirmed the English button opens
the matching H1 and the Arabic button uses the localized name. Local preview only.

## Owner-confirmed pricing — 1 November 2026

Source: unchanged owner-supplied table, copied to
`docs/references/owner-pricing-2026-11-01.jpg`, SHA-256
`954fb237a3e260e38e224fa473420b495d11c921717e09b4df9de469d47ef1bd`.
This supersedes the earlier pending-price state and subscription-only wording.

| EGP | Car wash | PPF centre |
|---|---:|---:|
| Pay once | 7,500 | 10,000 |
| Installments | 3 × 2,500 | 3 × 3,334 |
| Maintenance after 6 months, pay-once only | 350/month | 550/month |
| Monthly subscription, minimum 12 months | 800/month | 1,100/month |
| Additional branch, one-time | +3,500 | +5,000 |
| Additional branch, monthly maintenance | +150 | +250 |
| Additional branch, monthly subscription | +400 | +600 |
| Free trial | 14 days | 14 days |

Two explicit owner clarifications: keep PPF installments exactly 3 × EGP 3,334,
despite totaling EGP 10,002; and maintenance applies only to pay-once, while the
monthly subscription includes maintenance. The page visibly shows installment
totals so the EGP 2 difference is not hidden. No interest, discount, tax, source-code
ownership or cancellation claims were invented.

The Pricing page now compares the two business types with all terms visible in
both locales and without hiding either payment model behind a toggle. FAQs use the
same pricing records and acknowledge both one-time and subscription options. The
14-day trial is displayed as supplied. The existing route, operations-review CTA
and submission flow are retained; no payment processing was added.

Validation: production build including TypeScript, changed-source lint and all 33
HTTP checks passed. The HTTP verifier now asserts every rendered base price,
installment amount/total, branch fee, minimum term and maintenance inclusion in both
locales. Browser checks covered pricing at 320, 360, 390, 768, 1024 and 1440px in
Arabic/English (12 layouts), with two business cards, six branch-fee rows and no
document overflow. Phone Arabic/English and laptop pricing were visually inspected.
The standalone Playwright suite was not run. Local review only; no deployment.

## Pricing selector and mobile menu — 1 November 2026

This owner request supersedes the preceding simultaneous payment-model presentation.
An accessible button group now selects pay-once or monthly pricing, updating both
business cards together. Only the selected model's price and maintenance terms are
rendered. Additional branch recurring fees follow the selected payment model.
The source-table one-time branch fee remains present in the local review; whether
it also applies to monthly subscriptions is awaiting the owner's answer. No new
branch-fee condition has been confirmed. Resolve this before release.

The earlier invitation was located in `src/components/Commercial.tsx`:
“Not sure the system fits?” and “Try Sparkle Auto in your operation for 14 days,
then decide from real experience.” This copy is restored below the prices with
the approved Book an Operations Review CTA and an Arabic equivalent.

The mobile header displays the booking CTA where the language action previously
sat. Its menu now has five plain page links, a separate full-width booking action
below them, and language selection at the bottom. Number prefixes are removed.
At small phone widths the official logo image remains visible with a compact
header; the desktop header layout is unchanged. Native modal dismissal, focus
return, locale routes and the existing contact form are preserved.

Validation: isolated production build including TypeScript, changed-source ESLint,
33 HTTP contract checks and the asset integrity check passed. Browser checks covered
24 pricing states: both modes, both locales and 320/360/390/768/1024/1440px widths.
The displayed base amounts and single selected mode were correct without document
overflow. English/Arabic menus, a 320×568 menu, Escape/focus return and language
navigation were checked. The final production preview was checked for keyboard
mode switching, mobile menu layout and booking navigation to the matching contact
H1. No payment or real lead submission was made. Standalone Playwright suite not run.
Screenshots are saved in the task's outputs directory. Local review only.

## Expanded pricing and full-screen menu — 1 November 2026

The owner clarified that the free inclusion means the first six months of
maintenance. Both pay-once cards now highlight that exact offer, with the existing
EGP 350/550 monthly maintenance after six months. Monthly mode keeps maintenance
included throughout the active subscription and does not display a six-month
free-purchase offer. Base prices, installments and branch fees are unchanged.

Prices are larger and both cards include six concise capability groups sourced
from the maintained Platform content and FAQs: bookings/operations; workforce;
finance/inventory; customers/campaigns/loyalty; branded customer booking; and
WhatsApp/platform support. WhatsApp connection/activation requirements remain
explicit. No free messaging, free custom development or source-code ownership
was added.

The shared PageIntro label (“Sparkle Auto / page”) is removed, including the FAQ
page's separate label. Empty decorative blue-square eyebrow spans are removed
from the active shared and home components. Native disclosure triangles are
suppressed across the active site; pricing FAQ disclosures use accessible,
decorative plus/minus indicators matching the existing FAQ convention.

This supersedes the previous floating mobile menu: the menu now occupies the
entire viewport without rounded corners, margins or a window frame. Plain links
have larger text; booking and language controls sit below them. The close header
stays visible while the menu content can scroll on short screens. Menu arrow
decorations are removed. The desktop header and contact form are retained.

Validation: production build with TypeScript, changed-source ESLint, 33 HTTP
checks and asset integrity passed. HTTP checks now include the removed page
labels and free-maintenance statement in both purchase cards. Browser QA covered
24 pricing states (two modes × two locales × six widths: 320/360/390/768/1024/1440),
with correct prices, six capability groups per card, mode-appropriate maintenance
and no document overflow. Six portrait/tablet menu states matched the viewport
exactly; an 844×390 landscape menu had scrollable content and a fixed close header.
Native FAQ keyboard opening showed a minus indicator and an empty native marker.
The final production preview was inspected on laptop and Arabic/English phones;
both monthly prices and locale navigation were checked. Screenshots are saved in
the task outputs directory. Standalone Playwright suite not run. No deployment,
payment or real lead submission.

## Home cards match the booking button — 1 November 2026

The four clickable Home overview cards and Explore the platform link now use the
existing primary-button interaction: a navy 2px border and 5px hard shadow at rest;
hover translates 3px and compresses the shadow to 2px; pressing translates 4px
with a 1px shadow. This replaces the cards' former blue hover shadow. Content,
destinations and layouts are unchanged. Keyboard focus remains visible and the
reduced-motion rule disables transitions for both types of link.

Validation: production build including TypeScript and 33 HTTP checks passed.
Actual browser pointer states showed the expected navy shadow and 3px hover /
4px pressed translation. Twelve responsive layouts (both locales at
320/360/390/768/1024/1440px) retained four cards without document overflow. An
English card click reached Platform/operations; Arabic keyboard focus was visible
and Enter reached Platform/workforce. Laptop hover and Arabic phone layouts were
visually inspected and saved in task outputs. Standalone Playwright suite not run;
reduced-motion preference was not toggled in-browser. Local preview only.

## Why Sparkle player, shared press feedback and blue trial banner — 1 November 2026

The owner supplied references for the older complete video cover, its physical
play-button feedback, and the blue 14-day invitation. The Why Sparkle page now has
a compact introduction and a centered, viewport-height-aware 16:9 frame. The actual
film poster is retained and rendered with object-fit: contain. A large blue play
control compresses into its navy shadow. Starting reveals native controls and
moves focus to the video; native fullscreen and chapter selection remain available.
The video stays mounted, with preload=none and no autoplay. Starting failures keep
native controls available. No film, poster or customer screenshot was edited.

Header booking hover previously retained an overriding small shadow instead of
compressing it. Header actions now explicitly share the 5px rest / 2px hover / 1px
pressed shadows and 3px / 4px translations. Platform preview buttons apply that
same behavior to the complete screenshot and action strip, with visible focus and
reduced-motion support. All five screenshots still use their shared renderer.

The 14-day invitation now matches the supplied blue-banner direction, with a large
14, navy text and a white booking action. The approved Book an Operations Review
label and existing trial terms are retained. Phones use a two-column number/copy
composition with a full-width booking button. The #trial anchor supports review.

Validation: production build with TypeScript, changed-source ESLint, asset integrity
and all 33 HTTP contract checks passed. Browser QA covered 16 film layouts (both
locales at the six usual widths, plus 1280×720 and 1280×568), each showing the complete
frame within the viewport, object-fit: contain and an unloaded video before starting.
Another 24 pricing/Platform layouts passed overflow, blue/white banner and five-screen
checks. Actual pointer hovers on the header action, play control and screenshot frame
showed the matching navy 2px shadow and 3px translation. Screenshot enlargement opened
the correct English asset and Escape closed it. Native playback/pause, warm seeking,
fullscreen via F/Escape and final-production cold seeking to 03:40 were exercised;
the final video reported 592 seconds, native controls and a paused time of 220 seconds.
The final header booking click reached the localized contact page. Laptop and phone
film/banner screenshots were visually inspected and saved in task outputs.
Standalone Playwright suite not run. No publishing, payment or lead submission.

Skills applied: existing Sparkle landing, visual, media and quality contracts plus
the React component checklist. No generation, dependencies or subagents were used.

## Compact film page and borderless image viewer — 1 November 2026

The owner rejected the remaining empty space on Why Sparkle and the enlarged
screenshot's title, borders and Back/Actual size/Fit controls. The film page now
uses a shared two-column composition: intro and three short points with the review
CTA alongside the player. The separate closing CTA slab is removed from this page.
Phones follow intro → player → points/CTA in natural document order. The complete
film, native controls, poster, chapter shortcuts and approved CTA label are retained.
At the inspected English 1280×720 layout, document height changed from 1,431px to
919px, with the entire film frame visible.

Platform screenshots now open in a full-viewport navy viewer with no visible title,
window border, padding or bottom toolbar. The Close control floats above the image;
the dialog keeps its accessible name. Clicking the image itself zooms in/out, and
the zoomed viewport scrolls/pans without cropping inaccessible edges. Fitted images
preserve their original aspect ratio and use the available screen dimension. Escape,
background click and the close button return to the original trigger. The shared
Modal gains an optional hideTitle prop; menu and other dialog titles stay unchanged.
All five screenshots still use one renderer and unchanged locale-specific PNGs.

Validation: production build with TypeScript, changed-source ESLint, 33 HTTP checks
and asset integrity passed. Browser checks covered 16 film layouts (six widths × two
locales plus short laptop sizes), preserving full video fit, no initial media load,
booking links and no document overflow. Twelve viewer layouts (320/360/390/768/1024/
1440px, both locales) filled the viewport and fitted the complete image without a
visible title/toolbar. Direct zoom, keyboard zoom-out, Escape/focus return and backdrop
closing passed. Arabic/English phone zoom/pan checks confirmed the full original
1,279px image width remained reachable; zoomed grid alignment is explicitly reset
to prevent centered overflow from hiding an edge. Final production film playback
and pause reported native controls and a 592-second duration; direct image zoom was
also checked in the final build. Laptop film and viewer screenshots were inspected
and saved under task outputs. Standalone Playwright suite not run. Local preview only.

Skills applied: existing Sparkle landing/quality contracts, responsive RTL guidance
and the React component checklist. No image generation, dependencies or subagents.

## Get Started wording and restrained placement — 2 November 2026

The owner explicitly approved Get Started, with Arabic ابدأ الآن, and rejected
demo/review booking as the offered next step. This supersedes the older CTA label
in the installed copy guidance and historical entries. The central CTA now supplies
header/menu actions, page-end actions, contact title, form heading and final submit.
Legacy reusable button components also use that central record. Contact, confirmation,
FAQ and next-step copy describe follow-up/setup without offering a demo or a named
operations review. Internal component names and the existing API contract are retained.

The owner's follow-up also reduces repetition. Desktop keeps its header action;
mobile hides it in the header and offers it in the menu. The homepage hero button
is removed on both desktop and mobile, as explicitly clarified by the owner. Main
actions remain near page ends; the duplicate pricing-card actions and footer form
link are removed. The mobile header uses the full existing wordmark with its menu
button now that it has room. Other page layouts and interactive shadows are retained.

Validation: production builds including TypeScript, changed-source ESLint and 33 HTTP
checks passed. Browser checks covered 36 Home/pricing/contact layouts (both locales
at 320/360/390/768/1024/1440), confirming the new labels, intended header visibility,
no hero primary action and one main action per informational page without overflow.
Platform, film and FAQ were checked in both locales for the same single-action rule
and absence of old offer wording. The form's Continue step was exercised with local
placeholder values to verify the final Get Started submit label; no request was
submitted and the values were cleared. Mobile menu/navigation and final screenshots
are checked in the running preview. Standalone Playwright suite not run. No deployment.

## Home hero action restored — 2 November 2026

The owner's latest instruction restores the top homepage action, superseding its
removal in the preceding entry. Home again shows Get Started / ابدأ الآن in the hero
on both desktop and mobile. Other placement changes remain. Production build with
TypeScript, changed-source ESLint and 33 HTTP checks passed. Browser checks at 390px
and 1280px in both locales found one hero action with the correct localized label
and destination, without overflow. Its click reached the Get Started contact page.
The homepage was reopened for review. Standalone Playwright suite not run; no deployment.

## Concise pricing introduction — 2 November 2026

The owner requested removal of the extra pricing introduction. The business-type
description, Choose your payment option label, currency/trial caption and separate
payment-status sentence are removed in both locales. The functional pay-once/monthly
switch remains, followed directly by the two pricing cards. Prices, installment and
maintenance terms within the cards, the 14-day banner and the single final CTA are
unchanged. PageIntro accepts an omitted body so no empty paragraph is rendered.
Production build with TypeScript, changed-source lint and 33 HTTP checks passed.
Eight browser states (390/1280px, both locales and both payment modes) confirmed
the redundant text is absent, amounts remain correct and there is no document
overflow. Screenshot saved and the simplified page opened. Standalone Playwright
suite not run; local preview only.

## Direct pricing-card actions — 2 November 2026

The owner's latest request restores a direct form link inside each pricing card,
superseding the earlier removal. Choose Car Wash / Choose PPF, with Arabic
equivalents, sits below the price and maintenance terms in both payment modes.
The full-width buttons reuse the existing blue/navy physical interaction. Global
Get Started wording is unchanged. These links open the existing contact form;
they do not imply checkout or instant activation.

Validation: production build with TypeScript, changed-source lint and 33 HTTP
checks passed. Eight browser states (390/1280px, both locales and both payment
modes) confirmed the labels, destinations, prices and no horizontal overflow.
Direct English and Arabic clicks reached the localized form. Desktop and phone
screenshots were inspected. Standalone Playwright suite not run; local preview only.

## Pricing actions use Get Started — 2 November 2026

The owner approved Get Started for both pricing-card buttons, replacing the
business-specific Choose labels. Both now read the central bilingual CTA record
(ابدأ الآن in Arabic). Placement, payment modes and contact destinations remain.
Production build including TypeScript and changed-source lint passed. Browser
checks confirmed both labels in both English payment modes, Arabic equivalents
and navigation to the contact form. Screenshot inspected and saved. Local only.

## Centered actions without decorative arrows — 2 November 2026

The owner dislikes the diagonal arrow beside Get Started and the repeated arrows
on Home. Removed arrows from the shared contact action and both pricing buttons;
pricing labels are centered. Home overview links and cards also lose their arrows.
The phone cards now use two columns for icon and copy, without an empty arrow slot.
Existing destinations, keyboard semantics and physical hover/press effects remain.

Validation: production build including TypeScript, changed-component lint and eight
browser layouts (390/1280px, Home/pricing, both locales) passed. Checked centered
pricing text, absence of arrows in contact buttons/Home and no horizontal overflow.
Desktop pricing plus desktop/mobile Home screenshots were visually inspected.
No publishing; the public Vercel site remains unchanged.

## Platform introduction shortened — 2 November 2026

Removed the owner's quoted introductory paragraph and its Arabic equivalent.
The Platform heading now leads directly into section navigation. Production build
with TypeScript and component lint passed; browser inspection confirmed no empty
intro paragraph and the simplified layout. Local preview updated; no deployment.

## Form problem picker refreshed — 2 November 2026

Replaced the browser's native Main problem to solve select popup with a styled
select-only combobox. The existing eight localized choices and submitted values
remain. Its rounded in-flow menu has a constrained scroll area, clear selected
checkmark and readable wrapping, without overlapping page navigation. The trigger
supports arrow keys, Home/End, Enter/Space, type-ahead, Escape, Tab and outside
dismissal. Focus stays on the labeled trigger; active/selected options and required
errors are exposed semantically. Selection clears its required error and survives
Back/Continue. No request was submitted during UI verification.

Validation: production build with TypeScript and changed-component lint passed.
Browser checks covered pointer selection in both locales at 320/390/1280px without
document or menu horizontal overflow. Keyboard selection, type-ahead, cancellation,
focus on required error, error recovery, retained choice and dismissal were checked.
Desktop/phone screenshots were inspected. Screen-reader audit and the standalone
Playwright suite were not run. Existing form endpoint and other fields are unchanged.
Skills: existing Sparkle contracts, inclusive-accessibility-design and React checklist.
Local preview only; no deployment or new dependencies.

## Hero heading clearance restored — 2 November 2026

The shared page heading reset had overridden the hero's bottom margin, placing
the paragraph against the Arabic headline descenders. A scoped hero rule restores
24px of separation in both locales. Copy, headline sizes and source artwork remain.
Production build with TypeScript passed; ten browser layouts (320/390/768/1280/
1440px, both locales) confirmed the 24px gap and no horizontal overflow. Desktop
and phone Arabic views were inspected. Local preview only; no deployment.

## Remaining inputs

Monthly applicability of the one-time additional-branch fee; reviewed timed video captions; receiver/deployment configuration verification before release. Publish only within an explicit release request.

Skills used: Sparkle landing director, content information design, bilingual conversion, project quality gates and visual contract, Vercel React checklist and verification, plus browser inspection. No image generation or subagents were used.
