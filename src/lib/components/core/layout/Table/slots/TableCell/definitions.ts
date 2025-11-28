import { BoxProps, HtmlTagProps } from 'lib/components'

type TableCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'td'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'td'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'td'>,
  | 'minInlineSize'
  | 'maxInlineSize'
  | 'blockSize'
  | 'textAlign'
  | 'color'
  | 'intent'
  | 'paddingBlock'
  | 'paddingInline'
>

export type TableCellProps = PropsFromHtmlTag & PropsFromBox & TableCellOwnProps
