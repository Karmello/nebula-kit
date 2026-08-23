import { IconButtonProps } from 'lib/index.core'

export const ICON_BUTTON_TAGS = ['button', 'a'] as const

export const DEFAULT_ICON_BUTTON_VARIANT: IconButtonProps['variant'] = 'solid'
export const DEFAULT_ICON_BUTTON_INTENT: IconButtonProps['intent'] = 'tertiary'
export const DEFAULT_ICON_BUTTON_RIPPLE: IconButtonProps['ripple'] = true
export const DEFAULT_ICON_BUTTON_SCALE: IconButtonProps['scale'] = 'sm'
