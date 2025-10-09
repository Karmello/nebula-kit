import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tr'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tr'>['children']
}

type PropsFromBox = Pick<BoxProps<'tr'>, 'intent'>

export type TableRowProps = PropsFromHtmlTag & PropsFromBox
