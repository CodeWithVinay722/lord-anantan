import { useEffect } from 'react'
import HeroSlider      from '../components/HeroSlider'
import Welcome         from '../components/Welcome'
import ResortHighlights from '../components/ResortHighlights'   // ← add
import Facilities      from '../components/Facilities'
import RoomsSection    from '../components/RoomsSection'
import GallerySection  from '../components/GallerySection'
import ContactSection  from '../components/ContactSection'
import SEO             from '../components/SEO'

function Home() {
  useEffect(() => {
    document.title = 'Lord Anantam Resort | Luxury Hotel & Marriage Garden in Salaiya, Bhopal'
  }, [])

  return (
    <div>
      <SEO
        title="Lord Anantam Resort | Luxury Hotel & Marriage Garden Salaiya Bhopal"
        description="Lord Anantam Resort — Luxury Hotel on 3+ acres in Salaiya Bhopal. Premium rooms, banquet halls, wedding venue, huge parking, eco-friendly. NH-46 connected."
        keywords="Lord Anantam, resort Salaiya Bhopal, luxury hotel Bhopal, marriage garden Bhopal, NH-46 resort, banquet hall Bhopal"
      />
      <HeroSlider />
      <Welcome />
      <ResortHighlights />     {/* ← placed between Welcome and Facilities */}
      <Facilities />
      <RoomsSection />
      <GallerySection />
      <ContactSection />
    </div>
  )
}

export default Home