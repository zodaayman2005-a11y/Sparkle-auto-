CORE MODULE 06 — QUALITY AND FAILURE RECOVERY

Quality gates, failure recovery, and completion

Review at three levels

Asset: identity, anatomy/contact, meaning, lighting/material, alpha/crop, file quality.

Section: hierarchy, copy clearance, proof legibility, primary action, layout balance.

Page: rhythm, narrative, brand continuity, loading, languages, and working interaction.

Do not approve at the asset level and skip the other two.

Hard gates

Every applicable hard gate must pass. A high aesthetic score cannot offset failure.

|Gate                 |Evidence needed                                                                              |
|---------------------|---------------------------------------------------------------------------------------------|
|Scope and tool truth |Actual calls/files; no invented generation or unavailable-tool claims                        |
|Product truth        |Verified screenshot and claim sources; no fake features/metrics/testimonials                 |
|Identity             |Comparison to locked identity specification and accepted anchor, or openly provisional status|
|Web reality          |Essential text/CTA/form/nav are semantic working elements, not pixels                        |
|Accessibility        |Labels, headings, keyboard/focus, contrast, alt purpose, motion alternatives                 |
|Responsive           |Required viewport/locale compositions inspected; no accidental overflow/crop                 |
|Performance          |Delivery checked; tests and limits honestly reported; no avoidable huge assets               |
|Interaction states   |Relevant open/closed, loading/success/error/focus states actually work                       |
|Provenance/permission|Asset origin recorded; no unauthorized data/service/publishing                               |

A missing real product screenshot blocks that proof module’s final approval, not
all concept, art, or layout work. Mark the blocker, build a clearly nonfinal slot,
and keep working where safe. Never fill the slot with a fictional dashboard and
remove the warning to make the site look finished.

Visual rubric — project heuristic, not a measured user study

|Dimension                                   |Points|
|--------------------------------------------|-----:|
|Message/metaphor clarity                    |20    |
|Brand/world and recurring identity coherence|20    |
|Page/section composition and hierarchy      |20    |
|Simplicity, whitespace, and editorial rhythm|15    |
|Product proof presentation                  |10    |
|Responsive art and crop resilience          |10    |
|Material, light, alpha, and finish          |5     |
|Total                                       |100   |

Suggested release bar: 90/100, all hard gates passed, no critical/major issue open.
If the project already sets a stricter bar, use it. Score with specific evidence;
do not manufacture numbers from enthusiasm. Record agent assessment separately from
human approval. For a non-product page, redistribute the proof points to verified
service/content evidence and explain the adaptation.

Review matrix

Use the project matrix where present. Otherwise cover 1440, 1024, 768, 390, 360, and
320 CSS-pixel widths for overflow/reflow and representative visual inspection.
Cover each required locale; prioritize Arabic first for Sparkle. Test touch orientation
or other supported contexts when relevant, not as an empty checkbox.

For full-page screenshot comparisons, fix content, fonts, viewport, locale, and animation
state. Inspect the images yourself. Successful screenshot capture does not imply visual
success. Do not claim full accessibility from automated checks alone.

If the browser/test runner is unavailable, mark those rows not_run and identify the
smallest remaining validation step. Do not quietly replace an evidence requirement
with “the code looks responsive.”

Common failures and the smallest correct repair

|Symptom                                |Likely layer       |Correct response                                                            |
|---------------------------------------|-------------------|----------------------------------------------------------------------------|
|Picture feels random                   |Concept            |Rewrite visual verb/message; simplify metaphor                              |
|Character changes between sections     |Identity/production|Return to the accepted anchor and locked identity block; use a targeted edit|
|Too many stars/cards/splashes          |Art direction      |Remove nonessential objects, do not add new ones                            |
|Owner is a presenter everywhere        |Narrative          |Remove repeated appearances; assign real acting to story moments            |
|White box on blue background           |Export/alpha       |Inspect alpha; use supported matting or intentional opaque surface          |
|Beautiful art covers primary CTA       |Layout             |Repair layer/order/clearance, not the illustration style                    |
|UI unreadable on phone                 |Proof composition  |Use larger truthful crop/flat frame; reduce devices                         |
|Every section looks identical          |Page rhythm        |Change layout family/density, not just image order                          |
|Mobile contains giant empty padding    |Slot/crop          |Fix intrinsic art bounds and mobile layout                                  |
|Hand loses contact with prop           |Asset/layer plan   |Edit grip or keep coupled group together                                    |
|Brand blue text fails contrast         |Tokens             |Use an accessible palette pairing; log decision                             |
|Site slow from unused variants         |Delivery           |Select needed sources; reduce transfer, layers, and motion                  |
|Form displays success before submission|State logic        |Separate design states and real response behavior                           |
|Exported asset exists but not displayed|Integration        |Fix path/component/source selection before regeneration                     |

Stop rules

Stop when there is no unresolved important defect and the acceptance evidence is
complete. Do not keep regenerating for novelty. Stop and report a concrete blocker
when permission, quota, source truth, or identity cannot be resolved safely.

If the planned revision budget expires, do not relabel failures as approved. Report
which gates remain open and preserve the best usable version for the next decision.

Delivery report

State what changed; what was generated/reused/coded; where the files are; which
anchors/assets were used; which sizes/locales/states were actually tested; unresolved
facts or blockers; and whether human approval or release remains pending.

Do not say “pixel perfect,” “fully accessible,” “production ready,” or “identical
character” without the corresponding scope and evidence. Avoid invented improvement
percentages. A site can be visually stronger without a verified conversion uplift.

────────

