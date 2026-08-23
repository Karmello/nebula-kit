import { BoxProps } from 'lib/index.core'
import { TextTag } from 'lib/types'

import { TEXT_SPACE, TEXT_TYPOGRAPHY, TEXT_WORD_BREAK } from './constants'

export type TextSpace = (typeof TEXT_SPACE)[number]
export type TextTypography = (typeof TEXT_TYPOGRAPHY)[number]
export type TextWordBreak = (typeof TEXT_WORD_BREAK)[number]

export type TextProps<T extends TextTag = 'p'> = {
  // own
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
  // Box
  tag?: BoxProps<T>['tag']
  tagAttrs?: BoxProps<T>['tagAttrs']
  tagRef?: BoxProps<T>['tagRef']
  color?: BoxProps<T>['color']
  intent?: BoxProps<T>['intent']
  textAlign?: BoxProps<T>['textAlign']
  children: BoxProps<T>['children']
}
