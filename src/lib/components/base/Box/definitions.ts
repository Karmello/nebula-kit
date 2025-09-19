import { ElementType } from 'react'

import {
  CssDisplay,
  CssOverflow,
  CssPosition,
  CssTextAlign,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import { NativeElemProps } from 'lib/components/utility'

export const BoxVariant = ['solid', 'outline', 'ghost'] as const

export const BoxIntent = [
  'neutral',
  'primary',
  'secondary',
  'tertiary',
  'success',
  'info',
  'warning',
  'danger',
  'inverse',
] as const

export type BoxVariant = (typeof BoxVariant)[number]
export type BoxIntent = (typeof BoxIntent)[number]

export const DEFAULT_BOX_VARIANT: BoxVariant = 'ghost'
export const DEFAULT_BOX_INTENT: BoxIntent = 'neutral'

export type BoxOwnProps = {
  variant?: BoxVariant
  intent?: BoxIntent
  opacity?: ResponsiveProp<number>
  borderRadius?: ScaleValue | string
  interactive?: boolean
  disabled?: boolean
  display?: ResponsiveProp<CssDisplay>
  overflowX?: ResponsiveProp<CssOverflow>
  overflowY?: ResponsiveProp<CssOverflow>
  position?: ResponsiveProp<CssPosition>
  top?: ResponsiveProp<ScaleValue | string>
  right?: ResponsiveProp<ScaleValue | string>
  bottom?: ResponsiveProp<ScaleValue | string>
  left?: ResponsiveProp<ScaleValue | string>
  textAlign?: ResponsiveProp<CssTextAlign>
  blockSize?: ResponsiveProp<ScaleValue | string>
  minBlockSize?: ResponsiveProp<ScaleValue | string>
  maxBlockSize?: ResponsiveProp<ScaleValue | string>
  inlineSize?: ResponsiveProp<ScaleValue | string>
  minInlineSize?: ResponsiveProp<ScaleValue | string>
  maxInlineSize?: ResponsiveProp<ScaleValue | string>
  margin?: ResponsiveProp<ScaleValue | string>
  marginInline?: ResponsiveProp<ScaleValue | string>
  marginBlock?: ResponsiveProp<ScaleValue | string>
  marginTop?: ResponsiveProp<ScaleValue | string>
  marginRight?: ResponsiveProp<ScaleValue | string>
  marginBottom?: ResponsiveProp<ScaleValue | string>
  marginLeft?: ResponsiveProp<ScaleValue | string>
  padding?: ResponsiveProp<ScaleValue | string>
  paddingInline?: ResponsiveProp<ScaleValue | string>
  paddingBlock?: ResponsiveProp<ScaleValue | string>
  paddingTop?: ResponsiveProp<ScaleValue | string>
  paddingRight?: ResponsiveProp<ScaleValue | string>
  paddingBottom?: ResponsiveProp<ScaleValue | string>
  paddingLeft?: ResponsiveProp<ScaleValue | string>
}

export const BOX_INHERITED_PROPS = {
  NativeElem: [
    'children',
    'elem',
    'elemProps',
    'elemRef',
  ] as const satisfies readonly (keyof NativeElemProps<ElementType>)[],
}

export type BoxInheritedProps<E extends ElementType> = Pick<
  NativeElemProps<E>,
  (typeof BOX_INHERITED_PROPS)['NativeElem'][number]
>

export type BoxProps<E extends ElementType = 'div'> = BoxOwnProps & BoxInheritedProps<E>
