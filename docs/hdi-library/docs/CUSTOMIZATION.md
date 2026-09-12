# Customization Guide

## Change taste without weakening the process

Put brand-specific preferences in `BRAND.md` and `DESIGN.md`, not inside every skill. Put stable personal preferences in the memory schemas. Keep skills focused on process and judgment.

## Add a domain pack

A good domain pack defines:

- Primary success metric.
- Dominant user behavior.
- Information density.
- Required screen or section patterns.
- Design priorities.
- Common failure modes.
- Quality gates unique to the surface.
- Recommended skill activation order.

## Add a reference card

Do not store only a screenshot and a URL. Add structured analysis: use case, layout topology, typography behavior, color roles, imagery, motion, why it works, what is transferable, and what must not be copied.

## Modify a skill

1. Define the behavior you want to improve.
2. Add or update an eval before editing the skill.
3. Keep the description narrow enough to route reliably.
4. Put heavy examples in `references/`.
5. Compare baseline and skill-assisted runs.
6. Keep the change only when it improves the target behavior.


## Add a research source type or lane

1. Define the design decision it serves.
2. Add it to the source schema or skill reference only when current fields cannot represent it.
3. Add an eval that distinguishes it from existing lanes.
4. Preserve source tier, provenance, limitations, security, and non-copy boundaries.
5. Update the validator only for deterministic checks; do not encode subjective truth as a count.

## Add a new skill without creating overlap

Document its trigger, owned decision, required inputs, output artifact, handoffs, boundary cases, and eval. A new style library is usually a reference file or domain pack—not a top-level skill.

## v1.2 eval admission rule

Every new top-level skill needs at least one positive case, one boundary case that proves it does not over-trigger, and one adversarial case that rejects an invalid shortcut while preserving the legitimate objective. A useful method that activates everywhere is still a bad skill.
