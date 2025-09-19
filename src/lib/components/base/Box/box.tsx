import { ElementType, ComponentRef, useRef, useLayoutEffect, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { useLibStore } from 'lib/state'
import { BoxProps, DEFAULT_BOX_INTENT, DEFAULT_BOX_VARIANT, NativeElem } from 'lib/components'
import { computeResponsiveCss, getDataAttrs, scale, useScreen, withPrefix } from 'lib/helpers'

import './styles/box.scss'

export const Box = <E extends ElementType = 'div'>({
  // native elem
  children,
  elem,
  elemProps,
  elemRef,
  // own
  variant = DEFAULT_BOX_VARIANT,
  intent = DEFAULT_BOX_INTENT,
  interactive,
  disabled = false,
  // css
  opacity,
  borderRadius,
  textAlign,
  display,
  overflowX,
  overflowY,
  position,
  top,
  right,
  bottom,
  left,
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
}: BoxProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { borderRadius: globalBorderRadius } = useLibStore()
  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(elemRef || ref, bp, {
      opacity,
      borderRadius: scale(borderRadius !== undefined ? borderRadius : globalBorderRadius),
      textAlign,
      display,
      overflowX,
      overflowY,
      position,
      top,
      right,
      bottom,
      left,
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
      ...elemProps?.style,
    })
  }, [
    bp,
    opacity,
    borderRadius,
    textAlign,
    display,
    overflowX,
    overflowY,
    position,
    top,
    right,
    bottom,
    left,
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

  return (
    <NativeElem
      elem={elem}
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('box'), elemProps?.className || ''),
          disabled,
          ...getDataAttrs('box', { variant, intent, interactive, disabled }),
        } as PropsWithoutRef<React.ComponentProps<E>>
      }
      elemRef={elemRef || ref}
    >
      {children}
    </NativeElem>
  )
}

Box.displayName = 'Box'
