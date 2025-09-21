import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  MakeRequired,
  RespValue,
  ScaleValue,
} from 'lib/definitions'

import { BoxProps } from 'lib/components'

export const GridTag = ['div', 'section', 'main', 'article', 'aside', 'nav', 'ul', 'ol'] as const
export type GridTag = (typeof GridTag)[number]

export type GridOwnProps = {
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

export const GRID_INHERITED_PROPS = {
  Box: ['children', 'tag', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof BoxProps<GridTag>)[],
}

export type GridInheritedProps<T extends GridTag> = MakeRequired<
  Pick<BoxProps<T>, (typeof GRID_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type GridProps<T extends GridTag = 'div'> = GridOwnProps & GridInheritedProps<T>
