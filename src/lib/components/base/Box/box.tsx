import { ElementType, ComponentRef, useRef, useLayoutEffect, PropsWithoutRef, ComponentProps } from 'react'
import classNames from 'classnames'

import { BoxProps, HtmlTag } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'
import { applyRespValues, applyStaticDataset } from 'lib/service'

import { DEFAULT_BOX_INTENT, DEFAULT_BOX_VARIANT } from './definitions'
import './styles/box.scss'

export const Box = <T extends ElementType = 'div'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
  variant = DEFAULT_BOX_VARIANT,
  intent = DEFAULT_BOX_INTENT,
  interactive,
  disabled = false,
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
}: BoxProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', tagRef || ref, bp, {
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

  useLayoutEffect(() => {
    applyRespValues('dataset', tagRef || ref, bp, { intent }, 'Box')
  }, [bp, intent])

  return (
    <HtmlTag
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('box'), tagAttrs?.className || ''),
          disabled,
          ...applyStaticDataset('box', { variant, interactive, disabled }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </HtmlTag>
  )
}

Box.displayName = 'Box'
