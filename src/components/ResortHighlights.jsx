import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/ResortHighlights.css'

gsap.registerPlugin(ScrollTrigger)

// Connectivity data — verified from maps research
const connectivityPoints = [
  {
    icon: '🛣️',
    title: 'NH-46 Access',
    desc: 'Conveniently connected to National Highway 46 (Gwalior–Betul), the longest national highway in Madhya Pradesh, ensuring seamless travel across the state.',
  },
  {
    icon: '🏙️',
    title: 'Hoshangabad Road',
    desc: 'Located near the prominent Hoshangabad Road corridor of Bhopal, offering easy access from all major city areas and commercial hubs.',
  },
  {
    icon: '🚗',
    title: 'Kolar Road',
    desc: 'Directly accessible via Kolar Road, one of the key arterial roads connecting southern Bhopal with smooth, well-maintained routes.',
  },
  {
    icon: '✈️',
    title: 'Airport Proximity',
    desc: 'Raja Bhoj International Airport is approximately 24 km away via VIP Road, making Lord Anantam Resort a perfect choice for travelling guests.',
  },
  {
    icon: '🚉',
    title: 'Railway Access',
    desc: 'Misrod Railway Station is the nearest suburban station, with Bhopal Junction and Habibganj (Rani Kamlapati) station easily reachable within the city.',
  },
  {
    icon: '🔄',
    title: 'Ring Road Connectivity',
    desc: 'Well connected via Bhopal\'s developing ring road network, offering multi-directional access from Indore, Vidisha, Sehore and all surrounding districts.',
  }
  
]

// Resort USP highlights
const highlights = [
  {
    icon: '🌿',
    number: '3+',
    unit: 'Acres',
    title: 'Sprawling Green Estate',
    desc: 'Spread across more than 3 acres of lush, open land — Lord Anantam Resort offers expansive grounds with beautifully maintained gardens, open lawns and natural greenery that creates a true escape from city life.',
    color: '#2C4A3E',
  },
  {
    icon: '🅿️',
    number: '200+',
    unit: 'Vehicles',
    title: 'Massive Parking Area',
    desc: 'Our resort features one of the largest private parking facilities in the region — accommodating over 200 vehicles with ease. Ideal for large wedding functions, corporate gatherings and festive events.',
    color: '#C9A84C',
  },
  {
    icon: '♻️',
    number: '100%',
    unit: 'Eco Friendly',
    title: 'Eco-Conscious Environment',
    desc: 'Lord Anantam Resort is built with nature in mind. Surrounded by trees, natural ventilation and green open spaces, we are committed to providing a clean, peaceful and environmentally responsible experience.',
    color: '#2C4A3E',
  },
]

function ResortHighlights() {
  const headerRef      = useRef(null)
  const highlightsRef  = useRef(null)
  const connectRef     = useRef(null)
  const connectGridRef = useRef(null)

  useEffect(() => {
    if (!headerRef.current) return

    // Animate header
    gsap.fromTo(
      Array.from(headerRef.current.children),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0,
        duration: 0.8, stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
      }
    )

    // Animate highlight cards
    if (highlightsRef.current) {
      gsap.fromTo(
        Array.from(highlightsRef.current.children),
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.9, stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: highlightsRef.current, start: 'top 80%' }
        }
      )
    }

    // Animate connectivity header
    if (connectRef.current) {
      gsap.fromTo(
        Array.from(connectRef.current.children),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0,
          duration: 0.8, stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: connectRef.current, start: 'top 80%' }
        }
      )
    }

    // Animate connectivity cards
    if (connectGridRef.current) {
      gsap.fromTo(
        Array.from(connectGridRef.current.children),
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.7, stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: connectGridRef.current, start: 'top 80%' }
        }
      )
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="highlights-section">

      {/* ── SECTION HEADER ── */}
      <div className="highlights-header" ref={headerRef}>
        <p className="section-label">What Sets Us Apart</p>
        <h2 className="section-heading">Resort Highlights</h2>
        <div className="gold-divider centered"></div>
        <p className="highlights-subtext">
          Lord Anantam Resort is more than a luxury stay — it is a destination
          defined by space, nature and unmatched accessibility.
        </p>
      </div>

      {/* ── THREE MAIN HIGHLIGHT CARDS ── */}
      <div className="highlights-grid" ref={highlightsRef}>
        {highlights.map((item, i) => (
          <div className="highlight-card" key={i}>

            {/* Top colored band */}
            <div
              className="highlight-card-top"
              style={{ background: item.color }}
            >
              <span className="highlight-icon">{item.icon}</span>
              <div className="highlight-number-box">
                <span className="highlight-number">{item.number}</span>
                <span className="highlight-unit">{item.unit}</span>
              </div>
            </div>

            {/* Card body */}
            <div className="highlight-card-body">
              <h3 className="highlight-title">{item.title}</h3>
              <p className="highlight-desc">{item.desc}</p>
            </div>

          </div>
        ))}
      </div>

      {/* ── CONNECTIVITY SECTION ── */}
      <div className="connectivity-wrapper">

        <div className="connectivity-header" ref={connectRef}>
          <p className="section-label">Location Advantage</p>
          <h2 className="section-heading">Exceptional Connectivity</h2>
          <div className="gold-divider centered"></div>
          <p className="highlights-subtext">
            Strategically located in Salaiya, Bhopal — our resort offers
            outstanding road connectivity to highways in all directions,
            making your journey to us effortless from anywhere.
          </p>
        </div>

        {/* Connectivity cards grid */}
        <div className="connectivity-grid" ref={connectGridRef}>
          {connectivityPoints.map((point, i) => (
            <div className="connectivity-card" key={i}>
              <div className="connectivity-icon">{point.icon}</div>
              <div className="connectivity-text">
                <h4 className="connectivity-title">{point.title}</h4>
                <p className="connectivity-desc">{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Map CTA */}
        <div className="connectivity-cta">
          <p>📍 Located at <strong>Salaiya, Bhopal, Madhya Pradesh</strong></p>
          <a
            href="https://www.google.com/maps/place/LORD+ANATAN+RESORT+,+SALAIYA+,BHOPAL/@23.1601965,77.4454575,20.04z"
            target="_blank"
            rel="noreferrer"
            className="directions-btn"
          >
            Get Directions on Google Maps
          </a>

          
        </div>
        ⚠️ Legal Disclaimer to Add
Add this small note inside ResortHighlights.jsx under the connectivity CTA:
jsx<p style={{
  fontSize: '11px',
  color: 'rgba(255,255,255,0.4)',
  marginTop: '16px',
  fontStyle: 'italic'
}}>
  * Road connectivity and distances are approximate and subject to route conditions.
  Please verify current routes via Google Maps before travel.
</p>
      </div>

    </section>
  )
}

export default ResortHighlights