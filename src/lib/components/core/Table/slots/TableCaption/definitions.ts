import { BoxProps } from 'lib/index.core'

export const DEFAULT_TABLE_CAPTION_INTENT: TableCaptionProps['intent'] = 'neutral'

type PropsFromBox = {
  tagAttrs?: BoxProps<'td'>['tagAttrs']
  tagRef?: BoxProps<'td'>['tagRef']
  intent?: BoxProps<'td'>['intent']
  color?: BoxProps<'td'>['color']
  paddingBlock?: BoxProps<'td'>['paddingBlock']
  paddingInline?: BoxProps<'td'>['paddingInline']
  textAlign?: BoxProps<'td'>['textAlign']
  children: BoxProps<'td'>['children']
}

export type TableCaptionProps = PropsFromBox
