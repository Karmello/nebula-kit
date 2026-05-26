import { RefObject, useEffect, useRef } from 'react'

import { isInsideLogicalTree } from './helpers'

export type UseFocusTrapProps = {
  active: boolean
  targetRef: RefObject<HTMLElement | null>
  onFocusEscape?: () => void
  disableEscapeOnOutsideClick?: boolean
}

export const useFocusTrap = ({ active, targetRef, onFocusEscape, disableEscapeOnOutsideClick }: UseFocusTrapProps) => {
  const triggerRef = useRef<HTMLElement | null>(null)
  const prevActiveRef = useRef(false)
  const hadTabIndexRef = useRef(false)
  const lastFocusedRef = useRef<HTMLElement | null>(null)
  const tabDirectionRef = useRef<'forward' | 'backward'>('forward')

  useEffect(() => {
    const prevActive = prevActiveRef.current

    if (prevActive && !active) {
      const trigger = triggerRef.current
      triggerRef.current = null

      if (trigger && document.contains(trigger)) {
        trigger.focus()
      }
    }

    prevActiveRef.current = active
  }, [active])

  useEffect(() => {
    const target = targetRef?.current

    if (!active || !target) return

    if (!triggerRef.current) {
      triggerRef.current = document.activeElement as HTMLElement | null
    }

    const getTabbables = () => {
      const all = Array.from(target.querySelectorAll<HTMLElement>('*'))

      return all.filter(el => el.tabIndex >= 0)
    }

    const focusBoundary = () => {
      const tabbables = getTabbables()

      if (tabbables.length === 0) {
        target.focus()
        return
      }

      if (tabDirectionRef.current === 'backward') {
        tabbables[tabbables.length - 1].focus()
      } else {
        tabbables[0].focus()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' && e.key !== 'Escape') return

      if (e.key === 'Escape') {
        onFocusEscape?.()
        return
      }

      tabDirectionRef.current = e.shiftKey ? 'backward' : 'forward'

      const tabbables = getTabbables()

      if (tabbables.length === 0) {
        e.preventDefault()
        target.focus()
        return
      }

      const first = tabbables[0]
      const last = tabbables[tabbables.length - 1]
      const activeEl = document.activeElement as HTMLElement | null

      if (e.shiftKey && activeEl === first) {
        e.preventDefault()
        last.focus()
        return
      }

      if (!e.shiftKey && activeEl === last) {
        e.preventDefault()
        first.focus()
      }
    }

    const handleFocusIn = () => {
      if (document.activeElement === lastFocusedRef.current) return
      const activeEl = document.activeElement as HTMLElement | null
      if (!activeEl || isInsideLogicalTree(activeEl, target)) return
      lastFocusedRef.current = activeEl
      focusBoundary()
    }

    const handlePointerDown = (e: PointerEvent) => {
      if (disableEscapeOnOutsideClick) return

      if (!isInsideLogicalTree(e.target as Node, target)) {
        onFocusEscape?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    document.addEventListener('focusin', handleFocusIn)
    document.addEventListener('pointerdown', handlePointerDown)

    hadTabIndexRef.current = target.hasAttribute('tabindex')

    if (!hadTabIndexRef.current) {
      target.setAttribute('tabindex', '-1')
    }

    if (!target.contains(document.activeElement)) {
      target.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.removeEventListener('focusin', handleFocusIn)
      document.removeEventListener('pointerdown', handlePointerDown)

      if (!hadTabIndexRef.current) {
        target.removeAttribute('tabindex')
      }
    }
  }, [active, targetRef, onFocusEscape, disableEscapeOnOutsideClick])
}
