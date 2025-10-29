import { ScaleValue, LIB_PREFIX } from 'lib/definitions'

export const resolveScale = (scale: ScaleValue | string | number | undefined): string | undefined => {
  if (scale === undefined) {
    return
  }

  if (typeof scale === 'string') {
    return scale
  }

  return `var(--${LIB_PREFIX}-scale-${scale})`
}
