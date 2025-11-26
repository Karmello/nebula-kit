import { useEffect, useRef } from 'react'

import { DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK, FocusTrapProps } from './definitions'

export const FocusTrap = ({
  tagRef,
  children,
  active,
  onFocusEscape,
  disableEscapeOnOutsideClick = DEFAULT_FOCUS_TRAP_DISABLE_ESCAPE_ON_OUTSIDE_CLICK,
}: FocusTrapProps) => {
  const trigger = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const target = tagRef?.current as HTMLElement | null
    if (!active || !target) return

    // remember element that had focus before trap
    trigger.current = document.activeElement as HTMLElement | null

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        const interactiveBoxes = Array.from(
          target.querySelectorAll<HTMLElement>("[data-neb-box-interactive='true']")
        ).filter(el => !el.closest('[inert]'))

        if (interactiveBoxes.length === 0) return

        const first = interactiveBoxes[0]
        const last = interactiveBoxes[interactiveBoxes.length - 1]

        if (!e.shiftKey) {
          // forward tab
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        } else {
          // shift+tab
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        }
      } else if (e.key === 'Escape') {
        onFocusEscape?.()
      }
    }

    const handlePointerDown = (e: PointerEvent) => {
      if (disableEscapeOnOutsideClick) return
      const currentTarget = tagRef?.current as HTMLElement | null
      if (!currentTarget) return

      if (!currentTarget.contains(e.target as Node)) {
        onFocusEscape?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    target.setAttribute('tabindex', '-1')
    target.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      target.removeAttribute('tabindex')

      if (trigger.current) {
        trigger.current.focus()
      }
      trigger.current = null
    }
  }, [active, tagRef, onFocusEscape])

  return children
}
