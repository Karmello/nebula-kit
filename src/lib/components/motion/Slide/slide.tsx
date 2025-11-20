import { useEffect, useRef, useState } from 'react'
import { Box } from 'lib/components'

import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING, SlideProps } from './definitions'
import { getInitialTransform } from './helpers'

export const Slide = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // own
  direction,
  visible,
  offset,
  duration = DEFAULT_SLIDE_DURATION,
  easing = DEFAULT_SLIDE_EASING,
  onExitComplete,
}: SlideProps) => {
  const frameRef = useRef<number | null>(null)
  const exitTimerRef = useRef<number | null>(null)

  // Compute initial transform
  const initialTransform = getInitialTransform(direction, offset)
  const finalTransform = 'translate(0,0)'

  // Track the animated style
  const [currentTransform, setCurrentTransform] = useState(visible ? finalTransform : initialTransform)

  useEffect(() => {
    setCurrentTransform(visible ? finalTransform : getInitialTransform(direction, offset))
  }, [offset])

  // Handle enter/exit transitions
  useEffect(() => {
    // Cancel previous frame if any
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current)
    }

    frameRef.current = requestAnimationFrame(() => {
      if (visible) {
        // ENTER → animate to final
        setCurrentTransform(finalTransform)
      } else {
        // EXIT → animate to initial
        setCurrentTransform(initialTransform)

        // After the animation duration, unmount and fire callback
        if (exitTimerRef.current) {
          clearTimeout(exitTimerRef.current)
        }

        exitTimerRef.current = window.setTimeout(() => {
          onExitComplete?.()
        }, duration)
      }
    })

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current)
    }
  }, [visible, duration, finalTransform, initialTransform, onExitComplete])

  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          transform: currentTransform,
          transition: `transform ${duration}ms ${easing}`,
          willChange: 'transform',
        },
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

Slide.displayName = 'Slide'
