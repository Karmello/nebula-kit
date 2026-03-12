import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_TABLE_BODY_INTENT: TableBodyProps['intent'] = 'neutral'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tbody'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tbody'>['children']
}

type PropsFromBox = Pick<BoxProps<'tbody'>, 'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'>

export type TableBodyProps = PropsFromHtmlTag & PropsFromBox
