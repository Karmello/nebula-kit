import { HtmlTagProps } from 'lib/components/base'

type RotateOwnProps = {
  angle: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'span'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'span'>['children']
}

export type RotateProps = PropsFromHtmlTag & RotateOwnProps
