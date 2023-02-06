import styled from '@emotion/styled'

const PageWrapperContainer = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, rgba(241, 238, 233, 0.16) 0%, #f1eee9 100%);
  min-height: 100vh;
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.breakpoints.down('lg')} {
    gap: 78px;
  }

  ${({ theme }) => theme.breakpoints.up('lg')} {
    gap: 154px;
  }
`

const PageWrapperLogo = styled.img`
  position: absolute;
  left: 54px;
`

const PageContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1248px;
  padding: 0 20px;
  margin: 0 auto;
  gap: 120px;
  width: 100%;
  ${({ theme }) => theme.breakpoints.down('xl')} {
    flex-direction: column;
    align-items: center;
  }
`

const PageSideColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;

  ${({ theme }) => theme.breakpoints.up('xl')} {
    max-width: 375px;
  }
`

const PageWrapperTitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyCooperBT};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 60px;
  line-height: 72px;
`

const PageWrapperHeading = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.down('lg')} {
    justify-content: flex-start;
    flex-direction: column;

    & > img {
      position: static;
    }
  }
  ${({ theme }) => theme.breakpoints.up('lg')} {
    justify-content: center;
  }
`

const PageSideColumnTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: 40px;
  line-height: 60px;
`

export {
  PageContentWrapper,
  PageSideColumn,
  PageWrapperContainer,
  PageWrapperTitle,
  PageWrapperHeading,
  PageSideColumnTitle,
  PageWrapperLogo,
}