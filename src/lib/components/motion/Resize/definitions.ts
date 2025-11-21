import { HtmlTagProps, BoxProps } from 'lib/components'

export const RESIZE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]
export const DEFAULT_RESIZE_DURATION: ResizeProps['duration'] = 200
export const DEFAULT_RESIZE_EASING: ResizeProps['easing'] = 'linear'

export type ResizeProperty = (typeof RESIZE_PROPERTIES)[number]

type ResizeOwnProps = {
  property: ResizeProperty
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type ResizeProps = PropsFromHtmlTag & ResizeOwnProps
