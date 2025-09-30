import { ElementType, useCallback, useEffect, useRef } from 'react'

import { FocusTrapProps } from './definitions'

export const FocusTrap = <T extends ElementType>({
  tagRef,
  children,
  active,
  onClose,
}: FocusTrapProps<T>) => {
  const trigger = useRef<HTMLElement | null>(null)

  const onTargetKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const target = tagRef?.current as HTMLElement

      const interactiveBoxes = Array.from(
        target.querySelectorAll<HTMLElement>("[data-neb-box-interactive='true']")
      ).filter(el => !el.closest('[inert]'))

      if (!e.shiftKey) {
        if (document.activeElement === interactiveBoxes[interactiveBoxes.length - 1]) {
          setTimeout(() => {
            interactiveBoxes[0].focus()
          })
        }
      } else {
        if (document.activeElement === interactiveBoxes[0]) {
          setTimeout(() => {
            interactiveBoxes[interactiveBoxes.length - 1].focus()
          })
        }
      }
    } else if (e.key === 'Escape') {
      onClose?.()
    }
  }, [])

  const onDocumentPointerDown = useCallback((e: PointerEvent) => {
    const target = tagRef?.current as HTMLElement

    if (!target.contains(e.target as Node)) {
      onClose?.()
    }
  }, [])

  useEffect(() => {
    const target = tagRef?.current as HTMLElement

    if (active) {
      trigger.current = document.activeElement as HTMLElement
      document.addEventListener('pointerdown', onDocumentPointerDown)
      target.addEventListener('keydown', onTargetKeyDown)
      target.setAttribute('tabindex', '-1')
      target.focus()
    } else {
      document.removeEventListener('pointerdown', onDocumentPointerDown)
      target.removeEventListener('keydown', onTargetKeyDown)
      target.removeAttribute('tabindex')
      trigger.current?.focus()
      trigger.current = null
    }
  }, [active])

  return children
}
