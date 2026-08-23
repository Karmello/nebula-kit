import { BoxProps } from '../Box'

export const SLIDE_FROM = ['top', 'right', 'bottom', 'left'] as const

export type SlideFrom = (typeof SLIDE_FROM)[number]

export type SlideProps = {
  // own
  from: SlideFrom
  visible: boolean
  duration?: number
  easing?: string
  // Box
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children']
}
