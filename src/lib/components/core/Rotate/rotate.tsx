import { Box } from 'lib/components'

import { useTransformTransition } from 'lib/internals/motion'

import { DEFAULT_ROTATE_DURATION, DEFAULT_ROTATE_EASING, RotateProps } from './definitions'

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
  const transitionStyle = useTransformTransition({
    duration,
    easing,
  })

  return (
    <Box
      tag="span"
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          ...transitionStyle,
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
