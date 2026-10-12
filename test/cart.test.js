import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

// Expected values below are literal numbers worked out by hand from README.md,
// not recomputed with the implementation's own arithmetic.
const defaultOptions = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }

test('an empty cart returns 0: no VAT and no shipping', () => {
  assert.equal(cartTotal([], defaultOptions), 0)
})

test('a subtotal exactly at freeShipFrom ships free', () => {
  // subtotal 500000, VAT 40000, shipping 0
  const items = [{ name: 'Giày', price: 250000, qty: 2 }]
  assert.equal(cartTotal(items, defaultOptions), 540000)
})

test('a subtotal one đồng below freeShipFrom pays the shipping fee', () => {
  // subtotal 499999, VAT 39999.92, shipping 30000 -> 569998.92 -> 569999
  const items = [{ name: 'Giày', price: 499999, qty: 1 }]
  assert.equal(cartTotal(items, defaultOptions), 569999)
})

test('the total is of type number', () => {
  const items = [{ name: 'Bút', price: 12345, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 0, shipFee: 30000 }
  assert.equal(typeof cartTotal(items, options), 'number')
})

test('the total is rounded to a whole đồng', () => {
  // subtotal 12345, VAT 987.6, free shipping from 0 -> 13332.6 -> 13333
  const items = [{ name: 'Bút', price: 12345, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 0, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 13333)
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: -1, qty: 1 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})

test('a non-integer qty throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: 1000, qty: 1.5 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})

test('a qty of 0 throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: 1000, qty: 0 }]
  assert.throws(() => cartTotal(items, defaultOptions), RangeError)
})
