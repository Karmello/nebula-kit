import { ElementType, ComponentRef, useRef, useLayoutEffect, PropsWithoutRef, ComponentProps } from 'react'
import classNames from 'classnames'

import { BoxProps, HtmlTag } from 'lib/components'
import { useScreen, withPrefix } from 'lib/helpers'
import { applyRespValues, applyStaticDataset } from 'lib/service'

import { DEFAULT_BOX_VARIANT } from './definitions'
import './box.scss'

export const Box = <T extends ElementType = 'div'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
  variant = DEFAULT_BOX_VARIANT,
  intent,
  borderIntent,
  interactive,
  disabled = false,
  opacity,
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
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
      borderWidth,
      borderTopWidth,
      borderRightWidth,
      borderBottomWidth,
      borderLeftWidth,
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
    borderWidth,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
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
    if (borderIntent === undefined) return
    applyRespValues('style', tagRef || ref, bp, { borderColor: `var(--neb-${borderIntent}-solid-bg)` })
  }, [bp, borderIntent])

  useLayoutEffect(() => {
    applyRespValues('dataset', tagRef || ref, bp, { intent, variant }, 'Box')
  }, [bp, intent, variant])

  return (
    <HtmlTag
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('box'), tagAttrs?.className || ''),
          disabled,
          ...applyStaticDataset('box', { interactive, disabled }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </HtmlTag>
  )
}

Box.displayName = 'Box'
