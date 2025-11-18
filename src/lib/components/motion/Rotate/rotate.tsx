import { Box } from 'lib/components'

import { DEFAULT_RESIZE_DURATION } from '../Resize/definitions'
import { RotateProps } from './definitions'

export const Rotate = ({
  // HtmlTag
  children,
  tagAttrs,
  tagRef,
  // own
  angle,
}: RotateProps) => {
  return (
    <Box
      tag="span"
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center',
          transition: `transform ${DEFAULT_RESIZE_DURATION}ms ease-in-out`,
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
