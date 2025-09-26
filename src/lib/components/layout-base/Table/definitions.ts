import { BoxProps, HtmlTagProps } from 'lib/components'

export const TableLayout = ['auto', 'fixed'] as const
export const DEFAULT_TABLE_LAYOUT: TableLayout = 'auto'

export type TableLayout = (typeof TableLayout)[number]

type TableOwnProps = {
  layout?: TableLayout
  zebra?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'table'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'table'>['children']
}

type PropsFromBox = Pick<BoxProps<'table'>, 'variant' | 'intent'>

export type TableProps = PropsFromHtmlTag & PropsFromBox & TableOwnProps
