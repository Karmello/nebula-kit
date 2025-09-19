import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  MakeRequired,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import { BoxProps } from 'lib/components'

export const GridElem = ['div', 'section', 'main', 'article', 'aside', 'nav', 'ul', 'ol'] as const
export type GridElem = (typeof GridElem)[number]

export type GridOwnProps = {
  gridTemplateColumns?: ResponsiveProp<string | number>
  gridTemplateRows?: ResponsiveProp<string | number>
  gridAutoRows?: ResponsiveProp<string>
  gridAutoColumns?: ResponsiveProp<string>
  gridAutoFlow?: ResponsiveProp<CssGridAutoFlow>
  placeItems?: ResponsiveProp<CssGridPlaceItems>
  placeContent?: ResponsiveProp<CssGridPlaceContent>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export const GRID_INHERITED_PROPS = {
  Box: ['children', 'elem', 'elemProps', 'elemRef'] as const satisfies readonly (keyof BoxProps)[],
}

export type GridInheritedProps<E extends GridElem> = MakeRequired<
  Pick<BoxProps<E>, (typeof GRID_INHERITED_PROPS)['Box'][number]>,
  'children'
>

export type GridProps<E extends GridElem = 'div'> = GridOwnProps & GridInheritedProps<E>
