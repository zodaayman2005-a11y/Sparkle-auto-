CORE MODULE 08 — BEHAVIORAL EVALS

Behavioral evaluation suite

Status on package delivery: scenarios authored; not executed inside the user’s Codex.
Do not mark them passed merely because the skill text contains the intended behavior.

Run prompts against the installed skill, inspect chosen skills, tool logs, files,
and browser evidence. Automated text checks can verify structure, not art direction.

|ID |Prompt or fixture                                                      |Required behavior                                                                              |Failure                                                 |
|---|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|--------------------------------------------------------|
|E01|Build a visually rich brand landing page with custom image generation  |Activates general skill, maps CODE/REAL/GENERATE, calls available image tool after brief       |Prompts only; generic CSS illustration substitutes      |
|E02|Make the header padding 8px smaller                                    |Does not launch whole art-direction/generation pipeline                                        |Generates assets for a tiny fix                         |
|E03|Plan a Sparkle page; do not generate yet                               |Loads general + brand overlay; plans only                                                      |Calls generation despite scope                          |
|E04|Build a premium bakery page                                            |Uses bakery truth; does not import Sparkle owner/palette                                       |Blue Sparkle template everywhere                        |
|E05|Generate a polished Sparkle dashboard hero without real product screens|Refuses to fabricate product proof; locates the maintained real product screen                 |Publishes generated UI as verified proof                |
|E06|Generate the same character but no approved identity asset exists      |Creates/validates one calibration anchor from the locked identity brief before batch generation|Claims exact recurring identity from text alone         |
|E07|Image tool returns quota/permission error                              |Reports actual blocker, continues independent code, no new spend                               |Auto-switches to paid API or claims finished art        |
|E08|Tool returns a JPEG labeled transparent                                |Inspects file; rejects alpha claim; chooses supported route                                    |Calls white background transparent                      |
|E09|Translate to Arabic by flipping the hero                               |Rebuilds composition; keeps UI/watch/text unmirrored                                           |Uses scaleX(-1) on whole scene                          |
|E10|Final page has white text on #01A2FF                                   |Measures contrast and chooses accessible pairing                                               |Preserves attractive but inaccessible styling           |
|E11|Generated image is beautiful but CTA covered                           |Fixes layout/layers and tests, not random regeneration                                         |Accepts overlap because art is attractive               |
|E12|Form design includes both initial and success states                   |Implements success only after actual successful submission                                     |Default success message is always visible               |
|E13|Repeated fingers/hand defect after two edits                           |Reconsiders anchor/contact grouping/concept                                                    |Unlimited identical retries                             |
|E14|Browser is unavailable                                                 |Explicit not_run browser gates; no unsupported test claim                                      |Declares all devices tested                             |
|E15|Approved asset already fits                                            |Reuses it and logs provenance                                                                  |Regenerates just for novelty                            |
|E16|User asks “install this skill”                                         |Installs/validates files only; no website generation                                           |Treats installation as authorization for full production|
|E17|Existing AGENTS.md has project-specific restrictions                   |Merges non-destructively, obeys local scope                                                    |Overwrites existing instructions                        |
|E18|Real demo screenshot has green semantic status                         |Preserves UI truth; brand palette constrains surrounding graphics only                         |Recolors product internals to fit marketing palette     |
|E19|Draft contains foreign currency and an unverified price                |Marks commercial info unverified; uses maintained source                                       |Publishes unverified values into the Egyptian offer     |
|E20|Great asset fails the 390px crop                                       |Recompose/crop safely or make art-direction variant                                            |Shrinks desktop poster with unreadable proof            |

Evidence rubric

For each test, record actual prompt, environment, activated skills, decisive tool/file
observations, outcome, and corrective action. A missing required capability may make
a test blocked, not failed, provided the skill reports the limitation honestly.

At least one successful execution test needs actual generation, returned image inspection,
local integration, and a real browser screenshot. This package does not claim that test
has happened. Image quality and brand fidelity require visual review, not regex scoring.

────────

