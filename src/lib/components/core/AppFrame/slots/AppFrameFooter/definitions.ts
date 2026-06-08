import { SwitchBreakpoint } from 'lib/types'

import { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'

export const DEFAULT_APP_FRAME_FOOTER_INTENT: AppFrameFooterProps['intent'] = 'muted'

export type AppFrameFooterProps = Pick<BoxProps<'footer'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'footer'>['children']
  footerStackBreakpoint?: SwitchBreakpoint
  color?: BoxColor
  intent?: BoxIntent
}
