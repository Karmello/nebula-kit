import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING, SlideProps } from './definitions'
import { updatePosition } from './helpers'

export const Slide = ({
  children,
  tagAttrs,
  tagRef,
  from,
  visible,
  duration = DEFAULT_SLIDE_DURATION,
  easing = DEFAULT_SLIDE_EASING,
}: SlideProps) => {
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const finalRef = tagRef || ref

  useEffect(() => {
    if (!finalRef.current) return

    // Initialize without animation to the correct state
    updatePosition(finalRef, from, visible, false, duration, easing)
    setMounted(true)

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (!finalRef.current) return

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    if (visible) {
      // Show: jump to hidden (no transition) then animate in
      updatePosition(finalRef, from, false, false, duration, easing)

      rafRef.current = requestAnimationFrame(() => {
        updatePosition(finalRef, from, true, true, duration, easing)
        rafRef.current = null
      })
      return
    }

    // Hide: animate out directly (no pre-step that causes a flash)
    updatePosition(finalRef, from, false, true, duration, easing)
  }, [visible, mounted])

  return (
    <Box
      tagRef={finalRef}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('slide'), tagAttrs?.className || ''),
      }}
      display="inline-block"
    >
      {children}
    </Box>
  )
}

Slide.displayName = 'Slide'
