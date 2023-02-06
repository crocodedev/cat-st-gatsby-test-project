import React, { useContext } from 'react'
import { Link } from 'gatsby'

import { CartContext } from '../../context/cartContext'

import CartProductListContainer from '../CartProductsList/CartProductListContainer'
import HotOfferProducts from '../HotOffer'
import OrderSummary from '../OrderSummary'
import PromoCodeContainer from '../PromoCode'
import Button from '../Button'

import {
  CartOverlayWrapper,
  CartOverlayContent,
  CartOverlayHeading,
  CartOverlayClose,
  CartOverlayTitle,
  CartOverlayContentBottom,
  CartOverlayEmptyCart,
} from './CartOverlayView'

const CartOverlay = ({ title, onClose, open, emptyCartText }) => {
  const { cart } = useContext(CartContext)
  return (
    <CartOverlayWrapper open={open}>
      <CartOverlayContent open={open}>
        <div>
          <CartOverlayHeading>
            <CartOverlayClose onClick={onClose} />
            <CartOverlayTitle>{title}</CartOverlayTitle>
          </CartOverlayHeading>
          {cart?.products?.length > 0 ? (
            <>
              <CartProductListContainer />
              <PromoCodeContainer />
              <HotOfferProducts marginBottom />
            </>
          ) : (
            <CartOverlayEmptyCart>{emptyCartText}</CartOverlayEmptyCart>
          )}
        </div>
        {cart?.products?.length > 0 && (
          <CartOverlayContentBottom>
            <OrderSummary />
            <Button as={Link} to="/checkout" size="large">
              Checkout now
            </Button>
          </CartOverlayContentBottom>
        )}
      </CartOverlayContent>
    </CartOverlayWrapper>
  )
}

export default CartOverlay
