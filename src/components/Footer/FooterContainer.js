import { FooterWrapper, FooterText, FooterStack, FooterImage } from './FooterView'

const Footer = ({ privacyText }) => (
  <FooterWrapper>
    <FooterText>{privacyText}</FooterText>
    <FooterStack>
      <FooterImage src="/images/check-mark.svg" />
      <FooterImage src="/images/sha-256.svg" />
    </FooterStack>
  </FooterWrapper>
)

export default Footer
