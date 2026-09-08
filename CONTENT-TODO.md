# Content still needed before this page can be published

The Sparkle Auto brand contract treats product and commercial facts as a hard gate:

> No false prices, features, notices, customer claims, or made-up operational metrics.
> Real product UI remains real. Missing real proof remains explicit.

So nothing on this page invents a number, a testimonial, a wash count or a price.
Everywhere a real fact is missing, the page renders an explicit dashed **pending
marker** instead. Each one below has to be replaced from a maintained source before
the page goes live.

## 1. Pending markers on the page

| Where | Key | Needs |
|---|---|---|
| Hero | `pending.duration` | How long an operations review actually takes |
| Journey | `pending.journey` | Verify the 5 steps against the shipped product |
| Pricing ×3 | `pending.price` | Real prices/terms from the maintained commercial source |
| FAQ — data | `pending.policy` | Approved hosting / backup / retention wording |
| Review section | `pending.phone`, `pending.email`, `pending.hours` | Official contact details |
| Footer | `pending.social`, `pending.legal` | Official accounts; terms + privacy pages |

Replace the text in `assets/js/i18n.js` (**both** `ar` and `en`) and drop the
`class="pending"` from the corresponding element in `index.html`.

## 2. Real product screenshots

Three code-built frames hold a visibly empty slot rather than an invented interface.
Each is marked with `data-slot`:

| Slot | Screen |
|---|---|
| `SA-PROOF-OWNER` | Owner operations screen (hero, desktop frame) |
| `SA-PROOF-BOOKING` | Customer booking screen (hero, phone frame) |
| `SA-PROOF-SYSTEM` | Daily operations screen (system section) |

Drop a real capture in as `<img>` inside `.frame__slot` and delete the placeholder
text. Per the contract, record for each capture: **screen name, version/date, locale,
device, source, approved crop**. Do not restyle a screenshot through image generation,
and do not annotate inside the UI.

## 3. Generated story assets (optional)

The asset register lists `SA-PROBLEM` (Owner + oversized telephone) and `SA-FINAL`
(relief/control scene) as GENERATE items. They are not in this build — image
generation was not available here. The problem section currently uses a **code-built
metaphor prop** (an outsized ringing phone in brand geometry, no product UI) as a
stand-in. If the approved Owner scenes are produced later, they replace that prop;
the identity spec in the overlay is binding (same face, navy overshirt, white tee,
beige trousers, navy shoes, dark watch — premium stylized 3D, never photoreal).

## 4. Form receiver

`assets/js/main.js` has `var ENDPOINT = null;`. While it is null the form validates
fully but **refuses to show a success state**, and says so instead — a success
confirmation before an actual successful submission is forbidden by the contract.
Set `ENDPOINT` to the real POST URL to enable the live lifecycle
(loading → success → error → retry), which is already written.

## 5. Logo

`SA-LOGO` is REAL, not generated. The header/footer currently use a simple built mark.
Swap in the approved logo files when available.
