import { BoxProps, HtmlTagProps } from 'lib/components'
import { BoxIntent } from 'lib/components/core/base/Box/definitions'

export const TABLE_LAYOUTS = ['auto', 'fixed'] as const
export const DEFAULT_TABLE_LAYOUT: TableLayout = 'auto'
export const DEFAULT_TABLE_INTENT: BoxIntent = 'tertiary'

export type TableLayout = (typeof TABLE_LAYOUTS)[number]

type TableOwnProps = {
  layout?: TableLayout
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'table'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'table'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'table'>,
  'inlineSize' | 'minInlineSize' | 'maxInlineSize' | 'color' | 'intent' | 'paddingBlock' | 'paddingInline'
>

export type TableProps = PropsFromHtmlTag & PropsFromBox & TableOwnProps
