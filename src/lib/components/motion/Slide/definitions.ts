import { HtmlTagProps } from 'lib/components'

export const SLIDE_DIRECTIONS = ['top', 'right', 'bottom', 'left'] as const

export const DEFAULT_SLIDE_DURATION: SlideProps['duration'] = 200
export const DEFAULT_SLIDE_EASING: SlideProps['easing'] = 'ease'

export type SlideDirection = (typeof SLIDE_DIRECTIONS)[number]

type SlideOwnProps = {
  direction: SlideDirection
  visible: boolean
  offset: string
  duration?: number
  easing?: string
  onExitComplete?: () => void
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type SlideProps = PropsFromHtmlTag & SlideOwnProps
