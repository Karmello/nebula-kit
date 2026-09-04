import { buildTransition } from 'lib/internals/motion'

import { Box } from '../Box'
import type { RotateProps } from './types'

export const DEFAULT_ROTATE_DURATION: RotateProps['duration'] = 200
export const DEFAULT_ROTATE_EASING: RotateProps['easing'] = 'linear'

export const Rotate = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  // own
  angle,
  duration = DEFAULT_ROTATE_DURATION,
  easing = DEFAULT_ROTATE_EASING,
}: RotateProps) => {
  const transition = buildTransition({ property: 'transform', duration, easing })

  return (
    <Box
      tag="span"
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          transition,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center',
          lineHeight: 0,
        },
      }}
      display="inline-block"
    >
      {children}
    </Box>
  )
}

Rotate.displayName = 'Rotate'
