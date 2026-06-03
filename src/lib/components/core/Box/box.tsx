import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, RefObject, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { BrandProvider, ThemeProvider } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { HtmlTag } from 'lib/index.core'
import { buildStaticDataset, syncRespDataset } from 'lib/internals/dom'
import { useTransitionLifecycle } from 'lib/internals/motion'
import { useResolveAppearance } from 'lib/internals/styling'

import { useRipple, useSyncBoxRespStyle } from './hooks'
import { BoxProps } from './types'

import './styles/box.scss'

export const Box = <T extends ElementType = 'div'>(props: BoxProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = props.tagRef || ref

  const { bp } = useScreen()

  const {
    theme,
    brand,
    color,
    variant,
    intent,
    hidden,
    ripple,
    interactive,
    disabled,
    tag,
    tagAttrs,
    pointerEvents,
    cursor,
    drawable,
    elevated,
    surface,
    activeOnFocus,
    children,
  } = props

  const resolvedAppearance = useResolveAppearance({ theme, brand, color })

  useTransitionLifecycle(finalRef as RefObject<HTMLElement>)

  useSyncBoxRespStyle<T>({ finalRef, ...props })

  useLayoutEffect(() => {
    syncRespDataset('Box', finalRef, bp, {
      theme: resolvedAppearance.theme,
      color: resolvedAppearance.color,
      variant,
      intent,
      hidden,
    })
  }, [bp, resolvedAppearance.theme, resolvedAppearance.color, variant, intent, hidden])

  const usesRipple = ripple && interactive && !disabled

  useRipple(finalRef, usesRipple)

  return (
    <ThemeProvider theme={resolvedAppearance.theme}>
      <BrandProvider brand={resolvedAppearance.brand}>
        <HtmlTag
          tag={tag}
          tagAttrs={
            {
              ...tagAttrs,
              className: classNames(withPrefix('box'), tagAttrs?.className || ''),
              style: { ...tagAttrs?.style, pointerEvents, cursor },
              disabled,
              ...buildStaticDataset('Box', {
                drawable: drawable || interactive,
                elevated,
                interactive,
                surface,
                disabled,
                activeOnFocus,
                ripple: usesRipple,
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
