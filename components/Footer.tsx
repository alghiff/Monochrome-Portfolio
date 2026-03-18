// CREATED BY ALGHIFF

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer style={{ borderTop: '1px solid rgba(0,0,0,0.08)', padding: '2.5rem 3rem', maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      <span className="font-display font-bold tracking-widest"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'linear-gradient(135deg, #000000, #555555)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', cursor: 'pointer' }}>
        Monochrome
      </span>
      <span className="font-mono" style={{ fontSize: '0.65rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
        © {year}
      </span>
    </footer>
  )
}