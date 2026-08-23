import { Box } from 'lib/index.core'

import { DEFAULT_APP_FRAME_HEADER_INTENT } from './constants'
import { type AppFrameHeaderInternalProps, type AppFrameHeaderProps } from './types'

export const AppFrameHeader = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent = DEFAULT_APP_FRAME_HEADER_INTENT,
  ...internalProps
}: AppFrameHeaderProps) => {
  const { stickyHeader } = internalProps as AppFrameHeaderInternalProps

  return (
    <Box
      tag="header"
      tagAttrs={tagAttrs}
      tagRef={tagRef}
      drawable
      variant="outline"
      color={color}
      intent={intent}
      borderWidth="0px"
      borderRadius="0px"
      borderBottomWidth="2px"
      surface="dividing"
      position={stickyHeader ? 'sticky' : undefined}
      top={stickyHeader ? '0px' : undefined}
      zIndex={stickyHeader ? 10 : undefined}
    >
      <Box drawable borderRadius="0px" variant="solid" color={color} intent={intent}>
        {children}
      </Box>
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
