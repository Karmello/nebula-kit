import { PropValue } from '../definitions'

const KEEP_NUMBER_PROPS = ['lineHeight', 'opacity', 'flex', 'flexGrow', 'flexShrink', 'flexBasis', 'order']

export const formatCssValue = (propName: string, propValue: PropValue): string => {
  if (typeof propValue === 'number') {
    if (KEEP_NUMBER_PROPS.includes(propName)) {
      return String(propValue)
    } else if (propName === 'columns') {
      return `repeat(${propValue}, 1fr)`
    } else {
      return String(propValue) || ''
    }
  } else {
    return String(propValue)
  }
}
