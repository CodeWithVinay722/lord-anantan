import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { FaChevronUp, FaWhatsapp } from 'react-icons/fa'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CursorGlow from './components/CursorGlow'
import Home from './pages/Home'
import About from './pages/About'
import Rooms from './pages/Rooms'
import Dining from './pages/Dining'
import Banquet from './pages/Banquet'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Wedding from './pages/Wedding'
import NotFound from './pages/NotFound'
import Decoration from './pages/Decoration'   // ← add
import Catering   from './pages/Catering'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const WHATSAPP_NUMBER = '919669752322'

const WHATSAPP_MESSAGE = `🙏 *Welcome to Lord Anantan!*

Thank you for reaching out to us.

Please let us know how we can assist you:

1️⃣ Room Booking Enquiry
2️⃣ Wedding / Event Enquiry  
3️⃣ Banquet Hall Booking
4️⃣ Dining Reservation
5️⃣ Any Other Query

Our team will respond shortly. 😊`

function App() {
  const [showScroll,  setShowScroll]  = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Show tooltip after 3 seconds, hide after 8 seconds
  useEffect(() => {
    const show = setTimeout(() => setShowTooltip(true),  3000)
    const hide = setTimeout(() => setShowTooltip(false), 8000)
    return () => { clearTimeout(show); clearTimeout(hide) }
  }, [])

  const scrollToTop  = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const openWhatsApp = () => {
    const encoded = encodeURIComponent(WHATSAPP_MESSAGE)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
  }

  return (
    <div>
      <CursorGlow />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/about"   element={<About />} />
        <Route path="/rooms"   element={<Rooms />} />
        <Route path="/dining"  element={<Dining />} />
        <Route path="/banquet" element={<Banquet />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="*"        element={<NotFound />} />
        <Route path="/decoration" element={<Decoration />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
<Route path="/catering"   element={<Catering />} />
      </Routes>

      <Footer />

      {/* WHATSAPP FLOATING BUTTON */}
      <div className="whatsapp-wrapper">
        {showTooltip && (
          <div className="whatsapp-tooltip">
            <p>👋 Chat with us on</p>
            <strong>Lord Anantan</strong>
          </div>
        )}
        <button
          className="whatsapp-float"
          onClick={openWhatsApp}
          title="Chat on WhatsApp"
        >
          <FaWhatsapp />
        </button>
      </div>

      {/* SCROLL TO TOP */}
      {showScroll && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaChevronUp />
        </button>
      )}

    </div>
  )
}

export default App