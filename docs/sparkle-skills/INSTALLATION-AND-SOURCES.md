# Installation provenance and limits

Package authored 2026-09-06 for the user's project; not a public plugin release.

Source-derived material: the supplied HDI-OS v1.2.0 archive (56 Markdown files), the
supplied hdi-web-visual-art-director v1.0.1 text, and the previously delivered master plan.
The archive's 260 Source-labelled components are split without summarizing their body;
only consolidation heading/separator whitespace is removed. The two standalone archive
entry docs are preserved. The source preamble and 15 visual segments concatenate to the
original visual file exactly. The full master-plan bytes are retained. No source font,
image, video, live repository, hdi.py executable or external tool entitlement is included.

New material: the deterministic installer; concise native skill wrappers; five page
adapters; routing; manifests; source map; installation tests; scope and safety notes.
New adapters are not represented as original HDI documents or new user approvals.

Official packaging facts checked during preparation:
Codex repository skills use .agents/skills with a SKILL.md containing name and description.
Skills load progressively; a large initial list can be shortened. Native file installation
is distinct from checking actual discovery. A name collision does not merge workflows.
Source: https://developers.openai.com/codex/build-skills

Project instructions are resolved through an instruction chain; AGENTS.override.md can
replace AGENTS.md at the same level. Add a small scoped routing block to the effective
project instructions without erasing existing content. New guidance needs a fresh-run
verification, not a claim that the already-running session reloaded it automatically.
Source: https://developers.openai.com/codex/agent-configuration/agents-md

These official documents inform packaging only, not product facts. Historical technical
commands inside archived HDI documents are preserved as source examples and must not be
run merely because they appear. Runtime contracts win over remembered tool details.

## Existing skills and conflicts
The bundled script never overwrites an existing different file. A conflict in one skill
retains the entire existing skill and stages the complete incoming skill outside the
active skills tree, with a report. Inspect all currently discovered/global/legacy skills
before resolving aliases or duplicate names. Never delete a global skill to simplify setup.
The script does not edit AGENTS automatically. Merge AGENTS.snippet.md after reviewing the
effective instruction scope, keep a backup and preserve bytes outside the managed block.
An existing identical block is left unchanged; a conflicting block is reviewed, not erased.

## Application-code boundary and rollback
Installation writes only package skills/docs and the separately reviewed routing block.
No package.json, lockfile, application source, env, model/provider configuration or route
is edited. No network calls, shell commands from source, dependency installation, generation
or deployment are part of the extraction script. For rollback, remove only files recorded
as newly created whose hashes still match this package; preserve modified and pre-existing
files. Revert only the exact inserted routing block after review, not the full AGENTS file.
