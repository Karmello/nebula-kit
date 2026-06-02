import { useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { buildTransition, useVisibilityTransition } from 'lib/internals/motion'

import { ScaleProps } from './definitions'
import { syncScale } from './helpers'

export const DEFAULT_SCALE_AXIS: ScaleProps['axis'] = 'both'
export const DEFAULT_SCALE_FROM: ScaleProps['from'] = 0
export const DEFAULT_SCALE_TO: ScaleProps['to'] = 1
export const DEFAULT_SCALE_DURATION: ScaleProps['duration'] = 200
export const DEFAULT_SCALE_EASING: ScaleProps['easing'] = 'linear'
export const DEFAULT_SCALE_ORIGIN: ScaleProps['origin'] = 'center'

export const Scale = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  // own
  visible,
  axis = DEFAULT_SCALE_AXIS,
  from = DEFAULT_SCALE_FROM,
  to = DEFAULT_SCALE_TO,
  duration = DEFAULT_SCALE_DURATION,
  easing = DEFAULT_SCALE_EASING,
  origin = DEFAULT_SCALE_ORIGIN,
}: ScaleProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const finalRef = tagRef || ref

  const transition = buildTransition({ property: 'transform', duration, easing })

  useVisibilityTransition({
    visible,

    onInitialize: () => {
      syncScale({ finalRef, visible, axis, from, to, origin })
    },

    onEnterPrepare: () => {
      syncScale({ finalRef, visible: false, axis, from, to, origin })
    },

    onEnterTransition: () => {
      syncScale({ finalRef, visible: true, axis, from, to, origin, transition })
    },

    onExitTransition: () => {
      syncScale({ finalRef, visible: false, axis, from, to, origin, transition })
    },
  })

  return (
    <Box
      tagRef={finalRef}
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('scale'), tagAttrs?.className || ''),
      }}
      display="inline-block"
    >
      {children}
    </Box>
  )
}

Scale.displayName = 'Scale'
