import { Box } from 'lib/components/core/Box'
import { NEB_LENGTH } from 'lib/constants'

import { type AppFrameMainProps } from './types'

export const AppFrameMain = ({ children, tagAttrs, tagRef, ...paddings }: AppFrameMainProps) => {
  return (
    <Box
      tag="main"
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      borderRadius={NEB_LENGTH.px_000}
      minBlockSize={NEB_LENGTH.px_000}
      minInlineSize={NEB_LENGTH.px_000}
      {...paddings}
    >
      {children}
    </Box>
  )
}

AppFrameMain.displayName = 'AppFrame.Main'
