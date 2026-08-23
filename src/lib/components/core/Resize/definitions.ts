import { BoxProps } from '../Box'

export const RESIZE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]

export type ResizeProperty = (typeof RESIZE_PROPERTIES)[number]

type ResizeOwnProps = {
  property: ResizeProperty
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromBox = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children']
}

export type ResizeProps = PropsFromBox & ResizeOwnProps
