import { ElementType } from 'react'

import {
  CssFlexAlignContent,
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexDisplay,
  CssFlexJustifyContent,
  CssFlexWrap,
  LengthValue,
  RespValue,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

type FlexOwnProps = {
  display?: RespValue<CssFlexDisplay>
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssFlexJustifyContent>
  alignItems?: RespValue<CssFlexAlignItems>
  alignContent?: RespValue<CssFlexAlignContent>
  gap?: RespValue<LengthValue>
  rowGap?: RespValue<LengthValue>
  columnGap?: RespValue<LengthValue>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type FlexProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> & FlexOwnProps
