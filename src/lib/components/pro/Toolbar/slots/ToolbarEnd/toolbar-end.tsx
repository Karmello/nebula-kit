import { Box } from 'lib/components/core/Box'

import type { ToolbarEndProps } from './types'

export const ToolbarEnd = ({ children, elemAttrs, elemRef }: ToolbarEndProps) => {
  return (
    <Box
      elemAttrs={{
        ...elemAttrs,
        style: {
          minInlineSize: 0,
          ...elemAttrs?.style,
        },
      }}
      elemRef={elemRef}
      gridRow="1 / 2"
      gridColumn="4 / 5"
      alignSelf="center"
    >
      {children}
    </Box>
  )
}

ToolbarEnd.displayName = 'Toolbar.End'
