import HeroSlider from '../components/HeroSlider'
import { useEffect } from 'react'  
import Welcome from '../components/Welcome'
import Facilities from '../components/Facilities'
import RoomsSection from '../components/RoomsSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'   // ← add this
import SEO from '../components/SEO'

// Inside return — first line:

function Home() {
  useEffect(() => {
    document.title = 'Lord Anantan Hotel & Resort | Luxury Stay in Bhopal'
  }, [])
  return (
    
    <div>
      <SEO
  title="Banquet Hall & Event Venue | Lord Anantam Resort Bhopal"
  description="Grand banquet halls and event venues at Lord Anantam Resort Salaiya Bhopal. Perfect for weddings, corporate events, birthday parties. Capacity up to 500 guests."
  keywords="banquet hall Bhopal, event venue Salaiya, wedding hall Bhopal, party hall Bhopal, Lord Anantam banquet"
/>

      <HeroSlider />
      <Welcome />
      <Facilities />
      <RoomsSection />
      <GallerySection />
      <ContactSection />        
                                    {/* ← add this */}
    </div>
  )
}

export default Home