import { HtmlTagProps, BoxProps } from 'lib/components'

export const DEFAULT_RESIZE_DURATION = 200
export const RESIZE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]

export type ResizeProperty = (typeof RESIZE_PROPERTIES)[number]

type ResizeOwnProps = {
  property: ResizeProperty
  visible: boolean
  duration?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type ResizeProps = PropsFromHtmlTag & ResizeOwnProps
