import styled from '@emotion/styled'

const OrderSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 10px;
  padding-bottom: 19px;

  ${({ variant }) => (variant === 'checkout' ? 'padding-left: 8px;  padding-right: 8px;' : '')};
`

const OrderSummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const OrderSummaryPriceItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => (variant === 'checkout' ? '8px' : '10px')};
  ${({ variant }) => (variant === 'checkout' ? ' margin-bottom: 22px;' : '')};
`

const OrderSummaryTitle = styled.span`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
  line-height: 25px;
`

const OrderSummaryPriceTotal = styled.span`
  font-size: 25px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 13px;
`

const OrderSummaryCurrencyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

const OrderSummaryCurrency = styled.span`
  font-size: 25px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  line-height: 25px;
  color: ${({ theme }) => theme.palette.gray.subtitle};
`

const OrderSummaryPrice = styled.span`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  line-height: 25px;
`
const OrderSummaryTitleTotal = styled.span`
  font-size: 25px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 25px;
`

export {
  OrderSummaryWrapper,
  OrderSummaryItem,
  OrderSummaryTitle,
  OrderSummaryCurrency,
  OrderSummaryPrice,
  OrderSummaryCurrencyWrapper,
  OrderSummaryPriceTotal,
  OrderSummaryTitleTotal,
  OrderSummaryPriceItems,
}
