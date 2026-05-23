import { ElementType } from 'react'

import {
  CssFlexAlignContent,
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexDisplay,
  CssFlexJustifyContent,
  CssFlexWrap,
  CssValue,
  RespValue,
  TShirtSize,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

type FlexOwnProps = {
  display?: RespValue<CssFlexDisplay>
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssFlexJustifyContent>
  alignItems?: RespValue<CssFlexAlignItems>
  alignContent?: RespValue<CssFlexAlignContent>
  gap?: RespValue<TShirtSize | CssValue>
  rowGap?: RespValue<TShirtSize | CssValue>
  columnGap?: RespValue<TShirtSize | CssValue>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type FlexProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> & FlexOwnProps
