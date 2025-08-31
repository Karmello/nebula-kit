import { ElementType } from 'react'
import classNames from 'classnames'

import { withPrefix, getCssVars, getDataAttrs, scale } from 'lib/helpers'
import { useLibStore } from 'lib/state'
import { BoxIntent, BoxVariant, PolymorphicProps } from 'lib/definitions'

import { BoxOwnProps } from './types'
import './styles/box.scss'

type BoxProps<E extends ElementType = 'div'> = PolymorphicProps<E, BoxOwnProps>

export const BOX_DEFAULT_VARIANT: `${BoxVariant}` = 'ghost'
export const BOX_DEFAULT_INTENT: `${BoxIntent}` = 'neutral'

export const Box = <E extends ElementType = 'div'>({
  as,
  className,
  style,
  variant = BOX_DEFAULT_VARIANT,
  intent = BOX_DEFAULT_INTENT,
  interactive = false,
  disabled = false,
  // css vars
  display,
  opacity,
  overflowX,
  overflowY,
  position,
  top,
  right,
  bottom,
  left,
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
          opacity,
          overflowX,
          overflowY,
          position,
          top,
          right,
          bottom,
          left,
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
        borderRadius: scale(borderRadius !== undefined ? borderRadius : globalBorderRadius),
        ...style,
      }}
      disabled={disabled}
      {...getDataAttrs('box', { variant, intent, interactive, disabled })}
      {...rest}
    />
  )
}

Box.displayName = 'Box'
