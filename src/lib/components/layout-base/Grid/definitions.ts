import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  RespValue,
  ScaleValue,
} from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const GridTag = ['div', 'section', 'main', 'article', 'aside', 'nav', 'ul', 'ol'] as const
export type GridTag = (typeof GridTag)[number]

type GridOwnProps = {
  gridTemplateColumns?: RespValue<string | number>
  gridTemplateRows?: RespValue<string | number>
  gridAutoRows?: RespValue<string>
  gridAutoColumns?: RespValue<string>
  gridAutoFlow?: RespValue<CssGridAutoFlow>
  placeItems?: RespValue<CssGridPlaceItems>
  placeContent?: RespValue<CssGridPlaceContent>
  gap?: RespValue<ScaleValue | string>
  rowGap?: RespValue<ScaleValue | string>
  columnGap?: RespValue<ScaleValue | string>
}

type PropsFromHtmlTag<T extends GridTag = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type GridProps<T extends GridTag = 'div'> = PropsFromHtmlTag<T> & GridOwnProps
