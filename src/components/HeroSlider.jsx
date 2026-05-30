import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { gsap } from 'gsap'
import '../styles/HeroSlider.css'

const slides = [
  {
    image: '/images/hero/hero1.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Experience An Elated Stay',
  },
  {
    image: '/images/hero/hero2.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Surroundings To Please Your Heart',
  },
  {
    image: '/images/hero/hero3.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Welcome to Lord Anantam',
  },
  {
    image: '/images/hero/hero4.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Elegance Redefined',
  },
  {
    image: '/images/hero/hero5.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'A Refreshing Poolside',
  },
  {
    image: '/images/hero/hero6.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Your Perfect Getaway',
  },
  {
    image: '/images/hero/hero7.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Relish The Scrumptious Food',
  },
  {
    image: '/images/hero/hero8.jpeg',
    subtitle: 'Luxury Hotel Experience',
    title: 'Moments Worth Remembering',
  },
]

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const contentRef  = useRef(null)
  const navigate    = useNavigate()    // ← React Router hook for navigation

  const goToNext = () =>
    setCurrentIndex(prev => prev === slides.length - 1 ? 0 : prev + 1)

  const goToPrev = () =>
    setCurrentIndex(prev => prev === 0 ? slides.length - 1 : prev - 1)

  // Auto play every 5 seconds
  useEffect(() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [currentIndex])

  // Animate text on every slide change
  useEffect(() => {
    if (!contentRef.current) return
    gsap.killTweensOf(contentRef.current.children)
    gsap.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 60, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    )
  }, [currentIndex])

  // Book Now handler using useNavigate
  const handleBookNow = () => {
    navigate('/contact')
  }

  return (
    <div className="hero-slider">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-overlay">
            {index === currentIndex && (
              <div className="slide-content" ref={contentRef}>
                <p className="slide-subtitle">{slide.subtitle}</p>
                <h1 className="slide-title">{slide.title}</h1>

                {/* Button uses onClick with useNavigate — most reliable */}
                <button
                  className="slide-btn"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>

              </div>
            )}
          </div>
        </div>
      ))}

      <button className="arrow arrow-left" onClick={goToPrev}>
        <FaChevronLeft />
      </button>
      <button className="arrow arrow-right" onClick={goToNext}>
        <FaChevronRight />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

    </div>
  )
}

export default HeroSlider