import { ElementType } from 'react'

import {
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexJustifyContent,
  CssFlexWrap,
  MakeRequired,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import { BoxProps } from 'lib/components'

export type FlexOwnProps = {
  flexDirection?: ResponsiveProp<CssFlexDirection>
  flexWrap?: ResponsiveProp<CssFlexWrap>
  justifyContent?: ResponsiveProp<CssFlexJustifyContent>
  alignItems?: ResponsiveProp<CssFlexAlignItems>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export const FLEX_INHERITED_PROPS = {
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type FlexInheritedProps<E extends ElementType> = MakeRequired<
  Pick<BoxProps<E>, (typeof FLEX_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type FlexProps<E extends ElementType = 'div'> = FlexOwnProps & FlexInheritedProps<E>
