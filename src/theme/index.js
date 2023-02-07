const breakpoints = {
  values: {
    xsm: 375,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    '2xl': 1536,
    '3xl': 1652,
  },
}
const typography = {
  rootFontSize: 16,
  fontFamily: `system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'`,
}
typography.pxToRem = (value) => `${(value / typography.rootFontSize).toFixed(3)}rem`

const theme = {
  breakpoints: {
    ...breakpoints,
    up: (key) => `@media (min-width: ${breakpoints.values[key]}px)`,
    down: (key) => `@media (max-width: ${breakpoints.values[key] - 0.02}px)`,
    between: (min, max) =>
      `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${
        breakpoints.values[max] - 0.02
      }px)`,
  },
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF',
      background: '#F1EEE9',
      accent: '#FFFBEC',
    },
    gray: {
      main: '#777777',
      subtitle: '#606060',
      border: '#A0A0A0',
      semiLight: '#424141',
    },
  },
  typography: {
    ...typography,
    fontFamilyCooperBT: `CooperBT, ${typography.fontFamily}`,
    fontFamilyNeueHaasUnicaPro: `NeueHaasUnicaPro, ${typography.fontFamily}`,

    fontWeight: {
      bold: 700,
      medium: 500,
      regular: 400,
      light: 350,
      thin: 300,
    },
  },
  gradient: {
    radialGradient:
      'radial-gradient(50% 50% at 50% 50%, rgba(241, 238, 233, 0.16) 0%, #F1EEE9 100%)',
  },
}

export default theme
