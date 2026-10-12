# CLAUDE.md — rules for this repository

## Project

`cartTotal(items, options)` — computes a shopping cart total in Vietnamese đồng
(subtotal + VAT + shipping). The specification is in `README.md`; it is the
source of truth, not the existing code.

## Stack

- Node.js 22, ES modules (`"type": "module"`)
- Tests: built-in `node:test` + `node:assert/strict` — no Jest, no Mocha
- Formatting: Prettier (dev-only), config in `.prettierrc.json`

## Commands

| Command                | What it does                                |
| ---------------------- | ------------------------------------------- |
| `npm ci`               | install exactly what is in the lock file    |
| `npm test`             | run all tests under `test/`                 |
| `npm run format`       | rewrite `src/` and `test/` with Prettier    |
| `npm run format:check` | fail if `src/` or `test/` is not formatted  |

The gate: `npm run format:check && npm test` must both pass before any commit.
CI (`.github/workflows/ci.yml`) runs the same gate on every push.

## Layout

- `src/cart.js` — the implementation, one exported function
- `test/cart.test.js` — tests, written from the specification

## Never

- Never add a runtime dependency. `src/` imports nothing.
- Never use `toFixed` to round money — it returns a string. The result must be a
  `number`.
- Never edit a test to make it pass. If a test and the spec disagree, stop and
  ask.
- Never assert on implementation details (internal variables, call counts) —
  tests assert inputs against outputs from the spec.
- Never touch files outside `src/` and `test/` unless the task says so.
- Never commit with `npm test` or `format:check` red.
- Never put API keys, tokens or real customer data in code, tests or prompts.

## Done means

`npm run format:check && npm test` green locally, CI green on GitHub, and an
entry in `AI-LOG.md` for any work an assistant did.
