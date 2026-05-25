import { BoxProps } from 'lib/components'

export const RESIZE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]

export type ResizeProperty = (typeof RESIZE_PROPERTIES)[number]

type ResizeOwnProps = {
  property: ResizeProperty
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromBox = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'div'>['children']
}

export type ResizeProps = PropsFromBox & ResizeOwnProps
