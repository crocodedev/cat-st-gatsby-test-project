import { Link } from 'gatsby'

import {
  PageContentWrapper,
  PageSideColumn,
  PageWrapperLogo,
  PageWrapperContainer,
  PageWrapperTitle,
  PageWrapperHeading,
  PageSideColumnTitle,
  PageWrapperLogoWrapper,
} from './PageWrapperView'
import Footer from '../Footer'

const PageWrapper = ({ title, rightSide, leftSide, columnTitle }) => {
  return (
    <PageWrapperContainer>
      <PageWrapperHeading>
        <PageWrapperLogoWrapper as={Link} to="/">
          <PageWrapperLogo src="/images/logo.svg" />
        </PageWrapperLogoWrapper>
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
