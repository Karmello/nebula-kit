import { ScaleValue } from 'lib/definitions'
import { HtmlTagProps, WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'

export const TEXT_TYPOGRAPHY_CONFIG: Record<
  TextTypography,
  {
    tag: TextTag
    fontSize: ScaleValue
    lineHeight: number
    iconSize: ScaleValue
  }
> = {
  body: { tag: 'p', fontSize: 16, lineHeight: 1.6, iconSize: 16 },
  lead: { tag: 'p', fontSize: 18, lineHeight: 1.6, iconSize: 18 },
  secondary: { tag: 'p', fontSize: 14, lineHeight: 1.5, iconSize: 14 },
  tertiary: { tag: 'p', fontSize: 14, lineHeight: 1.5, iconSize: 14 },
  caption: { tag: 'p', fontSize: 12, lineHeight: 1.4, iconSize: 14 },
  h6: { tag: 'h6', fontSize: 20, lineHeight: 1.3, iconSize: 18 },
  h5: { tag: 'h5', fontSize: 24, lineHeight: 1.3, iconSize: 22 },
  h4: { tag: 'h4', fontSize: 30, lineHeight: 1.25, iconSize: 26 },
  h3: { tag: 'h3', fontSize: 36, lineHeight: 1.25, iconSize: 30 },
  h2: { tag: 'h2', fontSize: 48, lineHeight: 1.2, iconSize: 38 },
  h1: { tag: 'h1', fontSize: 60, lineHeight: 1.1, iconSize: 46 },
}

export const TextTag = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'] as const
export const TextSpace = ['start', 'end', 'both'] as const
export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'

export const TextTypography = [
  'body',
  'lead',
  'secondary',
  'tertiary',
  'caption',
  'h6',
  'h5',
  'h4',
  'h3',
  'h2',
  'h1',
] as const

export type TextTag = (typeof TextTag)[number]
export type TextSpace = (typeof TextSpace)[number]
export type TextTypography = (typeof TextTypography)[number]

type TextOwnProps = {
  typography?: TextTypography
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

type PropsFromBox<T extends TextTag = 'p'> = Pick<BoxProps<T>, 'intent' | 'textAlign'>

type PropsFromWithIcon = {
  iconName?: WithIconProps['name']
  iconPosition?: WithIconProps['position']
}

export type TextProps<T extends TextTag = 'p'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromWithIcon &
  TextOwnProps
