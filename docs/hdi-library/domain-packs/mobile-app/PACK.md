# Domain Pack — Mobile Application

## Primary outcome

Help users complete focused tasks confidently in constrained, interruptible, touch-first contexts.

## Dominant priorities

- Task focus.
- Reachability and touch ergonomics.
- Clear navigation and back behavior.
- Fast perceived response.
- Permission and system integration.
- Offline/interrupted recovery.
- Accessible text and controls.
- Platform-appropriate behavior without losing brand identity.

## Architecture

- Prioritize the smallest set of high-frequency tasks.
- Use progressive disclosure.
- Preserve user input across interruptions.
- Define deep links and notification entry states.
- Make current account, branch, location, or item context visible.
- Respect system keyboard, safe areas, and orientation.

## Interaction

- No hover assumptions.
- Minimum touch target follows the project's accessibility policy.
- Buttons and gestures need clear alternatives where discoverability is low.
- Loading states occupy the changing region.
- Destructive gestures require confirmation or undo.
- Bottom navigation is for a small number of primary destinations, not every route.

## Content

- Use concise labels without sacrificing meaning.
- Do not hide essential explanation behind tiny tooltips.
- Test long Arabic and English labels.
- Handle keyboard overlap and field progression.

## Visual behavior

- Use one strong brand device rather than desktop decoration compressed into a small screen.
- Protect task content from decorative imagery.
- Maintain consistent surface and status hierarchy.
- Use motion for continuity and feedback, not delay.

## Common failures

- Desktop patterns pasted into mobile.
- Too many tabs or bottom-nav items.
- Tiny icons and text.
- Important content below keyboard.
- Swipe-only actions.
- Empty/error/offline states missing.
- Back behavior inconsistent.
- Large decorative headers consuming task space.

## Recommended skill order

`design-director` → `ux-architecture` → `component-system` → `typography-content` → `visual-composition` → `color-imagery` → `responsive-rtl` → `motion-interaction` → `design-to-code` → `visual-qa-refinement`

## Additional hard gates

- [ ] Primary task is reachable with one hand where context requires.
- [ ] Keyboard, safe area, and orientation behavior are tested.
- [ ] Interruption and resume preserve user work.
- [ ] No essential action is gesture-only.
- [ ] Offline or slow-network behavior is defined where relevant.
