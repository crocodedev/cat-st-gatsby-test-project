import { useState } from 'react'
import FormWrapperInputText from './FormWrapperInputText'
import {
  FormWrapperWrapper,
  FormWrapperTitle,
  FormWrapperForm,
  FormWrapperNameWrapper,
  FormWrapperPhoneWrapper,
  FormWrapperSelectCode,
  FormWrapperSelectOption,
  FormWrapperSelectOptionStack,
  FormWrapperSelectFlag,
  FormWrapperPhoneDescription,
  InputPhoneWrapper,
} from './FormWrapperView'

const _defaultCountries = [
  {
    icon: './images/flag-australia.png',
    prefix: '+7',
    title: 'poland',
  },
  {
    icon: './images/flag-australia.png',
    prefix: '+63',
    title: 'australia',
  },
  {
    icon: './images/flag-australia.png',
    prefix: '+1',
    title: 'usa',
  },
  {
    icon: './images/flag-australia.png',
    prefix: '+71',
    title: 'australia',
  },
]

const FormWrapperContainer = () => {
  const [open, setIsOpen] = useState()
  const [selectedCountry, setSelectedCountry] = useState(_defaultCountries[0])
  const handleSetSelectedCountry = (country) => setSelectedCountry(country)
  const handleSetIsOpen = () => setIsOpen(!open)
  return (
    <FormWrapperWrapper>
      <FormWrapperTitle>Your Details</FormWrapperTitle>
      <FormWrapperForm>
        <FormWrapperInputText placeholder="your e-mail" />
        <FormWrapperPhoneWrapper>
          <InputPhoneWrapper>
            <FormWrapperSelectCode onClick={handleSetIsOpen}>
              <FormWrapperSelectFlag src={selectedCountry.icon} alt={selectedCountry.title} />
              {selectedCountry.prefix}
              <FormWrapperSelectOptionStack open={open}>
                {_defaultCountries.map((el) => (
                  <FormWrapperSelectOption
                    key={el.prefix}
                    onClick={() => handleSetSelectedCountry(el)}
                  >
                    <FormWrapperSelectFlag src={el.icon} alt={el.title} />
                    {el.prefix}
                  </FormWrapperSelectOption>
                ))}
              </FormWrapperSelectOptionStack>
            </FormWrapperSelectCode>
            <FormWrapperInputText placeholder="mobile phone" variant="mobile" />
          </InputPhoneWrapper>
          <FormWrapperPhoneDescription>
            Your phone number is required for delivery & shipping updates.
          </FormWrapperPhoneDescription>
        </FormWrapperPhoneWrapper>
        <FormWrapperNameWrapper>
          <FormWrapperInputText placeholder="first name" />
          <FormWrapperInputText placeholder="last name" />
        </FormWrapperNameWrapper>
      </FormWrapperForm>
    </FormWrapperWrapper>
  )
}

export default FormWrapperContainer
