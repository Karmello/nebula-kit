import { CssGridAutoFlow, CssGridPlaceContent, CssGridPlaceItems, RespValue } from 'lib/definitions'

import { HtmlTagProps } from 'lib/components'

export const GRID_TAGS = ['div', 'section', 'main', 'article', 'aside', 'nav', 'ul', 'ol'] as const

export type GridTag = (typeof GRID_TAGS)[number]

type GridOwnProps = {
  gridTemplateColumns?: RespValue<string>
  gridTemplateRows?: RespValue<string>
  gridAutoRows?: RespValue<string>
  gridAutoColumns?: RespValue<string>
  gridAutoFlow?: RespValue<CssGridAutoFlow>
  placeItems?: RespValue<CssGridPlaceItems>
  placeContent?: RespValue<CssGridPlaceContent>
  gap?: RespValue<string>
  rowGap?: RespValue<string>
  columnGap?: RespValue<string>
}

type PropsFromHtmlTag<T extends GridTag = 'div'> = Omit<HtmlTagProps<T>, 'children'> & {
  children: HtmlTagProps<T>['children']
}

export type GridProps<T extends GridTag = 'div'> = PropsFromHtmlTag<T> & GridOwnProps
