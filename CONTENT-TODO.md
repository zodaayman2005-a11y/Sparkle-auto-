# What still needs real data

The page no longer carries dashed "TODO" markers — they made a finished design look
unfinished. Nothing on it invents a price, a metric or a testimonial either. Where a
real fact is missing, the copy says something true and general instead, and the tracking
lives here.

## 1. Commercial

| Where | Currently says | Needs |
|---|---|---|
| Pricing ×3 | "Priced to the size of your operation / Confirmed during the review" | Real prices, or keep this pattern if pricing genuinely is on request |
| After the review | Three general commitments | The approved trial length, requirements and cancellation terms, if you want them stated |
| Contact list | Three general service promises | Real phone, email and opening hours |
| Footer | Terms + privacy links point at `#` | Real legal pages |
| Footer socials | Links point at `#` | Real accounts |

## 2. Product screenshots

The three product frames hold a **stylised illustration**, not a fake screenshot: bars
and status words, no figures, names or money, and the wide one is captioned
"illustration of the screen layout — not a product capture."

To swap in the real thing, replace the `.board` element inside the frame with an `<img>`
and drop the caption. The slots are marked `data-slot`:

| Slot | Screen |
|---|---|
| `SA-PROOF-OWNER` | Owner operations screen (hero, desktop frame) |
| `SA-PROOF-BOOKING` | Customer booking screen (hero, phone frame) |
| `SA-PROOF-SYSTEM` | Daily operations screen (system section) |

Record for each capture: screen name, version/date, locale, device, source, approved
crop. Don't restyle a screenshot through image generation, and don't annotate inside
the UI.

## 3. Form receiver

`assets/js/main.js` has `var ENDPOINT = null;`. While it is null the form validates
fully but **refuses to show a success state** — it says no receiver is connected
instead. Set `ENDPOINT` to the real POST URL to enable the lifecycle
(loading → success → error → retry), which is already written.

## 4. Production URL

`index.html` carries a deliberately invalid placeholder so a wrong domain can't ship
by accident:

```html
<link rel="canonical" href="https://REPLACE-WITH-YOUR-DOMAIN.example/">
```

Replace it, and make `og:image` absolute against the same origin — most social scrapers
won't resolve a relative image path.

## 5. Logo

Header and footer use a built mark. Swap in the approved logo files when available.
