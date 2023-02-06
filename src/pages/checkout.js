import React, { useState } from 'react'
import Button from '../components/Button'
import CartProductListContainer from '../components/CartProductsList/CartProductListContainer'
import FormWrapperContainer from '../components/FormWrapper'
import HotOffer from '../components/HotOffer'
import OrderSummary from '../components/OrderSummary'
import PageWrapper from '../components/PageWrapper/PageWrapperContainer'
import PaymentDetails from '../components/PaymentDetails'
import DeliveryDetails from '../components/DeliveryDetails'
import PromoCode from '../components/PromoCode'
import SectionWrapper from '../components/SectionWrapper'
import Layout from '../layout'

const Checkout = () => {
  const [form, setForm] = useState()

  const handleSetValue = (e) => {
    setForm(e.target.value)
  }

  const handleClearForm = () => setForm('')

  return (
    <Layout>
      <PageWrapper
        title="Checkout"
        columnTitle="Your order"
        leftSide={
          <>
            <FormWrapperContainer />
            <DeliveryDetails onChange={handleSetValue} form={form} clearForm={handleClearForm} />
            <PaymentDetails />
          </>
        }
        rightSide={
          <>
            <SectionWrapper>
              <CartProductListContainer />
              <PromoCode variant="checkout" />
              <OrderSummary variant="checkout" showDelivery />
            </SectionWrapper>
            <Button size="large" version="checkout">
              Pay now
            </Button>
            <HotOffer variant="checkout" />
          </>
        }
      />
    </Layout>
  )
}

export default Checkout
