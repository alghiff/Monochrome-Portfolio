// CREATED BY ALGHIFF
'use client'

interface Experience {
  period: string
  location: string
  role: string
  company: string
  description: string
}

const EXPERIENCES: Experience[] = [
  {
    period: '2024 — Present',
    location: 'Remote',
    role: 'Freelance Web Developer',
    company: 'Self-employed',
    description:
      'Building and delivering custom web solutions for small businesses and individuals. Focused on clean code, fast load times, and responsive design across all devices.',
  },
  {
    period: '2024',
    location: 'Jakarta, ID',
    role: 'Backend Developer Intern',
    company: 'PT. box good',
    description:
      'Assisted in developing and maintaining REST APIs. Wrote unit tests, helped optimize database queries, and collaborated with the frontend team on API integration.',
  },
  {
    period: '2023',
    location: 'Jakarta, ID',
    role: 'Lab Assistant',
    company: 'Universitas A — Faculty of Engineering',
    description:
      'Assisted students during programming lab sessions. Helped debug code, explain core concepts, and ensured smooth lab operations each week.',
  },
]

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  return (
    <div className="reveal" style={{ position: 'relative', paddingLeft: '2rem', marginBottom: index < EXPERIENCES.length - 1 ? '3.5rem' : 0, transitionDelay: `${index * 0.1}s` }}>
      <div style={{ position: 'absolute', left: -5, top: '0.25rem', width: 10, height: 10, borderRadius: '50%', background: '#ffffff', border: '2px solid #111111', boxShadow: '0 0 8px rgba(0,0,0,0.15)', zIndex: 1 }} />
      <div className="font-mono uppercase tracking-widest" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ color: '#111111', fontWeight: 500 }}>{exp.period}</span>
        <span>{exp.location}</span>
      </div>
      <div className="font-display font-bold" style={{ fontSize: '1.2rem', letterSpacing: '-0.01em', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{exp.role}</div>
      <div style={{ fontSize: '0.85rem', color: '#444444', marginBottom: '0.75rem', fontFamily: 'var(--font-mono)' }}>{exp.company}</div>
      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{exp.description}</p>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="experience" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>
      <p className="section-label reveal">Experience</p>
      <h2 className="font-display font-bold text-gradient-dim reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '4rem', lineHeight: 1.1 }}>
        The journey.
      </h2>
      <div style={{ position: 'relative', paddingLeft: '1rem', maxWidth: 800 }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, #111111 0%, rgba(0,0,0,0.08) 80%, transparent 100%)' }} />
        {EXPERIENCES.map((exp, i) => <TimelineItem key={exp.company} exp={exp} index={i} />)}
      </div>
    </section>
  )
}