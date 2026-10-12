# Brief — implement `cartTotal`

## Task

Implement `cartTotal(items, options)` in `src/cart.js` so that it satisfies the
specification below. Plain JavaScript (ES modules), **no dependencies** — do not
add anything to `dependencies` or `devDependencies`, do not import any package.

## Files

- You may edit: `src/cart.js` only.
- Do not touch: `test/`, `package.json`, `.github/`, `CLAUDE.md`, any config file.
- Keep the existing export: `export function cartTotal(items, options)`.

## Contract

Input:

- `items`: array of `{ name: string, price: number, qty: number }`
- `options`: `{ vatRate: number, freeShipFrom: number, shipFee: number }`

Computation:

1. `subtotal` = sum of `price × qty` over all items
2. `vat` = `subtotal × vatRate`
3. `shipping` = `0` if `subtotal >= freeShipFrom` (inclusive), otherwise `shipFee`
4. return `subtotal + vat + shipping`, rounded once, at the end, to the nearest
   whole đồng

Output: a **number** (`typeof result === 'number'`), never a string.

## Edge cases

- Empty cart (`items` is `[]`) → return `0`. No VAT, no shipping fee.
- Subtotal exactly equal to `freeShipFrom` → shipping is `0`.
- `price` of `0` is valid. Only a **negative** price is an error.

## Errors

Throw `RangeError` (not `Error`, not `TypeError`) when any item has:

- a negative `price`
- a `qty` that is not a positive integer: `0`, `-1`, `1.5`, `'2'` all throw

Validate every item before computing anything. Do not invent other error cases
that the specification does not mention.

## Acceptance

- Worked example: `[{price:180000, qty:2}, {price:45000, qty:1}]` with
  `{ vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }` → `467400`.
- `npm test` passes and `npm run format:check` passes.
- Show me the diff of `src/cart.js` only; do not commit.
