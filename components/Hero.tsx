// CREATED BY ALGHIFF
'use client'

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-8 pb-16 pt-32 text-center">
      {/* Spotlight glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.02) 40%, transparent 70%)' }} />

      {/* Grid overlay
      <div className="pointer-events-none absolute inset-0" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 80%)',
      }} /> */}

      <div className="relative z-10">
        {/* Available badge */}
        <div className="hero-animate hero-animate-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.35rem 1rem', marginBottom: '2rem',
          background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.12)',
          borderRadius: 9999, fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
          letterSpacing: '0.15em', color: '#333333', textTransform: 'uppercase',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#333333', animation: 'pulse-dot 2s ease-in-out infinite', display: 'block' }} />
          Available
        </div>

        {/* Name */}
        <h1 className="hero-animate hero-animate-2 font-display font-extrabold leading-none tracking-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: 0.92 }}>
          <span style={{
            fontSize: 'clamp(1rem, 2.5vw, 2.25rem)', fontWeight: 800, letterSpacing: '-0.02em',
            display: 'block', marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #222222, #666666)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Hi! I&apos;m
          </span>
          <span style={{
            display: 'block',
            background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 40%, #555555 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>
            Alghiff
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-animate hero-animate-3 font-mono mx-auto" style={{
          fontSize: '0.85rem', fontWeight: 300, color: 'var(--text-secondary)',
          letterSpacing: '0.08em', maxWidth: 500, lineHeight: 1.8, marginBottom: '3rem',
        }}>
          Building real things, learning every day.
        </p>

        {/* CTAs */}
        <div className="hero-animate hero-animate-4 flex flex-wrap gap-4 justify-center">
          <a href="#projects" className="btn-primary"><span>View Work</span></a>
          <a href="#contact"  className="btn-secondary">Get in Touch</a>
        </div>
      </div>
    </section>
  )
}