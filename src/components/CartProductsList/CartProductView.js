import styled from '@emotion/styled'

const CartProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CartProductItemWrapper = styled.div`
  display: flex;
  gap: 26px;
  padding-top: 6px;
  padding-right: 9px;
  padding-bottom: 15px;
  padding-left: 5px;
  border-bottom: 0.5px dashed ${({ theme }) => theme.palette.common.black};
  justify-content: space-between;
`

const CartProductItemImage = styled.img`
  max-width: 98px;
  object-fit: contain;
`

const CartProductItemContent = styled.div`
  display: grid;
  row-gap: 15px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    flex: 0 1 65%;
  }

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    flex: 0 1 50%;
  }

  ${({ variant, theme }) =>
    variant === 'checkout'
      ? `
  ${theme.breakpoints.between('md', 'lg')} {
    flex: 0 1 38%;
  }

  ${theme.breakpoints.between('lg', 'xl')} {
    flex: 0 1 30%;
  }
  `
      : ''}
`

const CartProductItemTitle = styled.h3`
  font-size: 18px;
  grid-area: 1 / 1 / 1 / 3;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
  line-height: 25px;
`

const CartProductItemPrice = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: 18px;
  width: 100%;
  text-align: end;
`
const CartProductItemQuantityWrapper = styled.div`
  width: 70px;
  height: 22px;
  display: flex;
  border: 0.5px solid ${({ theme }) => theme.palette.common.black};
  border-radius: 3px;
`
const CartProductItemQuantityPlus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;

  &::before,
  &::after {
    content: '';
    width: 11px;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.common.black};
    position: absolute;
  }

  &::before {
    transform: rotate(90deg);
  }
`

const CartProductItemQuantityValue = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 15px;
  border-left: 1px solid ${({ theme }) => theme.palette.gray.border};
  border-right: 1px solid ${({ theme }) => theme.palette.gray.border};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  margin-bottom: -1px;
`

const CartProductItemQuantityMinus = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;

  &::before {
    content: '';
    width: 11px;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.common.black};
  }
`

export {
  CartProductListWrapper,
  CartProductItemWrapper,
  CartProductItemImage,
  CartProductItemContent,
  CartProductItemTitle,
  CartProductItemPrice,
  CartProductItemQuantityWrapper,
  CartProductItemQuantityPlus,
  CartProductItemQuantityMinus,
  CartProductItemQuantityValue,
}
