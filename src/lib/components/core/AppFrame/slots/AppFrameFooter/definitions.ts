import { SwitchBreakpoint } from 'lib/types'

import type { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'

export const DEFAULT_APP_FRAME_FOOTER_INTENT: AppFrameFooterProps['intent'] = 'muted'

export type AppFrameFooterProps = {
  // Box
  tagAttrs?: BoxProps<'footer'>['tagAttrs']
  tagRef?: BoxProps<'footer'>['tagRef']
  children: BoxProps<'footer'>['children']
  // own
  footerStackBreakpoint?: SwitchBreakpoint
  color?: BoxColor
  intent?: BoxIntent
}
