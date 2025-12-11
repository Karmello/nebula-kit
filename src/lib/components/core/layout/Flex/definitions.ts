import { ElementType } from 'react'

import {
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexJustifyContent,
  CssFlexWrap,
  RespValue,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

type FlexOwnProps = {
  flexDirection?: RespValue<CssFlexDirection>
  flexWrap?: RespValue<CssFlexWrap>
  justifyContent?: RespValue<CssFlexJustifyContent>
  alignItems?: RespValue<CssFlexAlignItems>
  gap?: RespValue<string>
  rowGap?: RespValue<string>
  columnGap?: RespValue<string>
}

type PropsFromHtmlTag<T extends ElementType = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type FlexProps<T extends ElementType = 'div'> = PropsFromHtmlTag<T> & FlexOwnProps
