import { ScaleValue, LIB_PREFIX } from 'lib/definitions'

export const scale = (scale: ScaleValue | string | undefined): string | undefined => {
  if (scale === undefined) {
    return
  }

  if (typeof scale === 'string') {
    return scale
  }

  return `var(--${LIB_PREFIX}-scale-${scale})`
}
