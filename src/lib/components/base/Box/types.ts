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

export type BoxOwnProps = {
  variant?: `${BoxVariant}`
  intent?: `${BoxIntent}`
  interactive?: boolean
  disabled?: boolean
  opacity?: ResponsiveProp<number>
  borderRadius?: ScaleValue | string
  textAlign?: ResponsiveProp<`${CssTextAlign}`>
  display?: ResponsiveProp<`${CssDisplay}`>
  overflowX?: ResponsiveProp<`${CssOverflow}`>
  overflowY?: ResponsiveProp<`${CssOverflow}`>
  position?: ResponsiveProp<`${CssPosition}`>
  top?: ResponsiveProp<ScaleValue | string>
  right?: ResponsiveProp<ScaleValue | string>
  bottom?: ResponsiveProp<ScaleValue | string>
  left?: ResponsiveProp<ScaleValue | string>
  blockSize?: ResponsiveProp<ScaleValue | string>
  minBlockSize?: ResponsiveProp<ScaleValue | string>
  maxBlockSize?: ResponsiveProp<ScaleValue | string>
  inlineSize?: ResponsiveProp<ScaleValue | string>
  minInlineSize?: ResponsiveProp<ScaleValue | string>
  maxInlineSize?: ResponsiveProp<ScaleValue | string>
  p?: ResponsiveProp<ScaleValue | string>
  px?: ResponsiveProp<ScaleValue | string>
  py?: ResponsiveProp<ScaleValue | string>
  pt?: ResponsiveProp<ScaleValue | string>
  pr?: ResponsiveProp<ScaleValue | string>
  pb?: ResponsiveProp<ScaleValue | string>
  pl?: ResponsiveProp<ScaleValue | string>
  m?: ResponsiveProp<ScaleValue | string>
  mx?: ResponsiveProp<ScaleValue | string>
  my?: ResponsiveProp<ScaleValue | string>
  mt?: ResponsiveProp<ScaleValue | string>
  mr?: ResponsiveProp<ScaleValue | string>
  mb?: ResponsiveProp<ScaleValue | string>
  ml?: ResponsiveProp<ScaleValue | string>
}
