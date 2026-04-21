import { ElementType, ComponentRef, ComponentProps, PropsWithoutRef, useLayoutEffect, useEffect, useRef } from 'react'

import classNames from 'classnames'

import { BoxProps, HtmlTag } from 'lib/components'
import { ThemeProvider, BrandProvider, useThemeContext, useBrandContext } from 'lib/components/core/internal'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { updateDomRespStyle, updateDomRespDataset, updateDomStaticDataset } from 'lib/service'

import './styles/box.scss'

export const Box = <T extends ElementType = 'div'>({
  children,
  tag,
  tagAttrs,
  tagRef,
  drawable,
  surface,
  theme,
  brand,
  color,
  variant,
  intent,
  interactive,
  selected,
  disabled,
  activeOnFocus,
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

  const finalTheme = theme ?? themeCtx?.theme
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
    updateDomRespDataset('Box', finalRef, bp, {
      theme: finalTheme,
      color: finalColor,
      variant,
      intent,
    })
  }, [bp, finalTheme, finalColor, variant, intent])

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
                surface,
                interactive,
                selected,
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
