import { ButtonProps } from 'lib/index.core'

export const DEFAULT_BUTTON_VARIANT: ButtonProps['variant'] = 'solid'
export const DEFAULT_BUTTON_INTENT: ButtonProps['intent'] = 'tertiary'
export const DEFAULT_BUTTON_RIPPLE: ButtonProps['ripple'] = true
export const DEFAULT_BUTTON_ALIGN: ButtonProps['align'] = 'center'
export const DEFAULT_BUTTON_ICON_PLACEMENT: ButtonProps['iconPlacement'] = 'left'

export const BUTTON_ALIGNS = ['center', 'start', 'split'] as const
export const BUTTON_ICON_PLACEMENTS = ['left', 'right'] as const
