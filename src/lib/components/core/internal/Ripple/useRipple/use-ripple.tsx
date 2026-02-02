import { RefObject, useEffect } from 'react'

export const useRipple = (parentRef: RefObject<any>) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !parentRef?.current) return
    const parent = parentRef.current

    const isInteractive = parent.getAttribute('data-neb-box-interactive') === 'true'
    const isDisabled = parent.getAttribute('data-neb-box-disabled') === 'true'

    if (!isInteractive || isDisabled) return

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

      const diag = Math.sqrt(rect.width * rect.width + rect.height * rect.height)
      const duration = Math.max(1500, Math.min(diag * 9, 3000))
      parent.style.setProperty('--neb-ripple-duration', `${duration}ms`)

      if (!e.isPrimary) return

      // restart animation
      rippleEl.classList.remove('is-active')
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          rippleEl.classList.add('is-active')
        })
      })
    }

    parent.addEventListener('pointerdown', onPointerDown)

    return () => {
      parent.removeEventListener('pointerdown', onPointerDown)
    }
  }, [
    parentRef.current?.getAttribute('data-neb-box-disabled'),
    parentRef.current?.getAttribute('data-neb-box-interactive'),
  ])
}
