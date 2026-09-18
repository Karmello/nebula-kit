import { Box } from 'lib/components/core/Box'

import { ToolbarStartProps } from './types'

export const ToolbarStart = ({ children, elemAttrs, elemRef }: ToolbarStartProps) => {
  return (
    <Box
      elemAttrs={elemAttrs}
      elemRef={elemRef}
      gridRow="1 / 2"
      gridColumn="2 / 3"
      alignSelf="center"
    >
      {children}
    </Box>
  )
}

ToolbarStart.displayName = 'Toolbar.Start'
