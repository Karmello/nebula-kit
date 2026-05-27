import { ElementType, ComponentRef, ComponentProps, PropsWithoutRef, useLayoutEffect, useRef, RefObject } from 'react'
import classNames from 'classnames'

import { syncRespStyle, syncRespDataset, buildStaticDataset } from 'lib/internals/dom'
import { useResolveAppearance } from 'lib/internals/styling'
import { ThemeProvider, BrandProvider, HtmlTag } from 'lib/components/shared'
import { useTransitionLifecycle } from 'lib/internals/motion'
import { withPrefix, resolveLengthValue } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import { type BoxProps } from './definitions'

import './styles/box.scss'

export const Box = <T extends ElementType = 'div'>({
  children,
  tag,
  tagAttrs,
  tagRef,
  drawable,
  elevated,
  theme,
  brand,
  color,
  variant,
  intent,
  interactive,
  surface,
  disabled,
  activeOnFocus,
  hidden,
  opacity,
  visibility,
  textAlign,
  zIndex,
  pointerEvents,
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
}: BoxProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = tagRef || ref

  const { bp } = useScreen()

  const resolvedAppearance = useResolveAppearance({ theme, brand, color })

  useTransitionLifecycle(finalRef as RefObject<HTMLElement>)

  useLayoutEffect(() => {
    syncRespStyle('Box', finalRef, bp, {
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
      inset: inset !== undefined ? resolveLengthValue(inset, 'shorthand') : undefined,
      top: top !== undefined ? resolveLengthValue(top) : undefined,
      right: right !== undefined ? resolveLengthValue(right) : undefined,
      bottom: bottom !== undefined ? resolveLengthValue(bottom) : undefined,
      left: left !== undefined ? resolveLengthValue(left) : undefined,
      blockSize: blockSize !== undefined ? resolveLengthValue(blockSize) : undefined,
      minBlockSize: minBlockSize !== undefined ? resolveLengthValue(minBlockSize) : undefined,
      maxBlockSize: maxBlockSize !== undefined ? resolveLengthValue(maxBlockSize) : undefined,
      inlineSize: inlineSize !== undefined ? resolveLengthValue(inlineSize) : undefined,
      minInlineSize: minInlineSize !== undefined ? resolveLengthValue(minInlineSize) : undefined,
      maxInlineSize: maxInlineSize !== undefined ? resolveLengthValue(maxInlineSize) : undefined,
      padding: padding !== undefined ? resolveLengthValue(padding) : undefined,
      paddingInline: paddingInline !== undefined ? resolveLengthValue(paddingInline) : undefined,
      paddingBlock: paddingBlock !== undefined ? resolveLengthValue(paddingBlock) : undefined,
      paddingTop: paddingTop !== undefined ? resolveLengthValue(paddingTop) : undefined,
      paddingRight: paddingRight !== undefined ? resolveLengthValue(paddingRight) : undefined,
      paddingBottom: paddingBottom !== undefined ? resolveLengthValue(paddingBottom) : undefined,
      paddingLeft: paddingLeft !== undefined ? resolveLengthValue(paddingLeft) : undefined,
      margin: margin !== undefined ? resolveLengthValue(margin, 'shorthand') : undefined,
      marginInline: marginInline !== undefined ? resolveLengthValue(marginInline) : undefined,
      marginBlock: marginBlock !== undefined ? resolveLengthValue(marginBlock) : undefined,
      marginTop: marginTop !== undefined ? resolveLengthValue(marginTop) : undefined,
      marginRight: marginRight !== undefined ? resolveLengthValue(marginRight) : undefined,
      marginBottom: marginBottom !== undefined ? resolveLengthValue(marginBottom) : undefined,
      marginLeft: marginLeft !== undefined ? resolveLengthValue(marginLeft) : undefined,
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
    syncRespDataset('Box', finalRef, bp, {
      theme: resolvedAppearance.theme,
      color: resolvedAppearance.color,
      variant,
      intent,
      hidden,
    })
  }, [bp, resolvedAppearance.theme, resolvedAppearance.color, variant, intent, hidden])

  return (
    <ThemeProvider theme={resolvedAppearance.theme}>
      <BrandProvider brand={resolvedAppearance.brand}>
        <HtmlTag
          tag={tag}
          tagAttrs={
            {
              ...tagAttrs,
              className: classNames(withPrefix('box'), tagAttrs?.className || ''),
              style: { ...tagAttrs?.style, pointerEvents },
              disabled,
              ...buildStaticDataset('Box', {
                drawable,
                elevated,
                interactive,
                surface,
                disabled,
                activeOnFocus,
              }),
            } as PropsWithoutRef<ComponentProps<T>>
          }
          tagRef={finalRef}
        >
          {children}
        </HtmlTag>
      </BrandProvider>
    </ThemeProvider>
  )
}

Box.displayName = 'Box'
