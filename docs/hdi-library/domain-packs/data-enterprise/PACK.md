# Domain Pack — Data-Heavy Enterprise

## Primary outcome

Enable expert users to scan, compare, investigate, act, and audit large or complex information accurately.

## Dominant priorities

- Information density with hierarchy.
- Scope and provenance.
- Filtering, sorting, grouping, and search.
- Fast keyboard use.
- Permissions and auditability.
- Error prevention and recovery.
- Stable layouts under real volume.
- Accessible data interpretation.

## Data presentation

Choose visualization according to the question:

- Trend over time.
- Comparison.
- Distribution.
- Part-to-whole.
- Relationship.
- Geography.
- Detailed lookup.

Tables are often the correct tool for precise lookup and comparison. Do not replace them with cards or charts for visual novelty.

## Context

Always clarify:

- Dataset scope.
- Active entity/account/branch.
- Time range and timezone.
- Filters.
- Refresh/staleness.
- Units.
- Source/provenance where needed.
- Permission restrictions.

## Interaction

- Support keyboard navigation and shortcuts where justified.
- Make bulk selection and destructive actions explicit.
- Preserve filters and column state appropriately.
- Provide saved views when repeated work requires them.
- Keep actions near selected data.
- Announce loading and result-count changes accessibly.

## Responsive

Mobile may support monitoring and urgent action rather than every expert workflow. Define supported mobile jobs honestly. Use focused drill-down and priority columns rather than shrinking dense desktop tables.

## Common failures

- Decorative dashboard with shallow data.
- Ambiguous units and scope.
- Charts without readable alternatives.
- Filters far from results.
- Hidden selection state.
- Large tables tested with five rows only.
- Color-only status.
- Mobile claiming full parity but being unusable.

## Recommended skill order

`design-director` → `ux-architecture` → `component-system` → `typography-content` → `visual-composition` → `color-imagery` → `responsive-rtl` → `motion-interaction` → `design-to-code` → `visual-qa-refinement`

## Additional hard gates

- [ ] Scope, time, units, filters, and staleness are visible.
- [ ] Realistic high-volume data is tested.
- [ ] Tables and charts support keyboard and non-color interpretation.
- [ ] Bulk and destructive actions have safe confirmation/recovery.
- [ ] Mobile scope is explicit and usable for its selected jobs.
