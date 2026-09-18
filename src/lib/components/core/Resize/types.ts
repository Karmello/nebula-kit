import { BoxProps } from '../Box'
import { RESIZE_PROPERTIES } from './constants'

export type ResizeProperty = (typeof RESIZE_PROPERTIES)[number]

export type ResizeProps = {
  // own
  property: ResizeProperty
  visible: boolean
  duration?: number
  easing?: string
  // Box
  elemAttrs?: BoxProps<'div'>['elemAttrs']
  elemRef?: BoxProps<'div'>['elemRef']
  children: BoxProps<'div'>['children']
}
