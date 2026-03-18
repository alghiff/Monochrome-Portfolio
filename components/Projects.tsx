// CREATED BY ALGHIFF
'use client'

interface Project {
  num: string
  tags: { label: string; variant: 'blue' | 'purple' | 'cyan' | 'green' }[]
  title: string
  description: string
  links: { label: string; href: string }[]
}

const TAG_STYLES: Record<string, React.CSSProperties> = {
  blue:   { background: 'rgba(0,0,0,0.05)', color: '#111111', border: '1px solid rgba(0,0,0,0.12)' },
  purple: { background: 'rgba(0,0,0,0.04)', color: '#222222', border: '1px solid rgba(0,0,0,0.10)' },
  cyan:   { background: 'rgba(0,0,0,0.03)', color: '#444444', border: '1px solid rgba(0,0,0,0.08)' },
  green:  { background: 'rgba(0,0,0,0.04)', color: '#1a1a1a', border: '1px solid rgba(0,0,0,0.10)' },
}

const PROJECTS: Project[] = [
  {
    num: '// 001',
    tags: [
      { label: 'Python',  variant: 'blue'   },
      { label: 'FastAPI', variant: 'purple' },
      { label: 'SQLite',  variant: 'cyan'   },
    ],
    title: 'Project A',
    description: 'A production-ready REST API template with JWT authentication, role-based access control, and auto-generated Swagger documentation.',
    links: [
      { label: '↗ Live Demo', href: '#' },
      { label: '⌥ GitHub',   href: '#' },
    ],
  },
  {
    num: '// 002',
    tags: [
      { label: 'Next.js',    variant: 'blue'   },
      { label: 'TypeScript', variant: 'purple' },
      { label: 'Tailwind',   variant: 'cyan'   },
    ],
    title: 'Project B',
    description: 'Minimal monochrome portfolio template with floating letter particles, custom cursor, and smooth scroll animations. Open source.',
    links: [
      { label: '↗ Live Demo', href: '#' },
      { label: '⌥ GitHub',   href: '#' },
    ],
  },
  {
    num: '// 003',
    tags: [
      { label: 'Java',  variant: 'blue'  },
      { label: 'MySQL', variant: 'green' },
    ],
    title: 'Project C',
    description: 'A CLI-based application to manage and track records. Supports CRUD operations, data calculation, and exports reports to CSV format.',
    links: [
      { label: '⌥ GitHub', href: '#' },
    ],
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass-card reveal" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span className="font-mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{project.num}</span>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.tags.map(tag => (
            <span key={tag.label} style={{ ...TAG_STYLES[tag.variant], display: 'inline-block', padding: '0.2rem 0.6rem', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', borderRadius: 'var(--radius-sm)' }}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-display font-bold" style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{project.title}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{project.description}</p>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '0.5rem' }}>
        {project.links.map(link => (
          <a key={link.label} href={link.href} className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = '#000000')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>
      <p className="section-label reveal">Projects</p>
      <h2 className="font-display font-bold text-gradient-dim reveal" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '4rem', lineHeight: 1.1 }}>
        Things I've built.
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {PROJECTS.map(project => <ProjectCard key={project.num} project={project} />)}
      </div>
    </section>
  )
}