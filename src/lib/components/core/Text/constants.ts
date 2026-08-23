import { TextTypography } from 'lib/components/core/Text/types'

export const TEXT_SPACE = ['start', 'end', 'both'] as const
export const TEXT_TYPOGRAPHY = [
  'body',
  'lead',
  'small',
  'caption',
  'h6',
  'h5',
  'h4',
  'h3',
  'h2',
  'h1',
] as const
export const TEXT_WORD_BREAK = ['normal', 'break-all', 'keep-all', 'break-word'] as const
export const TEXT_TAGS = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'label'] as const

export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'
