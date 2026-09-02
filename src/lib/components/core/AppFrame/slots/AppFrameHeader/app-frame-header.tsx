import { Box } from 'lib/components/core/Box'

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
      tagAttrs={{
        ...tagAttrs,
        style: {
          ...tagAttrs?.style,
          zIndex: stickyHeader ? 'var(--neb-z-app-frame-header)' : undefined,
        },
      }}
      tagRef={tagRef}
      drawable
      // variant="outline"
      color={color}
      intent={intent}
      borderWidth="0px"
      borderRadius="0px"
      borderBottomWidth="2px"
      borderRole="edge"
      position={stickyHeader ? 'sticky' : undefined}
      top={stickyHeader ? '0px' : undefined}
    >
      <Box drawable borderRadius="0px" bgMode="filled" color={color} intent={intent}>
        {children}
      </Box>
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
