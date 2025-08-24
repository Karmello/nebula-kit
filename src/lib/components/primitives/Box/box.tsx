import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix, getCssVars, getDataAttrs } from 'lib/helpers'

import {
  BOX_CSS_VARS,
  PolymorphicProps,
  ResponsiveProp,
  ScaleValue,
  TextAlign,
  BoxVariant,
  BoxIntent,
} from 'lib/definitions'

import './styles/box.scss'

export type BoxOwnProps = {
  /** Visual style of the box surface (e.g. solid, outline) */
  variant?: BoxVariant
  /** Semantic tone or purpose (e.g. neutral, success, danger) */
  intent?: BoxIntent
  /** Marks the box as interactive, enabling hover/focus styles */
  interactive?: boolean
  /** Disables interaction and applies a muted style */
  disabled?: boolean
  /** Sets font size using scale values or raw CSS values */
  fontSize?: ResponsiveProp<ScaleValue | string>
  /** Controls line height for text content */
  lineHeight?: ResponsiveProp<number | string>
  /** Horizontal alignment of text (start, center, end, etc.) */
  textAlign?: ResponsiveProp<TextAlign>
  /** Logical size of the element in the block axis (like height) */
  blockSize?: ResponsiveProp<ScaleValue | string>
  /** Minimum logical size of the element in the block axis */
  minBlockSize?: ResponsiveProp<ScaleValue | string>
  /** Maximum logical size of the element in the block axis */
  maxBlockSize?: ResponsiveProp<ScaleValue | string>
  /** Logical size of the element in the inline axis (like width) */
  inlineSize?: ResponsiveProp<ScaleValue | string>
  /** Minimum logical size of the element in the inline axis */
  minInlineSize?: ResponsiveProp<ScaleValue | string>
  /** Maximum logical size of the element in the inline axis */
  maxInlineSize?: ResponsiveProp<ScaleValue | string>
  /** Padding top */
  pt?: ResponsiveProp<ScaleValue | string>
  /** Padding right */
  pr?: ResponsiveProp<ScaleValue | string>
  /** Padding bottom */
  pb?: ResponsiveProp<ScaleValue | string>
  /** Padding left */
  pl?: ResponsiveProp<ScaleValue | string>
  /** Horizontal padding (left & right) */
  px?: ResponsiveProp<ScaleValue | string>
  /** Vertical padding (top & bottom) */
  py?: ResponsiveProp<ScaleValue | string>
  /** Padding on all sides */
  p?: ResponsiveProp<ScaleValue | string>
  /** Margin top */
  mt?: ResponsiveProp<ScaleValue | string>
  /** Margin right */
  mr?: ResponsiveProp<ScaleValue | string>
  /** Margin bottom */
  mb?: ResponsiveProp<ScaleValue | string>
  /** Margin left */
  ml?: ResponsiveProp<ScaleValue | string>
  /** Horizontal margin (left & right) */
  mx?: ResponsiveProp<ScaleValue | string>
  /** Vertical margin (top & bottom) */
  my?: ResponsiveProp<ScaleValue | string>
  /** Margin on all sides */
  m?: ResponsiveProp<ScaleValue | string>
}

export type BoxProps<E extends ElementType = 'div'> = PolymorphicProps<E, BoxOwnProps>

/** Box is the foundational layout primitive. It renders as any element (div by default) and provides consistent spacing, typography, sizing, and surface styling through responsive props and CSS variables. Use it as the base container or building block for more complex components. */
export const Box = <E extends ElementType = 'div'>({
  as,
  className,
  style,
  variant = 'solid',
  intent = 'neutral',
  interactive = false,
  disabled = false,
  fontSize = BOX_CSS_VARS.fontSize,
  lineHeight = BOX_CSS_VARS.lineHeight,
  textAlign = BOX_CSS_VARS.textAlign,
  blockSize = BOX_CSS_VARS.blockSize,
  minBlockSize = BOX_CSS_VARS.minBlockSize,
  maxBlockSize = BOX_CSS_VARS.maxBlockSize,
  inlineSize = BOX_CSS_VARS.inlineSize,
  minInlineSize = BOX_CSS_VARS.minInlineSize,
  maxInlineSize = BOX_CSS_VARS.maxInlineSize,
  pt = BOX_CSS_VARS.pt,
  pr = BOX_CSS_VARS.pr,
  pb = BOX_CSS_VARS.pb,
  pl = BOX_CSS_VARS.pl,
  px = BOX_CSS_VARS.px,
  py = BOX_CSS_VARS.py,
  p = BOX_CSS_VARS.p,
  mt = BOX_CSS_VARS.mt,
  mr = BOX_CSS_VARS.mr,
  mb = BOX_CSS_VARS.mb,
  ml = BOX_CSS_VARS.ml,
  mx = BOX_CSS_VARS.mx,
  my = BOX_CSS_VARS.my,
  m = BOX_CSS_VARS.m,
  ...rest
}: BoxProps<E>) => {
  const As = (as || 'div') as ElementType

  return (
    <As
      className={classNames(withPrefix('box'), className)}
      style={{
        ...getCssVars('box', {
          fontSize,
          lineHeight,
          textAlign,
          blockSize,
          minBlockSize,
          maxBlockSize,
          inlineSize,
          minInlineSize,
          maxInlineSize,
          p,
          px,
          py,
          pt,
          pr,
          pb,
          pl,
          m,
          mx,
          my,
          mt,
          mr,
          mb,
          ml,
        }),
        ...style,
      }}
      disabled={disabled}
      {...getDataAttrs('box', { variant, intent, interactive, disabled })}
      {...rest}
    />
  )
}

Box.displayName = 'Box'
