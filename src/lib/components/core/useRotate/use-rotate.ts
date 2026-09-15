import { useEffect } from 'react'

import { buildTransition } from 'lib/internals/motion'

import type { UseRotateArgs } from './types'

export const DEFAULT_USE_ROTATE_DURATION: UseRotateArgs['duration'] = 200
export const DEFAULT_USE_ROTATE_EASING: UseRotateArgs['easing'] = 'linear'

export const useRotate = ({
  ref,
  angle,
  duration = DEFAULT_USE_ROTATE_DURATION,
  easing = DEFAULT_USE_ROTATE_EASING,
}: UseRotateArgs): void => {
  useEffect(() => {
    const target = ref?.current as HTMLElement | null

    if (!target) return

    target.style.display = 'inline-block'
    target.style.transformOrigin = 'center'
    target.style.lineHeight = '0'
    target.style.transition = buildTransition({ property: 'transform', duration, easing })
    target.style.transform = `rotate(${angle}deg)`
  }, [ref, angle, duration, easing])
}
