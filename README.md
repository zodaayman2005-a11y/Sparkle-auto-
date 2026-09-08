# Sparkle Auto — landing page

Arabic-first (RTL) landing page for Sparkle Auto, with a complete, independently
composed English (LTR) version. No build step, no framework, no dependencies —
open `index.html` or serve the folder.

```bash
npx http-server . -p 8080     # or: python3 -m http.server 8080
```

## Structure

```
index.html              markup, Arabic as the default composition
assets/css/tokens.css   brand tokens (palette, borders, shadows, spacing, grid)
assets/css/styles.css   components
assets/js/i18n.js       ar + en dictionaries, key-for-key
assets/js/main.js       language, drawer, reveal, accordion, form lifecycle
.claude/skills/         the HDI design skills this page was built against
CONTENT-TODO.md         what real data is still needed before publishing
```

## Design system

Built against `.claude/skills/hdi-web-visual-art-director` (the Sparkle Auto brand
contract) and `.claude/skills/hdi-os` (the generic design library). The rules that
shape everything here:

- **Palette** `#01A2FF` blue · `#0C264B` dark blue · `#03132E` navy ·
  `#91B1D8` soft blue · `#FFFFFF` · `#F2FAFF` derived quiet surface.
  No other hues. Red is reserved for genuine errors.
- **Contrast** white on `#01A2FF` is ~2.76:1 and fails, so every blue surface
  carries **navy** text (~6.70:1). Body copy and links use navy / dark blue.
- **Surfaces** white by default, pale blue for rhythm, deep navy reserved for the
  closing CTA and footer. Not a dark site.
- **Physical style** 2px navy borders, hard offset shadows on a 3/5/7px scale,
  corners 8/12/18/24px.
- **Grid** 1240px max content, 12/8/4 columns, 390px mobile art-direction size.
- **Motion** micro 160ms, entrances 420ms. `prefers-reduced-motion` drops all of it.
- **Truth** no invented price, metric, testimonial or product screenshot — see
  `CONTENT-TODO.md`.

## Language

The toggle in the header swaps `lang`, `dir` and every string, and remembers the
choice in `localStorage`. English is written for English, not translated
word-for-word: its own headline breaks, its own measure, its own CTA phrasing.
Arabic is the default and the primary composition.

## Accessibility

Semantic landmarks and heading order · skip link · visible focus rings never
removed · 44px+ touch targets · labels always visible · errors announced as text
plus state, never colour alone · `aria-live` form status · full keyboard operation
for the drawer (Escape closes) and the accordion · reduced-motion honoured.

## Before publishing

Read `CONTENT-TODO.md`. Every dashed marker on the page is a real fact that has to
come from a maintained source, and the form needs an endpoint before it can confirm
anything to anyone.
