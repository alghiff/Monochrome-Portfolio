// CREATED BY ALGHIFF
'use client'

import { useEffect, useRef, useState } from 'react'

interface UseCounterAnimationOptions {
  duration?:  number
  easing?:    (t: number) => number
  threshold?: number
  once?:      boolean
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

export function useCounterAnimation(target: number, options: UseCounterAnimationOptions = {}) {
  const { duration = 1000, easing = easeOutCubic, threshold = 0.5, once = true } = options

  const ref      = useRef<HTMLDivElement>(null)
  const [value, setValue] = useState(0)
  const animated = useRef(false)
  const raf      = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const run = () => {
      if (animated.current && once) return
      animated.current = true
      const startTime = performance.now()
      const tick = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        setValue(Math.round(easing(progress) * target))
        if (progress < 1) { raf.current = requestAnimationFrame(tick) }
        else { setValue(target) }
      }
      raf.current = requestAnimationFrame(tick)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { run(); if (once) observer.disconnect() }
      else if (!once) { animated.current = false; cancelAnimationFrame(raf.current); setValue(0) }
    }, { threshold })

    observer.observe(el)
    return () => { observer.disconnect(); cancelAnimationFrame(raf.current) }
  }, [target, duration, easing, threshold, once])

  return { ref, value }
}
