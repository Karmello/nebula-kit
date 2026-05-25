import { CSSProperties } from 'react'

export type UseTransformTransitionProps = {
  duration: number
  easing: string
}

export const useTransformTransition = ({ duration, easing }: UseTransformTransitionProps): CSSProperties => {
  return {
    transition: `transform ${duration}ms ${easing}`,
  }
}
