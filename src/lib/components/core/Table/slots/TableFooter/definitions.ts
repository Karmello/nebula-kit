import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_TABLE_FOOTER_INTENT: TableFooterProps['intent'] = 'neutral'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tfoot'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tfoot'>['children']
}

type PropsFromBox = Pick<BoxProps<'tfoot'>, 'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'>

export type TableFooterProps = PropsFromHtmlTag & PropsFromBox
