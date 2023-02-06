import styled from '@emotion/styled'
import { css } from '@emotion/react'

const dynamicStyle = ({ theme, variant, size, version }) => css`
  ${variant === 'light'
    ? `
    background-color: ${theme.palette.common.white};
    color: ${theme.palette.common.black};

    &:after {
      border-bottom-color: ${theme.palette.common.black};
    }

    &:before {
      border-bottom-color: ${theme.palette.common.white};
    }
  `
    : `
    background-color: ${theme.palette.common.black};
    color: ${theme.palette.common.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

     &:after {
      border-bottom-color: ${theme.palette.common.black};
     }

     &:before {
      border-bottom-color: ${theme.palette.common.black};
    }
  `}

  ${size === 'large'
    ? `
  max-width: calc(100% - 20px);
  min-height: 54px;
  font-size: 30px;
  font-weight: ${theme.typography.fontWeight.regular};
  line-height: 45px;


  &:before {
    border-top: 29px solid transparent;
    border-left: 29px solid transparent;
    border-right: 29px solid transparent;
    border-bottom-width: 20px;
  }
  `
    : `
    width: 128px;
    height: 37px;
    letter-spacing: 1px;
    font-size: 20px;
    font-weight: ${theme.typography.fontWeight.medium};
    line-height: 35px;

    &:before {
      border-top: 16px solid transparent;
      border-left: 16px solid transparent;
      border-right: 16px solid transparent;
      border-bottom-width: 11px;
    }

    &:after{
      border-top: 18px solid transparent;
      border-left: 18px solid transparent;
      border-right: 18px solid transparent;
      border-bottom-width: 13px;
    }
  `}

  ${version === 'checkout'
    ? `

    ${theme.breakpoints.up('md')} {
      max-width: calc(100% - 20px);
      min-height: 65px;
    }


    &:before {
      border-left: 31px solid transparent;
    }
  `
    : `
  `}
`

const Button = styled.button`
  border-radius: 3px;
  padding: 4px;
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  position: relative;
  border-top: 2px solid ${({ theme }) => theme.palette.common.black};
  border-bottom: 2px solid ${({ theme }) => theme.palette.common.black};
  border-left: 2px solid ${({ theme }) => theme.palette.common.black};
  border-right: none;
  z-index: 3;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    border-bottom-style: solid;
  }

  &:after {
    transform: translate(93%) rotate(90deg);
  }

  &:before {
    transform: translate(90%) rotate(90deg);
    z-index: 2;
  }

  ${dynamicStyle}
`

export default Button
