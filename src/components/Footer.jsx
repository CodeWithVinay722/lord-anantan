import { Link } from 'react-router-dom'
import {
  FaFacebook, FaInstagram, FaTwitter, FaYoutube,
  FaPhone, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* COLUMN 1 — Logo + About */}
        <div className="footer-col">
          <h2 className="footer-logo">Lord Anantan</h2>
          <p className="footer-about">
            Experience luxury, comfort and warm hospitality at Lord Anantan
            — your perfect destination for stays, celebrations and
            unforgettable memories.
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1CrxJke46y/?mibextid=wwXIfr"
    target="_blank" rel="noreferrer">
    <FaFacebook />
  </a>
  <a href="https://www.instagram.com/tantwayshelesh?igsh=eGZ1dDg2dmZ3bjRn&utm_source=qr"
    target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>
            
          </div>
        </div>

        {/* COLUMN 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Quick Links</h4>
          <div className="footer-divider"></div>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/rooms">Rooms & Suites</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* COLUMN 3 — Services */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Our Services</h4>
          <div className="footer-divider"></div>
          <ul className="footer-links">
            <li><Link to="/wedding">Wedding Venue</Link></li>
            <li><Link to="/banquet">Banquet Hall</Link></li>
            <li><Link to="/dining">Restaurant & Dining</Link></li>
            <li><Link to="/rooms">Luxury Rooms</Link></li>
          </ul>
        </div>

        {/* COLUMN 4 — Contact */}
        <div className="footer-col">
          <h4 className="footer-col-heading">Contact Info</h4>
          <div className="footer-divider"></div>

          <div className="footer-contact-item">
            <FaMapMarkerAlt className="footer-contact-icon" />
            <p>Lord Anantan,<br />Coming Soon...</p>
          </div>

          <div className="footer-contact-item">
            <FaPhone className="footer-contact-icon" />
            <p>+91 96697 52322</p>
          </div>

          <div className="footer-contact-item">
  <FaMapMarkerAlt className="footer-contact-icon" />
  <p>Lord Anantan Resort,<br />Salaiya, Bhopal, MP</p>
</div>

          <Link to="/contact" className="footer-book-btn">Book Now</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Lord Anantan. All Rights Reserved.</p>
        <p>Designed & Developed with ❤️</p>
      </div>

    </footer>
  )
}

export default Footer