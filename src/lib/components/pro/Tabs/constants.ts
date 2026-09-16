import { BoxIntent } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const TABS_ORIENTATION = ['horizontal', 'vertical'] as const

export const DEFAULT_TABS_DEFAULT_VALUE: string | number = 1
export const DEFAULT_TABS_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_TABS_ORIENTATION: (typeof TABS_ORIENTATION)[number] = 'horizontal'
export const DEFAULT_TABS_SCALE: TShirtSize = 'md'
