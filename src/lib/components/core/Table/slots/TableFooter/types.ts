import { BoxProps } from 'lib/components/core/Box'

export type TableFooterProps = {
  elemAttrs?: BoxProps<'tfoot'>['elemAttrs']
  elemRef?: BoxProps<'tfoot'>['elemRef']
  color?: BoxProps<'tfoot'>['color']
  intent?: BoxProps<'tfoot'>['intent']
  paddingBlock?: BoxProps<'tfoot'>['paddingBlock']
  paddingInline?: BoxProps<'tfoot'>['paddingInline']
  textAlign?: BoxProps<'tfoot'>['textAlign']
  children: BoxProps<'tfoot'>['children']
}
