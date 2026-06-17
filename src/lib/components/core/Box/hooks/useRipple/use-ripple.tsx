import { RefObject, useEffect, useState } from 'react'

export const useRipple = (elemRef: RefObject<any>, active?: boolean) => {
  const [globallyEnabled, setGloballyEnabled] = useState(false)

  const finalActive = globallyEnabled && active

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

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!finalActive) return

    const el = elemRef.current

    if (!el) return

    const isInteractive = el.getAttribute('data-neb-box-interactive') === 'true'

    const isDisabled = el.getAttribute('data-neb-box-disabled') === 'true'

    if (!isInteractive || isDisabled) return

    el.dataset.nebBoxRipple = 'true'

    const triggerRipple = (x?: number, y?: number) => {
      const rect = el.getBoundingClientRect()

      const size = Math.max(rect.width, rect.height)

      const left = x ?? rect.width / 2 - size / 2
      const top = y ?? rect.height / 2 - size / 2

      const diag = Math.sqrt(rect.width ** 2 + rect.height ** 2)
      const duration = Math.max(1250, Math.min(diag * 4, 2500))

      el.style.setProperty('--neb-ripple-size', `${size}px`)
      el.style.setProperty('--neb-ripple-left', `${left}px`)
      el.style.setProperty('--neb-ripple-top', `${top}px`)
      el.style.setProperty('--neb-ripple-duration', `${duration}ms`)
      el.classList.remove('neb-ripple-active')

      void el.offsetWidth
      el.classList.add('neb-ripple-active')
    }

    const onPointerUp = (e: PointerEvent) => {
      if (el.closest('[disabled]')) return

      const rect = el.getBoundingClientRect()

      const size = Math.max(rect.width, rect.height)

      triggerRipple(e.clientX - rect.left - size / 2, e.clientY - rect.top - size / 2)
    }

    const onKeyUp = (e: KeyboardEvent) => {
      if (e.repeat) return

      if (e.key !== 'Enter' && e.key !== ' ') return

      triggerRipple()
    }

    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('keyup', onKeyUp)

    return () => {
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('keyup', onKeyUp)
    }
  }, [elemRef, finalActive])
}
