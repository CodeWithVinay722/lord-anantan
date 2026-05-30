import { useEffect } from 'react'

function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Update title
    document.title = title

    // Update meta description
    let desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', description)

    // Update meta keywords
    let kw = document.querySelector('meta[name="keywords"]')
    if (kw) kw.setAttribute('content', keywords)

  }, [title, description, keywords])

  return null
}

export default SEO