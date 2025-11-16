import { RefObject, useEffect } from 'react'

export const useRipple = (parentRef: RefObject<any>) => {
  useEffect(() => {
    const parent = parentRef.current

    const isInteractive = parent.getAttribute('data-neb-box-interactive') === 'true'
    const isDisabled = parent.getAttribute('data-neb-box-disabled') === 'true'

    if (!parent || !isInteractive || isDisabled) return

    parent.dataset.nebRipple = 'true'

    const rippleEl = parent.querySelector('.neb-ripple')
    if (!rippleEl) return

    const onPointerDown = (e: PointerEvent) => {
      // prevent ripple on disabled elements
      if (parent.closest('[disabled]')) return

      const rect = parent.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      rippleEl.style.width = `${size}px`
      rippleEl.style.height = `${size}px`
      rippleEl.style.left = `${x}px`
      rippleEl.style.top = `${y}px`

      // restart animation
      rippleEl.classList.remove('is-active')
      void rippleEl.offsetWidth
      rippleEl.classList.add('is-active')
    }

    parent.addEventListener('pointerdown', onPointerDown)

    return () => {
      parent.removeEventListener('pointerdown', onPointerDown)
    }
  }, [parentRef, parent])
}
