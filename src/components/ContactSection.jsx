import { useState, useEffect, useRef } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/ContactSection.css'

gsap.registerPlugin(ScrollTrigger)

const WHATSAPP_NUMBER  = '919669752322'

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const headerRef = useRef(null)
  const infoRef   = useRef(null)
  const formRef   = useRef(null)

  useEffect(() => {
    if (!headerRef.current) return
    gsap.fromTo(Array.from(headerRef.current.children),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%' } }
    )
    if (infoRef.current) {
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: infoRef.current, start: 'top 80%' } }
      )
    }
    if (formRef.current) {
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' } }
      )
    }
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message =
`🏨 *New Enquiry — Lord Anantan*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
📋 *Subject:* ${formData.subject}
💬 *Message:* ${formData.message}

_Sent from lordanantan.com_`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')

    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <section className="contact-section">

      <div className="contact-header" ref={headerRef}>
        <p className="section-label">Get In Touch</p>
        <h2 className="section-heading">Contact Us</h2>
        <div className="gold-divider centered"></div>
        <p className="contact-subtext">
          We'd love to hear from you. Reach out to us for bookings,
          inquiries or any assistance you need.
        </p>
      </div>

      <div className="contact-container">

        {/* LEFT — Info */}
        <div className="contact-info" ref={infoRef}>
          <h3 className="info-heading">Reach Us At</h3>

          <div className="info-item">
  <div className="info-icon-box"><FaMapMarkerAlt /></div>
  <div className="info-text">
    <strong>Our Location</strong>
    <p>Lord Anantan Resort,<br />Salaiya, Bhopal,<br />Madhya Pradesh</p>
  </div>
</div>

          <div className="info-item">
            <div className="info-icon-box"><FaPhone /></div>
            <div className="info-text">
              <strong>Call Us</strong>
              <p><a href="tel:+919669752322">+91 96697 52322</a></p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box"><FaEnvelope /></div>
            <div className="info-text">
              <strong>Email Us</strong>
              <p><a href="mailto:lordanantan956@gmail.com">lordanantan956@gmail.com</a></p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-box"><FaClock /></div>
            <div className="info-text">
              <strong>Working Hours</strong>
              <p>Front Desk: 24 / 7<br />Restaurant: Coming Soon</p>
            </div>
          </div>

          <div className="map-box">
                      <iframe
            title="Lord Anantan Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573.8!2d77.4454575!3d23.1601965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4502c74bd329%3A0xc335f72d16c33e1a!2sLORD%20ANATAN%20RESORT%20%2C%20SALAIYA%20%2CBHOPAL!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '4px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="contact-form-box" ref={formRef}>
          <h3 className="info-heading">Send Us a Message</h3>
          <p style={{ fontSize: '13px', color: 'var(--gray)', marginBottom: '20px' }}>
            📲 Your message will be sent directly to our WhatsApp for faster response!
          </p>

          {submitted ? (
            <div className="success-message">
              <span className="success-icon">✅</span>
              <h4>Message Sent!</h4>
              <p>Your enquiry has been sent to Lord Anantan on WhatsApp. We will respond shortly!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={formData.name}
                    onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" name="email" value={formData.email}
                    onChange={handleChange} placeholder="your@email.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <select name="subject" value={formData.subject}
                    onChange={handleChange} required>
                    <option value="">Select Subject</option>
                    <option value="Room Booking">Room Booking</option>
                    <option value="Wedding Inquiry">Wedding Inquiry</option>
                    <option value="Banquet Booking">Banquet Booking</option>
                    <option value="Dining Reservation">Dining Reservation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Your Message *</label>
                <textarea name="message" value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="5" required />
              </div>

              <button type="submit" className="submit-btn">
                📲 Send via WhatsApp
              </button>

            </form>
          )}
        </div>

      </div>

    </section>
  )
}

export default ContactSection