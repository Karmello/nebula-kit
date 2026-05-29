import { Placement } from '@floating-ui/react'

import { BoxProps } from 'lib/components'
import { RespValue } from 'lib/definitions'

import { TOOLTIP_MODES, TOOLTIP_VARIANTS } from './constants'

export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number]
export type TooltipMode = (typeof TOOLTIP_MODES)[number]

export type TooltipProps = {
  // Box
  children: BoxProps<'span'>['children']
  variant?: RespValue<TooltipVariant>
  intent?: BoxProps<'div'>['intent']
  color?: BoxProps<'div'>['color']
  padding?: BoxProps<'div'>['padding']
  paddingBlock?: BoxProps<'div'>['paddingBlock']
  paddingInline?: BoxProps<'div'>['paddingInline']
  textAlign?: BoxProps<'div'>['textAlign']
  // own
  content: string
  minInlineSize: number
  maxInlineSize: number
  placement?: Placement
  mode?: TooltipMode
  offset?: number
}
