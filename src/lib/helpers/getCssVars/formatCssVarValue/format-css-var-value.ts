import { GetCssVarsProps } from '../get-css-vars'

export const formatCssVarValue = (
  propName: keyof GetCssVarsProps<string | number>,
  propValue: string | number
): string | number => {
  if (typeof propValue === 'number') {
    if (propName === 'lineHeight') {
      return propValue
    } else if (propName === 'columns') {
      return `repeat(${propValue}, 1fr)`
    } else {
      return `var(--scale-${propValue})`
    }
  } else {
    return propValue
  }
}
