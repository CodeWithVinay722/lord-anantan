import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/RoomsPage.css'

const allRooms = [
  {
    id: 1,
    image: '/images/rooms/room1.jpeg',
    name: 'Deluxe Room',
    price: '₹ On Request',
    size: '320 sq ft',
    guests: '2 Adults',
    beds: '1 King Bed',
    description: 'Our Deluxe Rooms offer a perfect blend of modern comfort and elegant design. Ideal for couples and solo travelers seeking a luxurious retreat.',
    amenities: ['King Bed', 'AC', 'Free WiFi', 'LED TV', 'Room Service', 'Mini Fridge', 'Hot Water', 'Wardrobe'],
  },
  {
    id: 2,
    image: '/images/rooms/room2.jpeg',
    name: 'Executive Suite',
    price: '₹ On Request',
    size: '520 sq ft',
    guests: '2 Adults',
    beds: '1 King Bed',
    description: 'Experience elevated luxury in our Executive Suites featuring a separate sitting area, premium furnishings and breathtaking views.',
    amenities: ['King Bed', 'Sitting Area', 'Mini Bar', 'Bathtub', 'WiFi', 'Work Desk', 'Room Service', 'Safe'],
  },
  {
    id: 3,
    image: '/images/rooms/room3.jpeg',
    name: 'Family Suite',
    price: '₹ On Request',
    size: '720 sq ft',
    guests: '4 Adults',
    beds: '2 Bedrooms',
    description: 'Perfect for families, our Family Suites offer two bedrooms, a spacious living area and all the comforts of home.',
    amenities: ['2 Bedrooms', 'Living Room', 'Kitchenette', 'AC', 'WiFi', '2 Bathrooms', 'TV', 'Room Service'],
  },
  {
    id: 4,
    image: '/images/rooms/room4.jpeg',
    name: 'Presidential Suite',
    price: '₹ On Request',
    size: '1200 sq ft',
    guests: '2 Adults',
    beds: '1 Master Bed',
    description: 'The pinnacle of luxury. Our Presidential Suite features butler service, jacuzzi and unparalleled opulence.',
    amenities: ['Master Bedroom', 'Private Pool', 'Butler Service', 'Jacuzzi', 'WiFi', 'Home Theatre', 'Kitchen', 'Balcony'],
  },
]

function Rooms() {
  const [expandedRoom, setExpandedRoom] = useState(null)

  useEffect(() => {
    document.title = 'Rooms & Suites | Lord Anantan'
  }, [])

  const toggleRoom = (id) => {
    setExpandedRoom(expandedRoom === id ? null : id)
  }

  return (
    <div>

      {/* PAGE BANNER */}
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Rooms & Suites</h1>
          <p>Home &nbsp;/&nbsp; Rooms & Suites</p>
        </div>
      </div>

      <section className="rooms-page-section">

        {/* HEADER */}
        <div className="rooms-header">
          <p className="section-label">Luxury Accommodation</p>
          <h2 className="section-heading">Choose Your Perfect Stay</h2>
          <div className="gold-divider centered"></div>
          <p className="rooms-subtext">
            Every room at Lord Anantan is a sanctuary of comfort,
            thoughtfully designed with premium amenities for an exceptional stay.
          </p>
        </div>

        {/* ROOMS LIST */}
        <div className="rooms-list">
          {allRooms.map((room, index) => (
            <div
              key={room.id}
              className={`room-row ${index % 2 !== 0 ? 'reverse' : ''}`}
            >

              {/* IMAGE */}
              <div className="room-row-image">
                <img
                  src={room.image}
                  alt={room.name}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
                <div className="room-row-price">
                  From {room.price}
                  <small>/night</small>
                </div>
              </div>

              {/* CONTENT */}
              <div className="room-row-content">
                <h3 className="room-row-name">{room.name}</h3>

                <div className="room-stats">
                  <span>📐 {room.size}</span>
                  <span>👥 {room.guests}</span>
                  <span>🛏️ {room.beds}</span>
                </div>

                <div className="gold-divider"></div>

                <p className="room-row-desc">{room.description}</p>

                {expandedRoom === room.id && (
                  <ul className="room-full-amenities">
                    {room.amenities.map((a, i) => (
                      <li key={i}>
                        <span className="amenity-dot">✦</span> {a}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="room-row-btns">
                  <button
                    className="toggle-amenities-btn"
                    onClick={() => toggleRoom(room.id)}
                  >
                    {expandedRoom === room.id
                      ? 'Hide Amenities ▲'
                      : 'View Amenities ▼'}
                  </button>
                  <Link to="/contact" className="book-now-btn">
                    Book Now
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

    </div>
  )
}

export default Rooms