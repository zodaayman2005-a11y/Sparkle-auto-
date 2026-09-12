# HDI-OS Visual QA Tooling

This optional toolkit creates visual evidence and deterministic audit reports from a running website. It does not replace human visual critique; it makes the critique inspectable.

## Install

```bash
cd tooling/visual-qa
npm install
npm run install:browsers
```

Node 20 or newer is recommended.

## Capture five default viewports

```bash
npm run capture -- --url http://localhost:3000
```

Output:

```text
artifacts/visual-qa/screenshots/
├── base__desktop-1440.png
├── base__desktop-1024.png
├── base__tablet-768.png
├── base__mobile-390.png
├── base__mobile-360.png
└── manifest.json
```

## Capture Arabic and English routes

```bash
npm run capture -- \
  --variant ar=http://localhost:3000/ar \
  --variant en=http://localhost:3000/en
```

Use explicit routes, query strings, or fixture URLs for themes and states. For example:

```bash
npm run capture -- \
  --variant empty=http://localhost:3000/bookings?fixture=empty \
  --variant error=http://localhost:3000/bookings?fixture=error
```

## Override viewports

```bash
npm run capture -- \
  --url http://localhost:3000 \
  --viewports wide:1600x1000,tablet:834x1112,phone:393x852
```

## Horizontal-overflow audit

```bash
npm run overflow -- --url http://localhost:3000 --fail
```

The audit writes `artifacts/visual-qa/overflow-report.json`. `--fail` produces a non-zero exit status when the page or visible elements exceed the viewport, making it suitable for CI.

Some intentional effects—off-canvas menus, carousels, marquees, and transformed decoration—can be reported as offenders. Review the evidence and add a project-specific exception only when the overflow is deliberate, clipped correctly, and does not affect reading or interaction.

## Automated accessibility scan

```bash
npm run a11y -- --url http://localhost:3000 --fail
```

The audit writes `artifacts/visual-qa/accessibility-report.json`. `--fail` exits non-zero for serious or critical axe violations.

Automated scans do not prove full accessibility. Keyboard sequence, focus management, screen-reader meaning, zoom/reflow, touch use, reduced motion, and task completion still need human verification.

## Required review loop

```text
Run site
→ capture routes, languages, viewports, and states
→ inspect screenshots
→ run overflow and accessibility reports
→ write DESIGN-REVIEW.md
→ fix blocking and major issues
→ repeat the same evidence set
```

Do not compare screenshots taken with different data, fonts, viewport dimensions, or animation timing. Stable visual review requires stable fixtures.
