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
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type FlexInheritedProps<E extends ElementType> = MakeRequired<
  Pick<BoxProps<E>, (typeof FLEX_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type FlexProps<E extends ElementType = 'div'> = FlexOwnProps & FlexInheritedProps<E>
