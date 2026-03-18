// CREATED BY ALGHIFF
'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [progress, setProgress]         = useState(0)
  const [showAlghiff, setShowAlghiff]   = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [fadeOut, setFadeOut]           = useState(false)
  const [done, setDone]                 = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setShowAlghiff(true), 250)
    const t2 = setTimeout(() => setShowPortfolio(true), 580)
    const t3 = setTimeout(() => {
      const dur = 1600
      const start = performance.now()
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
      function tick(now: number) {
        const t = Math.min((now - start) / dur, 1)
        setProgress(Math.round(easeOut(t) * 100))
        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          setTimeout(() => setFadeOut(true), 200)
          setTimeout(() => setDone(true), 800)
        }
      }
      requestAnimationFrame(tick)
    }, 950)

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  if (done) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#ffffff',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: fadeOut ? 'opacity 0.45s ease' : 'none',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        {/* Name */}
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 28, fontWeight: 800, letterSpacing: '-1px',
          color: '#111111', lineHeight: 1,
          opacity: showAlghiff ? 1 : 0,
          transform: showAlghiff ? 'translateY(0)' : 'translateY(20px)',
          transition: showAlghiff ? 'opacity 0.55s ease, transform 0.55s ease' : 'none',
        }}>
          Monochrome
        </span>

        {/* Subtitle */}
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, fontWeight: 400, letterSpacing: '0.4em',
          color: '#999999', textTransform: 'uppercase',
          opacity: showPortfolio ? 1 : 0,
          transform: showPortfolio ? 'translateY(0)' : 'translateY(10px)',
          transition: showPortfolio ? 'opacity 0.55s ease, transform 0.55s ease' : 'none',
        }}>
          Portfolio
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 140, height: 1, background: 'rgba(0,0,0,0.08)', position: 'relative', overflow: 'hidden' }}>
          <div style={{
            position: 'absolute', top: 0, left: 0, height: '100%',
            width: `${progress}%`, background: '#111111',
            transition: 'width 0.05s linear',
          }} />
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 9, letterSpacing: '0.25em', color: 'rgba(0,0,0,0.22)',
        }}>
          {progress}%
        </span>
      </div>
    </div>
  )
}