import { css } from '@emotion/react'

const fontUrl = '/fonts/CooperBTLight/'

const fontCooperBT = css`
  @font-face {
    font-family: 'CooperBT';
    src: local('CooperBTLight'), local('CooperBT-Light'),
      url('${fontUrl}font.woff2') format('woff2'), url('${fontUrl}font.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: block;
  }
`

export default fontCooperBT
