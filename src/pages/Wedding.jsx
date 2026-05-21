import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Wedding() {
  useEffect(() => {
    document.title = 'Wedding Venue | Lord Anantan'
  }, [])

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Wedding Venue</h1>
          <p>Home &nbsp;/&nbsp; Wedding</p>
        </div>
      </div>
      <div className="coming-soon-page">
        <span style={{ fontSize: '64px' }}>💒</span>
        <h2>Wedding Venue</h2>
        <p>
          We are preparing something magical for your special day.
          Our wedding packages and venue details will be available very soon!
        </p>
        <span className="coming-soon-badge">🚧 Coming Soon</span>
        <Link to="/contact" className="book-now-btn"
          style={{ marginTop: '20px', display: 'inline-block' }}>
          Contact Us for Wedding Enquiries
        </Link>
      </div>
    </div>
  )
}

export default Wedding