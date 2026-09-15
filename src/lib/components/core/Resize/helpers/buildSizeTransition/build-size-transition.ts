export type BuildSizeTransitionProps = {
  duration: number
  easing: string
}

export const buildSizeTransition = ({ duration, easing }: BuildSizeTransitionProps) => {
  return {
    transitionProperty: 'block-size, inline-size',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: easing,
  }
}
