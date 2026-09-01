import { Children } from 'react'

import { Box } from 'lib/components/core/Box'
import { NEB_LENGTH } from 'lib/constants'
import { useRespValue } from 'lib/hooks'

import {
  DEFAULT_JOINED_SURFACE_BG,
  DEFAULT_JOINED_SURFACE_BORDER,
  DEFAULT_JOINED_SURFACE_FLEX_DIRECTION,
  DEFAULT_JOINED_SURFACE_INTENT,
  DEFAULT_JOINED_SURFACE_SURFACE_DEPTH,
} from './constants'
import { useJoinedContainerStyle, useJoinedItemStyle } from './hooks'
import type { JoinedSurfaceProps } from './types'

export const JoinedSurface = ({
  // own
  bordered,
  squared,
  attached,
  // box
  children,
  flexDirection = DEFAULT_JOINED_SURFACE_FLEX_DIRECTION,
  color,
  intent = DEFAULT_JOINED_SURFACE_INTENT,
  surfaceDepth = DEFAULT_JOINED_SURFACE_SURFACE_DEPTH,
  bg = DEFAULT_JOINED_SURFACE_BG,
  border = DEFAULT_JOINED_SURFACE_BORDER,
  inlineSize,
  maxInlineSize,
  blockSize,
  maxBlockSize,
}: JoinedSurfaceProps) => {
  const items = Children.toArray(children)

  const resolvedFlexDirection = useRespValue(flexDirection)

  const joinedContainerStyle = useJoinedContainerStyle({ attached })

  const getJoinedItemStyle = useJoinedItemStyle({
    count: items.length,
    flexDirection: resolvedFlexDirection,
    squared: squared || bordered,
  })

  return (
    <Box
      tagAttrs={{
        style: { backgroundClip: 'padding-box' },
      }}
      drawable
      color={color}
      intent={intent}
      surfaceDepth={surfaceDepth}
      border={border}
      borderRole={bordered ? 'edge' : undefined}
      display="inline-flex"
      flexDirection={resolvedFlexDirection}
      overflow="auto"
      borderRadius={squared ? NEB_LENGTH.px_000 : undefined}
      inlineSize={inlineSize}
      maxInlineSize={maxInlineSize}
      blockSize={blockSize}
      maxBlockSize={maxBlockSize}
      {...joinedContainerStyle}
    >
      {items.map((item, key) => {
        return (
          <Box
            key={key}
            tagAttrs={{
              style: { backgroundClip: 'padding-box' },
            }}
            drawable
            color={color}
            intent={intent}
            surfaceDepth={surfaceDepth}
            bg={bg}
            border={border}
            borderRole="divider"
            flex="1"
            {...getJoinedItemStyle(key)}
          >
            {item}
          </Box>
        )
      })}
    </Box>
  )
}

JoinedSurface.displayName = 'JoinedSurface'
