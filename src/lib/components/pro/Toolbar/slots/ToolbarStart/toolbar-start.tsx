import { Box } from 'lib/index.core'
import { ToolbarStartProps } from 'lib/index.pro'

export const ToolbarStart = ({ children, tagAttrs, tagRef }: ToolbarStartProps) => {
  return (
    <Box tagAttrs={tagAttrs} tagRef={tagRef} gridRow="1 / 2" gridColumn="2 / 3" alignSelf="center">
      {children}
    </Box>
  )
}

ToolbarStart.displayName = 'Toolbar.Start'
