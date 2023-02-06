import { useContext, useEffect, useState } from 'react'
import numberToPrice from '../../helpers/numberToPrice'
import FormWrapperInputText from '../FormWrapper/FormWrapperInputText'
import { CartContext } from '../../context/cartContext'
import { _shippingMethod } from '../../data/_defaultValues'
import {
  DeliveryDetailsTitle,
  DeliveryDetailsWrapper,
  DeliveryDetailsShippingOptions,
  DeliveryDetailsShippingOption,
  DeliveryDetailsOptionTitle,
  DeliveryDetailsShippingPrice,
  DeliveryDetailsShippingOptionWrapper,
  DeliveryDetailsShippingInfoWrapper,
  DeliveryDetailsDescriptionWrapper,
  DeliveryDetailsModal,
  DeliveryDetailsModalContent,
  DeliveryDetailsModalTitle,
  DeliveryDetailsModalText,
  DeliveryDetailsModalOpenButton,
  DeliveryDetailsSelect,
  DeliveryDetailsSelectTitle,
  DeliveryDetailsSelectSubtitle,
  DeliveryDetailsSelectStack,
  DeliveryDetailsSelectItem,
} from './DeliveryDetailsView'

const _defaultCountries = ['Australia', 'Canada', 'Poland', 'United Kingdom']

const DeliveryDetailsContainer = ({ form, clearForm, onChange }) => {
  const [openModal, setOpenModal] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [deliveryCountry, setDeliveryCountry] = useState(_defaultCountries[0])

  const { updateShippingMethod, shippingMethod } = useContext(CartContext)

  const handleSetOpenModal = () => setOpenModal(!openModal)
  const handleSetOpenDropdown = () => setOpenDropdown(!openDropdown)
  const handleSetDeliveryCountry = (country) => setDeliveryCountry(country)

  useEffect(() => {
    updateShippingMethod(_shippingMethod[1])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <DeliveryDetailsWrapper>
      <DeliveryDetailsTitle>Delivery Details</DeliveryDetailsTitle>
      <DeliveryDetailsSelect onClick={handleSetOpenDropdown}>
        <DeliveryDetailsSelectTitle>{deliveryCountry}</DeliveryDetailsSelectTitle>
        <DeliveryDetailsSelectStack open={openDropdown}>
          {_defaultCountries.map((el) => (
            <DeliveryDetailsSelectItem onClick={() => handleSetDeliveryCountry(el)} key={el}>
              {el}
            </DeliveryDetailsSelectItem>
          ))}
        </DeliveryDetailsSelectStack>
      </DeliveryDetailsSelect>
      <DeliveryDetailsSelectSubtitle>country</DeliveryDetailsSelectSubtitle>

      <DeliveryDetailsDescriptionWrapper>
        <FormWrapperInputText
          value={form}
          onChange={onChange}
          clearForm={clearForm}
          placeholder="delivery address"
          showClearButton
          marginBottom
          tag="textarea"
        />
      </DeliveryDetailsDescriptionWrapper>

      <DeliveryDetailsShippingOptions>
        {_shippingMethod.map((el) => (
          <DeliveryDetailsShippingOptionWrapper
            onClick={() => updateShippingMethod(el)}
            key={el.title}
          >
            <DeliveryDetailsShippingInfoWrapper>
              <DeliveryDetailsShippingOption
                active={shippingMethod?.title === el.title}
                type="radio"
              />
              <DeliveryDetailsOptionTitle>{el.title}</DeliveryDetailsOptionTitle>
            </DeliveryDetailsShippingInfoWrapper>
            <DeliveryDetailsShippingPrice>
              {numberToPrice(el.price, true)}
            </DeliveryDetailsShippingPrice>
          </DeliveryDetailsShippingOptionWrapper>
        ))}
        <DeliveryDetailsModalOpenButton onClick={handleSetOpenModal}>
          about shipping
        </DeliveryDetailsModalOpenButton>
      </DeliveryDetailsShippingOptions>

      <DeliveryDetailsModal onClick={handleSetOpenModal} open={openModal}>
        <DeliveryDetailsModalContent>
          <DeliveryDetailsModalTitle>About shipping</DeliveryDetailsModalTitle>
          <DeliveryDetailsModalText>About Free shipping</DeliveryDetailsModalText>
          <DeliveryDetailsModalText>About Standard shipping</DeliveryDetailsModalText>
          <DeliveryDetailsModalText>About Express shipping</DeliveryDetailsModalText>
        </DeliveryDetailsModalContent>
      </DeliveryDetailsModal>
    </DeliveryDetailsWrapper>
  )
}

export default DeliveryDetailsContainer
