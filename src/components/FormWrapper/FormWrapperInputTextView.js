import styled from '@emotion/styled'

const FormInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

const FormWrapperInput = styled.input`
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray.border};
  height: 40px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 25px;
  line-height: 38px;
  padding-left: 6px;
  position: relative;
  width: 100%;

  ${({ tag }) =>
    tag === 'textarea'
      ? `
  resize: none;
   height: 90px;

  &:focus ~ label,
  &:not(:focus):valid ~ label {
    top: 100px;
  }
  `
      : `
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    top: 50px;
  }
  `}

  &:focus {
    background-color: ${({ theme }) => theme.palette.common.white};
    outline: none;
  }

  &:focus ~ label,
  &:not(:focus):valid ~ label {
    ${({ variant }) => (variant === 'mobile' ? `    left: -131px;` : `    left: 0;`)}
    font-weight: ${({ theme }) => theme.typography.fontWeight.thin};
    color: ${({ theme }) => theme.palette.gray.main};
    font-size: 20px;
    line-height: 10px;
  }
`

const FormWrapperInputLabel = styled.label`
  position: absolute;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  color: ${({ theme }) => theme.palette.gray.subtitle};
  font-size: 25px;
  line-height: 38px;
  padding-left: 6px;
  top: 0;
  left: 0;
  bottom: 0;
  pointer-events: none;
  transition: all 0.2s ease;
`

const FormWrapperClearButton = styled.button`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-size: 20px;
  line-height: 10px;
  text-decoration: underline;
  color: ${({ theme }) => theme.palette.gray.main};
  position: absolute;
  ${({ tag }) => (tag === 'textarea' ? 'top: 100px;' : 'top: 50px;')}
  right: 6px;
`

export { FormWrapperInput, FormWrapperInputLabel, FormInputWrapper, FormWrapperClearButton }
