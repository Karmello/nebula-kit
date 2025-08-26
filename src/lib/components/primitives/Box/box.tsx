import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix, getCssVars, getDataAttrs, scale } from 'lib/helpers'
import { useLibStore } from 'lib/state'

import {
  PolymorphicProps,
  ResponsiveProp,
  ScaleValue,
  CssTextAlign,
  BoxVariant,
  BoxIntent,
  CssDisplay,
  CssPosition,
  CssOverflow,
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
  display?: ResponsiveProp<CssDisplay>
  overflowX?: CssOverflow
  overflowY?: CssOverflow
  opacity?: ResponsiveProp<number>
  position?: ResponsiveProp<CssPosition>
  top?: ResponsiveProp<ScaleValue | string>
  right?: ResponsiveProp<ScaleValue | string>
  bottom?: ResponsiveProp<ScaleValue | string>
  left?: ResponsiveProp<ScaleValue | string>
  fontSize?: ResponsiveProp<ScaleValue | string>
  /** Controls line height for text content */
  lineHeight?: ResponsiveProp<number | string>
  /** Horizontal alignment of text (start, center, end, etc.) */
  borderRadius?: ScaleValue | string
  textAlign?: ResponsiveProp<CssTextAlign>
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
  variant = 'ghost',
  intent = 'neutral',
  interactive = false,
  disabled = false,
  // css vars
  display,
  overflowX,
  overflowY,
  opacity,
  position,
  top,
  right,
  bottom,
  left,
  fontSize,
  lineHeight,
  borderRadius,
  textAlign,
  blockSize,
  minBlockSize,
  maxBlockSize,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  p,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  m,
  ...rest
}: BoxProps<E>) => {
  const { borderRadius: globalBorderRadius } = useLibStore()

  const As = (as || 'div') as ElementType

  return (
    <As
      className={classNames(withPrefix('box'), className)}
      style={{
        ...getCssVars('box', {
          display,
          overflowX,
          overflowY,
          opacity,
          position,
          top,
          right,
          bottom,
          left,
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
        borderRadius:
          variant !== 'ghost'
            ? scale(borderRadius !== undefined ? borderRadius : globalBorderRadius)
            : undefined,
        ...style,
      }}
      disabled={disabled}
      {...getDataAttrs('box', { variant, intent, interactive, disabled })}
      {...rest}
    />
  )
}

Box.displayName = 'Box'
