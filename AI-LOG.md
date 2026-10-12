# AI-LOG.md — IA#1 cartTotal

Student: 24127392 — Trương Gia Hưng

## 2026-10-12 — harness: CLAUDE.md, Prettier, CI

Tool: Claude (claude.ai).
Asked for: a rules file (CLAUDE.md), a Prettier config, format/format:check
scripts, and a GitHub Actions CI workflow for the starter repo.
Kept: CLAUDE.md, .prettierrc.json, ci.yml as generated — the "Never" rules,
the Prettier options (no semi, single quotes), and the CI steps (checkout →
setup-node 22 → npm ci → format:check → test).
Changed: nothing.
Rejected: nothing.
By hand: ran `npm install -D prettier`, `npm pkg set` for the two scripts,
created `.github/workflows/` directory, placed files, ran `npm run format` and
`npm run format:check` to verify, pushed commit 24b6bc3 and confirmed CI ran
red at `npm test` (expected — cartTotal was still `throw new Error`).

## 2026-10-12 — brief.md

Tool: Claude (claude.ai).
Asked for: a brief that a stranger could hand to an AI assistant and get back a
correct cartTotal — listing files, contract, edge cases, error cases, and the
"no dependencies" constraint.
Kept: the full brief as generated.
Changed: nothing.
Rejected: nothing.
By hand: nothing — I used the brief to verify my own implementation matched the
spec after writing cartTotal by hand.

## 2026-10-12 — cartTotal in src/cart.js

Tool: none. Written by hand.
By hand: the full implementation — validation loop (RangeError for negative
price, non-positive-integer qty), early return for empty cart, subtotal via
reduce, VAT, shipping threshold (>=), and Math.round at the end.

## 2026-10-12 — tests in test/cart.test.js

Tool: none. Written by hand, from the README spec.
By hand: 9 test cases — worked example, empty cart, exact threshold, one below
threshold, typeof check, rounding check, negative price, non-integer qty, and
qty of 0. All expected values computed by hand before running.
