import { BoxProps } from '../Box'
import { TABLE_LAYOUTS } from './constants'

export type TableLayout = (typeof TABLE_LAYOUTS)[number]

export type TableProps = {
  // own
  layout?: TableLayout
  // Box
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
