# Self-assessment — IA#1

Submitted by: 24127392 — Trương Gia Hưng

Total I claim: 90 / 100

| Criterion | Max | I claim | Evidence |
|---|---|---|---|
| Behaviour | 30 | 28 | `npm test` green; worked example → 467400; empty cart → 0; `subtotal >= freeShipFrom` → shipping 0; `price: -1` → RangeError; `qty: 1.5` and `qty: 0` → RangeError. See `src/cart.js`. |
| Tests | 20 | 18 | 9 tests, all pass. Covers worked example, empty cart, exact threshold, one-below threshold, typeof number, rounding, negative price, non-integer qty, qty 0. Each test asserts one thing. See `test/cart.test.js`. |
| Harness | 20 | 18 | `CLAUDE.md` with stack, commands, 7 "Never" rules. Gate: `npm run format:check && npm test`. CI in `.github/workflows/ci.yml` runs on push — first push was red (commit 24b6bc3), green after implementation. |
| Brief | 15 | 13 | `brief.md` — names `src/cart.js` as the only editable file, contract with input/output types, all error cases, rounding rule, "no dependencies". |
| AI-LOG.md | 15 | 13 | 4 entries: harness (Claude-generated, kept as-is), brief (Claude-generated), cartTotal (by hand), tests (by hand). Each entry has Tool / Asked for / Kept / Changed / Rejected / By hand. |

## What I did not manage

I did not add a string-qty test (`qty: "2"`) as a separate case — validation
handles it via `Number.isInteger("2") === false`, but there is no dedicated test
proving that. I also did not test `NaN` or `Infinity` prices explicitly, though
the guard `Number.isFinite(price)` covers them.

## What I would do differently

Write the AI-LOG entries immediately after each step instead of batching them.
Add a few more edge-case tests (string qty, zero-price item, single-item cart)
to be thorough.
