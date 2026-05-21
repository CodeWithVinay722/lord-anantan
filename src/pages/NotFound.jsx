import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      background: 'var(--cream)',
      textAlign: 'center',
      padding: '20px',
    }}>
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '120px',
        color: 'var(--gold)',
        lineHeight: 1,
      }}>404</h1>

      <h2 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '32px',
        color: 'var(--dark)',
      }}>Page Not Found</h2>

      <p style={{ color: 'var(--gray)', fontSize: '15px', maxWidth: '400px' }}>
        The page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/" style={{
        padding: '14px 40px',
        background: 'var(--dark-green)',
        color: 'var(--white)',
        textDecoration: 'none',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '2px',
        textTransform: 'uppercase',
        marginTop: '10px',
        transition: 'background 0.3s',
      }}>
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound