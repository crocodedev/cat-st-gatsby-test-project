import { useContext } from 'react'
import {
  OrderSummaryWrapper,
  OrderSummaryItem,
  OrderSummaryTitle,
  OrderSummaryCurrency,
  OrderSummaryPrice,
  OrderSummaryCurrencyWrapper,
  OrderSummaryPriceTotal,
  OrderSummaryTitleTotal,
  OrderSummaryPriceItems,
} from './OrderSummaryView'
import { CartContext } from '../../context/cartContext'
import numberToPrice from '../../helpers/numberToPrice'

const OrderSummaryContainer = ({ showDelivery, variant }) => {
  const { cart } = useContext(CartContext)
  return (
    <OrderSummaryWrapper variant={variant}>
      <OrderSummaryPriceItems variant={variant}>
        <OrderSummaryItem>
          <OrderSummaryTitle>Subtotal</OrderSummaryTitle>
          <OrderSummaryPrice>{numberToPrice(cart.subtotal, true)}</OrderSummaryPrice>
        </OrderSummaryItem>

        <OrderSummaryItem>
          <OrderSummaryTitle>Shipping</OrderSummaryTitle>
          <OrderSummaryPrice>
            {showDelivery ? numberToPrice(cart?.shipping || 0, true) : 'calculated next step'}
          </OrderSummaryPrice>
        </OrderSummaryItem>

        {cart.discounts !== 0 && (
          <OrderSummaryItem>
            <OrderSummaryTitle>Discounts</OrderSummaryTitle>
            <OrderSummaryPrice>{numberToPrice(cart.discounts, true)}</OrderSummaryPrice>
          </OrderSummaryItem>
        )}
      </OrderSummaryPriceItems>

      <OrderSummaryItem>
        <OrderSummaryTitleTotal>TOTAL</OrderSummaryTitleTotal>
        <OrderSummaryCurrencyWrapper>
          <OrderSummaryCurrency>AUD</OrderSummaryCurrency>
          <OrderSummaryPriceTotal>{numberToPrice(cart.total, true)}</OrderSummaryPriceTotal>
        </OrderSummaryCurrencyWrapper>
      </OrderSummaryItem>
    </OrderSummaryWrapper>
  )
}

export default OrderSummaryContainer
