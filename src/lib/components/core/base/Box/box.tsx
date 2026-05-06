import { ElementType, ComponentRef, ComponentProps, PropsWithoutRef, useLayoutEffect, useEffect, useRef } from 'react'

import classNames from 'classnames'

import { BoxProps, HtmlTag } from 'lib/components'
import { updateDomRespStyle, updateDomRespDataset, updateDomStaticDataset } from 'lib/service'
import { ThemeProvider, BrandProvider, useThemeContext, useBrandContext } from 'lib/components/core/internal'
import { withPrefix, resolveSizeValue } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

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

  const themeCtx = useThemeContext()
  const brandCtx = useBrandContext()

  const inheritedTheme = themeCtx?.theme
  const resolvedTheme = theme ?? inheritedTheme

  const finalTheme = resolvedTheme === 'flipped' ? (inheritedTheme === 'dark' ? 'light' : 'dark') : resolvedTheme

  const ctxBrand = brandCtx?.brand
  const finalBrand = brand ?? ctxBrand
  const finalColor = color ?? finalBrand

  useLayoutEffect(() => {
    const el = finalRef?.current as Element
    if (!el) return
    el.setAttribute('data-neb-box-transitions', 'false')
  }, [])

  useEffect(() => {
    const el = finalRef?.current as Element
    if (!el) return

    let raf2: number

    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        el.setAttribute('data-neb-box-transitions', 'true')
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

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
      blockSize: blockSize !== undefined ? resolveSizeValue(blockSize) : undefined,
      minBlockSize: minBlockSize !== undefined ? resolveSizeValue(minBlockSize) : undefined,
      maxBlockSize: maxBlockSize !== undefined ? resolveSizeValue(maxBlockSize) : undefined,
      inlineSize: inlineSize !== undefined ? resolveSizeValue(inlineSize) : undefined,
      minInlineSize: minInlineSize !== undefined ? resolveSizeValue(minInlineSize) : undefined,
      maxInlineSize: maxInlineSize !== undefined ? resolveSizeValue(maxInlineSize) : undefined,
      padding: padding !== undefined ? resolveSizeValue(padding) : undefined,
      paddingInline: paddingInline !== undefined ? resolveSizeValue(paddingInline) : undefined,
      paddingBlock: paddingBlock !== undefined ? resolveSizeValue(paddingBlock) : undefined,
      paddingTop: paddingTop !== undefined ? resolveSizeValue(paddingTop) : undefined,
      paddingRight: paddingRight !== undefined ? resolveSizeValue(paddingRight) : undefined,
      paddingBottom: paddingBottom !== undefined ? resolveSizeValue(paddingBottom) : undefined,
      paddingLeft: paddingLeft !== undefined ? resolveSizeValue(paddingLeft) : undefined,
      margin: margin !== undefined ? resolveSizeValue(margin, 'margin') : undefined,
      marginInline: marginInline !== undefined ? resolveSizeValue(marginInline) : undefined,
      marginBlock: marginBlock !== undefined ? resolveSizeValue(marginBlock) : undefined,
      marginTop: marginTop !== undefined ? resolveSizeValue(marginTop) : undefined,
      marginRight: marginRight !== undefined ? resolveSizeValue(marginRight) : undefined,
      marginBottom: marginBottom !== undefined ? resolveSizeValue(marginBottom) : undefined,
      marginLeft: marginLeft !== undefined ? resolveSizeValue(marginLeft) : undefined,
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
    updateDomRespDataset('Box', finalRef, bp, {
      theme: finalTheme,
      color: finalColor,
      variant,
      intent,
      hidden,
    })
  }, [bp, finalTheme, finalColor, variant, intent, hidden])

  return (
    <ThemeProvider theme={finalTheme}>
      <BrandProvider brand={finalBrand}>
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
