import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_TABLE_CAPTION_INTENT: TableCaptionProps['intent'] = 'neutral'

type PropsFromHtmlTag = Pick<HtmlTagProps<'td'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'td'>['children']
}

type PropsFromBox = Pick<BoxProps<'td'>, 'intent' | 'color' | 'paddingBlock' | 'paddingInline' | 'textAlign'>

export type TableCaptionProps = PropsFromHtmlTag & PropsFromBox
