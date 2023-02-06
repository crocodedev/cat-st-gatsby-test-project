import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import numberToPrice from '../../helpers/numberToPrice'

import {
  CartProductListWrapper,
  CartProductItemWrapper,
  CartProductItemImage,
  CartProductItemContent,
  CartProductItemTitle,
  CartProductItemPrice,
  CartProductItemQuantityWrapper,
  CartProductItemQuantityPlus,
  CartProductItemQuantityMinus,
  CartProductItemQuantityValue,
} from './CartProductView'

const CartProductListContainer = () => {
  const { cart, updateCart } = useContext(CartContext)

  return (
    <CartProductListWrapper>
      {cart.products.map(({ id, image, title, quantity, price }) => (
        <CartProductItemWrapper key={id}>
          <CartProductItemImage src={image} />
          <CartProductItemContent>
            <CartProductItemTitle>{title}</CartProductItemTitle>
            <CartProductItemQuantityWrapper>
              <CartProductItemQuantityMinus onClick={() => updateCart(id, 'remove')} />
              <CartProductItemQuantityValue>{quantity}</CartProductItemQuantityValue>
              <CartProductItemQuantityPlus onClick={() => updateCart(id, 'add')} />
            </CartProductItemQuantityWrapper>
            <CartProductItemPrice>{numberToPrice(price)}</CartProductItemPrice>
          </CartProductItemContent>
        </CartProductItemWrapper>
      ))}
    </CartProductListWrapper>
  )
}

export default CartProductListContainer
