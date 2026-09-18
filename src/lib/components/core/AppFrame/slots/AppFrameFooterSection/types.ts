import { BoxProps } from 'lib/components/core/Box'

import { AppFrameFooterProps } from '../AppFrameFooter/types'

export type AppFrameFooterSectionProps = {
  children: BoxProps<'section'>['children']
  padding?: BoxProps<'section'>['padding']
  paddingInline?: BoxProps<'section'>['paddingInline']
  paddingBlock?: BoxProps<'section'>['paddingBlock']
}

export type AppFrameFooterSectionInternalProps = {
  // own
  isLast: boolean
  // AppFrameFooter
  color: AppFrameFooterProps['color']
  intent: AppFrameFooterProps['intent']
  footerStackBreakpoint: AppFrameFooterProps['footerStackBreakpoint']
}
