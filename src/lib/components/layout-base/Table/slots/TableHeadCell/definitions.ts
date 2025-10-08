import { BoxProps, HtmlTagProps } from 'lib/components'

type TableHeadCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'th'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'th'>['children']
}

type PropsFromBox = Pick<BoxProps<'th'>, 'intent'>

export type TableHeadCellProps = PropsFromHtmlTag & PropsFromBox & TableHeadCellOwnProps
