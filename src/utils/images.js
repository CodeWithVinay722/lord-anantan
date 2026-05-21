const getImages = (folder, count) =>
  Array.from({ length: count }, (_, i) =>
    `/images/${folder}/${folder}${i + 1}.jpeg`  // ← .jpeg not .jpg
  )

// ── REAL CLIENT IMAGES ──
export const heroImages    = getImages('hero', 8)
export const galleryImages = getImages('gallery', 24)
export const banquetImages = getImages('banquet', 11)
export const roomImages    = getImages('rooms', 4)

// ── UNSPLASH FALLBACKS ──
export const weddingImages = [
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800',
]

export const diningImages = [
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
  'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
  'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500',
]

export const lobbyImage = heroImages[0]
export const poolImage  = heroImages[1]
