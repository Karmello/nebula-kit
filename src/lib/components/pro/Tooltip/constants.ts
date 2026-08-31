import { Placement } from '@floating-ui/react'

import { BoxIntent } from 'lib/components/core/Box'

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

export const TOOLTIP_VARIANTS = ['solid', 'outline'] as const
export const TOOLTIP_INTENTS = [
  'muted',
  'tertiary',
  'secondary',
  'primary',
] as const satisfies BoxIntent[]
export const TOOLTIP_MODES = ['hover', 'click'] as const

export const DEFAULT_TOOLTIP_VARIANT: (typeof TOOLTIP_VARIANTS)[number] = 'solid'
export const DEFAULT_TOOLTIP_INTENT: (typeof TOOLTIP_INTENTS)[number] = 'primary'
export const DEFAULT_TOOLTIP_PLACEMENT: (typeof TOOLTIP_PLACEMENTS)[number] = 'top'
export const DEFAULT_TOOLTIP_MODE: (typeof TOOLTIP_MODES)[number] = 'hover'
export const DEFAULT_TOOLTIP_MAX_INLINE_SIZE = 250
