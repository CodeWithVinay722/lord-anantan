import { useEffect } from 'react'

function Terms() {
  useEffect(() => {
    document.title = 'Terms & Conditions | Lord Anantam Resort'
  }, [])

  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Terms & Conditions</h1>
          <p>Home / Terms & Conditions</p>
        </div>
      </div>

      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 40px',
          lineHeight: '1.9',
          color: '#333'
        }}
      >
        <h2
          style={{
            fontFamily: 'Playfair Display',
            color: '#2C4A3E',
            marginBottom: '20px'
          }}
        >
          Terms & Conditions
        </h2>

        <p style={{ color: '#888', marginBottom: '40px' }}>
          Last Updated:{' '}
          {new Date().toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          1. Acceptance of Terms
        </h3>
        <p>
          By accessing and using the Lord Anantam Resort website, you agree to
          comply with these Terms & Conditions. If you do not agree with any
          part of these terms, please do not use our website.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          2. Booking & Enquiries
        </h3>
        <p>
          All room reservations, banquet bookings, and service enquiries are
          subject to availability and confirmation by Lord Anantam Resort.
          Submission of an enquiry form does not guarantee a booking.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          3. Pricing & Availability
        </h3>
        <p>
          Prices, packages, offers, and availability displayed on the website
          may change without prior notice. Final pricing will be confirmed by
          our team during booking.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          4. User Responsibilities
        </h3>
        <p>
          Users agree not to misuse the website, attempt unauthorized access,
          upload harmful content, or engage in any activity that may affect the
          website's functionality.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          5. Intellectual Property
        </h3>
        <p>
          All website content including text, images, logos, designs, and
          branding belongs to Lord Anantam Resort unless otherwise stated.
          Unauthorized reproduction or distribution is prohibited.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          6. Third-Party Services
        </h3>
        <p>
          Our website may use third-party services such as Google Maps and
          WhatsApp. We are not responsible for the content, policies, or
          practices of these external services.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          7. Limitation of Liability
        </h3>
        <p>
          Lord Anantam Resort shall not be liable for any direct, indirect,
          incidental, or consequential damages arising from the use of this
          website or reliance on the information provided.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          8. Changes to Terms
        </h3>
        <p>
          We reserve the right to update or modify these Terms & Conditions at
          any time without prior notice. Continued use of the website
          constitutes acceptance of any changes.
        </p>

        <h3 style={{ color: '#2C4A3E', marginTop: '30px' }}>
          9. Contact Information
        </h3>
        <p>
          For any questions regarding these Terms & Conditions, please contact:
        </p>

        <p>
          <strong>Lord Anantam Resort</strong>
          <br />
          Salaiya, Bhopal, Madhya Pradesh
          <br />
          Email: lordanantam@gmail.com
          <br />
          Phone: +91 96697 52322
        </p>
      </section>
    </div>
  )
}

export default Terms