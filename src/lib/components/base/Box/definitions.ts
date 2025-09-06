import { ElementType } from 'react'

import {
  BoxVariant,
  BoxIntent,
  CssDisplay,
  CssOverflow,
  CssPosition,
  CssTextAlign,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import { NATIVE_ELEM_PROP, NativeElemProps } from 'lib/components/utility'

export type BoxAppearanceProps = {
  variant?: `${BoxVariant}`
  intent?: `${BoxIntent}`
  opacity?: ResponsiveProp<number>
  borderRadius?: ScaleValue | string
}

export type BoxBehaviorProps = {
  interactive?: boolean
  disabled?: boolean
}

export type BoxDisplayProps = {
  display?: ResponsiveProp<`${CssDisplay}`>
  overflowX?: ResponsiveProp<`${CssOverflow}`>
  overflowY?: ResponsiveProp<`${CssOverflow}`>
  position?: ResponsiveProp<`${CssPosition}`>
  top?: ResponsiveProp<ScaleValue | string>
  right?: ResponsiveProp<ScaleValue | string>
  bottom?: ResponsiveProp<ScaleValue | string>
  left?: ResponsiveProp<ScaleValue | string>
  textAlign?: ResponsiveProp<`${CssTextAlign}`>
}

export type BoxSizingProps = {
  blockSize?: ResponsiveProp<ScaleValue | string>
  minBlockSize?: ResponsiveProp<ScaleValue | string>
  maxBlockSize?: ResponsiveProp<ScaleValue | string>
  inlineSize?: ResponsiveProp<ScaleValue | string>
  minInlineSize?: ResponsiveProp<ScaleValue | string>
  maxInlineSize?: ResponsiveProp<ScaleValue | string>
}

export type BoxMarginProps = {
  margin?: ResponsiveProp<ScaleValue | string>
  marginInline?: ResponsiveProp<ScaleValue | string>
  marginBlock?: ResponsiveProp<ScaleValue | string>
  marginTop?: ResponsiveProp<ScaleValue | string>
  marginRight?: ResponsiveProp<ScaleValue | string>
  marginBottom?: ResponsiveProp<ScaleValue | string>
  marginLeft?: ResponsiveProp<ScaleValue | string>
}

export type BoxPaddingProps = {
  padding?: ResponsiveProp<ScaleValue | string>
  paddingInline?: ResponsiveProp<ScaleValue | string>
  paddingBlock?: ResponsiveProp<ScaleValue | string>
  paddingTop?: ResponsiveProp<ScaleValue | string>
  paddingRight?: ResponsiveProp<ScaleValue | string>
  paddingBottom?: ResponsiveProp<ScaleValue | string>
  paddingLeft?: ResponsiveProp<ScaleValue | string>
}

export type BoxOwnProps = BoxAppearanceProps &
  BoxBehaviorProps &
  BoxDisplayProps &
  BoxSizingProps &
  BoxPaddingProps &
  BoxMarginProps

export const BOX_INHERITED_PROPS = {
  NativeElem: NATIVE_ELEM_PROP,
}

export type BoxInheritedProps<E extends ElementType> = NativeElemProps<E>
