import {
  CssGridAutoFlow,
  CssGridDisplay,
  CssGridPlaceContent,
  CssGridPlaceItems,
  GridTag,
  RespValue,
} from 'lib/types'

import { BoxProps } from '../Box'

type GridOwnProps = {
  display?: RespValue<CssGridDisplay>
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

type PropsFromBox<T extends GridTag = 'div'> = Pick<BoxProps<T>, 'tag' | 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<T>['children']
}

export type GridProps<T extends GridTag = 'div'> = PropsFromBox<T> & GridOwnProps
