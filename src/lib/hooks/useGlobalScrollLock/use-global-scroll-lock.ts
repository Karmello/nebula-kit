import { useCallback, useRef } from 'react'

export const useGlobalScrollLock = () => {
  const lockCountRef = useRef(0)

  const lock = useCallback(() => {
    const html = document.documentElement

    if (lockCountRef.current === 0) {
      // measure BEFORE locking
      const scrollbarWidth = window.innerWidth - html.clientWidth

      html.style.paddingRight = `${scrollbarWidth}px`
      html.style.overflow = 'hidden'
    }

    lockCountRef.current += 1
  }, [])

  const unlock = useCallback(() => {
    if (lockCountRef.current === 0) {
      return
    }

    lockCountRef.current -= 1

    if (lockCountRef.current === 0) {
      const html = document.documentElement

      html.style.overflow = ''
      html.style.paddingRight = ''
    }
  }, [])

  return { lock, unlock }
}
