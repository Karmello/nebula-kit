import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix, getCssVars, getDataAttrs } from 'lib/helpers'
import { PolymorphicProps, ResponsiveProp, ScaleValue, TextAlign } from 'lib/definitions'
import { BoxVariant, BoxIntent } from './definitions'

import './styles/box.scss'

export type BoxOwnProps = {
  variant?: BoxVariant
  intent?: BoxIntent
  interactive?: boolean
  /** Whether the button is disabled */
  disabled?: boolean
  fontSize?: ResponsiveProp<ScaleValue | string>
  lineHeight?: ResponsiveProp<number | string>
  textAlign?: ResponsiveProp<TextAlign>
  height?: ResponsiveProp<ScaleValue | string>
  minHeight?: ResponsiveProp<ScaleValue | string>
  maxHeight?: ResponsiveProp<ScaleValue | string>
  pt?: ResponsiveProp<ScaleValue | string>
  pr?: ResponsiveProp<ScaleValue | string>
  pb?: ResponsiveProp<ScaleValue | string>
  pl?: ResponsiveProp<ScaleValue | string>
  px?: ResponsiveProp<ScaleValue | string>
  py?: ResponsiveProp<ScaleValue | string>
  p?: ResponsiveProp<ScaleValue | string>
  mt?: ResponsiveProp<ScaleValue | string>
  mr?: ResponsiveProp<ScaleValue | string>
  mb?: ResponsiveProp<ScaleValue | string>
  ml?: ResponsiveProp<ScaleValue | string>
  mx?: ResponsiveProp<ScaleValue | string>
  my?: ResponsiveProp<ScaleValue | string>
  m?: ResponsiveProp<ScaleValue | string>
}

export type BoxProps<E extends ElementType = 'div'> = PolymorphicProps<E, BoxOwnProps>

/** Box component */
export const Box = <E extends ElementType = 'div'>({
  as,
  className,
  style,
  variant = 'solid',
  intent = 'neutral',
  interactive = false,
  disabled = false,
  fontSize,
  lineHeight,
  textAlign,
  height,
  minHeight,
  maxHeight,
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
