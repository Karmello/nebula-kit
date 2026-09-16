import { BoxProps } from 'lib/components/core/Box'

export type TableRowProps = {
  elemAttrs?: BoxProps<'tr'>['elemAttrs']
  elemRef?: BoxProps<'tr'>['elemRef']
  color?: BoxProps<'tr'>['color']
  intent?: BoxProps<'tr'>['intent']
  textAlign?: BoxProps<'tr'>['textAlign']
  children: BoxProps<'tr'>['children']
}
