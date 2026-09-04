import { BoxProps } from '../Box'
import { SLIDE_FROM } from './constants'

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
