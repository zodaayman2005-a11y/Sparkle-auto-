# Advanced Scene Contract

## Thesis

- User outcome:
- Spatial/visual mechanism:
- Why lightweight design is insufficient:
- Primary task preserved:

## Rendering architecture

- DOM:
- SVG:
- Canvas/WebGL:
- Video/image fallback:
- Input model:

## Scene board

| Scene | Understanding | Camera | Objects/material | Trigger | Transition | Text/action | Mobile | Reduced motion | No-WebGL |
|---|---|---|---|---|---|---|---|---|---|
| 1 |  |  |  |  |  |  |  |  |  |

## Asset manifest

| Asset | Source/license | Geometry | Textures | Materials | Load priority | Mobile/LOD | Fallback |
|---|---|---|---|---|---|---|---|
|  |  |  |  |  |  |  |  |

## Performance budget

- Initial payload:
- Total advanced payload:
- Frame-time target:
- Target devices:
- Draw calls/materials:
- Texture memory:
- Main-thread budget:

## Failure tests

- [ ] No WebGL.
- [ ] Slow/failed asset.
- [ ] Resize/orientation.
- [ ] Fast scroll/reverse.
- [ ] Hidden/resumed tab.
- [ ] Reduced motion.
- [ ] Keyboard.
- [ ] Mobile low power.
