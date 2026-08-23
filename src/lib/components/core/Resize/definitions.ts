import { BoxProps } from '../Box'

export const RESIZE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]

export type ResizeProperty = (typeof RESIZE_PROPERTIES)[number]

export type ResizeProps = {
  // own
  property: ResizeProperty
  visible: boolean
  duration?: number
  easing?: string
  // Box
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children']
}
