import Layout from '../layout'
import { useState, useEffect } from 'react'
import CartOverlay from '../components/CartOverlay/CartOverlayContainer'

const Home = () => {
  const [cartOverlayVisible, setCartOverlayVisible] = useState(false)
  const handleSetCartOverlayVisible = () => {
    setCartOverlayVisible(!cartOverlayVisible)
  }

  const handleCloseOverlay = (e) => {
    if (e.key === 'Escape') {
      setCartOverlayVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseOverlay)
    return () => document.removeEventListener('keydown', handleCloseOverlay)
  }, [])

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
