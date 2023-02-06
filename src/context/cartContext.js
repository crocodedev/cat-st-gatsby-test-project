import { useEffect, useState, createContext } from 'react'
import { _defaultCart, _defaultCodes, _discountsList } from '../data/_defaultValues'

const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(_defaultCart)
  const [appliedCodes, setAppliedCodes] = useState(_defaultCodes)
  const [shippingMethod, setShippingMethod] = useState()

  const updateCartItem = (product, quantity) => {
    return { ...product, quantity: product.quantity + quantity }
  }

  const updateCartItems = (products, product, productIndex) =>
    product.quantity === 0
      ? [...products.slice(0, productIndex), ...products.slice(productIndex + 1)]
      : [...products.slice(0, productIndex), product, ...products.slice(productIndex + 1)]

  const updateOrder = (products, productId, quantity) => {
    const productIdx = products.findIndex(({ id }) => productId === id)
    const product = products[productIdx]
    const newProduct = updateCartItem(product, quantity)
    return updateCartItems(products, newProduct, productIdx)
  }

  const applyDiscount = () =>
    appliedCodes?.length > 0
      ? appliedCodes
          .map((code) => _discountsList.find((el) => el.key === code))
          ?.filter((el) => !el?.length)
          ?.sort((a, b) => a.discount - b.discount)[0]?.discount
      : 0

  const updateOrderSummary = (updatedProducts) => {
    const { products } = cart
    const subtotal = (updatedProducts?.length ? updatedProducts : products).reduce(
      (accum, product) => accum + product.price * product.quantity,
      0,
    )
    const discounts = -(subtotal * applyDiscount())
    const total = subtotal + discounts + (shippingMethod?.price || 0)
    return setCart({
      products: updatedProducts || products,
      shipping: shippingMethod?.price,
      subtotal,
      discounts,
      total,
    })
  }

  const updateShippingMethod = (method) => {
    setShippingMethod(method)
  }

  const updateCart = (productId, action) => {
    let { products } = cart
    switch (action) {
      case 'add': {
        products = updateOrder(products, productId, 1)
        break
      }
      case 'remove':
        products = updateOrder(products, productId, -1)
        break
      default:
        return null
    }

    return updateOrderSummary(products)
  }

  const updateDiscountCode = (code) =>
    setAppliedCodes(
      appliedCodes.includes(code)
        ? appliedCodes.filter((existedCode) => existedCode !== code)
        : [...appliedCodes, code],
    )

  useEffect(() => {
    updateOrderSummary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [appliedCodes, shippingMethod])

  return (
    <CartContext.Provider
      value={{ appliedCodes, cart, shippingMethod, updateCart, updateDiscountCode, updateShippingMethod }}
    >
      {children}
    </CartContext.Provider>
  )
}

export { CartContext, CartContextProvider }
