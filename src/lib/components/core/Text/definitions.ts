import { TextTag } from 'lib/types'

import { BoxProps } from '../Box'

export const TEXT_SPACE = ['start', 'end', 'both'] as const
export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'

export const TEXT_TYPOGRAPHY = ['body', 'lead', 'small', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'] as const
export const TEXT_WORD_BREAK = ['normal', 'break-all', 'keep-all', 'break-word'] as const

export type TextSpace = (typeof TEXT_SPACE)[number]
export type TextTypography = (typeof TEXT_TYPOGRAPHY)[number]
export type TextWordBreak = (typeof TEXT_WORD_BREAK)[number]

type TextOwnProps = {
  typography?: TextTypography
  fontSize?: string
  lineHeight?: number | string
  wordBreak?: TextWordBreak
  bold?: boolean
  italic?: boolean
  underline?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
  space?: TextSpace
}

type PropsFromBox<T extends TextTag = 'p'> = Pick<
  BoxProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'textAlign'
> & {
  children: BoxProps<T>['children']
}

export type TextProps<T extends TextTag = 'p'> = PropsFromBox<T> & TextOwnProps
