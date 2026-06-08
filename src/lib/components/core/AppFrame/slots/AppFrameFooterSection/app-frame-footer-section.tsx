import { Box } from 'lib/index.core'

import {
  type AppFrameFooterSectionInternalProps,
  type AppFrameFooterSectionProps,
  DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING,
} from './definitions'

export const AppFrameFooterSection = ({
  children,
  padding = DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING,
  ...internalProps
}: AppFrameFooterSectionProps) => {
  const { color, intent, footerStackBreakpoint, isLast } = internalProps as AppFrameFooterSectionInternalProps

  return (
    <Box
      tag="section"
      drawable
      variant="outline"
      intent={intent}
      color={color}
      surface="dividing"
      borderRadius="0px"
      borderWidth="0px"
      borderBottomWidth={{ base: !isLast ? 'var(--neb-length-3xs)' : undefined, [footerStackBreakpoint || 'lg']: '0px' }}
      borderRightWidth={{ [footerStackBreakpoint || 'lg']: !isLast ? 'var(--neb-length-3xs)' : undefined }}
      padding={padding}
    >
      {children}
    </Box>
  )
}

AppFrameFooterSection.displayName = 'AppFrame.FooterSection'
