import type { TShirtSize } from 'lib/types'

import type { BoxIntent } from '../../core/Box'

export const BREADCRUMB_TAGS = ['div', 'nav', 'section'] as const

export const DEFAULT_BREADCRUMB_INTENT: BoxIntent = 'muted'
export const DEFAULT_BREADCRUMB_SIZE: TShirtSize = 'xs'
export const DEFAULT_BREADCRUMB_VISIBLE_ITEMS_COUNT = 5
