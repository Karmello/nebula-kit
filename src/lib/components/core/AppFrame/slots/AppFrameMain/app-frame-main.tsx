import { Box } from 'lib/components/core/Box'

import { type AppFrameMainProps } from './types'

export const AppFrameMain = ({ children, tagAttrs, tagRef, ...paddings }: AppFrameMainProps) => {
  return (
    <Box
      tag="main"
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      borderRadius="0px"
      minBlockSize="0px"
      minInlineSize="0px"
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameMain.displayName = 'AppFrame.Main'
