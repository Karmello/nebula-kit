import { RefObject } from 'react'

export const focusTriggerChild = (triggerRef: RefObject<HTMLSpanElement | null>) => {
  const child = triggerRef.current?.firstElementChild
  if (child instanceof HTMLElement) {
    child.focus()
  }
}
