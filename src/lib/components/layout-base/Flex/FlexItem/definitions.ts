import { ElementType } from 'react'

import { ResponsiveProp, CssFlexItemAlignSelf } from 'lib/definitions'
import { BoxProps } from 'lib/components/base'

export type FlexItemOwnProps = {
  flex?: ResponsiveProp<string | number>
  flexGrow?: ResponsiveProp<number>
  flexShrink?: ResponsiveProp<number>
  flexBasis?: ResponsiveProp<string | number>
  alignSelf?: ResponsiveProp<CssFlexItemAlignSelf>
  order?: ResponsiveProp<number>
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
