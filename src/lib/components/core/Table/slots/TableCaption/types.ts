import { BoxProps } from 'lib/index.core'

export type TableCaptionProps = {
  tagAttrs?: BoxProps<'td'>['tagAttrs']
  tagRef?: BoxProps<'td'>['tagRef']
  intent?: BoxProps<'td'>['intent']
  color?: BoxProps<'td'>['color']
  paddingBlock?: BoxProps<'td'>['paddingBlock']
  paddingInline?: BoxProps<'td'>['paddingInline']
  textAlign?: BoxProps<'td'>['textAlign']
  children: BoxProps<'td'>['children']
}
