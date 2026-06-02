import { ScaleProps } from 'lib/index.pro'

import { SCALE_ORIGIN_MAP } from './definitions'

const getScaleTransform = ({ visible, axis, from, to }: Pick<ScaleProps, 'visible' | 'axis' | 'from' | 'to'>) => {
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
  finalRef,
  visible,
  axis,
  from,
  to,
  origin,
  transition,
}: Pick<ScaleProps, 'visible' | 'axis' | 'from' | 'to' | 'origin'> & { finalRef: ScaleProps['tagRef']; transition?: string }) => {
  const el = finalRef?.current

  if (!el) return

  el.style.transformOrigin = SCALE_ORIGIN_MAP[origin || 'center']
  el.style.transform = getScaleTransform({ visible, axis, from, to })
  el.style.transition = transition || ''
}
