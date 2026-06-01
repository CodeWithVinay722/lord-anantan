import { useEffect } from 'react'

function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | Lord Anantam Resort'
  }, [])

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Privacy Policy</h1>
          <p>Home / Privacy Policy</p>
        </div>
      </div>

      <section style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '80px 40px',
        lineHeight: '1.9',
        color: '#333'
      }}>
        <h2 style={{ fontFamily: 'Playfair Display', color: '#2C4A3E', marginBottom: '20px' }}>
          Privacy Policy
        </h2>
        <p style={{ color: '#888', marginBottom: '40px' }}>
          Last Updated: {new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>1. Information We Collect</h3>
        <p>When you submit an enquiry through our contact form, we collect your name, email address, phone number and message. This information is used solely to respond to your enquiry.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>2. How We Use Your Information</h3>
        <p>The information you provide is used to:</p>
        <ul>
          <li>Respond to your booking or service enquiries</li>
          <li>Provide information about our services</li>
          <li>Contact you regarding your reservation</li>
        </ul>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>3. WhatsApp Communication</h3>
        <p>Enquiries submitted through our contact form are forwarded to our WhatsApp business number (+91 96697 52322) for prompt response. By submitting the form, you consent to this communication.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>4. Data Sharing</h3>
        <p>We do not sell, trade, or share your personal information with third parties. Your data is used exclusively for responding to your enquiry.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>5. Cookies</h3>
        <p>Our website does not use tracking cookies. We use only essential technical cookies required for website functionality.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>6. Third Party Services</h3>
        <p>Our website uses Google Maps for location display and WhatsApp for communication. These services have their own privacy policies which govern their data collection practices.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>7. Data Security</h3>
        <p>We take reasonable precautions to protect your information. However, no method of transmission over the internet is 100% secure.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>8. Your Rights</h3>
        <p>You have the right to request deletion of your personal data. Contact us at lordanantam@gmail.com for any data-related requests.</p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>9. Contact</h3>
        <p>For any privacy-related concerns, contact us at:</p>
        <p><strong>Lord Anantam Resort</strong><br/>
        Salaiya, Bhopal, Madhya Pradesh<br/>
        Email: lordanantam@gmail.com<br/>
        Phone: +91 96697 52322</p>
      </section>
    </div>
  )
}

export default Privacy