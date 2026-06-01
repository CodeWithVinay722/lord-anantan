import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/Welcome.css'

gsap.registerPlugin(ScrollTrigger)

function Welcome() {
  const [showMore, setShowMore] = useState(false)

  const sectionRef  = useRef(null)
  const imgBigRef   = useRef(null)
  const imgSmallRef = useRef(null)
  const badgeRef    = useRef(null)
  const contentRef  = useRef(null)
  const featuresRef = useRef(null)

  useEffect(() => {
    if (!imgBigRef.current) return

    // Images + badge timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      }
    })

    tl.fromTo(imgBigRef.current,
      { opacity: 0, x: -80 },
      { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
    )
    .fromTo(imgSmallRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)' },
      '-=0.5'
    )
    .fromTo(badgeRef.current,
      { opacity: 0, scale: 0, rotation: -15 },
      { opacity: 1, scale: 1, rotation: 0, duration: 0.7, ease: 'back.out(2)' },
      '-=0.3'
    )

    // Content slides in from right
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current.children,
        { opacity: 0, x: 70 },
        { opacity: 1, x: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' },
        '-=0.7'
      )
    }

    // Feature items pop in
    if (featuresRef.current) {
      gsap.fromTo(
        featuresRef.current.children,
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5, stagger: 0.1,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 85%',
          }
        }
      )
    }

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="welcome-section" ref={sectionRef}>
      <div className="welcome-container">

        <div className="welcome-images">
          <div className="img-big" ref={imgBigRef}>
  <img src="/images/hero/hero1.jpeg" alt="Lord Anantam" />
</div>

<div className="img-small" ref={imgSmallRef}>
  <img src="/images/hero/hero2.jpeg" alt="Lord Anantam" />
</div>
          <div className="experience-badge" ref={badgeRef}>
  <span className="badge-number">5+</span>
  <span className="badge-text">YEARS OF EXPERIENCE IN HOSPITALITY & GUEST SERVICES</span>
</div>
        </div>

        <div className="welcome-content" ref={contentRef}>
          <p className="section-label">Welcome to Lord Anantan Hotel & Resort</p>
          <h2 className="section-heading">
            Stay in Elegance at the Best Hotel and Resort
          </h2>
          <div className="gold-divider"></div>
          <p className="welcome-text">
            Lord Anantan Hotel & Resort offers you a world-class luxury experience
            nestled in the heart of the city. Our property is designed to
            provide the perfect blend of comfort, elegance, and warm
            hospitality that makes every stay truly memorable.
          </p>
          {showMore && (
            <p className="welcome-text">
              Whether you are visiting for a relaxing staycation, a grand
              wedding celebration, a corporate event, or simply to enjoy our
              exquisite dining experience — Lord Anantan Hotel & Resort is your
              perfect destination. Our spacious rooms, lush green surroundings,
              sparkling pool, and dedicated staff ensure that every moment of
              your stay is nothing short of extraordinary.
            </p>
          )}
          <button
            className="read-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'Read Less ▲' : 'Read More ▼'}
          </button>

          <div className="welcome-features" ref={featuresRef}>
            <div className="feature-item">
              <span className="feature-icon">🏨</span>
              <span className="feature-text">Luxury Rooms</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🍽️</span>
              <span className="feature-text">Fine Dining</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🏊</span>
              <span className="feature-text">Swimming Pool</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">💒</span>
              <span className="feature-text">Wedding Venue</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Welcome