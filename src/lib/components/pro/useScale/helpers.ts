import { USE_SCALE_ORIGIN_MAP } from './constants'
import { UseScaleArgs } from './types'

const getScaleTransform = ({
  visible,
  axis,
  from,
  to,
}: Pick<UseScaleArgs, 'visible' | 'axis' | 'from' | 'to'>) => {
  const value = visible ? to : from

  if (axis === 'x') {
    return `scaleX(${value})`
  }

  if (axis === 'y') {
    return `scaleY(${value})`
  }

  return `scale(${value})`
}

export const syncScale = ({
  ref,
  visible,
  axis,
  from,
  to,
  origin,
  transition,
}: Pick<UseScaleArgs, 'ref' | 'visible' | 'axis' | 'from' | 'to' | 'origin'> & {
  transition?: string
}) => {
  const el = ref?.current as HTMLElement | null

  if (!el) return

  el.style.transformOrigin = USE_SCALE_ORIGIN_MAP[origin || 'center']
  el.style.transform = getScaleTransform({ visible, axis, from, to })
  el.style.transition = transition || ''
}
