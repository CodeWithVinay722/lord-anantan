import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Catering() {
  useEffect(() => {
    document.title = 'Catering Service | Lord Anantan'
  }, [])

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Catering Service</h1>
          <p>Home &nbsp;/&nbsp; Catering</p>
        </div>
      </div>
      <div className="coming-soon-page">
        <span style={{ fontSize: '64px' }}>🍱</span>
        <h2>Catering Service</h2>
        <p>
          Our professional catering service details are coming soon.
          For immediate catering enquiries, please contact us directly!
        </p>
        <span className="coming-soon-badge">🚧 Coming Soon</span>
        <Link to="/contact" className="book-now-btn"
          style={{ marginTop: '20px', display: 'inline-block' }}>
          Contact Us
        </Link>
      </div>
    </div>
  )
}

export default Catering