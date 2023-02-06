import styled from '@emotion/styled'

const PaymentDetailsWrapper = styled.div``

const PaymentDetailsTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: 40px;
  line-height: 60px;
  margin-bottom: 10px;
`
const PaymentDetailsStack = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.common.black};
`

const PaymentDetailsItem = styled.div`
  background: #f8f8f8;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.common.black};
  }
`
const PaymentDetailsItemImage = styled.img``

const PaymentDetailsItemContent = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  overflow: hidden;

  ${({ active }) =>
    active
      ? `
  max-height: 500px;
  transition: all 0.3s cubic-bezier(1, 0, 1, 0) 0s;  `
      : `
      max-height: 0;
      transition: all 0.3s cubic-bezier(0, 1, 0, 1) 0s;

      `}
`

export {
  PaymentDetailsWrapper,
  PaymentDetailsTitle,
  PaymentDetailsStack,
  PaymentDetailsItem,
  PaymentDetailsItemImage,
  PaymentDetailsItemContent,
}
