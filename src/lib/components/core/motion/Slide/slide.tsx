import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SLIDE_DURATION, DEFAULT_SLIDE_EASING, SlideProps } from './definitions'
import { updatePosition } from './helpers'

export const Slide = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // own
  from,
  visible,
  duration = DEFAULT_SLIDE_DURATION,
  easing = DEFAULT_SLIDE_EASING,
}: SlideProps) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const finalRef = tagRef || ref

  useEffect(() => {
    if (finalRef.current) {
      updatePosition(finalRef, from, visible, false, duration, easing)
      setMounted(true)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (finalRef.current) {
      updatePosition(finalRef, from, !visible, false, duration, easing)

      requestAnimationFrame(() => {
        updatePosition(finalRef, from, visible, true, duration, easing)
      })
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
