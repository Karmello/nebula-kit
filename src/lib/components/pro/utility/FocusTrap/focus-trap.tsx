import { useEffect, useRef } from 'react'

import { DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK, FocusTrapProps } from './definitions'

export const FocusTrap = ({
  tagRef,
  children,
  active,
  onFocusEscape,
  disableEscapeOnOutsideClick = DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK,
}: FocusTrapProps) => {
  const triggerRef = useRef<HTMLElement | null>(null)
  const prevActiveRef = useRef(false)
  const hadTabIndexRef = useRef(false)

  // Restore focus on close
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
    const target = tagRef?.current as HTMLElement | null
    if (!active || !target) return

    if (!triggerRef.current) {
      triggerRef.current = document.activeElement as HTMLElement | null
    }

    const getTabbables = () => {
      const all = Array.from(target.querySelectorAll<HTMLElement>('*'))
      return all.filter(el => el.tabIndex >= 0)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' && e.key !== 'Escape') return

      if (e.key === 'Escape') {
        onFocusEscape?.()
        return
      }

      const tabbables = getTabbables()
      if (tabbables.length === 0) return

      const first = tabbables[0]
      const last = tabbables[tabbables.length - 1]
      const activeEl = document.activeElement as HTMLElement | null

      if (!activeEl || !target.contains(activeEl)) return

      if (!e.shiftKey) {
        if (activeEl === last) {
          e.preventDefault()
          first.focus()
        }
      } else {
        if (activeEl === first) {
          e.preventDefault()
          last.focus()
        }
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      if (disableEscapeOnOutsideClick) return
      if (!target.contains(e.target as Node)) {
        onFocusEscape?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    // Ensure root itself can receive focus
    hadTabIndexRef.current = target.hasAttribute('tabindex')
    if (!hadTabIndexRef.current) {
      target.setAttribute('tabindex', '-1')
    }

    if (!target.contains(document.activeElement)) {
      target.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)

      if (!hadTabIndexRef.current) {
        target.removeAttribute('tabindex')
      }
    }
  }, [active, tagRef, onFocusEscape, disableEscapeOnOutsideClick])

  return children
}
