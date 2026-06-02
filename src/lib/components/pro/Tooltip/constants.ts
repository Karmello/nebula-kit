import type { Placement } from '@floating-ui/react'

import { BoxIntent, BoxVariant } from 'lib/components/core/Box/types'
import type { TooltipProps } from 'lib/components/pro/Tooltip/types'
import { TShirtSize } from 'lib/types'

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

export const TOOLTIP_VARIANTS = ['solid', 'outline'] as const satisfies BoxVariant[]
export const TOOLTIP_INTENTS = ['muted', 'tertiary', 'secondary', 'primary', 'inverse'] as const satisfies BoxIntent[]
export const TOOLTIP_MODES = ['hover', 'click'] as const
export const TOOLTIP_OFFSET = ['xs', 'sm', 'md'] as const satisfies readonly TShirtSize[]

export const DEFAULT_TOOLTIP_VARIANT: TooltipProps['variant'] = 'solid'
export const DEFAULT_TOOLTIP_INTENT: TooltipProps['intent'] = 'inverse'
export const DEFAULT_TOOLTIP_PADDING_BLOCK: TooltipProps['padding'] = 'xs'
export const DEFAULT_TOOLTIP_PADDING_INLINE: TooltipProps['padding'] = 'sm'
export const DEFAULT_TOOLTIP_PLACEMENT: TooltipProps['placement'] = 'top'
export const DEFAULT_TOOLTIP_OFFSET: TooltipProps['offset'] = 'xs'
export const DEFAULT_TOOLTIP_MODE: TooltipProps['mode'] = 'hover'
export const DEFAULT_TOOLTIP_MAX_INLINE_SIZE: TooltipProps['maxInlineSize'] = 250
