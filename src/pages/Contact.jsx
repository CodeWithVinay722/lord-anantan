import ContactSection from '../components/ContactSection'
import { useEffect } from 'react'  
import SEO from '../components/SEO'


// Contact page just reuses our ContactSection component
// We already built ContactSection — no need to rebuild it!
function Contact() {
  useEffect(() => {
    document.title = 'Lord Anantan Hotel & Resort | Luxury Stay in Bhopal'
  }, [])
  return (
    <div>

      <SEO
  title="Contact Us | Lord Anantam Resort Bhopal"
  description="Get in touch with Lord Anantam Resort Salaiya Bhopal. Find our location, phone number, email address and opening hours."
  keywords="contact Lord Anantam, resort Bhopal, hotel contact Bhopal"
/>
      {/* PAGE HERO BANNER — small banner at top of every inner page */}
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Contact Us</h1>
          <p>Home &nbsp;/&nbsp; Contact Us</p>
        </div>
      </div>

      {/* Reuse our existing ContactSection */}
      <ContactSection />

    </div>
  )
}

export default Contact