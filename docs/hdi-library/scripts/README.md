# HDI-OS Scripts

All Python utilities use the standard library only.

## Validate the source bundle

```bash
python scripts/validate_bundle.py
```

## Install skills and support files

```bash
python scripts/install.py --help
```

The installer skips existing files unless `--force` is supplied and supports `--dry-run`.

## Initialize project truth files

```bash
python scripts/init_project.py \
  --project-dir "/path/to/project" \
  --name "Project Name" \
  --owner "Hyzex"
```

## Create a structured reference card

```bash
python scripts/new_reference.py \
  --id ref-editorial-001 \
  --title "Editorial hierarchy reference" \
  --location "https://example.com" \
  --surface landing-page \
  --why "Strong type-led hierarchy" \
  --tag editorial \
  --tag typography
```

The generated card is intentionally incomplete until a designer or design agent performs the actual analysis.

## Record a design preference

```bash
python scripts/record_preference.py \
  --scope brand \
  --brand "Sparkle Auto" \
  --project-type landing-page \
  --candidate editorial-product-proof \
  --candidate generic-gradient-saas \
  --selected editorial-product-proof \
  --rejected generic-gradient-saas \
  --reason "Clearer real product proof" \
  --reason "More distinctive Arabic hierarchy" \
  --avoid "Tiny decorative screenshots"
```

## Enforce the design score gate

Copy `rubrics/review-input.template.json`, fill real hard-gate results and category points, then run:

```bash
python scripts/score_review.py path/to/review.json
```

The command exits `0` only when every hard gate passes, the total reaches the threshold, each category minimum passes, and no blocking or major findings remain.

## Rebuild the bundle manifest

```bash
python scripts/build_manifest.py
```


## Initialize a web design research session

```bash
python scripts/init_research.py \
  --project-dir "/path/to/project" \
  --title "Current category and inspiration research" \
  --surface landing-page \
  --industry "service software" \
  --audience "business owner" \
  --market Egypt \
  --language ar-EG \
  --depth standard \
  --question "Which proof structures help the audience trust the product?"
```

## Record a researched web source

```bash
python scripts/record_source.py \
  --session-dir "/path/to/project/research/current-category-and-inspiration-research" \
  --url "https://example.com" \
  --title "Observed experience" \
  --publisher "Example" \
  --type live-product \
  --tier A \
  --role product-behavior \
  --why "Direct journey evidence" \
  --observation "Observed behavior" \
  --principle "Transferable principle" \
  --do-not-copy "Brand expression and exact UI" \
  --limitation "Public logged-out state only"
```

## Validate the research evidence set

```bash
python scripts/validate_research.py \
  --session-dir "/path/to/project/research/current-category-and-inspiration-research"
```

The validator checks deterministic structure, provenance, diversity floors, source concentration, Tier-A coverage, accepted Tier-D misuse, and safe browsing fields. It does not replace human or agent judgment about the truth of observations.
