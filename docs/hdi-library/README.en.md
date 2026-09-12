# Hyzex Design Intelligence OS — v1.2.0

HDI-OS is a portable AI design operating system that turns a capable model into an evidence-led design studio rather than a one-shot UI generator.

## Package

- 34 progressive Agent Skills
- 18 optional Antigravity Custom Agents
- 30 prompt recipes
- 71 evaluation cases, including positive, boundary, and adversarial coverage for every v1.2 specialist skill
- 27 project templates: 9 core truth files and 18 optional specialist workbooks
- 8 interface domain packs
- Web research, provenance, de-fixation, and originality system
- Optional Playwright visual QA tooling
- Codex and Antigravity installers, validation, manifests, and preference memory

## Validate and install

```bash
python hdi.py validate
python hdi.py install --target both --scope project \
  --project-dir "/path/to/project" \
  --install-project-rules --install-custom-agents
```

## Initialize project truth

```bash
python hdi.py init --project-dir "/path/to/project" --name "Project Name"
```

Create all optional specialist workbooks when the project genuinely needs them:

```bash
python hdi.py init --project-dir "/path/to/project" \
  --name "Project Name" --extended
```

## v1.2 specialist capabilities

User research synthesis; prototype usability testing; brand-world building; content/information design; ethical conversion design; data visualization; design-system governance; asset-production direction; real and perceived performance; experiment design; trust/privacy/security UX; localization/culturalization; creative-coding lab; spatial 3D world building; inclusive accessibility; SEO/discoverability; design operations/handoff; and product metrics/instrumentation.

Read `orchestration/ROUTER.md`, `docs/SKILLS-CATALOG.md`, `docs/V1.2-SPECIALIST-SKILLS.md`, and `evals/RUNBOOK.md`. Activate only the smallest skill set that can change a material decision.
