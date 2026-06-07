import { AppFrameFooterProps, BoxProps } from 'lib/components'

export type AppFrameFooterSectionProps = {
  children: BoxProps<'section'>['children']
  padding?: BoxProps<'section'>['padding']
}

export type AppFrameFooterSectionInternalProps = {
  color: AppFrameFooterProps['color']
  intent: AppFrameFooterProps['intent']
  footerStackBreakpoint: AppFrameFooterProps['footerStackBreakpoint']
  isLast: boolean
}

export const DEFAULT_APP_FRAME_FOOTER_SECTION_PADDING: AppFrameFooterSectionProps['padding'] = 'xs'
