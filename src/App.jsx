import './App.css'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/Loader'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import About from './pages/About'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Wishlist from './pages/Wishlist'
import Shop from './pages/Shop'
import Single from './pages/Single'
import Checkout from './pages/Checkout'

function App() {

  return (
    <>
    <Loader />
    <Header />
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path='/cart' element={< Cart /> }  />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/single" element={<Single />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App
