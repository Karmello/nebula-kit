import { HtmlTagProps, WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'

export const TEXT_TYPOGRAPHY_CONFIG: Record<
  TextScale,
  Record<
    TextTypography,
    {
      tag: TextTag
      fontSize: string
      lineHeight: number
      iconSize: string
    }
  >
> = {
  regular: {
    body: { tag: 'p', fontSize: '16px', lineHeight: 1.6, iconSize: '16px' },
    lead: { tag: 'p', fontSize: '18px', lineHeight: 1.6, iconSize: '18px' },
    small: { tag: 'p', fontSize: '14px', lineHeight: 1.5, iconSize: '14px' },
    caption: { tag: 'p', fontSize: '12px', lineHeight: 1.4, iconSize: '14px' },
    h6: { tag: 'h6', fontSize: '20px', lineHeight: 1.3, iconSize: '18px' },
    h5: { tag: 'h5', fontSize: '24px', lineHeight: 1.3, iconSize: '22px' },
    h4: { tag: 'h4', fontSize: '30px', lineHeight: 1.25, iconSize: '26px' },
    h3: { tag: 'h3', fontSize: '36px', lineHeight: 1.25, iconSize: '30px' },
    h2: { tag: 'h2', fontSize: '48px', lineHeight: 1.2, iconSize: '38px' },
    h1: { tag: 'h1', fontSize: '60px', lineHeight: 1.1, iconSize: '46px' },
  },
  compact: {
    body: { tag: 'p', fontSize: '14px', lineHeight: 1.5, iconSize: '14px' },
    lead: { tag: 'p', fontSize: '16px', lineHeight: 1.5, iconSize: '16px' },
    small: { tag: 'p', fontSize: '13px', lineHeight: 1.45, iconSize: '13px' },
    caption: { tag: 'p', fontSize: '11px', lineHeight: 1.35, iconSize: '12px' },
    h6: { tag: 'h6', fontSize: '18px', lineHeight: 1.25, iconSize: '16px' },
    h5: { tag: 'h5', fontSize: '21px', lineHeight: 1.25, iconSize: '20px' },
    h4: { tag: 'h4', fontSize: '26px', lineHeight: 1.2, iconSize: '23px' },
    h3: { tag: 'h3', fontSize: '32px', lineHeight: 1.2, iconSize: '27px' },
    h2: { tag: 'h2', fontSize: '42px', lineHeight: 1.15, iconSize: '34px' },
    h1: { tag: 'h1', fontSize: '52px', lineHeight: 1.05, iconSize: '42px' },
  },
}

export const TEXT_TAGS = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'label'] as const
export const TEXT_SPACE = ['start', 'end', 'both'] as const
export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'
export const DEFAULT_TEXT_SCALE: TextScale = 'regular'

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

type PropsFromBox<T extends TextTag = 'p'> = Pick<BoxProps<T>, 'color' | 'intent' | 'textAlign' | 'disabled'>

type PropsFromWithIcon = {
  iconName?: WithIconProps['iconName']
  iconPlacement?: WithIconProps['iconPlacement']
  customSvgIcon?: WithIconProps['customSvgIcon']
}

export type TextProps<T extends TextTag = 'p'> = PropsFromHtmlTag<T> &
  PropsFromBox<T> &
  PropsFromWithIcon &
  TextOwnProps
