import { ElementType } from 'react'

import {
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexJustifyContent,
  CssFlexWrap,
  MakeRequired,
  RespValue,
  ScaleValue,
} from 'lib/definitions'

import { BoxProps } from 'lib/components'

export type FlexOwnProps = {
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssFlexJustifyContent>
  alignItems?: RespValue<CssFlexAlignItems>
  gap?: RespValue<ScaleValue | string>
  rowGap?: RespValue<ScaleValue | string>
  columnGap?: RespValue<ScaleValue | string>
}

export const FLEX_INHERITED_PROPS = {
  Box: ['children', 'tag', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type FlexInheritedProps<T extends ElementType> = MakeRequired<
  Pick<BoxProps<T>, (typeof FLEX_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type FlexProps<T extends ElementType = 'div'> = FlexOwnProps & FlexInheritedProps<T>
