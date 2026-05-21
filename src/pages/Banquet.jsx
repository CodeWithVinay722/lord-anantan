import { useState } from 'react'
import '../styles/BanquetPage.css'
import { useEffect } from 'react'  

const venues = [
  {
    id: 1,
    name: 'Grand Ballroom',
    capacity: 'Up to 500 Guests',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800',
    desc: 'Our magnificent Grand Ballroom is perfect for large weddings, gala dinners and corporate events with state-of-the-art AV facilities.',
  },
  {
    id: 2,
    name: 'Garden Lawn',
    capacity: 'Up to 300 Guests',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
    desc: 'A lush open-air garden venue ideal for daytime functions, cocktail parties and intimate outdoor celebrations.',
  },
  {
    id: 3,
    name: 'Conference Hall',
    capacity: 'Up to 150 Guests',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
    desc: 'Modern conference hall equipped with projectors, audio systems and high-speed WiFi for corporate meetings and seminars.',
  },
]

function Banquet() {

  useEffect(() => {
    document.title = 'Banquet & Events | Lord Anantan Hotel & Resort | Luxury Stay in Bhopal'
  }, [])

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', guests: '', eventType: '', message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Banquet inquiry:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div>

      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Banquet & Events</h1>
          <p>Home &nbsp;/&nbsp; Banquet</p>
        </div>
      </div>

      <section className="banquet-section">
        <div className="banquet-container">

          {/* INTRO */}
          <div className="banquet-intro">

            <div className="banquet-intro-image">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800"
                alt="Banquet Hall"
              />
            </div>

            <div className="banquet-intro-content">
              <p className="section-label">Events & Celebrations</p>
              <h2 className="section-heading">World Class Banquet Facilities</h2>
              <div className="gold-divider"></div>
              <p>
                From intimate gatherings to grand celebrations, Lord Anantan Hotel &
                Resort offers versatile banquet spaces that can be customized
                to suit your every need. Our dedicated events team ensures
                every detail is perfect.
              </p>
              <p>
                With world-class catering, elegant décor, cutting-edge AV
                systems and professional staff, we transform your vision
                into an unforgettable event.
              </p>

              {/* Stats */}
              <div className="banquet-stats">
                <div className="banquet-stat">
                  <span className="banquet-stat-number">3</span>
                  <span className="banquet-stat-label">Venues</span>
                </div>
                <div className="banquet-stat">
                  <span className="banquet-stat-number">500+</span>
                  <span className="banquet-stat-label">Capacity</span>
                </div>
                <div className="banquet-stat">
                  <span className="banquet-stat-number">200+</span>
                  <span className="banquet-stat-label">Events Done</span>
                </div>
              </div>

            </div>

          </div>

          {/* VENUES */}
          <div className="venues-header">
            <p className="section-label">Our Spaces</p>
            <h2 className="section-heading">Venue Options</h2>
            <div className="gold-divider centered"></div>
          </div>

          <div className="venues-grid">
            {venues.map((v) => (
              <div className="venue-card" key={v.id}>
                <div className="venue-card-image">
                  <img src={v.image} alt={v.name} />
                </div>
                <div className="venue-card-body">
                  <h3 className="venue-card-name">{v.name}</h3>
                  <p className="venue-capacity">👥 {v.capacity}</p>
                  <p className="venue-card-desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* INQUIRY FORM */}
          <div className="banquet-inquiry">
            <h3>Send Us an Inquiry</h3>
            <p>Fill the form below and our events team will get back to you within 24 hours</p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px', color: 'var(--gold)' }}>
                <h3>✅ Inquiry Sent Successfully!</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '10px' }}>
                  We will contact you within 24 hours.
                </p>
              </div>
            ) : (
              <form className="inquiry-form" onSubmit={handleSubmit}>

                <div className="form-row">
                  <input type="text"  name="name"  value={formData.name}  onChange={handleChange} placeholder="Your Name *"    required />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address *" required />
                </div>

                <div className="form-row">
                  <input type="tel"  name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number *" required />
                  <input type="date" name="date"  value={formData.date}  onChange={handleChange} required />
                </div>

                <div className="form-row">
                  <input
                    type="number"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Number of Guests *"
                    required
                  />
                  <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                    <option value="">Select Event Type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="conference">Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event requirements..."
                  rows="4"
                />

                <button type="submit" className="inquiry-submit-btn">
                  Send Inquiry
                </button>

              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  )
}

export default Banquet