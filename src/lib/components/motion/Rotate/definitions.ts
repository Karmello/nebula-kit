import { HtmlTagProps } from 'lib/components/base'

export const DEFAULT_ROTATE_DURATION: RotateProps['duration'] = 200
export const DEFAULT_ROTATE_EASING: RotateProps['easing'] = 'linear'

type RotateOwnProps = {
  angle: number
  duration?: number
  easing?: string
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'span'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'span'>['children']
}

export type RotateProps = PropsFromHtmlTag & RotateOwnProps
