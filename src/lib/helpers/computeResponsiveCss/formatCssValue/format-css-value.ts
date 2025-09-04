import { scale } from 'lib/helpers'

const KEEP_NUMBER_PROPS = ['lineHeight', 'opacity', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'order']

export const formatCssValue = (propName: string, propValue: string | number): string => {
  if (typeof propValue === 'number') {
    if (KEEP_NUMBER_PROPS.includes(propName)) {
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
