import { BoxProps } from 'lib/index.core'

export const DEFAULT_TABLE_FOOTER_INTENT: TableFooterProps['intent'] = 'neutral'

type PropsFromBox = {
  tagAttrs?: BoxProps<'tfoot'>['tagAttrs']
  tagRef?: BoxProps<'tfoot'>['tagRef']
  color?: BoxProps<'tfoot'>['color']
  intent?: BoxProps<'tfoot'>['intent']
  paddingBlock?: BoxProps<'tfoot'>['paddingBlock']
  paddingInline?: BoxProps<'tfoot'>['paddingInline']
  textAlign?: BoxProps<'tfoot'>['textAlign']
  children: BoxProps<'tfoot'>['children']
}

export type TableFooterProps = PropsFromBox
