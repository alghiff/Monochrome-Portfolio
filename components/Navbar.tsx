// CREATED BY ALGHIFF
'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'About',      num: '01', href: '#about'      },
  { label: 'Stack',      num: '02', href: '#skills'     },
  { label: 'Projects',   num: '03', href: '#projects'   },
  { label: 'Experience', num: '04', href: '#experience' },
  { label: 'Contact',    num: '05', href: '#contact'    },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: scrolled ? '0.875rem 1.5rem' : '1.25rem 1.5rem',
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.80)',
        backdropFilter: 'blur(20px) saturate(180%)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.3s ease',
      }}>
        {/* Logo */}
        <span className="font-display font-extrabold tracking-widest text-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ background: 'linear-gradient(135deg, #000000, #555555)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', cursor: 'pointer' }}>
          Monochrome
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex" style={{ gap: '2.5rem', listStyle: 'none' }}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className="font-mono text-xs tracking-widest uppercase"
                style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}
                onMouseEnter={e => ((e.target as HTMLElement).style.color = 'var(--text-primary)')}
                onMouseLeave={e => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}>
                <span style={{ color: 'rgba(0,0,0,0.35)', marginRight: '0.3em', fontSize: '0.65rem' }}>{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:inline-block" style={{
          padding: '0.6rem 1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.72rem',
          letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-secondary)',
          background: 'transparent', border: '1px solid rgba(0,0,0,0.18)',
          borderRadius: 'var(--radius-sm)', textDecoration: 'none', transition: 'all 0.25s ease',
        }}
          onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,0,0,0.5)'; el.style.background = 'rgba(0,0,0,0.04)'; el.style.color = '#000000' }}
          onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = 'rgba(0,0,0,0.18)'; el.style.background = 'transparent'; el.style.color = 'var(--text-secondary)' }}>
          Work With Me →
        </a>

        {/* Hamburger */}
        <button className="flex md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          style={{ background: 'transparent', border: 'none', padding: '0.5rem', flexDirection: 'column', gap: '5px' }}>
          {[
            menuOpen ? 'translateY(6.5px) rotate(45deg)'  : 'none',
            'none',
            menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
          ].map((transform, i) => (
            <span key={i} style={{
              display: 'block', width: 22, height: 1.5,
              background: menuOpen ? '#444444' : 'var(--text-primary)',
              transition: 'all 0.3s', transform, opacity: i === 1 && menuOpen ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className="md:hidden" style={{
        position: 'fixed', top: scrolled ? '53px' : '65px', left: 0, right: 0, zIndex: 999,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        padding: menuOpen ? '1.5rem' : '0 1.5rem',
        maxHeight: menuOpen ? '400px' : '0', overflow: 'hidden', transition: 'all 0.3s ease',
      }}>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}
                className="font-mono uppercase tracking-widest"
                style={{ display: 'block', padding: '0.75rem 0', fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px solid rgba(0,0,0,0.06)', transition: 'color 0.2s' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#111111')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}>
                <span style={{ color: 'rgba(0,0,0,0.35)', marginRight: '0.75rem', fontSize: '0.65rem' }}>{link.num}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" onClick={() => setMenuOpen(false)} style={{
          display: 'inline-block', marginTop: '1.25rem', padding: '0.75rem 2rem',
          fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', color: '#ffffff',
          background: 'linear-gradient(135deg, #111111, #444444)',
          borderRadius: 'var(--radius-sm)', textDecoration: 'none',
        }}>
          Work With Me →
        </a>
      </div>
    </>
  )
}
