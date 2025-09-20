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
  Box: [
    'children',
    'elem',
    'elemProps',
    'elemRef',
  ] as const satisfies readonly (keyof BoxProps<ElementType>)[],
}

export type GridItemInheritedProps<E extends ElementType> = Pick<
  BoxProps<E>,
  (typeof GRID_ITEM_INHERITED_PROPS)['Box'][number]
>

export type GridItemProps<E extends ElementType = 'div'> = GridItemOwnProps & GridItemInheritedProps<E>
