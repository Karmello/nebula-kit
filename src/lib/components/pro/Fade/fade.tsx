import { useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box } from 'lib/index.core'
import { FadeProps } from 'lib/index.pro'
import { buildTransition, useVisibilityTransition } from 'lib/internals/motion'

import { syncFadeOpacity } from './helpers'

export const DEFAULT_FADE_DURATION = 200
export const DEFAULT_FADE_EASING = 'linear'

export const Fade = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  // own
  visible,
  duration = DEFAULT_FADE_DURATION,
  easing = DEFAULT_FADE_EASING,
}: FadeProps) => {
  const ref = useRef<HTMLSpanElement | null>(null)

  const finalRef = tagRef || ref

  const transition = buildTransition({ property: 'opacity', duration, easing })

  useVisibilityTransition({
    visible,

    onInitialize: () => {
      syncFadeOpacity(finalRef, visible, null)
    },

    onEnterPrepare: () => {
      syncFadeOpacity(finalRef, false, null)
    },

    onEnterTransition: () => {
      syncFadeOpacity(finalRef, true, transition)
    },

    onExitTransition: () => {
      syncFadeOpacity(finalRef, false, transition)
    },
  })

  return (
    <Box
      tag="span"
      tagRef={finalRef}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('fade'), tagAttrs?.className || ''),
      }}
      display="inline-block"
    >
      {children}
    </Box>
  )
}

Fade.displayName = 'Fade'
