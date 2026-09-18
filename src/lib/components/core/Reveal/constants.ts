import type { TShirtSize } from 'lib/types'

import type { BoxIntent } from '../Box'

export const REVEAL_TAGS = ['div', 'section', 'article', 'aside', 'li'] as const

export const DEFAULT_REVEAL_INTENT: BoxIntent = 'tertiary'
export const DEFAULT_REVEAL_SCALE: TShirtSize = 'sm'
