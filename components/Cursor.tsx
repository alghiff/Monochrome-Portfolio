// CREATED BY ALGHIFF
'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    const hasTouch = window.matchMedia('(pointer: coarse)').matches
    setIsTouch(hasTouch)
    if (hasTouch) return

    let cx = -100, cy = -100, rx = -100, ry = -100, raf: number

    const onMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY }

    const animate = () => {
      if (dotRef.current) { dotRef.current.style.left = `${cx}px`; dotRef.current.style.top = `${cy}px` }
      rx += (cx - rx) * 0.12; ry += (cy - ry) * 0.12
      if (ringRef.current) { ringRef.current.style.left = `${rx}px`; ringRef.current.style.top = `${ry}px` }
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (!dotRef.current || !ringRef.current) return
      dotRef.current.style.width   = '14px'; dotRef.current.style.height  = '14px'
      ringRef.current.style.width  = '44px'; ringRef.current.style.height = '44px'
      ringRef.current.style.opacity = '0.6'
    }
    const onLeave = () => {
      if (!dotRef.current || !ringRef.current) return
      dotRef.current.style.width   = '8px';  dotRef.current.style.height  = '8px'
      ringRef.current.style.width  = '32px'; ringRef.current.style.height = '32px'
      ringRef.current.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(animate)
    document.querySelectorAll<HTMLElement>('a, button, .tech-item, .project-card, input, textarea, [data-hover]')
      .forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave) })

    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed z-[99999]" style={{
        width: 8, height: 8, borderRadius: '50%', background: '#111111',
        transform: 'translate(-50%, -50%)', transition: 'width 0.2s, height 0.2s',
        boxShadow: '0 0 4px rgba(0,0,0,0.25)',
      }} />
      <div ref={ringRef} className="pointer-events-none fixed z-[99998]" style={{
        width: 32, height: 32, borderRadius: '50%', border: '1px solid rgba(0,0,0,0.25)',
        transform: 'translate(-50%, -50%)', transition: 'width 0.3s, height 0.3s, opacity 0.2s',
      }} />
    </>
  )
}