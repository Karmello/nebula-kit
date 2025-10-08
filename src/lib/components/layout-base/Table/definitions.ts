import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/base/Box/definitions'

export const TableLayout = ['auto', 'fixed'] as const
export const DEFAULT_TABLE_LAYOUT: TableLayout = 'auto'
export const DEFAULT_TABLE_INTENT: BoxIntent = 'tertiary'

export type TableLayout = (typeof TableLayout)[number]

type TableOwnProps = {
  layout?: TableLayout
  zebra?: boolean
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'table'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'table'>['children']
}

type PropsFromBox = Pick<BoxProps<'table'>, 'intent'>

export type TableProps = PropsFromHtmlTag & PropsFromBox & TableOwnProps
