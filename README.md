# Monohrome Portfolio Template

A clean, minimal portfolio template built with Next.js, TypeScript, and Tailwind CSS. Pure monochrome white theme with floating letter particles, custom cursor, smooth scroll reveal animations, and a loading screen.

**Created by [alghiff](https://github.com/alghiff)**

---

## Features

- Pure monochrome white theme (black/white/gray only)
- Floating letter & symbol particle canvas with mouse repel effect
- Custom animated cursor — auto-hidden on mobile/touch devices
- Animated loading screen
- Scroll reveal animations on all sections
- Responsive — fully mobile friendly
- Contact form via Formspree
- Static export — deployable to Vercel, Netlify, Cloudflare Pages

---

## Tech Stack

- [Next.js 16](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Formspree](https://formspree.io/) — contact form

---

## Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/alghiff/Monochrome-Portfolio.git
cd Monochrome-Portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customize

### Personal Info

| File | What to change |
|------|----------------|
| `app/layout.tsx` | Title, description, OG metadata, site URL |
| `components/Navbar.tsx` | Your name on logo |
| `components/Hero.tsx` | Your name, subtitle text |
| `components/About.tsx` | Bio paragraphs, stats (Projects Built, Contributions, Problems Solved, Months of Coding) |
| `components/TechStack.tsx` | Tech icons and names |
| `components/Experience.tsx` | Work/experience entries |
| `components/Projects.tsx` | Project cards (title, tags, description, links) |
| `components/Contact.tsx` | Email, GitHub, LinkedIn, Instagram links + Formspree ID |
| `components/Footer.tsx` | Your name |
| `components/LoadingScreen.tsx` | Name & subtitle shown on loading screen |

### About Stats

Open `components/About.tsx` and edit the `STATS` array:
```ts
const STATS = [
  { target: 0, suffix: '+', label: 'Projects Built'   },
  { target: 0, suffix: '+', label: 'Contributions'    },
  { target: 0, suffix: '+', label: 'Problems Solved'  },
  { target: 0, suffix: '+', label: 'Months of Coding' },
]
```

### Tech Stack

Open `components/TechStack.tsx` and edit the imports and `TECHS` array:
```ts
import { FaPython, FaJava, FaGitAlt, FaDocker, FaNodeJs } from 'react-icons/fa'
import { SiC, SiPostgresql, SiMysql, SiTypescript } from 'react-icons/si'

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
```

### Adding Projects

Open `components/Projects.tsx` and edit the `PROJECTS` array:
```ts
const PROJECTS: Project[] = [
  {
    num: '// 001',
    tags: [
      { label: 'Python',  variant: 'blue'   },
      { label: 'FastAPI', variant: 'purple' },
    ],
    title: 'Your Project Name',
    description: 'Short description of what this project does.',
    links: [
      { label: '↗ Live Demo', href: 'https://yourproject.com' },
      { label: '⌥ GitHub',   href: 'https://github.com/you/project' },
    ],
  },
]
```

Tag variants available: `blue`, `purple`, `cyan`, `green`

### Adding Experience

Open `components/Experience.tsx` and edit the `EXPERIENCES` array:
```ts
const EXPERIENCES: Experience[] = [
  {
    period: '2024 — Present',
    location: 'Jakarta, ID',
    role: 'Your Role',
    company: 'Company Name',
    description: 'What you did there.',
  },
]
```

### Contact Form

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form — copy your form ID
3. Open `components/Contact.tsx` and replace `YOUR_FORM_ID`:
```ts
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'
```

Also update `CONTACT_LINKS` with your real info:
```ts
const CONTACT_LINKS = [
  { icon: <MdEmail />,     label: 'your@email.com',          href: 'mailto:your@email.com'           },
  { icon: <FaGithub />,    label: 'github.com/yourusername',  href: 'https://github.com/yourusername' },
  { icon: <FaLinkedin />,  label: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname'},
  { icon: <FaInstagram />, label: '@yourhandle',              href: 'https://instagram.com/yourinstagram'},
]
```

---

## Deploy to Vercel

### Option A — via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — via GitHub

1. Push your repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repository
4. Framework preset: **Next.js**
5. Click Deploy

> **Note:** `public/_headers` and `public/_redirects` are for Netlify/Cloudflare Pages. Vercel handles these automatically.

---

## Project Structure
```
portfolio-web/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout & SEO metadata
│   └── page.tsx           # Entry point
├── components/
│   ├── ClientShell.tsx    # Main layout shell
│   ├── LoadingScreen.tsx  # Animated loading screen
│   ├── Navbar.tsx         # Navigation bar (responsive)
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About + stats cards
│   ├── TechStack.tsx      # Tech stack grid
│   ├── Projects.tsx       # Project cards
│   ├── Experience.tsx     # Experience timeline
│   ├── Contact.tsx        # Contact form + social links
│   ├── Footer.tsx         # Footer
│   ├── ParticleCanvas.tsx # Floating letter particles + mouse repel
│   ├── Cursor.tsx         # Custom cursor (desktop only)
│   └── RevealObserver.tsx # Scroll reveal observer
├── hooks/
│   └── useCounterAnimation.ts  # Counter animation hook for stats
├── public/
│   ├── _headers           # Security & cache headers (Netlify/Cloudflare)
│   ├── _redirects         # SPA fallback routing (Netlify/Cloudflare)
│   └── favicon.ico
├── next.config.ts
├── LICENSE
├── README.md
├── .gitignore
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## License

MIT — free to use, modify, and distribute.

**Created by Alghiff** — feel free to use this as a starting point for your own portfolio!

If you found this helpful, consider giving the repo a ⭐