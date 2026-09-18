import { BoxProps } from 'lib/components/core/Box'

export type SplitViewMainProps = {
  elemAttrs?: BoxProps<'section'>['elemAttrs']
  elemRef?: BoxProps<'section'>['elemRef']
  padding?: BoxProps<'section'>['padding']
  paddingInline?: BoxProps<'section'>['paddingInline']
  paddingBlock?: BoxProps<'section'>['paddingBlock']
  paddingTop?: BoxProps<'section'>['paddingTop']
  paddingRight?: BoxProps<'section'>['paddingRight']
  paddingBottom?: BoxProps<'section'>['paddingBottom']
  paddingLeft?: BoxProps<'section'>['paddingLeft']
  children: BoxProps<'section'>['children']
}
