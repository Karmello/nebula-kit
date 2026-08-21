import { ElementType } from 'react'

import {
  CssFlexAlignContent,
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexDisplay,
  CssFlexJustifyContent,
  CssFlexWrap,
  RespValue,
} from 'lib/types'

import { BoxProps } from '../Box'

type FlexOwnProps = {
  display?: RespValue<CssFlexDisplay>
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssFlexJustifyContent>
  alignItems?: RespValue<CssFlexAlignItems>
  alignContent?: RespValue<CssFlexAlignContent>
  gap?: RespValue<string>
  rowGap?: RespValue<string>
  columnGap?: RespValue<string>
}

type PropsFromBox<T extends ElementType = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<T>['children']
}

export type FlexProps<T extends ElementType = 'div'> = PropsFromBox<T> & FlexOwnProps
