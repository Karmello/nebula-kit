import { ReactElement, useLayoutEffect } from 'react'

import { useGlobalScrollLock } from 'lib/hooks'

import {
  DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  DEFAULT_NEBKIT_BRAND,
  DEFAULT_NEBKIT_RIPPLE_MODE,
  DEFAULT_NEBKIT_THEME,
  NEBKIT_SIZES_MAP,
  NebkitProviderProps,
} from './definitions'

export const NebkitProvider = ({
  children,
  theme = DEFAULT_NEBKIT_THEME,
  brand = DEFAULT_NEBKIT_BRAND,
  borderRadiusSize = DEFAULT_NEBKIT_BORDER_RADIUS_SIZE,
  rippleMode = DEFAULT_NEBKIT_RIPPLE_MODE,
  lockGlobalScroll,
}: NebkitProviderProps): ReactElement => {
  const { lock, unlock } = useGlobalScrollLock()

  useLayoutEffect(() => {
    if (lockGlobalScroll) {
      lock()
    } else {
      unlock()
    }
  }, [lockGlobalScroll, lock, unlock])

  // shared transition re-enable gate
  let enableRaf: number | null = null

  const scheduleEnableTransitions = () => {
    if (enableRaf !== null) {
      cancelAnimationFrame(enableRaf)
    }

    enableRaf = requestAnimationFrame(() => {
      document.documentElement.classList.add('neb-transitions')
      enableRaf = null
    })
  }

  // hydration + initial enable
  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      window.dispatchEvent(new CustomEvent('neb:hydrated'))
      scheduleEnableTransitions()
    })

    return () => {
      if (enableRaf !== null) {
        cancelAnimationFrame(enableRaf)
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

    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-brand', brand)
    document.documentElement.setAttribute('data-ripple-mode', rippleMode)

    document.documentElement.style.setProperty(
      '--neb-border-radius',
      NEBKIT_SIZES_MAP.borderRadiusSize[borderRadiusSize || 'md'] || ''
    )

    scheduleEnableTransitions()
  }, [theme, brand, borderRadiusSize, rippleMode])

  return children
}

NebkitProvider.displayName = 'NebkitProvider'
