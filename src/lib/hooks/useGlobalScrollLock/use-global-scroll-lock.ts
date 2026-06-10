import { useCallback, useRef } from 'react'

export const useGlobalScrollLock = () => {
  const lockCountRef = useRef(0)

  const html = document.documentElement
  const body = document.body

  const lock = useCallback(() => {
    if (lockCountRef.current === 0) {
      const scrollbarWidth = window.innerWidth - html.clientWidth

      if (scrollbarWidth > 0) {
        body.style.paddingRight = `${scrollbarWidth}px`
      }

      body.style.overflow = 'hidden'
    }

    lockCountRef.current += 1
  }, [])

  const unlock = useCallback(() => {
    if (lockCountRef.current === 0) return

    lockCountRef.current -= 1

    if (lockCountRef.current === 0) {
      body.style.overflow = ''
      body.style.paddingRight = ''
    }
  }, [])

  return { lock, unlock }
}
