import { ReactElement, useLayoutEffect, useRef } from 'react'

import { useGlobalScrollLock } from 'lib/hooks'
import { ThemeProvider, BrandProvider } from 'lib/components/internal'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_RIPPLE_MODE,
  DEFAULT_NEBKIT_SATURATION,
  DEFAULT_NEBKIT_THEME,
  NEBKIT_SIZES_MAP,
  NebkitProviderProps,
} from './definitions'

export const NebkitProvider = ({
  children,
  theme = DEFAULT_NEBKIT_THEME,
  brand = DEFAULT_NEBKIT_BRAND,
  saturation = DEFAULT_NEBKIT_SATURATION,
  borderRadiusSize = DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  rippleMode = DEFAULT_NEBKIT_RIPPLE_MODE,
  lockGlobalScroll,
}: NebkitProviderProps): ReactElement => {
  const { lock, unlock } = useGlobalScrollLock()

  const enableRafRef = useRef<number | null>(null)

  const scheduleEnableTransitions = () => {
    if (enableRafRef.current !== null) {
      cancelAnimationFrame(enableRafRef.current)
    }

    enableRafRef.current = requestAnimationFrame(() => {
      document.documentElement.classList.add('neb-transitions')
      enableRafRef.current = null
    })
  }

  useLayoutEffect(() => {
    if (lockGlobalScroll) {
      lock()
    } else {
      unlock()
    }
  }, [lockGlobalScroll, lock, unlock])

  // hydration + initial enable
  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      scheduleEnableTransitions()
    })

    return () => {
      cancelAnimationFrame(raf)

      if (enableRafRef.current !== null) {
        cancelAnimationFrame(enableRafRef.current)
      }
    }
  }, [])

  // resize handling
  useLayoutEffect(() => {
    const handleResize = () => {
      document.documentElement.classList.remove('neb-transitions')
      scheduleEnableTransitions()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useLayoutEffect(() => {
    document.documentElement.classList.remove('neb-transitions')

    document.documentElement.setAttribute('data-theme', theme || `${DEFAULT_NEBKIT_THEME}`)
    document.documentElement.setAttribute('data-brand', brand || `${DEFAULT_NEBKIT_BRAND}`)
    document.documentElement.setAttribute('data-saturation', saturation || `${DEFAULT_NEBKIT_SATURATION}`)
    document.documentElement.setAttribute('data-ripple-mode', rippleMode || `${DEFAULT_NEBKIT_RIPPLE_MODE}`)

    document.documentElement.style.setProperty(
      '--neb-border-radius',
      NEBKIT_SIZES_MAP.borderRadiusSize[borderRadiusSize || 'md'] || ''
    )

    scheduleEnableTransitions()
  }, [theme, brand, saturation, borderRadiusSize, rippleMode])

  return (
    <ThemeProvider theme={theme}>
      <BrandProvider brand={brand}>{children}</BrandProvider>
    </ThemeProvider>
  )
}

NebkitProvider.displayName = 'NebkitProvider'
