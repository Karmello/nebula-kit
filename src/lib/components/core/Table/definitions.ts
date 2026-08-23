import { BoxProps } from '../Box'

export const TABLE_LAYOUTS = ['auto', 'fixed'] as const
export const DEFAULT_TABLE_LAYOUT: TableProps['layout'] = 'auto'

export const DEFAULT_TABLE_INTENT: TableProps['intent'] = 'tertiary'
export const DEFAULT_TABLE_PADDING_BLOCK: TableProps['paddingBlock'] = '10px'
export const DEFAULT_TABLE_PADDING_INLINE: TableProps['paddingInline'] = '15px'

export type TableLayout = (typeof TABLE_LAYOUTS)[number]

type TableOwnProps = {
  layout?: TableLayout
}

type PropsFromBox = {
  tagAttrs?: BoxProps<'table'>['tagAttrs']
  tagRef?: BoxProps<'table'>['tagRef']
  inlineSize?: BoxProps<'table'>['inlineSize']
  minInlineSize?: BoxProps<'table'>['minInlineSize']
  maxInlineSize?: BoxProps<'table'>['maxInlineSize']
  color?: BoxProps<'table'>['color']
  intent?: BoxProps<'table'>['intent']
  paddingBlock?: BoxProps<'table'>['paddingBlock']
  paddingInline?: BoxProps<'table'>['paddingInline']
  textAlign?: BoxProps<'table'>['textAlign']
  children: BoxProps<'table'>['children']
}

export type TableProps = PropsFromBox & TableOwnProps
