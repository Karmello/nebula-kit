import { useLayoutEffect, useState } from 'react'

import { Theme } from 'lib/types'

const getTheme = (): Theme => {
  if (typeof document === 'undefined') {
    return 'light'
  }
  return document.documentElement.getAttribute('data-theme') as Theme
}

export const useCurrentTheme = (): Theme => {
  const [theme, setTheme] = useState<Theme>(getTheme)

  useLayoutEffect(() => {
    if (typeof document === 'undefined') return

    const observer = new MutationObserver(() => {
      const next = document.documentElement.getAttribute('data-theme') as Theme
      setTheme(prev => (prev === next ? prev : next))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return theme
}
