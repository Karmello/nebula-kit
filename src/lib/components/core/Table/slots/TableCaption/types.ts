import { BoxProps } from 'lib/components/core/Box'

export type TableCaptionProps = {
  elemAttrs?: BoxProps<'td'>['elemAttrs']
  elemRef?: BoxProps<'td'>['elemRef']
  intent?: BoxProps<'td'>['intent']
  color?: BoxProps<'td'>['color']
  paddingBlock?: BoxProps<'td'>['paddingBlock']
  paddingInline?: BoxProps<'td'>['paddingInline']
  textAlign?: BoxProps<'td'>['textAlign']
  children: BoxProps<'td'>['children']
}
