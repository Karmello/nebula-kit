import { ElementType } from 'react'

import { RespValue, CssGridItemJustifySelf, CssGridItemAlignSelf } from 'lib/definitions'
import { BoxProps } from 'lib/components/base'

export type GridItemOwnProps = {
  gridColumn?: RespValue<string | number>
  gridRow?: RespValue<string | number>
  justifySelf?: RespValue<CssGridItemJustifySelf>
  alignSelf?: RespValue<CssGridItemAlignSelf>
}

export const GRID_ITEM_INHERITED_PROPS = {
  Box: ['children', 'tag', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof BoxProps<ElementType>)[],
}

export type GridItemInheritedProps<T extends ElementType> = Pick<
  BoxProps<T>,
  (typeof GRID_ITEM_INHERITED_PROPS)['Box'][number]
>

export type GridItemProps<T extends ElementType = 'div'> = GridItemOwnProps & GridItemInheritedProps<T>
