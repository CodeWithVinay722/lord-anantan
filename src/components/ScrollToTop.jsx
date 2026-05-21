// This component listens to URL changes
// and scrolls to top whenever user navigates to a new page
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  // useLocation gives us the current URL
  const { pathname } = useLocation()

  useEffect(() => {
    // Every time pathname changes (user navigates) → scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])           // runs whenever pathname changes

  // This component renders nothing — it's invisible
  return null
}

export default ScrollToTop