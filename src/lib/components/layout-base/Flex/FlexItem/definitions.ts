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
  Box: ['children', 'tag', 'tagAttrs', 'tagRef'] as const satisfies readonly (keyof BoxProps<ElementType>)[],
}

export type FlexItemInheritedProps<T extends ElementType> = Pick<
  BoxProps<T>,
  (typeof FLEX_ITEM_INHERITED_PROPS)['Box'][number]
>

export type FlexItemProps<T extends ElementType = 'div'> = FlexItemOwnProps & FlexItemInheritedProps<T>
