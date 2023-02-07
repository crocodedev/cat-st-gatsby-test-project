import React, { useContext, useState } from 'react'

import {
  PromoCodeWrapper,
  PromoCodeButtonWrapper,
  PromoCodeTitle,
  PromoCodeButton,
  PromoCodeEnterFieldWrapper,
  PromoCodeEnterField,
  PromoCodeApplyButton,
  PromoCodeCodesWrapper,
  PromoCodeCodesItem,
  PromoCodeCodesItemTitle,
  PromoCodeCodesItemRemove,
} from './PromoCodeView'

import { CartContext } from '../../context/cartContext'

const PromoCodeContainer = ({ variant }) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSetValue = (e) => setValue(e.target.value)

  const handleSetOpen = () => setOpen(!open)

  const { appliedCodes, updateDiscountCode } = useContext(CartContext)

  const handleUpdateDiscountCode = () => {
    updateDiscountCode(value)
    setValue('')
  }

  return (
    <PromoCodeWrapper variant={variant} open={open}>
      {open ? (
        <>
          <PromoCodeEnterFieldWrapper>
            <PromoCodeEnterField
              value={value}
              type="text"
              placeholder="Coupon Code"
              onChange={handleSetValue}
            />
            <PromoCodeApplyButton onClick={handleUpdateDiscountCode}>
              <span>APPLY</span>
            </PromoCodeApplyButton>
          </PromoCodeEnterFieldWrapper>
          {appliedCodes.length > 0 && (
            <PromoCodeCodesWrapper>
              {appliedCodes.map((el) => (
                <PromoCodeCodesItem key={el}>
                  <PromoCodeCodesItemTitle>{el}</PromoCodeCodesItemTitle>
                  <PromoCodeCodesItemRemove onClick={() => updateDiscountCode(el)}>
                    +
                  </PromoCodeCodesItemRemove>
                </PromoCodeCodesItem>
              ))}
            </PromoCodeCodesWrapper>
          )}
        </>
      ) : (
        <PromoCodeButtonWrapper>
          <PromoCodeTitle>Promo Code?</PromoCodeTitle>
          <PromoCodeButton onClick={handleSetOpen}>Enter Code</PromoCodeButton>
        </PromoCodeButtonWrapper>
      )}
    </PromoCodeWrapper>
  )
}

export default PromoCodeContainer
