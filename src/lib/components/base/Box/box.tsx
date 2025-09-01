import { ElementType, ComponentRef, useRef, useLayoutEffect } from 'react'
import classNames from 'classnames'

import { useLibStore } from 'lib/state'
import { BoxIntent, BoxVariant, PolymorphicProps, PropsOf } from 'lib/definitions'
import { computeResponsiveCss, getDataAttrs, scale, useScreen, withPrefix } from 'lib/helpers'

import { BoxOwnProps } from './types'
import './styles/box.scss'

export const BOX_DEFAULT_VARIANT: `${BoxVariant}` = 'ghost'
export const BOX_DEFAULT_INTENT: `${BoxIntent}` = 'neutral'

export const Box = <E extends ElementType = 'div'>({
  as,
  innerRef,
  className,
  style,
  variant = BOX_DEFAULT_VARIANT,
  intent = BOX_DEFAULT_INTENT,
  interactive = false,
  disabled = false,
  // css
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
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  margin,
  marginInline,
  marginBlock,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  ...rest
}: PolymorphicProps<E, BoxOwnProps>) => {
  const localRef = useRef<ComponentRef<E>>(null)

  const { borderRadius: globalBorderRadius } = useLibStore()
  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(innerRef || localRef, bp, {
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
      padding,
      paddingInline,
      paddingBlock,
      paddingTop,
      paddingRight,
      paddingBottom,
      paddingLeft,
      margin,
      marginInline,
      marginBlock,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    })
  }, [
    bp,
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
    padding,
    paddingInline,
    paddingBlock,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    margin,
    marginInline,
    marginBlock,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
  ])

  const As = (as ?? 'div') as E

  return (
    <As
      ref={innerRef || localRef}
      className={classNames(withPrefix('box'), className)}
      style={{
        borderRadius: scale(borderRadius !== undefined ? borderRadius : globalBorderRadius),
        ...style,
      }}
      disabled={disabled}
      {...getDataAttrs('box', { variant, intent, interactive, disabled })}
      {...(rest as PropsOf<E>)}
    />
  )
}
