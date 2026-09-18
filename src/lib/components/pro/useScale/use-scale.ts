import { buildTransition, useVisibilityTransition } from 'lib/internals/motion'

import { syncScale } from './helpers'
import { UseScaleArgs } from './types'

export const DEFAULT_USE_SCALE_AXIS: UseScaleArgs['axis'] = 'both'
export const DEFAULT_USE_SCALE_FROM: UseScaleArgs['from'] = 0
export const DEFAULT_USE_SCALE_TO: UseScaleArgs['to'] = 1
export const DEFAULT_USE_SCALE_DURATION: UseScaleArgs['duration'] = 200
export const DEFAULT_USE_SCALE_EASING: UseScaleArgs['easing'] = 'linear'
export const DEFAULT_USE_SCALE_ORIGIN: UseScaleArgs['origin'] = 'center'

export const useScale = ({
  ref,
  visible,
  axis = DEFAULT_USE_SCALE_AXIS,
  from = DEFAULT_USE_SCALE_FROM,
  to = DEFAULT_USE_SCALE_TO,
  duration = DEFAULT_USE_SCALE_DURATION,
  easing = DEFAULT_USE_SCALE_EASING,
  origin = DEFAULT_USE_SCALE_ORIGIN,
}: UseScaleArgs): void => {
  const transition = buildTransition({ property: 'transform', duration, easing })

  useVisibilityTransition({
    visible,

    onInitialize: () => {
      syncScale({ ref, visible, axis, from, to, origin })
    },

    onEnterPrepare: () => {
      syncScale({ ref, visible: false, axis, from, to, origin })
    },

    onEnterTransition: () => {
      syncScale({ ref, visible: true, axis, from, to, origin, transition })
    },

    onExitTransition: () => {
      syncScale({ ref, visible: false, axis, from, to, origin, transition })
    },
  })
}
