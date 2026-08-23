import { BoxProps } from 'lib/index.core'

type PropsFromBox = {
  tagAttrs?: BoxProps<'tr'>['tagAttrs']
  tagRef?: BoxProps<'tr'>['tagRef']
  color?: BoxProps<'tr'>['color']
  intent?: BoxProps<'tr'>['intent']
  textAlign?: BoxProps<'tr'>['textAlign']
  children: BoxProps<'tr'>['children']
}

export type TableRowProps = PropsFromBox
