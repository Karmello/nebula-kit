import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'thead'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'thead'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'thead'>,
  'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'
>

export type TableHeaderProps = PropsFromHtmlTag & PropsFromBox
