import { SlideDirection } from './definitions'

export const getInitialTransform = (direction: SlideDirection, offset: string) => {
  switch (direction) {
    case 'top':
      return `translateY(-${offset})`
    case 'bottom':
      return `translateY(${offset})`
    case 'left':
      return `translateX(-${offset})`
    case 'right':
      return `translateX(${offset})`
    default:
      return 'translate(0,0)'
  }
}
