import { BoxProps } from 'lib/index.core'

export type TableBodyProps = {
  tagAttrs?: BoxProps<'tbody'>['tagAttrs']
  tagRef?: BoxProps<'tbody'>['tagRef']
  color?: BoxProps<'tbody'>['color']
  intent?: BoxProps<'tbody'>['intent']
  paddingBlock?: BoxProps<'tbody'>['paddingBlock']
  paddingInline?: BoxProps<'tbody'>['paddingInline']
  textAlign?: BoxProps<'tbody'>['textAlign']
  children: BoxProps<'tbody'>['children']
}
