import { ReactElement, useLayoutEffect, useRef } from 'react'

import { BrandProvider, ThemeProvider } from 'lib/components/shared'
import { useGlobalScrollLock } from 'lib/hooks'

import {
  DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_PROVIDER_BRAND,
  DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE,
  DEFAULT_NEBKIT_PROVIDER_SATURATION,
  DEFAULT_NEBKIT_PROVIDER_THEME,
  NEBKIT_PROVIDER_SIZES_MAP,
} from './constants'
import type { NebkitProviderProps } from './types'

export const NebkitProvider = ({
  children,
  theme = DEFAULT_NEBKIT_PROVIDER_THEME,
  brand = DEFAULT_NEBKIT_PROVIDER_BRAND,
  saturation = DEFAULT_NEBKIT_PROVIDER_SATURATION,
  borderRadiusSize = DEFAULT_NEBKIT_PROVIDER_BORDER_RADIUS_SIZE,
  rippleMode = DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE,
  lockGlobalScroll,
}: NebkitProviderProps): ReactElement => {
  const { lock, unlock } = useGlobalScrollLock()

  const enableRafRef = useRef<number | null>(null)

  const scheduleEnableGlobalTransitions = () => {
    if (enableRafRef.current !== null) {
      cancelAnimationFrame(enableRafRef.current)
    }

    enableRafRef.current = requestAnimationFrame(() => {
      document.documentElement.setAttribute('data-neb-enable-global-transitions', 'true')
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

  // Reveals SSR-rendered content after the first client frame.
  // This hides the pre-hydration DOM while runtime-applied layout styles settle.
  useLayoutEffect(() => {
    const raf = requestAnimationFrame(() => {
      document.documentElement.setAttribute('data-neb-hydrated', 'true')
      scheduleEnableGlobalTransitions()
    })

    return () => {
      cancelAnimationFrame(raf)

      if (enableRafRef.current !== null) {
        cancelAnimationFrame(enableRafRef.current)
      }
    }
  }, [])

  // Temporarily disables global transitions while the viewport is resizing.
  // Responsive runtime styles can change during resize, so transitions are re-enabled on the next frame.
  useLayoutEffect(() => {
    const handleResize = () => {
      document.documentElement.removeAttribute('data-neb-enable-global-transitions')
      scheduleEnableGlobalTransitions()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Applies global NebulaKit configuration to the document root.
  // Global transitions are disabled during the update so theme/token changes do not animate the whole UI.
  useLayoutEffect(() => {
    document.documentElement.removeAttribute('data-neb-enable-global-transitions')

    document.documentElement.setAttribute('data-theme', theme || `${DEFAULT_NEBKIT_PROVIDER_THEME}`)
    document.documentElement.setAttribute('data-brand', brand || `${DEFAULT_NEBKIT_PROVIDER_BRAND}`)
    document.documentElement.setAttribute(
      'data-saturation',
      saturation || `${DEFAULT_NEBKIT_PROVIDER_SATURATION}`
    )
    document.documentElement.setAttribute(
      'data-ripple-mode',
      rippleMode || `${DEFAULT_NEBKIT_PROVIDER_RIPPLE_MODE}`
    )

    document.documentElement.style.setProperty(
      '--neb-border-radius',
      NEBKIT_PROVIDER_SIZES_MAP.borderRadiusSize[borderRadiusSize || 'md'] || ''
    )

    scheduleEnableGlobalTransitions()
  }, [theme, brand, saturation, borderRadiusSize, rippleMode])

  return (
    <ThemeProvider theme={theme}>
      <BrandProvider brand={brand}>{children}</BrandProvider>
    </ThemeProvider>
  )
}

NebkitProvider.displayName = 'NebkitProvider'
