import { css } from '@emotion/react'

const fontUrl = '/fonts/NeueHaasUnicaPro/'

const fontNeueHaasUnicaPro = css`
  @font-face {
    font-family: 'NeueHaasUnicaPro';
    src: local('NeueHaasUnicaBold'), local('NeueHaasUnica-Bold'),
      url('${fontUrl}/NeueHaasUnicaBold/font.woff2') format('woff2'),
      url('${fontUrl}/NeueHaasUnicaBold/font.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'NeueHaasUnicaPro';
    src: local('NeueHaasUnicaMedium'), local('NeueHaasUnica-Medium'),
      url('${fontUrl}/NeueHaasUnicaMedium/font.woff2') format('woff2'),
      url('${fontUrl}/NeueHaasUnicaMedium/font.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'NeueHaasUnicaPro';
    src: local('NeueHaasUnicaRegular'), local('NeueHaasUnica-Regular'),
      url('${fontUrl}/NeueHaasUnicaRegular/font.woff2') format('woff2'),
      url('${fontUrl}/NeueHaasUnicaRegular/font.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'NeueHaasUnicaPro';
    src: local('NeueHaasUnicaLight'), local('NeueHaasUnica-Light'),
      url('${fontUrl}/NeueHaasUnicaLight/font.woff2') format('woff2'),
      url('${fontUrl}/NeueHaasUnicaLight/font.woff') format('woff');
    font-weight: 350;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: 'NeueHaasUnicaPro';
    src: local('NeueHaasUnicaThin'), local('NeueHaasUnica-Thin'),
      url('${fontUrl}/NeueHaasUnicaThin/font.woff2') format('woff2'),
      url('${fontUrl}/NeueHaasUnicaThin/font.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: block;
  }
`

export default fontNeueHaasUnicaPro
