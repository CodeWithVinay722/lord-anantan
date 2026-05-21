import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Facilities.css'

gsap.registerPlugin(ScrollTrigger)

const facilities = [
  { icon: '💒', title: 'Marriage Lawns',  description: 'Beautifully landscaped open-air lawns perfect for grand wedding ceremonies and receptions under the stars.' },
  { icon: '🏛️', title: 'Banquet Hall',    description: 'Elegant air-conditioned banquet halls accommodating up to 500 guests for weddings, conferences and events.' },
  { icon: '🏊', title: 'Swimming Pool',   description: 'A stunning temperature-controlled pool deck surrounded by lush greenery — perfect for relaxation.' },
  { icon: '🍽️', title: 'Restaurant',      description: 'Multi-cuisine restaurant serving authentic Indian, Chinese and Continental dishes crafted by expert chefs.' },
  { icon: '🅿️', title: 'Free Parking',   description: 'Spacious and secure parking facility available for all guests with 24/7 security surveillance.' },
  { icon: '📶', title: 'Free WiFi',       description: 'High-speed complimentary WiFi available throughout the property — in rooms, halls and common areas.' },
  { icon: '🛎️', title: 'Room Service',    description: 'Round the clock room service available to cater to all your needs whenever you want.' },
  { icon: '💆', title: 'Spa & Wellness',  description: 'Rejuvenate your body and mind with our premium spa treatments and wellness therapies.' },
]

function Facilities() {
  const headerRef = useRef(null)
  const gridRef   = useRef(null)

  useEffect(() => {
    if (!headerRef.current || !gridRef.current) return

    // Header fades in
    gsap.fromTo(
      headerRef.current.children,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0,
        duration: 0.8, stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
        }
      }
    )

    // Cards wave in with stagger
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 60, scale: 0.92 },
      {
        opacity: 1, y: 0, scale: 1,
        duration: 0.7, stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        }
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="facilities-section">

      <div className="facilities-header" ref={headerRef}>
        <p className="section-label">What We Offer</p>
        <h2 className="section-heading">Our Facilities</h2>
        <div className="gold-divider centered"></div>
        <p className="facilities-subtext">
          We provide unrivalled guest amenities and services to ensure
          your stay is an unforgettable experience.
        </p>
      </div>

      <div className="facilities-grid" ref={gridRef}>
        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>
            <div className="facility-icon-box">
              <span className="facility-icon">{item.icon}</span>
            </div>
            <h3 className="facility-title">{item.title}</h3>
            <p className="facility-desc">{item.description}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Facilities