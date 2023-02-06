import { useState } from 'react'
import {
  PaymentDetailsWrapper,
  PaymentDetailsTitle,
  PaymentDetailsStack,
  PaymentDetailsItem,
  PaymentDetailsItemImage,
  PaymentDetailsItemContent,
} from './PaymentDetailsView'

const PaymentDetails = () => {
  const [active, setActive] = useState()

  const handleSetActive = (name) => {
    setActive(name === active ? '' : name)
  }

  return (
    <PaymentDetailsWrapper>
      <PaymentDetailsTitle>Payment Details</PaymentDetailsTitle>
      <PaymentDetailsStack>
        <PaymentDetailsItem>
          <PaymentDetailsItem onClick={() => handleSetActive('paypal')}>
            <PaymentDetailsItemImage src="./images/paypal.png" />
          </PaymentDetailsItem>
          <PaymentDetailsItemContent active={active === 'paypal'}>
            InformationInformation Information Information Information Information
            InformationInformation Information InformationInformation Information
          </PaymentDetailsItemContent>
        </PaymentDetailsItem>
        <PaymentDetailsItem>
          <PaymentDetailsItem onClick={() => handleSetActive('creditCard')}>
            <PaymentDetailsItemImage src="./images/creditcard.png" />
          </PaymentDetailsItem>
          <PaymentDetailsItemContent active={active === 'creditCard'}>
            InformationInformation Information Information Information Information
            InformationInformation Information InformationInformation
            InformationInformationInformation Information Information Information Information
            InformationInformation Information InformationInformation Information
            InformationInformation Information Information Information Information
            InformationInformation Information InformationInformation Information
          </PaymentDetailsItemContent>
        </PaymentDetailsItem>
      </PaymentDetailsStack>
    </PaymentDetailsWrapper>
  )
}

export default PaymentDetails
