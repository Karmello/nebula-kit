import { RefObject } from 'react'

export const syncFadeOpacity = (
  ref: RefObject<HTMLSpanElement | null>,
  visible: boolean,
  transition: string | null
) => {
  const el = ref.current

  if (!el) return

  el.style.transition = transition || 'none'
  el.style.opacity = visible ? '1' : '0'
}
