import { BoxIntent } from 'lib/components/core/Box'
import type { TShirtSize } from 'lib/types'

export const TABS_DIRECTION = ['row', 'column'] as const

export const DEFAULT_TABS_DEFAULT_VALUE: string | number = 1
export const DEFAULT_TABS_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_TABS_DIRECTION: (typeof TABS_DIRECTION)[number] = 'row'
export const DEFAULT_TABS_SIZE: TShirtSize = 'md'
