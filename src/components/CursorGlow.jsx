import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import '../styles/CursorGlow.css'

function CursorGlow() {
  const dotRef      = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const dot      = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    const moveCursor = (e) => {
      // Dot follows instantly
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      })
      // Circle follows with smooth lag
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.12,
        ease: 'power2.out',
      })
    }

    const growCursor   = () => gsap.to(follower, { scale: 2.8, opacity: 0.3, duration: 0.3 })
    const shrinkCursor = () => gsap.to(follower, { scale: 1,   opacity: 0.6, duration: 0.3 })

    window.addEventListener('mousemove', moveCursor)

    // Grow on all interactive elements
    const targets = document.querySelectorAll('a, button, .facility-card, .room-card, .gallery-item')
    targets.forEach(el => {
      el.addEventListener('mouseenter', growCursor)
      el.addEventListener('mouseleave', shrinkCursor)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', growCursor)
        el.removeEventListener('mouseleave', shrinkCursor)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"      ref={dotRef}      />
      <div className="cursor-follower" ref={followerRef} />
    </>
  )
}

export default CursorGlow