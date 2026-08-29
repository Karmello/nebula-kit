import { Box } from 'lib/components/core/Box'

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
      variant="outline"
      intent={intent}
      color={color}
      surface="raised"
      borderRadius="0px"
      borderWidth="0px"
      borderBottomWidth={{
        base: !isLast ? '2px' : undefined,
        [footerStackBreakpoint || 'lg']: '0px',
      }}
      borderRightWidth={{ [footerStackBreakpoint || 'lg']: !isLast ? '2px' : undefined }}
      padding={padding}
      paddingBlock={paddingBlock}
      paddingInline={paddingInline}
    >
      {children}
    </Box>
  )
}

AppFrameFooterSection.displayName = 'AppFrame.FooterSection'
