import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaBars, FaTimes } from 'react-icons/fa'
import { gsap } from 'gsap'
import '../styles/Navbar.css'

function Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled,     setScrolled]     = useState(false)

  const topbarRef = useRef(null)
  const logoRef   = useRef(null)
  const linksRef  = useRef(null)

  useEffect(() => {
    if (!topbarRef.current || !logoRef.current || !linksRef.current) return
    const tl = gsap.timeline()
    tl.fromTo(topbarRef.current,
      { opacity: 0, y: -40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    )
    .fromTo(logoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3'
    )
    .fromTo(linksRef.current.querySelectorAll('li'),
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' }, '-=0.4'
    )
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* TOP BAR */}
      <div className="navbar-topbar" ref={topbarRef}>
        <div className="topbar-left">
          <a href="mailto:lordanantan956@gmail.com">
            <FaEnvelope className="topbar-icon" />
            lordanantan956@gmail.com
          </a>
          <a href="tel:+919669752322">
            <FaPhone className="topbar-icon" />
            +91 96697 52322
          </a>
        </div>
        <div className="topbar-right">
          <a href="https://www.facebook.com/people/Lord-Anantan-Resort/61588658803934/#" target="_blank" rel="noreferrer">
  <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.instagram.com/lordanantanresort/" target="_blank" rel="noreferrer">
              <FaInstagram className="social-icon" />
            </a>  
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="navbar-main">
        <Link to="/" className="navbar-logo" ref={logoRef}>
          Lord Anantan
        </Link>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} ref={linksRef}>
          <li><NavLink to="/"       onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about"  onClick={() => setMenuOpen(false)}>About</NavLink></li>

          <li
            className="dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="dropdown-toggle">Services ▾</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><NavLink to="/wedding"    onClick={() => setMenuOpen(false)}>Wedding Venue</NavLink></li>
                <li><NavLink to="/decoration" onClick={() => setMenuOpen(false)}>Decoration & Lighting</NavLink></li>
                <li><NavLink to="/catering"   onClick={() => setMenuOpen(false)}>Catering Service</NavLink></li>
              </ul>
            )}
          </li>

          <li><NavLink to="/dining"  onClick={() => setMenuOpen(false)}>Dining</NavLink></li>
          <li><NavLink to="/rooms"   onClick={() => setMenuOpen(false)}>Rooms</NavLink></li>
          <li><NavLink to="/banquet" onClick={() => setMenuOpen(false)}>Banquet</NavLink></li>
          <li><NavLink to="/gallery" onClick={() => setMenuOpen(false)}>Gallery</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar