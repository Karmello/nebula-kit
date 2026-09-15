import { RefObject, useEffect } from 'react'

export const useOutsideClick = (refs: RefObject<HTMLElement | null>[], onClose: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      const clickedInside = refs.some(ref => ref.current?.contains(target))
      if (!clickedInside) onClose()
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
    }
  }, [refs, onClose])
}
