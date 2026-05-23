import { BoxProps } from 'lib/components'

export const SLIDE_FROM = ['top', 'right', 'bottom', 'left'] as const

export const DEFAULT_SLIDE_DURATION: SlideProps['duration'] = 200
export const DEFAULT_SLIDE_EASING: SlideProps['easing'] = 'linear'

export type SlideFrom = (typeof SLIDE_FROM)[number]

type SlideOwnProps = {
  from: SlideFrom
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromBox = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'div'>['children']
}

export type SlideProps = PropsFromBox & SlideOwnProps
