import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  MakeRequired,
  RespValue,
  ScaleValue,
} from 'lib/definitions'

import { BoxProps } from 'lib/components'

export const GridElem = ['div', 'section', 'main', 'article', 'aside', 'nav', 'ul', 'ol'] as const
export type GridElem = (typeof GridElem)[number]

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
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type GridInheritedProps<E extends GridElem> = MakeRequired<
  Pick<BoxProps<E>, (typeof GRID_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type GridProps<E extends GridElem = 'div'> = GridOwnProps & GridInheritedProps<E>
