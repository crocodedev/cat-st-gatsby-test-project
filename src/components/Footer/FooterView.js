import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  padding-bottom: 100px;
`
const FooterText = styled.span`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: 18px;
  line-height: 24px;
  color: #585858;
`
const FooterStack = styled.div`
  display: flex;
  gap: 30px;
`
const FooterImage = styled.img``

export { FooterWrapper, FooterText, FooterStack, FooterImage }
