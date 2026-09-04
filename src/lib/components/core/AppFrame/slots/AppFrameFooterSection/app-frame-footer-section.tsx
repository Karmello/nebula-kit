import { Box } from 'lib/components/core/Box'
import { NEB_LENGTH } from 'lib/constants'

import { DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING } from './constants'
import { type AppFrameFooterSectionInternalProps, type AppFrameFooterSectionProps } from './types'

export const AppFrameFooterSection = ({
  children,
  padding = DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING,
  paddingBlock,
  paddingInline,
  ...internalProps
}: AppFrameFooterSectionProps) => {
  const { color, intent, footerStackBreakpoint, isLast } =
    internalProps as AppFrameFooterSectionInternalProps

  return (
    <Box
      tag="section"
      drawable
      intent={intent}
      color={color}
      bgMode="filled"
      borderMode="filled"
      borderRole="divider"
      borderRadius={NEB_LENGTH.px_000}
      borderWidth={NEB_LENGTH.px_000}
      borderBottomWidth={{
        base: !isLast ? NEB_LENGTH.px_002 : undefined,
        [footerStackBreakpoint || 'lg']: NEB_LENGTH.px_000,
      }}
      borderRightWidth={{
        [footerStackBreakpoint || 'lg']: !isLast ? NEB_LENGTH.px_002 : undefined,
      }}
      padding={padding}
      paddingBlock={paddingBlock}
      paddingInline={paddingInline}
      blockSize="100%"
    >
      {children}
    </Box>
  )
}

AppFrameFooterSection.displayName = 'AppFrame.FooterSection'
