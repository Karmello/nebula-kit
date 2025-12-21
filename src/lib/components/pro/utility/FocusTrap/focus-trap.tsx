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

  // Restore focus on close (active true -> false)
  useEffect(() => {
    const prevActive = prevActiveRef.current

    if (prevActive && !active) {
      const trigger = triggerRef.current
      triggerRef.current = null

      // Only focus if it's still in the document and focusable-ish
      if (trigger && document.contains(trigger)) {
        trigger.focus()
      }
    }

    prevActiveRef.current = active
  }, [active])

  // Trap behavior while active
  useEffect(() => {
    const target = tagRef?.current as HTMLElement | null
    if (!active || !target) return

    // Capture trigger once per open
    if (!triggerRef.current) {
      triggerRef.current = document.activeElement as HTMLElement | null
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' && e.key !== 'Escape') return

      if (e.key === 'Escape') {
        onFocusEscape?.()
        return
      }

      const interactiveBoxes = Array.from(
        target.querySelectorAll<HTMLElement>("[data-neb-box-interactive='true']")
      ).filter(el => !el.closest('[inert]'))

      if (interactiveBoxes.length === 0) return

      const first = interactiveBoxes[0]
      const last = interactiveBoxes[interactiveBoxes.length - 1]
      const activeEl = document.activeElement as HTMLElement | null

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

    // Ensure target can receive focus but avoid breaking an existing tabindex
    hadTabIndexRef.current = target.hasAttribute('tabindex')
    if (!hadTabIndexRef.current) {
      target.setAttribute('tabindex', '-1')
    }

    // Idempotent focus: never steal focus if already inside trap
    if (!target.contains(document.activeElement)) {
      target.focus()
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)

      // Restore original tabindex state
      if (!hadTabIndexRef.current) {
        target.removeAttribute('tabindex')
      }
    }
  }, [active, tagRef, onFocusEscape, disableEscapeOnOutsideClick])

  return children
}
