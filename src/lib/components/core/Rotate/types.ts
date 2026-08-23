import { BoxProps } from '../Box'

export type RotateProps = {
  // own
  angle: number
  duration?: number
  easing?: string
  // Box
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  tagRef?: BoxProps<'span'>['tagRef']
  children: BoxProps<'span'>['children']
}
