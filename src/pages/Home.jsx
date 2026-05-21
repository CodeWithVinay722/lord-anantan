import HeroSlider from '../components/HeroSlider'
import { useEffect } from 'react'  
import Welcome from '../components/Welcome'
import Facilities from '../components/Facilities'
import RoomsSection from '../components/RoomsSection'
import GallerySection from '../components/GallerySection'
import ContactSection from '../components/ContactSection'   // ← add this

function Home() {
  useEffect(() => {
    document.title = 'Lord Anantan Hotel & Resort | Luxury Stay in Bhopal'
  }, [])
  return (
    <div>
      <HeroSlider />
      <Welcome />
      <Facilities />
      <RoomsSection />
      <GallerySection />
      <ContactSection />                                      {/* ← add this */}
    </div>
  )
}

export default Home