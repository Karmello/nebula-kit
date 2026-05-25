import { RefObject } from 'react'

import { SlideProps } from './definitions'

export const syncSlidePosition = (
  ref: RefObject<HTMLDivElement | null>,
  from: SlideProps['from'],
  visible: boolean,
  transition: string | null
) => {
  if (!ref.current) return

  const inlineSize = `${ref.current.scrollWidth}px`
  const blockSize = `${ref.current.scrollHeight}px`

  ref.current.style.transition = transition || 'none'

  switch (from) {
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
      ref.current.style.transform = visible ? 'translateX(0)' : `translateX(-${inlineSize})`
      break
  }
}
