import { BoxProps } from 'lib/components/core/Box'

export type TableCellProps = {
  // own
  colSpan?: number
  rowSpan?: number
  // Box
  elemAttrs?: BoxProps<'td'>['elemAttrs']
  elemRef?: BoxProps<'td'>['elemRef']
  minInlineSize?: BoxProps<'td'>['minInlineSize']
  maxInlineSize?: BoxProps<'td'>['maxInlineSize']
  blockSize?: BoxProps<'td'>['blockSize']
  textAlign?: BoxProps<'td'>['textAlign']
  color?: BoxProps<'td'>['color']
  intent?: BoxProps<'td'>['intent']
  children: BoxProps<'td'>['children']
}
