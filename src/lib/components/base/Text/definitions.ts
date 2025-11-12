import { ScaleValue } from 'lib/definitions'
import { HtmlTagProps, WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'

export const TEXT_TYPOGRAPHY_CONFIG: Record<
  TextScale,
  Record<
    TextTypography,
    {
      tag: TextTag
      fontSize: ScaleValue
      lineHeight: number
      iconSize: ScaleValue
    }
  >
> = {
  regular: {
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
  },
  compact: {
    body: { tag: 'p', fontSize: 14, lineHeight: 1.5, iconSize: 14 },
    lead: { tag: 'p', fontSize: 16, lineHeight: 1.5, iconSize: 16 },
    secondary: { tag: 'p', fontSize: 13, lineHeight: 1.45, iconSize: 13 },
    tertiary: { tag: 'p', fontSize: 13, lineHeight: 1.45, iconSize: 13 },
    caption: { tag: 'p', fontSize: 11, lineHeight: 1.35, iconSize: 12 },
    h6: { tag: 'h6', fontSize: 18, lineHeight: 1.25, iconSize: 16 },
    h5: { tag: 'h5', fontSize: 21, lineHeight: 1.25, iconSize: 20 },
    h4: { tag: 'h4', fontSize: 26, lineHeight: 1.2, iconSize: 23 },
    h3: { tag: 'h3', fontSize: 32, lineHeight: 1.2, iconSize: 27 },
    h2: { tag: 'h2', fontSize: 42, lineHeight: 1.15, iconSize: 34 },
    h1: { tag: 'h1', fontSize: 52, lineHeight: 1.05, iconSize: 42 },
  },
}

export const TEXT_TAGS = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'label'] as const
export const TEXT_SPACE = ['start', 'end', 'both'] as const
export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'
export const DEFAULT_TEXT_SCALE: TextScale = 'regular'

export const TEXT_TYPOGRAPHY = [
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

export const TEXT_SCALE = ['regular', 'compact'] as const

export type TextTag = (typeof TEXT_TAGS)[number]
export type TextSpace = (typeof TEXT_SPACE)[number]
export type TextTypography = (typeof TEXT_TYPOGRAPHY)[number]
export type TextScale = (typeof TEXT_SCALE)[number]

type TextOwnProps = {
  typography?: TextTypography
  scale?: TextScale
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

type PropsFromBox<T extends TextTag = 'p'> = Pick<BoxProps<T>, 'color' | 'intent' | 'textAlign'>

type PropsFromWithIcon = {
  iconName?: WithIconProps['name']
  iconPosition?: WithIconProps['position']
}

export type TextProps<T extends TextTag = 'p'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromWithIcon &
  TextOwnProps
