import Layout from '../layout'
import { useState } from 'react'
import CartOverlay from '../components/CartOverlay/CartOverlayContainer'

const Home = () => {
  const [cartOverlayVisible, setCartOverlayVisible] = useState(false)
  const handleSetCartOverlayVisible = () => {
    setCartOverlayVisible(!cartOverlayVisible)
  }
  return (
    <Layout>
      <button type="button" onClick={handleSetCartOverlayVisible}>
        Show cart
      </button>
      <CartOverlay
        title="Your Cart"
        emptyCartText="There’s nothing for your poor cat in your cart!"
        open={cartOverlayVisible}
        onClose={handleSetCartOverlayVisible}
      />
    </Layout>
  )
}

export default Home
