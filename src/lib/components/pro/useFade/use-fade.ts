import { RefObject } from 'react'

import { buildTransition, useVisibilityTransition } from 'lib/internals/motion'

import { syncFadeOpacity } from './helpers'
import { type UseFadeArgs } from './types'

export const DEFAULT_USE_FADE_DURATION: UseFadeArgs['duration'] = 200
export const DEFAULT_USE_FADE_EASING: UseFadeArgs['easing'] = 'linear'

export const useFade = ({
  tagRef,
  visible,
  duration = DEFAULT_USE_FADE_DURATION,
  easing = DEFAULT_USE_FADE_EASING,
}: UseFadeArgs): void => {
  const elementRef = tagRef as RefObject<HTMLElement | null>

  const transition = buildTransition({ property: 'opacity', duration, easing })

  useVisibilityTransition({
    visible,

    onInitialize: () => {
      syncFadeOpacity(elementRef, visible, null)
    },

    onEnterPrepare: () => {
      syncFadeOpacity(elementRef, false, null)
    },

    onEnterTransition: () => {
      syncFadeOpacity(elementRef, true, transition)
    },

    onExitTransition: () => {
      syncFadeOpacity(elementRef, false, transition)
    },
  })
}
