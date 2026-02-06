import { memo, RefObject, useEffect, useState } from 'react'

import { withPrefix } from 'lib/helpers'

import { useRipple } from './useRipple'

import './ripple.scss'

export type RippleProps = {
  parentRef: RefObject<any>
  active?: boolean
}

export const Ripple = ({ parentRef, active }: RippleProps) => {
  const [globallyEnabled, setGloballyEnabled] = useState<boolean>(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const isGloballyEnabled = () => document.documentElement.getAttribute('data-ripple-mode') !== 'off'
    setGloballyEnabled(isGloballyEnabled())
    const observer = new MutationObserver(() => {
      setGloballyEnabled(isGloballyEnabled())
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-ripple-mode'],
    })
    return () => observer.disconnect()
  }, [])

  useRipple(parentRef, globallyEnabled && active)

  return <span className={withPrefix('ripple')} />
}
