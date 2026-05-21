import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import '../styles/RoomsSection.css'

gsap.registerPlugin(ScrollTrigger)

const rooms = [
  {
    id: 1,
    image: '/images/rooms/room1.jpeg',
    name: 'Deluxe Room',
    price: '₹ On Request',
    size: '320 sq ft',
    amenities: ['King Bed', 'AC', 'Free WiFi', 'TV', 'Room Service'],
  },
  {
    id: 2,
    image: '/images/rooms/room2.jpeg',
    name: 'Executive Suite',
    price: '₹ On Request',
    size: '520 sq ft',
    amenities: ['King Bed', 'Sitting Area', 'Mini Bar', 'Bathtub', 'WiFi'],
  },
  {
    id: 3,
    image: '/images/rooms/room3.jpeg',
    name: 'Family Suite',
    price: '₹ On Request',
    size: '720 sq ft',
    amenities: ['2 Bedrooms', 'Living Room', 'Kitchen', 'AC', 'WiFi'],
  },
  {
    id: 4,
    image: '/images/rooms/room4.jpeg',
    name: 'Presidential Suite',
    price: '₹ On Request',
    size: '1200 sq ft',
    amenities: ['Master Bedroom', 'Private Pool', 'Butler', 'Jacuzzi', 'WiFi'],
  },
]

function RoomsSection() {
  const headerRef = useRef(null)
  const gridRef   = useRef(null)

  useEffect(() => {
    if (!headerRef.current || !gridRef.current) return

    gsap.fromTo(
      Array.from(headerRef.current.children),
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 80%' }
      }
    )

    gsap.fromTo(
      Array.from(gridRef.current.children),
      { opacity: 0, y: 80 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
      }
    )

    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  return (
    <section className="rooms-section">

      <div className="rooms-header" ref={headerRef}>
        <p className="section-label">Luxury Experience</p>
        <h2 className="section-heading">Rooms & Suites</h2>
        <div className="gold-divider centered"></div>
        <p className="rooms-subtext">
          Each of our rooms is thoughtfully designed to offer the perfect
          blend of comfort, style and modern amenities for an unforgettable stay.
        </p>
      </div>

      <div className="rooms-grid" ref={gridRef}>
        {rooms.map((room) => (
          <div className="room-card" key={room.id}>

            <div className="room-image-box">
              <img src={room.image} alt={room.name} className="room-image" />
              <div className="room-overlay">
                <Link to="/rooms" className="view-details-btn">View Details</Link>
              </div>
              <div className="room-price-tag">
                <span>From {room.price}</span>
                <small>/night</small>
              </div>
            </div>

            <div className="room-card-body">
              <div className="room-card-top">
                <h3 className="room-name">{room.name}</h3>
                <span className="room-size">📐 {room.size}</span>
              </div>
              <ul className="room-amenities">
                {room.amenities.map((item, i) => (
                  <li key={i}>
                    <span className="amenity-dot">✦</span>{item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="book-now-btn">Book Now</Link>
            </div>

          </div>
        ))}
      </div>

      <div className="rooms-footer">
        <Link to="/rooms" className="view-all-btn">View All Rooms</Link>
      </div>

    </section>
  )
}

export default RoomsSection