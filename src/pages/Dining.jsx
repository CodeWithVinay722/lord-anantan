import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Dining() {
  useEffect(() => {
    document.title = 'Dining | Lord Anantan'
  }, [])

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Dining</h1>
          <p>Home &nbsp;/&nbsp; Dining</p>
        </div>
      </div>
      <div className="coming-soon-page">
        <span style={{ fontSize: '64px' }}>🍽️</span>
        <h2>Restaurant & Dining</h2>
        <p>
          Our multi-cuisine restaurant is being set up to offer you the finest
          dining experience. Stay tuned for updates!
        </p>
        <span className="coming-soon-badge">🚧 Coming Soon</span>
        <Link to="/contact" className="book-now-btn"
          style={{ marginTop: '20px', display: 'inline-block' }}>
          Contact Us for Enquiries
        </Link>
      </div>
    </div>
  )
}

export default Dining