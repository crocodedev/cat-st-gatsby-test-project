export const _discountsList = [
  {
    key: 'LAUNCH15OFFEVERYTHING',
    discount: 0.15,
  },
  {
    key: 'FLUFFY12',
    discount: 0.12,
  },
]

export const _defaultProducts = [
  {
    title: 'Bouclé Bungalow “Creme” Cover',
    price: 239,
    quantity: 1,
    image: './images/cat-street-creme_2000.webp',
    id: 1,
  },
  {
    title: 'Replacement Cover in “Catnip”',
    price: 129,
    quantity: 1,
    image: './images/cat-street-blanket.webp',
    id: 2,
  },
]

export const _defaultCart = {
  products: _defaultProducts,
  subtotal: 368,
  discounts: -22.15,
  total: 368,
}

export const _defaultCodes = ['LAUNCH15OFFEVERYTHING', 'FLUFFY12']

export const _shippingMethod = [
  { title: 'Free Shipping', price: 0 },
  { title: 'Standard Shipping', price: 10 },
  { title: 'Express Shipping', price: 25.3 },
]
