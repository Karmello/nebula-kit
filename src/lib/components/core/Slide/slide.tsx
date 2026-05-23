import { useEffect, useRef } from 'react'
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
  const hasMountedRef = useRef(false)
  const prevVisibleRef = useRef<boolean | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)
  const rafRef = useRef<number | null>(null)

  const finalRef = tagRef || ref

  useEffect(() => {
    if (!finalRef.current) return

    // Initialize without animation to the correct state
    updatePosition(finalRef, from, visible, false, duration, easing)
    hasMountedRef.current = true

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    if (!hasMountedRef.current) return
    if (!finalRef.current) return

    const wasVisible = prevVisibleRef.current
    prevVisibleRef.current = visible

    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }

    // INITIAL MOUNT: visible was null → true
    if (wasVisible === null) {
      return
    }

    // SHOW: false → true
    if (!wasVisible && visible) {
      updatePosition(finalRef, from, false, false, duration, easing)

      rafRef.current = requestAnimationFrame(() => {
        updatePosition(finalRef, from, true, true, duration, easing)
        rafRef.current = null
      })
      return
    }

    // HIDE: true → false
    if (wasVisible && !visible) {
      updatePosition(finalRef, from, false, true, duration, easing)
    }
  }, [visible])

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
