import { Box } from 'lib/components/core/Box'
import { NEB_LENGTH } from 'lib/constants'

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
      bgMode="filled"
      borderMode="filled"
      borderRole="edge"
      borderRadius={NEB_LENGTH.px_000}
      borderLeftWidth={NEB_LENGTH.px_000}
      borderRightWidth={NEB_LENGTH.px_000}
      borderTopWidth={NEB_LENGTH.px_000}
      color={color}
      intent={intent}
      position={stickyHeader ? 'sticky' : undefined}
      top={stickyHeader ? '0px' : undefined}
    >
      {children}
    </Box>
  )
}

AppFrameHeader.displayName = 'AppFrame.Header'
