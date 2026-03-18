// CREATED BY ALGHIFF

import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monochrome Portfolio',
  description: 'Self-taught junior developer turning ideas into working products, one line of code at a time.',
  authors: [{ name: 'Alghiff' }],
  creator: 'Alghiff',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://github.com/alghiff/Monochrome-Portfolio.git',
    siteName: 'Monochrome Portfolio',
    title: 'Monochrome Portfolio',
    description: 'Self-taught junior developer turning ideas into working products, one line of code at a time.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Monochrome Portfolio' }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: '',
    shortcut: ' ',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  )
}