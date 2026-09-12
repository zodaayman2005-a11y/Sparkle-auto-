# Skill Evaluation Runbook

## Purpose

A skill is useful only if it improves observable behavior. Compare the same model and task with and without the skill in a clean context.

## A/B protocol

### Run A — Baseline

- Use a clean project copy.
- Do not mention or expose the target skill.
- Give the exact case prompt and fixtures.
- Record output, commands, tokens/time when available, and screenshots.

### Run B — Skill-assisted

- Reset to the same clean project copy.
- Expose and explicitly activate the target skill.
- Give the exact same prompt and fixtures.
- Record the same evidence.

### Optional Run C — Implicit routing

- Expose the skill but do not name it.
- Test whether the description triggers correctly.

## Evaluate four dimensions

1. **Outcome:** Did the requested artifact or decision succeed?
2. **Process:** Did the agent follow the intended gates and use the right evidence?
3. **Style/quality:** Did the result meet design and UX criteria?
4. **Efficiency:** Did the skill reduce thrashing without unacceptable context or execution cost?

## Scoring

- Hard assertions are pass/fail.
- Quality assertions use 0–2: absent, partial, strong.
- Compare pairwise before assigning an overall score.
- Record regressions as seriously as improvements.

## Keep or revise a skill

Keep the change when it improves target outcomes across representative cases and does not create broad over-triggering or harmful rigidity. Revise descriptions when activation is wrong; revise instructions when execution is wrong; move heavy content to references when context cost is high.

## Evidence folder

For each run store:

```text
evals/results/<case-id>/<date>/
├── baseline/
├── skill-assisted/
├── implicit-routing/
├── comparison.md
└── screenshots/
```

## v1.2 coverage rule

Every v1.2 specialist skill has three cases:

- **Positive:** intended complete use.
- **Boundary:** proves the skill does not over-trigger or create unnecessary process.
- **Adversarial:** rejects invalid shortcuts while preserving a practical path to the legitimate objective.

A skill is not considered mature merely because its positive case passes. Boundary and adversarial regressions can make the overall agent worse.
