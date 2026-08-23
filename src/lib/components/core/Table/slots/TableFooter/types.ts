import { BoxProps } from 'lib/index.core'

export type TableFooterProps = {
  tagAttrs?: BoxProps<'tfoot'>['tagAttrs']
  tagRef?: BoxProps<'tfoot'>['tagRef']
  color?: BoxProps<'tfoot'>['color']
  intent?: BoxProps<'tfoot'>['intent']
  paddingBlock?: BoxProps<'tfoot'>['paddingBlock']
  paddingInline?: BoxProps<'tfoot'>['paddingInline']
  textAlign?: BoxProps<'tfoot'>['textAlign']
  children: BoxProps<'tfoot'>['children']
}
