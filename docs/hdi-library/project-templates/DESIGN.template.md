---
version: alpha
name: "{{PROJECT_NAME}} Design System"
description: "Project-specific visual identity and interface contract. Replace scaffold values before production approval."
colors:
  primary: "#1D4ED8"
  secondary: "#0F172A"
  accent: "#EA580C"
  background: "#FAFAF9"
  surface: "#FFFFFF"
  foreground: "#111827"
  muted: "#64748B"
  border: "#CBD5E1"
  success: "#15803D"
  warning: "#B45309"
  danger: "#B91C1C"
typography:
  display-large:
    fontFamily: "system-ui"
    fontSize: "4rem"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  heading-large:
    fontFamily: "system-ui"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  heading-medium:
    fontFamily: "system-ui"
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  body-large:
    fontFamily: "system-ui"
    fontSize: "1.125rem"
    fontWeight: 450
    lineHeight: 1.6
    letterSpacing: "0em"
  body:
    fontFamily: "system-ui"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.55
    letterSpacing: "0em"
  label:
    fontFamily: "system-ui"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.01em"
spacing:
  0: "0px"
  1: "0.25rem"
  2: "0.5rem"
  3: "0.75rem"
  4: "1rem"
  5: "1.5rem"
  6: "2rem"
  7: "3rem"
  8: "4.5rem"
  9: "6rem"
  10: "9rem"
rounded:
  none: "0px"
  small: "0.375rem"
  medium: "0.75rem"
  large: "1.25rem"
  full: "999px"
components:
  button-primary:
    background: "{colors.primary}"
    foreground: "{colors.surface}"
    radius: "{rounded.medium}"
  card:
    background: "{colors.surface}"
    foreground: "{colors.foreground}"
    border: "{colors.border}"
    radius: "{rounded.large}"
---

# {{PROJECT_NAME}} Design System

> The values above are a neutral scaffold, not an approved brand identity. Replace them from real brand decisions before production. Tokens are normative; prose explains how and why to use them.

## Overview

### Design concept

[One precise sentence describing the visual world and its relationship to the product.]

### Experience character

- Desired emotional response:
- Visual ambition: restrained / expressive / experimental
- Density: low / balanced / high
- Dominant mode: light / dark / adaptive
- Primary surface: marketing / product / mobile / other

### Conceptual references

[List cultural, material, editorial, architectural, industrial, or product references. Avoid vague adjectives such as “modern and premium” without a concrete visual model.]

## Colors

### Roles

| Token | Role | Allowed uses | Avoid |
|---|---|---|---|
| primary |  |  |  |
| secondary |  |  |  |
| accent |  |  |  |
| background |  |  |  |
| surface |  |  |  |
| foreground |  |  |  |
| muted |  |  |  |
| semantic colors |  |  |  |

### Color behavior

- Saturation budget:
- Large-area colors:
- Accent frequency:
- Dark-mode strategy:
- Contrast policy:
- Image/color interaction:

## Typography

### Font families

| Script/role | Family | Fallbacks | License/source | Reason |
|---|---|---|---|---|
| Arabic display |  |  |  |  |
| Arabic body |  |  |  |  |
| Latin display |  |  |  |  |
| Latin body |  |  |  |  |
| Numerals/data |  |  |  |  |

### Type behavior

- Display voice:
- Body measure:
- Heading wrapping:
- Arabic tracking rule: do not apply Latin-style letter spacing to Arabic text.
- Mixed-script behavior:
- Numeral style:
- Responsive scaling:

## Layout

### Grid

- Maximum content width:
- Desktop columns:
- Tablet behavior:
- Mobile behavior:
- Gutter system:
- Breakout rules:

### Composition

- Primary focal strategy:
- Alignment logic:
- Whitespace rhythm:
- Controlled asymmetry rules:
- Section pacing:
- Density transitions:

## Elevation & Depth

- Depth model: flat / borders / hard shadows / soft shadows / layered / spatial
- Shadow levels:
- Overlay behavior:
- Image depth:
- 3D or perspective rules:

## Shapes

- Radius logic:
- Border weight:
- Container geometry:
- Icon geometry:
- Decorative shape logic:

Avoid assigning the same radius and silhouette to every object unless that repetition is an intentional brand device.

## Components

### Principles

- Behavior primitives:
- Visual ownership:
- Density variants:
- State requirements:
- Composition API:

### Required component families

| Family | Variants | Required states | Responsive behavior | RTL notes |
|---|---|---|---|---|
| Buttons |  |  |  |  |
| Inputs |  |  |  |  |
| Navigation |  |  |  |  |
| Cards/modules |  |  |  |  |
| Feedback |  |  |  |  |
| Data display |  |  |  |  |

## Imagery & Iconography

- Photography direction:
- Illustration direction:
- 3D direction:
- Product screenshot rules:
- Icon family:
- Stroke/fill behavior:
- AI-generated asset consistency requirements:
- Forbidden imagery patterns:

## Motion

`MOTION.md` is the detailed source of truth. Summarize only the visual relationship here:

- Motion personality:
- Dominant easing character:
- Spatial continuity rules:
- Scroll behavior:
- Reduced-motion relationship:

## Responsive & Bidirectional Design

- Content-driven breakpoints:
- Reorder/collapse/substitute rules:
- Arabic composition behavior:
- English composition behavior:
- Direction-aware icons and motion:
- Mixed-direction data:
- Translation expansion budget:

## Do's and Don'ts

### Do

- [Rule tied to the concept]
- [Rule tied to readability or task speed]
- [Rule tied to brand distinctiveness]

### Don't

- Do not use generic visual trends without a concept-level reason.
- Do not invent product screens, metrics, testimonials, or claims.
- Do not mechanically shrink desktop for mobile.
- Do not mechanically mirror every visual for RTL.
- Do not animate every element.
- [Project-specific prohibition]
