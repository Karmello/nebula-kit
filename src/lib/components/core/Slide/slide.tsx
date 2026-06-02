import { useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { buildTransition, useVisibilityTransition } from 'lib/internals/motion'

import { SlideProps } from './definitions'
import { syncSlidePosition } from './helpers'

export const DEFAULT_SLIDE_DURATION: SlideProps['duration'] = 200
export const DEFAULT_SLIDE_EASING: SlideProps['easing'] = 'linear'

export const Slide = ({
  children,
  tagAttrs,
  tagRef,
  from,
  visible,
  duration = DEFAULT_SLIDE_DURATION,
  easing = DEFAULT_SLIDE_EASING,
}: SlideProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const finalRef = tagRef || ref

  const transition = buildTransition({
    property: 'transform',
    duration,
    easing,
  })

  useVisibilityTransition({
    visible,

    onInitialize: () => {
      syncSlidePosition(finalRef, from, visible, null)
    },

    onEnterPrepare: () => {
      syncSlidePosition(finalRef, from, false, null)
    },

    onEnterTransition: () => {
      syncSlidePosition(finalRef, from, true, transition)
    },

    onExitTransition: () => {
      syncSlidePosition(finalRef, from, false, transition)
    },
  })

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
