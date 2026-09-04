import { Placement } from '@floating-ui/react'

import { BoxColor } from 'lib/components/core/Box'

import { FloatingTriggerProps } from '../Floating'
import { TOOLTIP_INTENTS, TOOLTIP_MODES, TOOLTIP_VARIANTS } from './constants'

export type TooltipVariant = (typeof TOOLTIP_VARIANTS)[number]
export type TooltipIntent = (typeof TOOLTIP_INTENTS)[number]
export type TooltipMode = (typeof TOOLTIP_MODES)[number]

export type TooltipProps = {
  children: FloatingTriggerProps['children']
  color?: BoxColor
  variant?: TooltipVariant
  intent?: TooltipIntent
  content: string
  placement?: Placement
  mode?: TooltipMode
  minInlineSize?: number
  maxInlineSize?: number
}
