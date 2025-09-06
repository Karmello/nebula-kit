import { ElementType } from 'react'

import { MakeRequired, ResponsiveProp, ScaleValue, TextElem, TextTypography } from 'lib/definitions'
import { WithIconProps } from 'lib/components'

import { BoxProps } from '../Box'

export type TextOwnProps = {
  typography?: TextTypography
  fontSize?: ResponsiveProp<ScaleValue | string>
  lineHeight?: ResponsiveProp<number | string>
  bold?: boolean
  italic?: boolean
  noWrap?: boolean
  truncate?: boolean
  clampLines?: number
}

const PROPS_INHERITED_FROM_BOX = [
  'children',
  'elem',
  'elemProps',
  'elemRef',
  'intent',
  'opacity',
  'disabled',
  'overflowX',
  'overflowY',
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'textAlign',
  'blockSize',
  'minBlockSize',
  'maxBlockSize',
  'inlineSize',
  'minInlineSize',
  'maxInlineSize',
  'margin',
  'marginInline',
  'marginBlock',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
] as const satisfies readonly (keyof BoxProps<any>)[]

const PROPS_INHERITED_FROM_WITH_ICON = [
  'iconName',
  'iconPosition',
] as const satisfies readonly (keyof WithIconProps)[]

export const TEXT_INHERITED_PROPS = {
  Box: PROPS_INHERITED_FROM_BOX,
  WithIcon: PROPS_INHERITED_FROM_WITH_ICON,
}

export type TextInheritedProps<E extends ElementType> = MakeRequired<
  Pick<BoxProps<E>, (typeof PROPS_INHERITED_FROM_BOX)[number]>,
  'children'
> &
  Partial<Pick<WithIconProps, (typeof PROPS_INHERITED_FROM_WITH_ICON)[number]>>

export type TextProps<E extends ElementType = 'div'> = TextOwnProps & TextInheritedProps<E>

// constants

export const TEXT_TYPOGRAPHY_CONFIG: Record<
  TextTypography,
  {
    elem: TextElem
    fontSize: TextOwnProps['fontSize']
    lineHeight: TextOwnProps['lineHeight']
  }
> = {
  caption: { elem: 'p', fontSize: 6, lineHeight: 1.4 },
  secondary: { elem: 'p', fontSize: 7, lineHeight: 1.5 },
  body: { elem: 'p', fontSize: 8, lineHeight: 1.6 },
  lead: { elem: 'p', fontSize: 9, lineHeight: 1.6 },
  h6: { elem: 'h6', fontSize: 10, lineHeight: 1.3 },
  h5: { elem: 'h5', fontSize: 12, lineHeight: 1.3 },
  h4: { elem: 'h4', fontSize: 15, lineHeight: 1.25 },
  h3: { elem: 'h3', fontSize: 18, lineHeight: 1.25 },
  h2: { elem: 'h2', fontSize: 24, lineHeight: 1.2 },
  h1: { elem: 'h1', fontSize: 30, lineHeight: 1.1 },
}
