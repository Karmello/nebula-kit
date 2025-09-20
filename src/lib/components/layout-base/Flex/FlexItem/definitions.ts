import { ElementType } from 'react'

import { RespValue, CssFlexItemAlignSelf } from 'lib/definitions'
import { BoxProps } from 'lib/components/base'

export type FlexItemOwnProps = {
  flex?: RespValue<string | number>
  flexGrow?: RespValue<number>
  flexShrink?: RespValue<number>
  flexBasis?: RespValue<string | number>
  alignSelf?: RespValue<CssFlexItemAlignSelf>
  order?: RespValue<number>
}

export const FLEX_ITEM_INHERITED_PROPS = {
  Box: [
    'children',
    'elem',
    'elemProps',
    'elemRef',
  ] as const satisfies readonly (keyof BoxProps<ElementType>)[],
}

export type FlexItemInheritedProps<E extends ElementType> = Pick<
  BoxProps<E>,
  (typeof FLEX_ITEM_INHERITED_PROPS)['Box'][number]
>

export type FlexItemProps<E extends ElementType = 'div'> = FlexItemOwnProps & FlexItemInheritedProps<E>
