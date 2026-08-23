import { BoxProps } from 'lib/index.core'

type TableCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromBox = {
  tagAttrs?: BoxProps<'td'>['tagAttrs']
  tagRef?: BoxProps<'td'>['tagRef']
  minInlineSize?: BoxProps<'td'>['minInlineSize']
  maxInlineSize?: BoxProps<'td'>['maxInlineSize']
  blockSize?: BoxProps<'td'>['blockSize']
  textAlign?: BoxProps<'td'>['textAlign']
  color?: BoxProps<'td'>['color']
  intent?: BoxProps<'td'>['intent']
  children: BoxProps<'td'>['children']
}

export type TableCellProps = PropsFromBox & TableCellOwnProps
