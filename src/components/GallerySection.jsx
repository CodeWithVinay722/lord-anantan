// useState to track which image is open in lightbox
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTimes, FaChevronLeft, FaChevronRight, FaExpand } from 'react-icons/fa'
import '../styles/GallerySection.css'

// Gallery images data
// category = used for filter tabs
import { galleryImages } from '../utils/images'

const images = [
  { id: 1,  src: galleryImages[0],  category: 'hotel',  title: 'Lord Anantan' },
  { id: 2,  src: galleryImages[1],  category: 'hotel',  title: 'Hotel Exterior' },
  { id: 3,  src: galleryImages[2],  category: 'hotel',  title: 'Property View' },
  { id: 4,  src: galleryImages[3],  category: 'hotel',  title: 'Hotel Lobby' },
  { id: 5,  src: galleryImages[4],  category: 'rooms',  title: 'Luxury Room' },
  { id: 6,  src: galleryImages[5],  category: 'rooms',  title: 'Suite' },
  { id: 7,  src: galleryImages[6],  category: 'rooms',  title: 'Deluxe Room' },
  { id: 8,  src: galleryImages[7],  category: 'rooms',  title: 'Premium Room' },
  { id: 9,  src: galleryImages[8],  category: 'events', title: 'Grand Event' },
  { id: 10, src: galleryImages[9],  category: 'events', title: 'Banquet Setup' },
  { id: 11, src: galleryImages[10], category: 'events', title: 'Celebration' },
  { id: 12, src: galleryImages[11], category: 'events', title: 'Function Hall' },
  { id: 13, src: galleryImages[12], category: 'events', title: 'Evening Event' },
  { id: 14, src: galleryImages[13], category: 'events', title: 'Party Setup' },
  { id: 15, src: galleryImages[14], category: 'pool',   title: 'Swimming Pool' },
  { id: 16, src: galleryImages[15], category: 'pool',   title: 'Pool Area' },
  { id: 17, src: galleryImages[16], category: 'pool',   title: 'Pool Deck' },
  { id: 18, src: galleryImages[17], category: 'dining', title: 'Restaurant' },
  { id: 19, src: galleryImages[18], category: 'dining', title: 'Fine Dining' },
  { id: 20, src: galleryImages[19], category: 'dining', title: 'Dining Area' },
  { id: 21, src: galleryImages[20], category: 'hotel',  title: 'Garden Area' },
  { id: 22, src: galleryImages[21], category: 'hotel',  title: 'Resort View' },
  { id: 23, src: galleryImages[22], category: 'events', title: 'Special Event' },
  { id: 24, src: galleryImages[23], category: 'hotel',  title: 'Hotel Night View' },
]

// Filter tab options
// Remove 'wedding' since we don't have wedding images
const filters = ['all', 'hotel', 'rooms', 'events', 'pool', 'dining']
function GallerySection() {

  // activeFilter = which tab is selected (default = 'all')
  const [activeFilter, setActiveFilter] = useState('all')

  // lightboxIndex = which image is open in lightbox (-1 = closed)
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  // Filter images based on active tab
  // if 'all' is selected show everything, else only matching category
  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter((img) => img.category === activeFilter)

  // Open lightbox at a specific index
  const openLightbox = (index) => setLightboxIndex(index)

  // Close lightbox
  const closeLightbox = () => setLightboxIndex(-1)

  // Go to next image in lightbox
  const nextImage = () => {
    setLightboxIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : prev + 1
    )
  }

  // Go to previous image in lightbox
  const prevImage = () => {
    setLightboxIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    )
  }

  return (
    <section className="gallery-section">

      {/* SECTION HEADER */}
      <div className="gallery-header">
        <p className="section-label">Our Property</p>
        <h2 className="section-heading">Photo Gallery</h2>
        <div className="gold-divider centered"></div>
        <p className="gallery-subtext">
          Take a glimpse into the world of luxury and comfort
          that awaits you at Lord Anantan Hotel & Resort.
        </p>
      </div>

      {/* FILTER TABS */}
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            // add 'active' class to currently selected tab
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {/* Capitalize first letter of filter name */}
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* IMAGE GRID */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            className="gallery-item"
            key={img.id}
            // clicking an image opens lightbox at that index
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt={img.title} />

            {/* Hover overlay */}
            <div className="gallery-overlay">
              <FaExpand className="expand-icon" />
              <p className="gallery-img-title">{img.title}</p>
            </div>

          </div>
        ))}
      </div>

      {/* VIEW FULL GALLERY button */}
      <div className="gallery-footer">
        <Link to="/gallery" className="view-all-btn">
          View Full Gallery
        </Link>
      </div>

      {/* ── LIGHTBOX ── */}
      {/* Only renders when lightboxIndex is not -1 */}
      {lightboxIndex !== -1 && (
        <div className="lightbox">

          {/* Dark background — clicking it closes lightbox */}
          <div className="lightbox-backdrop" onClick={closeLightbox} />

          {/* Lightbox content box */}
          <div className="lightbox-content">

            {/* Close button top right */}
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>

            {/* Previous arrow */}
            <button className="lightbox-arrow left" onClick={prevImage}>
              <FaChevronLeft />
            </button>

            {/* The actual image */}
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].title}
              className="lightbox-image"
            />

            {/* Next arrow */}
            <button className="lightbox-arrow right" onClick={nextImage}>
              <FaChevronRight />
            </button>

            {/* Image title + counter at bottom */}
            <div className="lightbox-caption">
              <p>{filteredImages[lightboxIndex].title}</p>
              <span>{lightboxIndex + 1} / {filteredImages.length}</span>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}

export default GallerySection