export type BuildTransitionProps = {
  property: string
  duration: number
  easing: string
}

export const buildTransition = ({ property, duration, easing }: BuildTransitionProps) => {
  return `${property} ${duration}ms ${easing}`
}
