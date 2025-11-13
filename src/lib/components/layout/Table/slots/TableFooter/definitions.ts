import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tfoot'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tfoot'>['children']
}

type PropsFromBox = Pick<BoxProps<'tfoot'>, 'color' | 'intent'>

export type TableFooterProps = PropsFromHtmlTag & PropsFromBox
