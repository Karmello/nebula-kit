import { BoxProps } from 'lib/components/core/Box'

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
