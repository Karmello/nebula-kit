import { ElementType, ComponentRef, useRef, useLayoutEffect, PropsWithoutRef, ComponentProps } from 'react'
import classNames from 'classnames'

import { BoxProps, HtmlTag } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { applyRespValues, applyStaticDataset } from 'lib/service'

import { DEFAULT_BOX_VARIANT } from './definitions'
import './styles/box.scss'

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
  color,
  // state
  interactive,
  disabled,
  hoveredByDefault,
  // css
  opacity,
  textAlign,
  zIndex,
  // border
  borderWidth,
  borderTopWidth,
  borderRightWidth,
  borderBottomWidth,
  borderLeftWidth,
  // border radius
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  // display
  display,
  overflowX,
  overflowY,
  // position
  position,
  top,
  right,
  bottom,
  left,
  // size
  blockSize,
  minBlockSize,
  maxBlockSize,
  inlineSize,
  minInlineSize,
  maxInlineSize,
  // padding
  padding,
  paddingInline,
  paddingBlock,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  // margin
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
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomRightRadius,
      borderBottomLeftRadius,
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
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
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
    applyRespValues('dataset', tagRef || ref, bp, { color, intent, borderIntent, variant }, 'Box')
  }, [bp, color, intent, borderIntent, variant])

  return (
    <HtmlTag
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('box'), tagAttrs?.className || ''),
          disabled,
          style: {
            ...tagAttrs?.style,
            zIndex,
          },
          ...applyStaticDataset('box', {
            interactive,
            disabled,
            hoveredByDefault,
          }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </HtmlTag>
  )
}

Box.displayName = 'Box'
