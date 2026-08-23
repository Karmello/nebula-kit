import { BoxProps } from 'lib/index.core'

export type FadeProps = {
  // own
  visible: boolean
  duration?: number
  easing?: string
  // Box
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  tagRef?: BoxProps<'span'>['tagRef']
  children: BoxProps<'span'>['children']
}
