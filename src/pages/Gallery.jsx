import GallerySection from '../components/GallerySection'
import { useEffect } from 'react'  

function Gallery() {
  useEffect(() => {
    document.title = 'Photo Gallery | Lord Anantan Hotel & Resort | Luxury Stay in Bhopal'
  }, [])
  return (
    <div>
      <div className="page-banner">
        <div className="page-banner-overlay">
          <h1>Photo Gallery</h1>
          <p>Home &nbsp;/&nbsp; Gallery</p>
        </div>
      </div>
      <GallerySection />
    </div>
  )
}

export default Gallery