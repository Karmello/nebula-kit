import { BoxProps } from 'lib/components/core/Box'

export type TableBodyProps = {
  elemAttrs?: BoxProps<'tbody'>['elemAttrs']
  elemRef?: BoxProps<'tbody'>['elemRef']
  color?: BoxProps<'tbody'>['color']
  intent?: BoxProps<'tbody'>['intent']
  paddingBlock?: BoxProps<'tbody'>['paddingBlock']
  paddingInline?: BoxProps<'tbody'>['paddingInline']
  textAlign?: BoxProps<'tbody'>['textAlign']
  children: BoxProps<'tbody'>['children']
}
