import { BoxProps } from 'lib/components/core/Box'

export type TableHeaderRowProps = {
  tagAttrs?: BoxProps<'tr'>['tagAttrs']
  tagRef?: BoxProps<'tr'>['tagRef']
  color?: BoxProps<'tr'>['color']
  intent?: BoxProps<'tr'>['intent']
  textAlign?: BoxProps<'tr'>['textAlign']
  children: BoxProps<'tr'>['children']
}
