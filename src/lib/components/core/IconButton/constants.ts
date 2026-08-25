import type { BoxIntent, BoxVariant } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const ICON_BUTTON_TAGS = ['button', 'a'] as const

export const DEFAULT_ICON_BUTTON_VARIANT: BoxVariant = 'solid'
export const DEFAULT_ICON_BUTTON_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_ICON_BUTTON_RIPPLE = true
export const DEFAULT_ICON_BUTTON_SCALE: TShirtSize = 'sm'
