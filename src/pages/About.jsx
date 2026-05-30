import { Link } from 'react-router-dom'
import '../styles/AboutPage.css'
import { useEffect } from 'react'  

// Why choose us data
const whyUs = [
  {
    icon: '🏆',
    title: 'Award Winning',
    desc: 'Recognized as the best luxury resort in Bhopal for 5 consecutive years by hospitality associations.',
  },
  {
    icon: '👨‍🍳',
    title: 'Expert Chefs',
    desc: 'Our culinary team brings decades of experience crafting authentic flavors from across the world.',
  },
  {
    icon: '🛎️',
    title: '24/7 Service',
    desc: 'Our dedicated staff is available round the clock to ensure every need of yours is met instantly.',
  },
  {
    icon: '🌿',
    title: 'Eco Friendly',
    desc: 'We are committed to sustainable practices — from solar energy to zero plastic across the property.',
  },
]

// Team data

const team = [
  {
    name: 'Shelesh Tantway',
    role: 'Owner & Director',
    image: '/images/director.jpeg',  // save his photo as director.jpeg in public/images/
  },
]

// Stats data
const stats = [
  { number: '10+', label: 'Years of Excellence' },
  { number: '50+', label: 'Luxury Rooms' },
  { number: '5000+', label: 'Happy Guests' },
  { number: '200+', label: 'Events Hosted' },
]

function About() {
    useEffect(() => {
    document.title = 'About Us | Lord Anantan Hotel & Resort | Luxury Stay in Bhopal'
  }, [])
  return (
    <div>

      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>About Us</h1>
          <p>Home &nbsp;/&nbsp; About Us</p>
        </div>
      </div>

      <section className="about-section">
        <div className="about-container">

          {/* ── INTRO ── */}
          <div className="about-intro">

            {/* Left — two overlapping images */}
            <div className="about-intro-images">

              <div className="about-img-big">
  <img src="/images/hero/hero3.jpeg" alt="Lord Anantam" />
</div>

<div className="about-img-small">
  <img src="/images/hero/hero4.jpeg" alt="Lord Anantam" />
</div>
              <div className="about-badge">
                <span className="about-badge-number">5+</span>
                <span className="about-badge-text">Years of Experience with Lord of drinks</span>
              </div>

            </div>

            {/* Right — content */}
            <div className="about-intro-content">
              <p className="section-label">Our Story</p>
              <h2 className="section-heading">
                A Legacy of Luxury & Warm Hospitality
              </h2>
              <div className="gold-divider"></div>

              <p>
                Founded over a decade ago, Lord Anantan Hotel & Resort was born
                from a simple dream — to create a place where every guest
                feels truly special. What started as a boutique property
                has grown into one of Bhopal's most celebrated luxury
                destinations.
              </p>

              <p>
                Our property spans across lush green acres, featuring
                elegantly appointed rooms, world-class dining, stunning
                event venues and a sparkling pool deck — all designed to
                give you an experience that goes beyond just a stay.
              </p>

              <p>
                At Lord Anantan, hospitality is not just a service — it is our
                passion, our culture, and our commitment to you.
              </p>

              <Link to="/contact" className="book-now-btn"
                style={{ width: 'fit-content', marginTop: '8px' }}
              >
                Get In Touch
              </Link>

            </div>

          </div>

          {/* ── WHY CHOOSE US ── */}
          <div className="why-us-section">
            <div className="why-us-inner">

              <div className="why-us-header">
                <p className="section-label">Our Promise</p>
                <h2 className="section-heading">Why Choose Lord Anantan?</h2>
                <div className="gold-divider"></div>
              </div>

              <div className="why-us-grid">
                {whyUs.map((item, i) => (
                  <div className="why-card" key={i}>
                    <span className="why-icon">{item.icon}</span>
                    <h3 className="why-title">{item.title}</h3>
                    <p className="why-desc">{item.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* ── TEAM ── */}
          {/* TEAM */}
<div className="team-section">
  <div className="team-header">
    <p className="section-label">The Person Behind The Magic</p>
    <h2 className="section-heading">Meet Our Director</h2>
    <div className="gold-divider centered"></div>
  </div>

  {/* Single card centered */}
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  }}>
    <div className="team-card" style={{ width: '280px' }}>
      <div className="team-image">
        <img src="/images/director.jpeg" alt="Shelesh Tantway" />
      </div>
      <div className="team-info">
        <h3 className="team-name">Shelesh Tantway</h3>
        <p className="team-role">Owner & Director</p>
      </div>
    </div>
  </div>

</div>

          {/* ── STATS BANNER ── */}
          <div className="stats-banner">
            <div className="stats-inner">
              {stats.map((stat, i) => (
                <div className="stat-item" key={i}>
                  <span className="stat-number">{stat.number}</span>
                  <div className="stat-divider"></div>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default About