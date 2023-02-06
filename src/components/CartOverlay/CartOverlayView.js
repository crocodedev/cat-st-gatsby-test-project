import styled from '@emotion/styled'

const CartOverlayWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: ${({ open }) => (open ? 0.5 : 0)};
    transition: 0.3s;
    top: 0;
  }
`

const CartOverlayContent = styled.aside`
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  height: 100vh;
  transition: 0.3s;
  background-color: ${({ theme }) => theme.palette.common.white};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  padding-left: 11px;
  padding-right: 14px;
  overflow-y: auto;
  overflow-x: hidden;

  ${({ theme }) => theme.breakpoints.down('md')} {
    padding-top: 23px;
    padding-bottom: 27px;
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up('md')} {
    padding-top: 60px;
    padding-bottom: 40px;
    width: 375px;
  }
`
const CartOverlayHeading = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`

const CartOverlayClose = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 20px;
  top: calc(50% - 10px);

  &::after,
  &::before {
    content: '';
    width: 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.common.black};
    position: absolute;
  }

  &::after {
    transform: rotate(45deg);
  }

  &::before {
    transform: rotate(-45deg);
  }
`

const CartOverlayTitle = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyCooperBT};
  font-size: 35px;
  line-height: 42px;
`

const CartOverlayContentBottom = styled.div`
  max-width: 335px;
  margin: 0 auto;
  width: 100%;
`

const CartOverlayEmptyCart = styled.p`
  font-size: 20px;
  font-weight: ${({ theme }) => theme.typography.fontWeight.light};
  font-family: ${({ theme }) => theme.typography.fontFamilyNeueHaasUnicaPro};
  line-height: 30px;
  text-align: center;
  max-width: 230px;
  margin: auto;
`

export {
  CartOverlayWrapper,
  CartOverlayContent,
  CartOverlayHeading,
  CartOverlayClose,
  CartOverlayTitle,
  CartOverlayContentBottom,
  CartOverlayEmptyCart,
}
