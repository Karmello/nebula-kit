import { BoxProps } from 'lib/index.core'

type TableHeaderCellOwnProps = {
  colSpan?: number
  rowSpan?: number
}

type PropsFromBox = {
  tagAttrs?: BoxProps<'th'>['tagAttrs']
  tagRef?: BoxProps<'th'>['tagRef']
  minInlineSize?: BoxProps<'th'>['minInlineSize']
  maxInlineSize?: BoxProps<'th'>['maxInlineSize']
  blockSize?: BoxProps<'th'>['blockSize']
  textAlign?: BoxProps<'th'>['textAlign']
  color?: BoxProps<'th'>['color']
  intent?: BoxProps<'th'>['intent']
  children: BoxProps<'th'>['children']
}

export type TableHeaderCellProps = PropsFromBox & TableHeaderCellOwnProps
