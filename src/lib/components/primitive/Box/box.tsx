import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix, getCssVars, getDataAttrs } from 'lib/helpers'
import { PolymorphicProps, ResponsiveProp, ScaleValue, TextAlign } from 'lib/definitions'
import { BoxVariant, BoxIntent } from './definitions'

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
  /** Explicit height of the box */
  height?: ResponsiveProp<ScaleValue | string>
  /** Minimum height constraint */
  minHeight?: ResponsiveProp<ScaleValue | string>
  /** Maximum height constraint */
  maxHeight?: ResponsiveProp<ScaleValue | string>
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
  fontSize = 'inherit',
  lineHeight = 'normal',
  textAlign = 'initial',
  height = 'inherit',
  minHeight = 'inherit',
  maxHeight = 'inherit',
  pt = 0,
  pr = 0,
  pb = 0,
  pl = 0,
  px = 0,
  py = 0,
  p = 0,
  mt = 0,
  mr = 0,
  mb = 0,
  ml = 0,
  mx = 0,
  my = 0,
  m = 0,
  ...rest
}: BoxProps<E>) => {
  const As = (as || 'div') as ElementType

  return (
    <As
      className={classNames(withPrefix('box'), className)}
      style={{
        ...getCssVars('box', {
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
          fontSize,
          lineHeight,
          textAlign,
          height,
          minHeight,
          maxHeight,
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
