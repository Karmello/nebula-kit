import { HtmlTagProps, BoxProps } from 'lib/components'

export const DEFAULT_ANIMATE_DURATION = 125
export const AnimateProperty = ['blockSize', 'inlineSize'] as const satisfies (keyof BoxProps)[]

export type AnimateProperty = (typeof AnimateProperty)[number]

type AnimateOwnProps = {
  property: AnimateProperty
  visible: boolean
  duration?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type AnimateProps = PropsFromHtmlTag & AnimateOwnProps
