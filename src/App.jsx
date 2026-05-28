import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './assets/Components/Navbar'
import Herosection from './assets/Components/Herosection'
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import Productssection from './assets/Components/Productssection'
import Bestsellers from './assets/Components/Bestsellers'
import Backtotop from './assets/Components/Backtotop'
import Whatsappicon from './assets/Components/Whatsappicon'
import Popup from './assets/Components/Popup'
import Off from './assets/Components/Off'
import About from './assets/Components/About'
import Letconnect from './assets/Components/Letconnect'


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false)
  
  return (
    <>
    <Navbar cart={cart} showCart={showCart} setShowCart={setShowCart}  />
    <Herosection  />
    <Bestsellers />
    <Productssection cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />
    <Off />
    <About />
    <Letconnect />

    <Whatsappicon />
    <Backtotop />
     
    </>
  )
}

export default App
