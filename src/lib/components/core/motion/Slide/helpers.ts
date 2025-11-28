import { RefObject } from 'react'

import { SlideProps } from './definitions'

export const updatePosition = (
  ref: RefObject<HTMLDivElement | null>,
  property: SlideProps['property'],
  visible: boolean,
  transition: boolean,
  duration: number | undefined,
  easing: string | undefined
) => {
  if (ref.current) {
    const inlineSize = `${ref.current.scrollWidth}px`
    const blockSize = `${ref.current.scrollHeight}px`

    if (transition) {
      ref.current.style.transition = `transform ${duration}ms ${easing}`
    } else {
      ref.current.style.transition = 'none'
    }

    switch (property) {
      case 'top':
        ref.current.style.transform = visible ? 'translateY(0)' : `translateY(-${blockSize})`
        break
      case 'right':
        ref.current.style.transform = visible ? 'translateX(0)' : `translateX(${inlineSize})`
        break
      case 'bottom':
        ref.current.style.transform = visible ? 'translateY(0)' : `translateY(${blockSize})`
        break
      case 'left':
        ref.current.style.transform = visible ? `translateX(0)` : `translateX(-${inlineSize})`
        break
    }
  }
}
