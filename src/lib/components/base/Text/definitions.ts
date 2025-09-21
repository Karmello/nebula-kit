import { MakeRequired, ScaleValue } from 'lib/definitions'
import { WithIconProps } from 'lib/components'

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
  caption: { tag: 'p', fontSize: 6, lineHeight: 1.4, iconSize: 7 },
  secondary: { tag: 'p', fontSize: 7, lineHeight: 1.5, iconSize: 7 },
  body: { tag: 'p', fontSize: 8, lineHeight: 1.6, iconSize: 8 },
  lead: { tag: 'p', fontSize: 9, lineHeight: 1.6, iconSize: 9 },
  h6: { tag: 'h6', fontSize: 10, lineHeight: 1.3, iconSize: 9 },
  h5: { tag: 'h5', fontSize: 12, lineHeight: 1.3, iconSize: 11 },
  h4: { tag: 'h4', fontSize: 15, lineHeight: 1.25, iconSize: 13 },
  h3: { tag: 'h3', fontSize: 18, lineHeight: 1.25, iconSize: 15 },
  h2: { tag: 'h2', fontSize: 24, lineHeight: 1.2, iconSize: 19 },
  h1: { tag: 'h1', fontSize: 30, lineHeight: 1.1, iconSize: 23 },
}

export const TextTag = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'] as const
export type TextTag = (typeof TextTag)[number]

export const TextTypography = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'lead',
  'body',
  'secondary',
  'caption',
] as const

export type TextTypography = (typeof TextTypography)[number]

export const DEFAULT_TEXT_TYPOGRAPHY: TextTypography = 'body'

export type TextOwnProps = {
  typography?: TextTypography
  bold?: boolean
  italic?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
}

const PROPS_INHERITED_FROM_BOX = [
  'children',
  'tag',
  'tagAttrs',
  'tagRef',
  'intent',
  'textAlign',
] as const satisfies readonly (keyof BoxProps)[]

const PROPS_INHERITED_FROM_WITH_ICON = [
  'iconName',
  'iconPosition',
] as const satisfies readonly (keyof WithIconProps)[]

export const TEXT_INHERITED_PROPS = {
  Box: PROPS_INHERITED_FROM_BOX,
  WithIcon: PROPS_INHERITED_FROM_WITH_ICON,
}

export type TextInheritedProps<T extends TextTag = 'p'> = MakeRequired<
  Pick<BoxProps<T>, (typeof PROPS_INHERITED_FROM_BOX)[number]>,
  'children'
> &
  Partial<Pick<WithIconProps, (typeof PROPS_INHERITED_FROM_WITH_ICON)[number]>>

export type TextProps<T extends TextTag = 'p'> = TextOwnProps & TextInheritedProps<T>
