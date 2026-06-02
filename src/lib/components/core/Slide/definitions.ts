import { BoxProps } from '../Box'

export const SLIDE_FROM = ['top', 'right', 'bottom', 'left'] as const

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
