import { BoxProps, HtmlTagProps } from 'lib/components'

type TableCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'td'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'td'>['children']
}

type PropsFromBox = Pick<BoxProps<'td'>, 'intent'>

export type TableCellProps = PropsFromHtmlTag & PropsFromBox & TableCellOwnProps
