import { RefObject } from 'react'

import { buildTransition, useVisibilityTransition } from 'lib/internals/motion'

import { syncSlidePosition } from './helpers'
import type { UseSlideArgs } from './types'

export const DEFAULT_USE_SLIDE_DURATION: UseSlideArgs['duration'] = 200
export const DEFAULT_USE_SLIDE_EASING: UseSlideArgs['easing'] = 'linear'

export const useSlide = ({
  ref,
  from,
  visible,
  duration = DEFAULT_USE_SLIDE_DURATION,
  easing = DEFAULT_USE_SLIDE_EASING,
}: UseSlideArgs): void => {
  const elementRef = ref as RefObject<HTMLElement | null>

  const transition = buildTransition({ property: 'transform', duration, easing })

  useVisibilityTransition({
    visible,

    onInitialize: () => {
      syncSlidePosition(elementRef, from, visible, null)
    },

    onEnterPrepare: () => {
      syncSlidePosition(elementRef, from, false, null)
    },

    onEnterTransition: () => {
      syncSlidePosition(elementRef, from, true, transition)
    },

    onExitTransition: () => {
      syncSlidePosition(elementRef, from, false, transition)
    },
  })
}
