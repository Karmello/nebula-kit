import { useLayoutEffect, useState } from 'react'

import { Loader } from 'lib/components'

import { HydrationGateProps } from './definitions'

export const HydrationGate = ({ children, minDelay, fallback }: HydrationGateProps) => {
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

  return (
    <div style={{ position: 'relative' }}>
      <div style={visible ? undefined : { opacity: 0, pointerEvents: 'none' }}>{children}</div>
      {fallback ? fallback : <Loader centered active={!visible} />}
    </div>
  )
}

HydrationGate.displayName = 'HydrationGate'
