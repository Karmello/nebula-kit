import { Placement } from '@floating-ui/react'

import { BoxVariant } from 'lib/components/core/Box/definitions'

import { TooltipProps } from './types'

export const TOOLTIP_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'right',
  'right-start',
  'right-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
] as const satisfies readonly Placement[]

export const TOOLTIP_VARIANTS = ['solid', 'outline', 'soft-outline'] as const satisfies BoxVariant[]
export const TOOLTIP_MODES = ['hover', 'click'] as const

export const DEFAULT_TOOLTIP_VARIANT: TooltipProps['variant'] = 'solid'
export const DEFAULT_TOOLTIP_INTENT: TooltipProps['intent'] = 'inverse'
export const DEFAULT_TOOLTIP_PADDING: TooltipProps['padding'] = '10px'
export const DEFAULT_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top'
export const DEFAULT_TOOLTIP_OFFSET: TooltipProps['offset'] = 10
export const DEFAULT_TOOLTIP_MODE: TooltipProps['mode'] = 'hover'
