# Independent Final Design Review

```text
Act as the independent HDI design critic. Use visual-qa-refinement and the
project QUALITY-GATES.md. Do not rely on the builder's summary or inspect code
alone.

Inspect the running interface and capture stable evidence for:
- Required routes and P0 tasks.
- Desktop 1440, desktop/tablet 1024, tablet 768, mobile 390, and mobile 360,
  unless the project specifies stronger coverage.
- Arabic RTL and English LTR when supported.
- Default, loading, empty, success, error, validation, permission, and other
  material states.
- Keyboard focus, reduced motion, and long-content stress cases.

Review in this order:
1. Scope, product truth, and locked decisions.
2. Task success and information architecture.
3. Hard gates: broken behavior, overflow, state gaps, accessibility failures,
   wrong language/direction, false claims, missing assets, and console errors.
4. Concept fidelity, composition, hierarchy, typography, color, imagery,
   component coherence, motion, responsive adaptation, RTL, and performance.
5. Anti-generic audit and cross-screen consistency.

For every finding provide evidence, impact, root cause, required fix, severity,
and verification method. Score with the project rubric. A hard-gate failure or
unresolved blocking/major issue prevents approval. Revise, recapture the same
evidence set, and verify the change rather than claiming it is fixed.
```
