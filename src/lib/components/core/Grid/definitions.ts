import { RespValue, TShirtSize } from 'lib/types'
import { BoxProps } from 'lib/components'

import { CssGridAutoFlow, CssGridPlaceContent, CssGridPlaceItems, CssValue } from '../../../types'

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
  gap?: RespValue<TShirtSize | CssValue>
  rowGap?: RespValue<TShirtSize | CssValue>
  columnGap?: RespValue<TShirtSize | CssValue>
}

type PropsFromBox<T extends GridTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<T>['children']
}

export type GridProps<T extends GridTag = 'div'> = PropsFromBox<T> & GridOwnProps
