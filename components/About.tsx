// CREATED BY ALGHIFF
'use client'

import { useCounterAnimation } from '@/hooks/useCounterAnimation'

// ── Edit stats sesuai data kamu ──────────────────────────
const STATS = [
  { target: 0, suffix: '+', label: 'Projects Built'    },
  { target: 0, suffix: '+', label: 'Contributions'     },
  { target: 0, suffix: '+', label: 'Experience'   },
  { target: 0, suffix: '+', label: 'Months of Coding'  },
]

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, value } = useCounterAnimation(target)
  return (
    <div ref={ref} className="glass-card" style={{ padding: '2rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, transparent, rgba(0,0,0,0.15), transparent)' }} />
      <div className="font-display font-extrabold" style={{
        fontSize: '2.8rem', lineHeight: 1, marginBottom: '0.4rem',
        background: 'linear-gradient(135deg, #000000, #555555)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      }}>
        {value}{suffix}
      </div>
      <div className="font-mono uppercase tracking-widest" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
        {label}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>
      <p className="section-label reveal">About</p>
      <h2 className="font-display font-bold text-gradient-dim reveal"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '4rem', lineHeight: 1.1 }}>
        Still learning,<br />always building.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}>
        {/* Text — edit sesuai bio kamu */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p className="reveal" style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
            I'm a <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Computer Science student</strong>{' '}
            who loves building things with code. I started coding out of curiosity and it quickly became a passion.
          </p>
          <p className="reveal" style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
            I'm currently focusing on <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>backend development</strong>{' '}
            and exploring how modern web applications are built — from APIs to databases to deployment.
          </p>
          <p className="reveal" style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-secondary)' }}>
            Still early in my journey, but I'm <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>learning every day</strong>{' '}
            and looking for opportunities to grow, collaborate, and ship real projects.
          </p>
          <div className="available-badge reveal" style={{ marginTop: '0.5rem' }}>
            <span className="available-dot" />
            Open to opportunities
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {STATS.map(stat => <StatCard key={stat.label} {...stat} />)}
        </div>
      </div>
    </section>
  )
}