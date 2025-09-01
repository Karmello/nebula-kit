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
  padding?: ResponsiveProp<ScaleValue | string>
  paddingInline?: ResponsiveProp<ScaleValue | string>
  paddingBlock?: ResponsiveProp<ScaleValue | string>
  paddingTop?: ResponsiveProp<ScaleValue | string>
  paddingRight?: ResponsiveProp<ScaleValue | string>
  paddingBottom?: ResponsiveProp<ScaleValue | string>
  paddingLeft?: ResponsiveProp<ScaleValue | string>
  margin?: ResponsiveProp<ScaleValue | string>
  marginInline?: ResponsiveProp<ScaleValue | string>
  marginBlock?: ResponsiveProp<ScaleValue | string>
  marginTop?: ResponsiveProp<ScaleValue | string>
  marginRight?: ResponsiveProp<ScaleValue | string>
  marginBottom?: ResponsiveProp<ScaleValue | string>
  marginLeft?: ResponsiveProp<ScaleValue | string>
}
