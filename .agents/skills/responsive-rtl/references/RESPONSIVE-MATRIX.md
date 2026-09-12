# Responsive and RTL Matrix

## Environment priorities

| Mode | Width/content condition | Input | Primary tasks | Density | Language/direction |
|---|---|---|---|---|---|
| Compact |  | Touch |  |  |  |
| Medium |  | Touch/keyboard |  |  |  |
| Wide |  | Keyboard/pointer |  |  |  |

## Module transformations

| Module | Compact | Medium | Wide | Long-content behavior | RTL behavior |
|---|---|---|---|---|---|
| Navigation |  |  |  |  |  |
| Hero/header |  |  |  |  |  |
| Data/table |  |  |  |  |  |
| Actions |  |  |  |  |  |
| Media/diagram |  |  |  |  |  |

Use: reflow, reorder, collapse, substitute, crop, split, persist, or remove.

## Directional classification

| Element | Reading-direction dependent | Physical/semantic direction | Neutral | Decision |
|---|---:|---:|---:|---|
|  |  |  |  |  |

## Mixed-direction samples

- Phone:
- Price:
- Date/time:
- ID/code:
- URL/email:
- English brand in Arabic sentence:

## Required test evidence

- [ ] 360px Arabic RTL.
- [ ] 390px English LTR.
- [ ] 768px both directions.
- [ ] 1024px critical state.
- [ ] 1440px both directions.
- [ ] Long labels and headings.
- [ ] 200% zoom/reflow.
- [ ] Keyboard and touch.
- [ ] Reduced motion.
