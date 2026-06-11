import { useLayoutEffect, useState } from 'react'

import type { NebkitProviderTheme } from 'lib/components/core/NebkitProvider/types'

const getTheme = (): NebkitProviderTheme => {
  if (typeof document === 'undefined') {
    return 'light'
  }
  return document.documentElement.getAttribute('data-theme') as NebkitProviderTheme
}

export const useCurrentTheme = (): NebkitProviderTheme => {
  const [theme, setTheme] = useState<NebkitProviderTheme>(getTheme)

  useLayoutEffect(() => {
    if (typeof document === 'undefined') return

    const observer = new MutationObserver(() => {
      const next = document.documentElement.getAttribute('data-theme') as NebkitProviderTheme
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
