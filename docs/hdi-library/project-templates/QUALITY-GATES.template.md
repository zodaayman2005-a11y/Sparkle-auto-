# QUALITY-GATES.md — {{PROJECT_NAME}}

Status: Active  
Minimum approval score: **88/100** unless explicitly changed in `DECISIONS.md`.

## Hard gates

A single failed hard gate blocks final approval.

### Truth and integrity

- [ ] Claims, pricing, metrics, testimonials, features, and integrations are sourced.
- [ ] Real product surfaces use real screenshots or clearly labeled prototype data.
- [ ] No placeholder copy or asset remains in production scope.


### Research and originality — when live research informs the direction

- [ ] Research questions name the decisions they affect.
- [ ] Accepted sources have provenance, retrieval date, state/viewport/locale where relevant, evidence role, limitations, and confidence.
- [ ] Search snippets, thumbnails, Tier-D leads, and unattributed reposts are not treated as evidence.
- [ ] Current facts, product behavior, standards, and technical claims use appropriate primary or official sources where available.
- [ ] The source set passes its configured diversity and concentration thresholds.
- [ ] Web content was treated as untrusted; no secret/private data, embedded instructions, unknown code, sign-in, form submission, or unauthorized external action entered the workflow.
- [ ] Observations, source claims, inferences, principles, and adaptations are distinguishable.
- [ ] No single source acts as the hidden template.
- [ ] Source-owned copy, assets, product UI, distinctive geometry, and signature interaction are not reused without permission.
- [ ] A source-to-decision map and originality audit support the selected direction.

### Functional

- [ ] Primary user journey succeeds.
- [ ] Links, forms, controls, menus, dialogs, and navigation work.
- [ ] Loading, empty, success, error, disabled, and permission states exist where relevant.
- [ ] No uncaught console error blocks the experience.

### Responsive

- [ ] No unintended horizontal overflow at required widths.
- [ ] Layout is recomposed rather than merely shrunk.
- [ ] Content stress cases do not break controls or hierarchy.
- [ ] Critical tasks remain usable on the smallest supported viewport.

### Arabic, RTL, and localization

- [ ] Arabic and English are reviewed independently when both are supported.
- [ ] Mixed-direction numbers, phones, prices, dates, and identifiers remain readable.
- [ ] Arrows, progress, timelines, icons, and motion use intentional direction logic.
- [ ] Arabic text does not receive inappropriate Latin letter spacing.

### Accessibility

- [ ] Semantic structure and headings are logical.
- [ ] Keyboard navigation and focus order are correct.
- [ ] Focus indicators are visible.
- [ ] Controls have accessible names, roles, and states.
- [ ] Text and essential UI meet the project's contrast requirements.
- [ ] Reflow and zoom remain usable.
- [ ] Touch targets meet the project's minimum size.
- [ ] Reduced-motion experience is defined and tested.

### Performance

- [ ] Images and media are correctly sized and lazy-loaded where appropriate.
- [ ] Advanced effects have a loading, mobile, and fallback strategy.
- [ ] No large dependency is added for a trivial effect.
- [ ] The experience remains responsive during interaction.

### Design-system integrity

- [ ] Approved tokens are used consistently.
- [ ] Component variants cover real states.
- [ ] One-off values are justified or promoted into the system.
- [ ] Existing design-system contracts are not silently replaced.

## Scored rubric

| Category | Weight | Minimum category score |
|---|---:|---:|
| Concept and distinctiveness | 15 | 11 |
| Composition and hierarchy | 15 | 11 |
| Typography and content | 15 | 11 |
| UX clarity and task efficiency | 15 | 11 |
| Brand coherence | 10 | 7 |
| Color, imagery, and depth | 10 | 7 |
| Motion and interaction | 10 | 7 |
| Responsive, RTL, and accessibility | 10 | 8 |

No category may be rescued by unrelated strengths. A visually impressive page with weak usability still fails.

## Severity

- **Blocking:** prevents task completion, violates truth, creates serious accessibility failure, breaks required viewport/language, or contradicts a locked decision.
- **Major:** materially harms hierarchy, comprehension, consistency, conversion, task speed, or brand distinction.
- **Minor:** polish issue that does not materially block the experience.

## Evidence required

- [ ] Full-page screenshots for required viewports.
- [ ] Critical interaction crops or recordings.
- [ ] Language-mode evidence.
- [ ] State matrix results.
- [ ] Hard-gate checklist.
- [ ] Score with reasons and examples.
- [ ] Remaining limitations.
