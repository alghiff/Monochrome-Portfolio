// CREATED BY ALGHIFF
'use client'

import { useEffect, useRef } from 'react'
import { FaPython, FaJava, FaGitAlt, FaDocker, FaNodeJs } from 'react-icons/fa'
import { SiC, SiPostgresql, SiMysql, SiTypescript } from 'react-icons/si'

// ── Edit tech stack sesuai skill kamu ────────────────────
const TECHS = [
  { icon: <FaPython />,     name: 'Python'     },
  { icon: <FaJava />,       name: 'Java'       },
  { icon: <SiC />,          name: 'C'          },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaNodeJs />,     name: 'Node.js'    },
  { icon: <FaDocker />,     name: 'Docker'     },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiMysql />,      name: 'MySQL'      },
  { icon: <FaGitAlt />,     name: 'Git'        },
]

function TechItem({ tech, index }: { tech: typeof TECHS[0]; index: number }) {
  const barRef   = useRef<HTMLDivElement>(null)
  const observed = useRef(false)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !observed.current) { observed.current = true }
    }, { threshold: 0.3 })
    observer.observe(el.parentElement!)
    return () => observer.disconnect()
  }, [index])

  return (
    <div className="tech-item" style={{
      padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '0.75rem',
      background: 'var(--surface)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-md)', textAlign: 'center',
      transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
      position: 'relative', overflow: 'hidden',
    }}
      onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(-4px)'; el.style.borderColor = 'rgba(0,0,0,0.22)'; el.style.boxShadow = '0 8px 24px rgba(0,0,0,0.07)' }}
      onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = 'translateY(0)'; el.style.borderColor = 'var(--border)'; el.style.boxShadow = 'none' }}>
      <span style={{ fontSize: '1.8rem', color: '#111111', position: 'relative' }}>{tech.icon}</span>
      <span className="font-mono" style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', letterSpacing: '0.08em', position: 'relative' }}>
        {tech.name}
      </span>
      <div style={{ width: '100%', height: 2, background: 'rgba(0,0,0,0.06)', borderRadius: 1, overflow: 'hidden', position: 'relative' }}>
        <div ref={barRef} style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: 0, background: 'linear-gradient(to right, #111111, #777777)', borderRadius: 1, transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }} />
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="skills" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>
      <p className="section-label reveal">Tech Stack</p>
      <h2 className="font-display font-bold text-gradient-dim reveal"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '1.5rem', lineHeight: 1.1 }}>
        Tools I use.<br />Still learning more.
      </h2>
      <p className="reveal" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 600, marginBottom: '3rem' }}>
        Currently focused on backend fundamentals — writing clean code,
        understanding data structures, and building real projects to grow my skills.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '1rem' }}>
        {TECHS.map((tech, i) => <TechItem key={tech.name} tech={tech} index={i} />)}
      </div>
    </section>
  )
}
