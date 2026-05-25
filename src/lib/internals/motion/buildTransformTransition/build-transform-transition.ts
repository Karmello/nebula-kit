export type BuildTransformTransitionProps = {
  duration: number
  easing: string
}

export const buildTransformTransition = ({ duration, easing }: BuildTransformTransitionProps) => {
  return `transform ${duration}ms ${easing}`
}
