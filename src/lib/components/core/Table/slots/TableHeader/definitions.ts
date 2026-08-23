import { BoxProps } from 'lib/index.core'

type PropsFromBox = {
  tagAttrs?: BoxProps<'thead'>['tagAttrs']
  tagRef?: BoxProps<'thead'>['tagRef']
  color?: BoxProps<'thead'>['color']
  intent?: BoxProps<'thead'>['intent']
  paddingBlock?: BoxProps<'thead'>['paddingBlock']
  paddingInline?: BoxProps<'thead'>['paddingInline']
  textAlign?: BoxProps<'thead'>['textAlign']
  children: BoxProps<'thead'>['children']
}

export type TableHeaderProps = PropsFromBox
