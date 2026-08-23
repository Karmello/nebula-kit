import { RevealProps } from 'lib/index.core'

export const REVEAL_TAGS = ['div', 'section', 'article', 'aside', 'li'] as const

export const DEFAULT_REVEAL_INTENT: RevealProps['intent'] = 'tertiary'
export const DEFAULT_REVEAL_SCALE: RevealProps['scale'] = 'sm'
