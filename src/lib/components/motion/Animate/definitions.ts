import { HtmlTagProps, BoxProps } from 'lib/components'

export const DEFAULT_ANIMATE_DURATION = 200
export const ANIMATE_PROPERTIES = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]

export type AnimateProperty = (typeof ANIMATE_PROPERTIES)[number]

type AnimateOwnProps = {
  property: AnimateProperty
  visible: boolean
  duration?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type AnimateProps = PropsFromHtmlTag & AnimateOwnProps
