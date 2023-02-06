import {
  PageContentWrapper,
  PageSideColumn,
  PageWrapperLogo,
  PageWrapperContainer,
  PageWrapperTitle,
  PageWrapperHeading,
  PageSideColumnTitle,
} from './PageWrapperView'
import Footer from '../Footer'

const PageWrapper = ({ title, rightSide, leftSide, columnTitle }) => {
  return (
    <PageWrapperContainer>
      <PageWrapperHeading>
        <PageWrapperLogo src="/images/logo.svg" />
        <PageWrapperTitle>{title}</PageWrapperTitle>
      </PageWrapperHeading>
      <PageContentWrapper>
        <div>{leftSide}</div>
        <PageSideColumn>
          <PageSideColumnTitle>{columnTitle}</PageSideColumnTitle>
          {rightSide}
        </PageSideColumn>
      </PageContentWrapper>
      <Footer privacyText="Secured & Encrypted Checkout" />
    </PageWrapperContainer>
  )
}

export default PageWrapper
