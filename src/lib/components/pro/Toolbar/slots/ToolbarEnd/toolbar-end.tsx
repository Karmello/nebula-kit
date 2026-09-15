import { Box } from 'lib/components/core/Box'

import type { ToolbarEndProps } from './types'

export const ToolbarEnd = ({ children, tagAttrs, tagRef }: ToolbarEndProps) => {
  return (
    <Box
      tagAttrs={{
        ...tagAttrs,
        style: {
          minInlineSize: 0,
          ...tagAttrs?.style,
        },
      }}
      tagRef={tagRef}
      gridRow="1 / 2"
      gridColumn="4 / 5"
      alignSelf="center"
    >
      {children}
    </Box>
  )
}

ToolbarEnd.displayName = 'Toolbar.End'
