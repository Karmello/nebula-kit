import { HtmlTagProps } from 'lib/components'

export const SLIDE_FROM = ['top', 'right', 'bottom', 'left'] as const

export const DEFAULT_SLIDE_DURATION: SlideProps['duration'] = 200
export const DEFAULT_SLIDE_EASING: SlideProps['easing'] = 'linear'

export type SlideFrom = (typeof SLIDE_FROM)[number]

type SlideOwnProps = {
  from: SlideFrom
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type SlideProps = PropsFromHtmlTag & SlideOwnProps
