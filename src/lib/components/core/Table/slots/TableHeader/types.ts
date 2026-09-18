import { BoxProps } from 'lib/components/core/Box'

export type TableHeaderProps = {
  elemAttrs?: BoxProps<'thead'>['elemAttrs']
  elemRef?: BoxProps<'thead'>['elemRef']
  color?: BoxProps<'thead'>['color']
  intent?: BoxProps<'thead'>['intent']
  paddingBlock?: BoxProps<'thead'>['paddingBlock']
  paddingInline?: BoxProps<'thead'>['paddingInline']
  textAlign?: BoxProps<'thead'>['textAlign']
  children: BoxProps<'thead'>['children']
}
