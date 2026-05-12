import { HtmlTagProps, WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'
import { IconSize } from '../../elements/Icon'

export const TEXT_TAGS = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'label'] as const
export const TEXT_SPACE = ['start', 'end', 'both'] as const
export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'

export const TEXT_TYPOGRAPHY = ['body', 'lead', 'small', 'caption', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'] as const
export const TEXT_WORD_BREAK = ['normal', 'break-all', 'keep-all', 'break-word'] as const

export type TextTag = (typeof TEXT_TAGS)[number]
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

type PropsFromHtmlTag<T extends TextTag = 'p'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

type PropsFromBox<T extends TextTag = 'p'> = Pick<BoxProps<T>, 'color' | 'intent' | 'textAlign' | 'disabled'>

type PropsFromWithIcon = Pick<WithIconProps, 'iconName' | 'iconPlacement' | 'iconAngle' | 'customSvgIcon' | 'justifyContent'>

export type TextProps<T extends TextTag = 'p'> = PropsFromHtmlTag<T> & PropsFromBox<T> & PropsFromWithIcon & TextOwnProps

export const TEXT_TYPOGRAPHY_MAP: Record<
  TextTypography,
  {
    fontSize: string
    lineHeight: number
    iconSize: IconSize
    tag: TextTag
  }
> = {
  body: {
    fontSize: '15px',
    lineHeight: 1.5,
    iconSize: '16px',
    tag: 'p',
  },
  lead: {
    fontSize: '17px',
    lineHeight: 1.4,
    iconSize: '18px',
    tag: 'p',
  },
  small: {
    fontSize: '14px',
    lineHeight: 1.3,
    iconSize: '13px',
    tag: 'p',
  },
  caption: {
    fontSize: '11px',
    lineHeight: 1.4,
    iconSize: '12px',
    tag: 'p',
  },
  h6: {
    fontSize: '16px',
    lineHeight: 1.3,
    iconSize: '15px',
    tag: 'h6',
  },
  h5: {
    fontSize: '21px',
    lineHeight: 1.3,
    iconSize: '19px',
    tag: 'h5',
  },
  h4: {
    fontSize: '27px',
    lineHeight: 1.2,
    iconSize: '25px',
    tag: 'h4',
  },
  h3: {
    fontSize: '37px',
    lineHeight: 1.2,
    iconSize: '33px',
    tag: 'h3',
  },
  h2: {
    fontSize: '48px',
    lineHeight: 1.1,
    iconSize: '40px',
    tag: 'h2',
  },
  h1: {
    fontSize: '60px',
    lineHeight: 1.1,
    iconSize: '50px',
    tag: 'h1',
  },
}
