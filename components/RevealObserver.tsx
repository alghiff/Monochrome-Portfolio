// CREATED BY ALGHIFF
'use client'

import { useEffect } from 'react'

export default function RevealObserver() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })

    targets.forEach(el => observer.observe(el))

    const mutObs = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>('.reveal:not(.visible)').forEach(el => observer.observe(el))
    })
    mutObs.observe(document.body, { childList: true, subtree: true })

    return () => { observer.disconnect(); mutObs.disconnect() }
  }, [])

  return null
}
