import type { Placement } from '@floating-ui/react'

import type { BoxProps } from 'lib/components'
import type { BoxColor } from 'lib/components/core/Box/definitions'

import { TOOLTIP_INTENTS, TOOLTIP_MODES, TOOLTIP_OFFSET, TOOLTIP_VARIANTS } from './constants'

export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number]
export type TooltipIntent = (typeof TOOLTIP_INTENTS)[number]
export type TooltipMode = (typeof TOOLTIP_MODES)[number]
export type TooltipOffset = (typeof TOOLTIP_OFFSET)[number]

export type TooltipProps = {
  // Box
  children: BoxProps<'span'>['children']
  variant?: TooltipVariant
  intent?: TooltipIntent
  color?: BoxColor
  padding?: BoxProps<'div'>['padding']
  paddingBlock?: BoxProps<'div'>['paddingBlock']
  paddingInline?: BoxProps<'div'>['paddingInline']
  // own
  content: string
  placement?: Placement
  mode?: TooltipMode
  offset?: TooltipOffset
  minInlineSize?: number
  maxInlineSize?: number
}
