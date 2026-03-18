// CREATED BY ALGHIFF
'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ParticleCanvas from '@/components/ParticleCanvas'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Timeline from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Cursor from '@/components/Cursor'
import RevealObserver from '@/components/RevealObserver'
import LoadingScreen from '@/components/LoadingScreen'

export default function ClientShell() {
  return (
    <>
      <LoadingScreen />
      <Cursor />
      <RevealObserver />
      <ParticleCanvas />

      {/* Background subtle glow orbs */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute bottom-1/4 -right-24 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute top-2/5 left-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}