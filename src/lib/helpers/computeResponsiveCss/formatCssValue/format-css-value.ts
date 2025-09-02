import { scale } from 'lib/helpers'

export const formatCssValue = (propName: string, propValue: string | number): string => {
  if (typeof propValue === 'number') {
    if (['lineHeight', 'opacity'].includes(propName)) {
      return String(propValue)
    } else if (propName === 'columns') {
      return `repeat(${propValue}, 1fr)`
    } else {
      return scale(propValue) || ''
    }
  } else {
    return propValue
  }
}
