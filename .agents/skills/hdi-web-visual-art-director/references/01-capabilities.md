CORE MODULE 01 — CAPABILITIES AND EXECUTION

Capability preflight and execution contract

Observe the environment, not an imagined one

Discover the currently exposed image-generation tool or installed image-generation
skill. Read its instructions and supported input/output contract. A host may expose
native image generation, a script-backed skill, a connector, or none of these. This
skill must work with the actual path rather than assume the names are universal.

Official capability context is listed in 09-sources.md (O2/O3). Runtime evidence wins
over a remembered model name, screenshot, old command, or this package’s date.

Record this small table before the first production batch:

|Capability               |Status                                 |Evidence / consequence                                                                                                   |
|-------------------------|---------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
|New image generation     |available / blocked / absent / untested|Tool or installed skill actually discovered                                                                              |
|Identity anchor input    |same                                   |Optional but useful for recurring identity; may come from an approved project asset or a newly accepted calibration asset|
|Image editing / masks    |same                                   |Use only supported mechanisms                                                                                            |
|Alpha output             |same                                   |Verify actual alpha, not just option presence                                                                            |
|Supported sizes / formats|observed set or unknown                |Do not guess an API argument                                                                                             |
|Local output access      |yes / asset handle only / unknown      |How files enter the project                                                                                              |
|Image inspection         |available / unavailable                |Visual QA route                                                                                                          |
|Browser execution/capture|available / blocked / untested         |Website QA route                                                                                                         |
|Budget / permissions     |explicit / existing / unknown          |No new provider/spend without permission                                                                                 |

Do not generate a throwaway test image just to test permissions when a needed
calibration asset can serve the same purpose after planning.

Execution order

1. Prefer the available native image workflow or installed generation skill suited to the task.
2. Pass the brief and any real approved project assets or accepted calibration anchor according to the tool’s actual contract. Do not require the user to supply an image if the project can establish its own anchor.
3. Respect exposed size, alpha, quality, file-input, and channel requirements.
4. Inspect the returned image/file; record only metadata the tool exposes.
5. Copy/export the actual result into the working project without inventing its path.
6. Confirm the file can be decoded before referring to it in the website.
7. Record failures truthfully and resolve only the relevant blocker.

Some environments infer image instructions from conversation context; others accept
an explicit prompt argument. Do not assume a field named prompt is writable. Never
print a JSON tool payload as if it were a generated image.

An asset handle is not automatically a local filesystem path. A filename in chat is not proof the
bytes exist. Resolve any asset before editing it. When a connector or generation tool returns
a supported file handle, use that exact handle in the next compatible action.

Failures and fallbacks

|Failure                              |Correct action                                                                                                                                               |Incorrect action                                                   |
|-------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
|Tool unavailable                     |Inspect available integrations/skills; report the concrete absence and request the smallest setup step if needed                                             |Claim “Codex cannot generate images” universally                   |
|Missing approved identity asset      |Search known project paths; if none exists, create a clearly labeled calibration asset from the locked identity brief and validate it before batch generation|Invent a face and claim it is already approved                     |
|Quota or authorization               |Report; stop further generation attempts; continue independent code work                                                                                     |Auto-switch to paid API/third party                                |
|Transient tool error                 |Use a bounded retry compatible with the tool                                                                                                                 |Run an unlimited retry loop                                        |
|No native transparency               |Use supported matting/editing on approved art or a deliberately opaque composition                                                                           |Call a white or checkerboard background transparent                |
|No reusable identity anchor supported|Reuse approved original assets where possible; otherwise disclose continuity limits and reduce identity-sensitive variation                                  |Promise mathematically identical recurring identity from text alone|
|No browser access                    |Deliver assets/code and mark browser gates not run                                                                                                           |Claim “responsive tested” from source inspection                   |
|No filesystem write                  |Deliver supported files/asset handles with an explicit integration handoff                                                                                   |Claim the repository was updated                                   |

Do not ask the user to reveal secrets in chat. Credentials, when explicitly required
and authorized, are configured through the environment’s supported secret mechanism.

Scope discipline

A request to create/install this skill does not authorize generating a website.
A request to plan assets does not authorize generation. An execution request normally
authorizes the relevant existing tool use, not unknown paid services, publishing,
production-data exposure, or changing commercial promises.

If actual screenshots contain private data, prefer approved demo/test captures from
the real product. Deterministic, visibly documented redaction can protect privacy;
generative repainting of product data cannot be called authentic proof.

Honest status vocabulary

Use planned, blocked, generated, rejected, agent_selected, user_approved,
integrated, qa_passed, and released deliberately. Generated requires a returned
asset. User_approved requires a user approval record. Released requires the release
action and permission. Do not collapse these states into “done.”

────────

