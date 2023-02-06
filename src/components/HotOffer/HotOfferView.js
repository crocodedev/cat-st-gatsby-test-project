import styled from '@emotion/styled'

const HotOfferWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
  background-color: ${({ theme }) => theme.palette.common.accent};
  ${({ marginBottom }) => marginBottom && 'margin-bottom: 40px'};
  ${({ variant }) => (variant === 'checkout' ? 'margin-top: 10px' : '')};
  padding: ${({ variant }) => (variant === 'checkout' ? '18px 20px 28px' : '18px 7px')};
  border-radius: 9px;
  position: relative;
  display: flex;
  gap: 13px;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const HotOfferTitle = styled.h3`
  font-size: 25px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  line-height: 25px;
  text-align: center;
  max-width: 244px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const HotOfferContent = styled.div`
  display: flex;
  gap: ${({ variant }) => (variant === 'checkout' ? '23px' : '17px')};

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`

const HotOfferImage = styled.img`
  height: auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    max-width: 162px;
  }

  ${({ theme }) => theme.breakpoints.between('sm', 'md')} {
    max-width: 400px;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    max-width: 162px;
  }
`

const HotOfferDescription = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
  line-height: 25px;
  padding-top: 9px;
`

const HotOfferDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ variant }) => (variant === 'checkout' ? '16px' : '11px')};
`

const HotOfferPrices = styled.div`
  display: flex;
  gap: 13px;
`

const HotOfferSalePrice = styled.span`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  line-height: 25px;
`

const HotOfferPrice = styled.span`
  font-size: 18px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
  line-height: 25px;
  opacity: 60%;
  text-decoration: line-through;
`

export {
  HotOfferWrapper,
  HotOfferTitle,
  HotOfferContent,
  HotOfferImage,
  HotOfferDescription,
  HotOfferDescriptionWrapper,
  HotOfferPrices,
  HotOfferSalePrice,
  HotOfferPrice,
}
