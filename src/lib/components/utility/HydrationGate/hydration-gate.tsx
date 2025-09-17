import { ReactElement, ReactNode, useLayoutEffect, useState } from 'react'

export type HydrationGateProps = {
  children: ReactElement
  minDelay?: number
  fallback?: ReactNode
}

export const HydrationGate = ({ children, minDelay = 0, fallback = null }: HydrationGateProps) => {
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
      <div style={visible ? undefined : { visibility: 'hidden', pointerEvents: 'none' }}>{children}</div>
      {fallback && !visible ? <div style={{ position: 'absolute', inset: 0 }}>{fallback}</div> : null}
    </div>
  )
}

HydrationGate.displayName = 'HydrationGate'
