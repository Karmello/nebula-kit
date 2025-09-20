import { ElementType, ComponentRef, useRef, useLayoutEffect, PropsWithoutRef, ComponentProps } from 'react'
import classNames from 'classnames'

import { BoxProps, NativeElem } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'
import { applyRespValues, applyStaticDataset } from 'lib/service'

import { DEFAULT_BOX_INTENT, DEFAULT_BOX_VARIANT } from './definitions'
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

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', elemRef || ref, bp, {
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
          ...applyStaticDataset('box', { variant, intent, interactive, disabled }),
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef || ref}
    >
      {children}
    </NativeElem>
  )
}

Box.displayName = 'Box'
