import { BoxColor, BoxIntent } from 'lib/components/core/Box'
import { BoxProps } from 'lib/index.core'
import { SwitchBreakpoint } from 'lib/types'

export const DEFAULT_APP_FRAME_FOOTER_INTENT: AppFrameFooterProps['intent'] = 'muted'

export type AppFrameFooterProps = Pick<BoxProps<'footer'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'footer'>['children']
  footerStackBreakpoint?: SwitchBreakpoint
  color?: BoxColor
  intent?: BoxIntent
}
