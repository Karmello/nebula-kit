import { HtmlTagProps, WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'

export const TEXT_TAGS = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'label'] as const
export const TEXT_SPACE = ['start', 'end', 'both'] as const
export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'
export const DEFAULT_TEXT_SCALE: TextScale = 'regular'

export const TEXT_TYPOGRAPHY = ['body', 'lead', 'small', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'] as const

export const TEXT_SCALE = ['regular', 'compact'] as const

export type TextTag = (typeof TEXT_TAGS)[number]
export type TextSpace = (typeof TEXT_SPACE)[number]
export type TextTypography = (typeof TEXT_TYPOGRAPHY)[number]
export type TextScale = (typeof TEXT_SCALE)[number]

type TextOwnProps = {
  scale?: TextScale
  typography?: TextTypography
  fontSize?: string
  lineHeight?: number | string
  bold?: boolean
  italic?: boolean
  underline?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
  space?: TextSpace
}

type PropsFromHtmlTag<T extends TextTag = 'p'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends TextTag = 'p'> = Pick<BoxProps<T>, 'color' | 'intent' | 'textAlign' | 'disabled'>

type PropsFromWithIcon = {
  iconName?: WithIconProps['iconName']
  iconPlacement?: WithIconProps['iconPlacement']
  customSvgIcon?: WithIconProps['customSvgIcon']
}

export type TextProps<T extends TextTag = 'p'> = PropsFromHtmlTag<T> & PropsFromBox<T> & PropsFromWithIcon & TextOwnProps
