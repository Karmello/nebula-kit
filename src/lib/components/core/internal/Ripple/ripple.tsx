import { RefObject, useEffect, useState } from 'react'

import { withPrefix } from 'lib/helpers'

import { useRipple } from './useRipple'

import './ripple.scss'

export type RippleProps = {
  parentRef: RefObject<any>
  active?: boolean
}

export const Ripple = ({ parentRef, active }: RippleProps) => {
  const [globallyEnabled, setGloballyEnabled] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') return

    const read = () => document.documentElement.getAttribute('data-ripple') === 'true'

    // read once on mount
    setGloballyEnabled(read())

    const observer = new MutationObserver(() => {
      setGloballyEnabled(read())
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-ripple'],
    })

    return () => observer.disconnect()
  }, [])

  useRipple(parentRef, globallyEnabled && active)

  return <span className={withPrefix('ripple')} />
}
