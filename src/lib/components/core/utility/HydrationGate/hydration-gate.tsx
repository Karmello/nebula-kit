import { useLayoutEffect, useState } from 'react'

import { HydrationGateProps } from './definitions'

export const HydrationGate = ({ children, minDelay = 0 }: HydrationGateProps) => {
  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null

    const onHydrated = () => {
      if (minDelay > 0) {
        timer = setTimeout(() => setVisible(true), minDelay)
      } else {
        setVisible(true)
      }
    }

    window.addEventListener('neb:hydrated', onHydrated, { once: true })

    return () => {
      window.removeEventListener('neb:hydrated', onHydrated)
      if (timer) clearTimeout(timer)
    }
  }, [])

  return <div style={visible ? undefined : { visibility: 'hidden', pointerEvents: 'none' }}>{children}</div>
}

HydrationGate.displayName = 'HydrationGate'
