import { RefObject, useEffect } from 'react'

export const useRipple = (parentRef: RefObject<HTMLElement>, active?: boolean) => {
  useEffect(() => {
    if (typeof window === 'undefined' || !active) return

    const parent = parentRef.current
    if (!parent) return

    const isInteractive = parent.getAttribute('data-neb-box-interactive') === 'true'
    const isDisabled = parent.getAttribute('data-neb-box-disabled') === 'true'

    if (!isInteractive || isDisabled) return

    parent.dataset.nebRipple = 'true'

    const rippleEl = parent.querySelector<HTMLElement>('.neb-ripple')
    if (!rippleEl) return

    const triggerRipple = (x?: number, y?: number) => {
      const rect = parent.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)

      const left = x ?? rect.width / 2 - size / 2
      const top = y ?? rect.height / 2 - size / 2

      rippleEl.style.width = `${size}px`
      rippleEl.style.height = `${size}px`
      rippleEl.style.left = `${left}px`
      rippleEl.style.top = `${top}px`

      const diag = Math.sqrt(rect.width ** 2 + rect.height ** 2)
      const duration = Math.max(1250, Math.min(diag * 4, 2500))
      rippleEl.style.animationDuration = `${duration}ms`

      rippleEl.classList.remove('is-active')
      void rippleEl.offsetWidth
      rippleEl.classList.add('is-active')
    }

    const onPointerDown = (e: PointerEvent) => {
      if (parent.closest('[disabled]')) return

      const rect = parent.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)

      triggerRipple(e.clientX - rect.left - size / 2, e.clientY - rect.top - size / 2)
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.repeat) return
      if (e.key !== 'Enter' && e.key !== ' ') return

      triggerRipple()
    }

    parent.addEventListener('pointerdown', onPointerDown)
    parent.addEventListener('keydown', onKeyDown)

    return () => {
      parent.removeEventListener('pointerdown', onPointerDown)
      parent.removeEventListener('keydown', onKeyDown)
    }
  }, [
    parentRef,
    active,
    parentRef.current?.getAttribute('data-neb-box-disabled'),
    parentRef.current?.getAttribute('data-neb-box-interactive'),
  ])
}
