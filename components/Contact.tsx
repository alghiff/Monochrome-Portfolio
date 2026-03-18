// CREATED BY ALGHIFF
'use client'

import { useState, FormEvent } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

// ── Ganti dengan info kontak kamu ─────────────────────────
const CONTACT_LINKS = [
  { icon: <MdEmail />,     label: 'your@email.com',           href: '#'          },
  { icon: <FaGithub />,    label: 'github.com/yourusername',   href: '#' },
  { icon: <FaLinkedin />,  label: 'linkedin.com/in/yourname',  href: '#'},
  { icon: <FaInstagram />, label: '@yourinstagram',               href: '#'},
]

// ── Ganti dengan Formspree ID kamu ───────────────────────
const FORMSPREE_URL = '#'

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>
      <p className="section-label reveal">Contact</p>
      <h2 className="font-display font-bold text-gradient-dim reveal"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '4rem', lineHeight: 1.1 }}>
        Let's build<br />the future.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '5rem', alignItems: 'start' }}>
        {/* Left */}
        <div>
          <p className="reveal" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Open to internships, collaborations, and any opportunity to grow.
            If you have something in mind, don't hesitate to reach out!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {CONTACT_LINKS.map((link, i) => (
              <a key={link.label} href={link.href} className="reveal"
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s', transitionDelay: `${i * 0.05}s` }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#000000')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}>
                <span style={{ width: 32, height: 32, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0, color: '#333333' }}>
                  {link.icon}
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <div className="glass-card reveal" style={{ padding: '2rem' }}>
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>✓</div>
              <p className="font-display font-bold" style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Message received.</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>I'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Name',    type: 'text',  key: 'name',    placeholder: 'Your full name'   },
                { label: 'Email',   type: 'email', key: 'email',   placeholder: 'your@email.com'   },
              ].map(field => (
                <div key={field.key} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label className="font-mono uppercase tracking-widest" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{field.label}</label>
                  <input type={field.type} required placeholder={field.placeholder}
                    value={form[field.key as 'name' | 'email']}
                    onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                    className="form-input" suppressHydrationWarning />
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label className="font-mono uppercase tracking-widest" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea required placeholder="Tell me about the role or project..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  className="form-textarea" suppressHydrationWarning />
              </div>
              <button type="submit" disabled={status === 'sending'} style={{
                alignSelf: 'flex-start', padding: '1rem 2.5rem', fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#ffffff', background: status === 'sending' ? 'rgba(0,0,0,0.35)' : 'linear-gradient(135deg, #111111, #444444)',
                border: 'none', borderRadius: 'var(--radius-sm)', transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={e => { if (status !== 'sending') { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.15)' } }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none' }}>
                {status === 'sending' ? 'Sending...' : 'Send Message →'}
              </button>
              {status === 'error' && <p style={{ fontSize: '0.8rem', color: 'rgba(180,0,0,0.7)' }}>Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}