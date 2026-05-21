import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function Decoration() {
  useEffect(() => {
    document.title = 'Decoration & Lighting | Lord Anantan'
  }, [])

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Decoration & Lighting</h1>
          <p>Home &nbsp;/&nbsp; Decoration</p>
        </div>
      </div>
      <div className="coming-soon-page">
        <span style={{ fontSize: '64px' }}>🎨</span>
        <h2>Decoration & Lighting</h2>
        <p>
          Our decoration and lighting packages are being curated.
          Check back soon or contact us for custom decoration enquiries!
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

export default Decoration