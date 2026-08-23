import { BoxProps } from 'lib/index.core'

export const DEFAULT_TABLE_BODY_INTENT: TableBodyProps['intent'] = 'neutral'

type PropsFromBox = {
  tagAttrs?: BoxProps<'tbody'>['tagAttrs']
  tagRef?: BoxProps<'tbody'>['tagRef']
  color?: BoxProps<'tbody'>['color']
  intent?: BoxProps<'tbody'>['intent']
  paddingBlock?: BoxProps<'tbody'>['paddingBlock']
  paddingInline?: BoxProps<'tbody'>['paddingInline']
  textAlign?: BoxProps<'tbody'>['textAlign']
  children: BoxProps<'tbody'>['children']
}

export type TableBodyProps = PropsFromBox
