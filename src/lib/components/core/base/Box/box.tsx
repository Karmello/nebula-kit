import {
  ElementType,
  ComponentRef,
  ComponentProps,
  PropsWithoutRef,
  useLayoutEffect,
  useEffect,
  useRef,
} from 'react'

import classNames from 'classnames'

import { BoxProps, HtmlTag } from 'lib/components'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { updateDomRespStyle, updateDomRespDataset, updateDomStaticDataset } from 'lib/service'

import './styles/box.scss'

export const Box = <T extends ElementType = 'div'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
  drawable,
  theme,
  brand,
  color,
  variant,
  intent,
  // state
  interactive,
  disabled,
  highlighted,
  // css
  opacity,
  visibility,
  textAlign,
  zIndex,
  pointerEvents,
  aspectRatio,
  transform,
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
  overflow,
  overflowX,
  overflowY,
  // position
  position,
  inset,
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

  const finalRef = tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    const el = finalRef?.current as Element
    if (!el) return
    el.setAttribute('data-neb-box-transitions', 'false')
  }, [finalRef?.current])

  useEffect(() => {
    const el = finalRef?.current as Element
    if (!el) return
    el.setAttribute('data-neb-box-transitions', 'true')
  }, [finalRef?.current])

  useLayoutEffect(() => {
    updateDomRespStyle('Box', finalRef, bp, {
      opacity,
      visibility,
      textAlign,
      zIndex,
      aspectRatio,
      transform,
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
      display,
      overflow,
      overflowX,
      overflowY,
      position,
      inset,
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
    visibility,
    zIndex,
    aspectRatio,
    transform,
    textAlign,
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
    display,
    overflow,
    overflowX,
    overflowY,
    position,
    inset,
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
    updateDomRespDataset('Box', finalRef, bp, { theme, brand, color, variant, intent })
  }, [bp, theme, brand, color, variant, intent])

  return (
    <HtmlTag
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('box'), tagAttrs?.className || ''),
          style: { ...tagAttrs?.style, pointerEvents },
          disabled,
          ...updateDomStaticDataset('Box', {
            drawable,
            interactive,
            disabled,
            highlighted,
          }),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
    >
      {children}
    </HtmlTag>
  )
}

Box.displayName = 'Box'
