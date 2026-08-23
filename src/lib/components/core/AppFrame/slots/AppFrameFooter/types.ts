import { SwitchBreakpoint } from 'lib/types'

import type { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'

export type AppFrameFooterProps = {
  // own
  footerStackBreakpoint?: SwitchBreakpoint
  color?: BoxColor
  intent?: BoxIntent
  // Box
  tagAttrs?: BoxProps<'footer'>['tagAttrs']
  tagRef?: BoxProps<'footer'>['tagRef']
  children: BoxProps<'footer'>['children']
}
