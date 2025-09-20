import { MakeRequired, ScaleValue } from 'lib/definitions'
import { WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'

export const TextElem = ['p', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a'] as const
export type TextElem = (typeof TextElem)[number]

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

export type TextOwnProps<E extends TextElem = 'p'> = {
  elem?: E
  typography?: TextTypography
  bold?: boolean
  italic?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
}

const PROPS_INHERITED_FROM_BOX = [
  'children',
  'elemProps',
  'elemRef',
  'intent',
  'textAlign',
] as const satisfies readonly (keyof BoxProps<any>)[]

const PROPS_INHERITED_FROM_WITH_ICON = [
  'iconName',
  'iconPosition',
] as const satisfies readonly (keyof WithIconProps)[]

export const TEXT_INHERITED_PROPS = {
  Box: PROPS_INHERITED_FROM_BOX,
  WithIcon: PROPS_INHERITED_FROM_WITH_ICON,
}

export type TextInheritedProps<E extends TextElem = 'p'> = MakeRequired<
  Pick<BoxProps<E>, (typeof PROPS_INHERITED_FROM_BOX)[number]>,
  'children'
> &
  Partial<Pick<WithIconProps, (typeof PROPS_INHERITED_FROM_WITH_ICON)[number]>>

export type TextProps<E extends TextElem = 'p'> = TextOwnProps<E> & TextInheritedProps<E>

// constants

export const TEXT_TYPOGRAPHY_CONFIG: Record<
  TextTypography,
  {
    elem: TextElem
    fontSize: ScaleValue
    lineHeight: number
    iconSize: ScaleValue
  }
> = {
  caption: { elem: 'p', fontSize: 6, lineHeight: 1.4, iconSize: 7 },
  secondary: { elem: 'p', fontSize: 7, lineHeight: 1.5, iconSize: 7 },
  body: { elem: 'p', fontSize: 8, lineHeight: 1.6, iconSize: 8 },
  lead: { elem: 'p', fontSize: 9, lineHeight: 1.6, iconSize: 9 },
  h6: { elem: 'h6', fontSize: 10, lineHeight: 1.3, iconSize: 9 },
  h5: { elem: 'h5', fontSize: 12, lineHeight: 1.3, iconSize: 11 },
  h4: { elem: 'h4', fontSize: 15, lineHeight: 1.25, iconSize: 13 },
  h3: { elem: 'h3', fontSize: 18, lineHeight: 1.25, iconSize: 15 },
  h2: { elem: 'h2', fontSize: 24, lineHeight: 1.2, iconSize: 19 },
  h1: { elem: 'h1', fontSize: 30, lineHeight: 1.1, iconSize: 23 },
}
