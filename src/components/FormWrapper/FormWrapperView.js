import styled from '@emotion/styled'

const FormWrapperWrapper = styled.div`
  margin-bottom: 60px;
  display: grid;
  gap: 19px;
  margin-top: 7px;
`
const FormWrapperTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: 40px;
  line-height: 60px;
`
const FormWrapperForm = styled.form`
  display: flex;
  gap: 52px;
  flex-direction: column;
`

const FormWrapperNameWrapper = styled.div`
  display: flex;
  gap: 38px;
`

const FormWrapperPhoneWrapper = styled.div`
  display: flex;
  gap: 41px;

  ${({ theme }) => theme.breakpoints.down('md')} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
  }
`
const FormWrapperSelectCode = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  font-size: 25px;
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
  background-color: ${({ theme }) => theme.palette.common.white};
  text-align: center;
  width: 131px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 4px 10px;
  gap: 11px;
  max-height: 40px;

  &:after,
  &:before {
    content: '';
    display: block;
    width: 10px;
    height: 2px;
    position: absolute;
    background-color: ${({ theme }) => theme.palette.common.black};
  }
  &:after {
    right: 16px;
    transform: rotate(50deg);
  }

  &:before {
    right: 10px;
    transform: rotate(-50deg);
  }

  &:active,
  &:focus-visible {
    outline: none;
  }
`

const FormWrapperSelectFlag = styled.img`
  width: 24px;
  height: 14px;
`

const FormWrapperSelectOptionStack = styled.div`
  display: flex;
  flex-direction: column;
  width: 131px;
  position: absolute;
  top: 100%;
  border: 1px solid ${({ theme }) => theme.palette.gray.border};
  background-color: ${({ theme }) => theme.palette.common.white};
  transition: 0.3s;
  left: -1px;
  z-index: 3;
  ${({ open }) => (open ? `opacity: 1` : `opacity: 0; visibility: hidden; pointer-events: none;`)};
`

const FormWrapperSelectOption = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 4px 10px;
  gap: 11px;
  max-height: 40px;
  font-size: 25px;
`

const FormWrapperPhoneDescription = styled.p`
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  color: ${({ theme }) => theme.palette.gray.main};
  font-size: 18px;
  max-width: 330px;
`
const InputPhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export {
  FormWrapperWrapper,
  FormWrapperTitle,
  FormWrapperForm,
  FormWrapperNameWrapper,
  FormWrapperPhoneWrapper,
  FormWrapperSelectCode,
  FormWrapperSelectOption,
  FormWrapperSelectOptionStack,
  FormWrapperSelectFlag,
  FormWrapperPhoneDescription,
  InputPhoneWrapper,
}
