import styled from '@emotion/styled'

const DeliveryDetailsWrapper = styled.div`
  margin-bottom: 32px;
  margin-top: 94px;
`

const DeliveryDetailsTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: 40px;
  line-height: 60px;
`

const DeliveryDetailsShippingOptions = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const DeliveryDetailsShippingOption = styled.input`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.palette.common.black};
  background-color: ${({ theme }) => theme.palette.common.white};

  ${({ active, theme }) =>
    active
      ? `&:after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${theme.palette.common.black};
  }`
      : ''}
`
const DeliveryDetailsOptionTitle = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 25px;
  line-height: 37px;
  color: ${({ theme }) => theme.palette.gray.semiLight};
`
const DeliveryDetailsDropdownSelector = styled.select`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: 25px;
  line-height: 37px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 3px 15px;
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
`
const DeliveryDetailsDropdownOption = styled.option`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: 25px;
  line-height: 37px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 3px 15px;
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
`

const DeliveryDetailsShippingPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 25px;
  line-height: 37px;
  color: ${({ theme }) => theme.palette.gray.semiLight};
`

const DeliveryDetailsShippingOptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px dotted ${({ theme }) => theme.palette.common.black};
  padding-right: 11px;
  padding-left: 6px;
`

const DeliveryDetailsShippingInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
`

const DeliveryDetailsDescriptionWrapper = styled.div`
  margin-top: 28px;
  margin-bottom: 90px;
`

const DeliveryDetailsModalOpenButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: 20px;
  line-height: 20px;
  text-decoration: underline;
  color: #4B4B4B;
  margin-left: auto;
  display: block;
  padding-right: 6px;
`

const DeliveryDetailsModal = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;

  ${({ open }) =>
    open
      ? `
opacity: 1;
`
      : `
opacity: 0;
pointer-events: none;
visibility: hidden;
`}
`

const DeliveryDetailsModalContent = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 10px;
  padding: 20px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    width: 350px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    width: 500px;
  }
`

const DeliveryDetailsModalTitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 30px;
    line-height: 50px;
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 40px;
    line-height: 60px;
    margin-bottom: 30px;
  }
`

const DeliveryDetailsModalText = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};

  ${({ theme }) => theme.breakpoints.down('md')} {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 15px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    font-size: 25px;
    line-height: 37px;
    margin-bottom: 15px;
  }
`

const DeliveryDetailsSelect = styled.div`
  width: 344px;
  height: 42px;
  background: ${({ theme }) => theme.palette.common.white};
  border: 0.5px solid #9c9c9c;
  border-radius: 2px;
  position: relative;
  margin-top: 20px;
`

const DeliveryDetailsSelectTitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 25px;
  line-height: 38px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 4px;

  &:after,
  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 2px;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.common.black};
  }
  &:after {
    right: 25px;
    transform: rotate(50deg);
  }

  &:before {
    right: 20px;
    transform: rotate(-50deg);
  }
`

const DeliveryDetailsSelectSubtitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
  font-size: 20px;
  line-height: 25px;
  color: ${({ theme }) => theme.palette.gray.main};
  padding-left: 5px;
`
const DeliveryDetailsSelectStack = styled.div`
  position: absolute;
  width: 100%;
  border: 0.5px solid #9c9c9c;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: ${({ theme }) => theme.palette.common.white};
  z-index: 3;

  ${({ open }) =>
    open
      ? `
opacity: 1;
`
      : `
opacity: 0;
pointer-events: none;
visibility: hidden;
`}
`

const DeliveryDetailsSelectItem = styled.div`
  width: 100%;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 25px;
  line-height: 38px;
  padding: 5px;

  &:hover {
    cursor: pointer;
  }
`

export {
  DeliveryDetailsWrapper,
  DeliveryDetailsTitle,
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
  DeliveryDetailsDropdownSelector,
  DeliveryDetailsDropdownOption,
  DeliveryDetailsModalOpenButton,
  DeliveryDetailsSelect,
  DeliveryDetailsSelectTitle,
  DeliveryDetailsSelectSubtitle,
  DeliveryDetailsSelectStack,
  DeliveryDetailsSelectItem,
}
