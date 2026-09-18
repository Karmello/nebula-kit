import { BoxProps } from 'lib/components/core/Box'

export type TableHeaderCellProps = {
  // own
  colSpan?: number
  rowSpan?: number
  // Box
  elemAttrs?: BoxProps<'th'>['elemAttrs']
  elemRef?: BoxProps<'th'>['elemRef']
  minInlineSize?: BoxProps<'th'>['minInlineSize']
  maxInlineSize?: BoxProps<'th'>['maxInlineSize']
  blockSize?: BoxProps<'th'>['blockSize']
  textAlign?: BoxProps<'th'>['textAlign']
  color?: BoxProps<'th'>['color']
  intent?: BoxProps<'th'>['intent']
  children: BoxProps<'th'>['children']
}
