import { Global, ThemeProvider } from '@emotion/react'
import theme from './theme'
import { CartContextProvider } from './context/cartContext'
import fontCooperBT from './styles/fontCooperBT'
import fontNeueHaasUnicaPro from './styles/fontNeueHaasUnicaPro'

import 'destyle.css'

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={[fontCooperBT, fontNeueHaasUnicaPro]} />
      <div className="App">
        <CartContextProvider>{children}</CartContextProvider>
      </div>
    </ThemeProvider>
  )
}

export default Layout
