import styled from '@emotion/styled'

const PromoCodeWrapper = styled.div`
  padding-bottom: ${({ variant }) => (variant === 'checkout' ? '24px' : '45px')};
  ${({ variant }) =>
    variant === 'checkout'
      ? `padding-left: 8px;
  padding-right: 7px;
  `
      : ''};
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  ${({ open, theme }) =>
    open
      ? `padding-top: 24px`
      : `
      padding-right: 18px;
      padding-left: 20px;

    ${theme.breakpoints.down('md')} {
      padding-top: 9px;
    }

    ${theme.breakpoints.up('md')} {
      padding-top: 30px;
    }
  `}
`

const PromoCodeButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
`
const PromoCodeTitle = styled.span`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  line-height: 25px;
`

const PromoCodeButton = styled.button`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  color: ${({ theme }) => theme.palette.gray.main};
  text-decoration: underline;
  line-height: 25px;
`

const PromoCodeEnterFieldWrapper = styled.div`
  display: flex;
  gap: 15px;
`

const PromoCodeEnterField = styled.input`
  font-size: 18px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  line-height: 25px;
  padding: 6px 7px 8px 7px;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
  min-width: 203px;
`
const PromoCodeApplyButton = styled.button`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  line-height: 30px;
  text-transform: uppercase;
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
  background-color: ${({ theme }) => theme.palette.common.background};
  padding: 4px 28px;
  border-radius: 4px;
`
const PromoCodeCodesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`

const PromoCodeCodesItem = styled.div`
  padding: 2px 10px;
  display: flex;
  gap: 5px;
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.palette.common.background};
`

const PromoCodeCodesItemTitle = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  line-height: 25px;
`

const PromoCodeCodesItemRemove = styled.span`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  transform: rotate(45deg);
  cursor: pointer;
`

export {
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
}
