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

    const onMove = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
        ease: 'none',
      })
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: 'power2.out',
      })
    }

    const onEnter = () => {
      gsap.to(follower, { scale: 2.2, opacity: 0.3, duration: 0.3 })
      gsap.to(dot,      { scale: 0.5, duration: 0.3 })
    }

    const onLeave = () => {
      gsap.to(follower, { scale: 1, opacity: 0.6, duration: 0.3 })
      gsap.to(dot,      { scale: 1, duration: 0.3 })
    }

    window.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll(
      'a, button, .facility-card, .room-card, .menu-card'
    )
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"      ref={dotRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  )
}

export default CursorGlow