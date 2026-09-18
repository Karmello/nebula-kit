import { SwitchBreakpoint } from 'lib/types'

import type { BoxColor, BoxIntent, BoxProps } from '../../../Box/types'
import { FOOTER_TAGS } from './constants'

export type FooterTag = (typeof FOOTER_TAGS)[number]

export type AppFrameFooterProps = {
  // own
  footerStackBreakpoint?: SwitchBreakpoint
  color?: BoxColor
  intent?: BoxIntent
  // Box
  elemAttrs?: BoxProps<'footer'>['elemAttrs']
  elemRef?: BoxProps<'footer'>['elemRef']
  children: BoxProps<'footer'>['children']
}
