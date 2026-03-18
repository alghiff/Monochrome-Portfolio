// CREATED BY ALGHIFF
'use client'

import { useEffect, useRef } from 'react'

const MOUSE_REPEL_DIST  = 120
const MOUSE_REPEL_FORCE = 0.022
const CHARS = 'ABCDEFGHIJijklmnopqrstuvwxyz0123456789}[<>/\\|@#$%'

interface Letter {
  x: number; y: number; vx: number; vy: number
  char: string; size: number; opacity: number; brightness: number
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { willReadFrequently: false})
    if (!ctx) return

    const LETTER_COUNT = window.innerWidth < 768 ? 10 : 25
    let W = 0, H = 0, letters: Letter[] = [], raf: number
    let lastTime = 0
    let lastW = window.innerWidth
    let lastH = window.innerHeight
    const mouse = { x: -9999, y: -9999 }

    const resize = () => {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    const randomChar = () => CHARS[Math.floor(Math.random() * CHARS.length)]
    const createLetter = (): Letter => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      char: randomChar(),
      size: Math.random() * 6 + 10,
      opacity: Math.random() * 0.2 + 0.08,
      brightness: Math.floor(Math.random() * 220),
    })

    resize()
    letters = Array.from({ length: LETTER_COUNT }, createLetter)

    const draw = (timestamp: number) => {
      const fps = window.innerWidth < 768 ? 30 : 60
      const interval = 1000 / fps

      if (timestamp - lastTime < interval) {
        raf = requestAnimationFrame(draw)
        return
      }
      lastTime = timestamp

      ctx.clearRect(0, 0, W, H)
      for (const l of letters) {
        l.x += l.vx; l.y += l.vy
        const dx = mouse.x - l.x, dy = mouse.y - l.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const f = (1 - dist / MOUSE_REPEL_DIST) * MOUSE_REPEL_FORCE
          l.vx -= dx * f; l.vy -= dy * f
          l.vx *= 0.97; l.vy *= 0.97
        }
        if (l.x < 0 || l.x > W) l.vx *= -1
        if (l.y < 0 || l.y > H) l.vy *= -1
        l.x = Math.max(0, Math.min(W, l.x))
        l.y = Math.max(0, Math.min(H, l.y))
        if (Math.random() < 0.003) l.char = randomChar()
        ctx.globalAlpha = l.opacity
        ctx.fillStyle   = `rgb(${l.brightness},${l.brightness},${l.brightness})`
        ctx.font        = `${l.size}px 'JetBrains Mono', monospace`
        ctx.textAlign   = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(l.char, l.x, l.y)
      }
      ctx.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    draw(0)

    window.addEventListener('mousemove',  e  => { mouse.x = e.clientX; mouse.y = e.clientY })
    window.addEventListener('mouseleave', () => { mouse.x = -9999; mouse.y = -9999 })
    window.addEventListener('resize', () => {
      const newW = window.innerWidth
      const newH = window.innerHeight

      // Ignore perubahan kecil — cuma address bar mobile naik turun
      if (Math.abs(newW - lastW) < 100 && Math.abs(newH - lastH) < 100) return

      lastW = newW
      lastH = newH

      resize()
      const count = newW < 768 ? 10 : 25

      if (letters.length < count) {
        while (letters.length < count) letters.push(createLetter())
      } else if (letters.length > count) {
        letters.splice(count)
      }

      letters.forEach(l => {
        l.x = Math.min(l.x, W)
        l.y = Math.min(l.y, H)
      })
    })

    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      style={{ display: 'block' }}
    />
  )
}