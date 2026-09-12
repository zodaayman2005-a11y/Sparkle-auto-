# Domain Pack — SaaS Product and Dashboard

## Primary outcome

Help users understand system state, act efficiently, avoid mistakes, and recover safely during repeated operational use.

## Dominant priorities

1. Task speed and accuracy.
2. Scope and status clarity.
3. Information hierarchy and density.
4. Predictable navigation.
5. Complete states and permissions.
6. Accessibility and keyboard use.
7. Responsive transformation.
8. Maintainable component behavior.

## Architecture

- Organize by user jobs and mental models, not database tables.
- Keep account, branch, date, role, and filter scope visible.
- Distinguish overview, work queue, detail, configuration, and reporting.
- Avoid destinations with overlapping names or responsibilities.
- Make high-frequency tasks reachable with few decisions.

## Dashboard rules

- A dashboard answers specific user questions; it is not a collection of metrics.
- Prioritize attention, exceptions, and next actions.
- Use charts only when they improve comparison, trend, distribution, or relationship understanding.
- Align numbers and units for scanning.
- Avoid a card for every metric.
- Keep filters near the data they affect.

## Data and states

Required where relevant:

- Loading.
- Empty first-use.
- Empty filtered.
- Partial data.
- Success.
- Recoverable and blocking errors.
- Stale/offline.
- Permission denied.
- Destructive confirmation.
- Undo or recovery.

## Forms and setup

- Group settings by user intent.
- Explain consequences near controls.
- Use sensible defaults from real product rules.
- Preserve work after errors.
- Review consequential changes.

## Visual behavior

- Functional hierarchy before spectacle.
- Use density variants intentionally.
- Strong contrast indicates action, status, or attention.
- Maintain a recognizable brand without sacrificing scanability.
- Avoid marketing-style floating cards and oversized headlines in core work screens.

## Mobile

- Identify mobile-critical jobs explicitly.
- Transform tables according to task, not automatically into cards.
- Preserve active context and urgent actions.
- Avoid hiding essential capabilities behind an unstructured menu.

## Common failures

- Dashboard designed as a portfolio screenshot.
- Too many equal cards.
- Hidden scope and filters.
- Navigation mirrors internal teams.
- Missing permission and error states.
- Important actions available only on hover.
- Mobile is a very long version of desktop.
- Marketing visual system copied directly into dense operations UI.

## Recommended skill order

`design-director` → `ux-architecture` → `component-system` → `visual-composition` → `typography-content` → `color-imagery` → `responsive-rtl` → `motion-interaction` → `design-to-code` → `visual-qa-refinement`

## Additional hard gates

- [ ] P0 tasks have complete journeys and states.
- [ ] Scope and permissions are visible before consequential actions.
- [ ] Keyboard and focus behavior work for frequent tasks.
- [ ] Data-dense screens remain scannable with realistic volume.
- [ ] Mobile supports explicitly chosen operational tasks.
