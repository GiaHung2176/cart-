// cartTotal(items, options) -> number. See README.md for the specification.
//
//   items:   [{ name, price, qty }]
//   options: { vatRate, freeShipFrom, shipFee }
//
// Total = subtotal + VAT + shipping, rounded once to a whole đồng.
export function cartTotal(items, options) {
  // Validate every item first, so a bad item anywhere in the list throws.
  for (const { price, qty } of items) {
    if (!Number.isFinite(price) || price < 0) {
      throw new RangeError(`price must be a number >= 0, got ${price}`)
    }
    if (!Number.isInteger(qty) || qty <= 0) {
      throw new RangeError(`qty must be a positive integer, got ${qty}`)
    }
  }

  // An empty cart costs nothing: no VAT, no shipping.
  if (items.length === 0) return 0

  const { vatRate, freeShipFrom, shipFee } = options
  const subtotal = items.reduce((sum, { price, qty }) => sum + price * qty, 0)
  const vat = subtotal * vatRate
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  // Round once, at the end. Math.round returns a number (toFixed would not).
  return Math.round(subtotal + vat + shipping)
}
