import { BoxColor, BoxIntent, BoxProps } from 'lib/components/core/Box'

export type SplitViewSideProps = {
  elemAttrs?: BoxProps<'aside'>['elemAttrs']
  elemRef?: BoxProps<'aside'>['elemRef']
  inlineSize?: BoxProps<'aside'>['inlineSize']
  blockSize?: BoxProps<'aside'>['blockSize']
  padding?: BoxProps<'aside'>['padding']
  paddingInline?: BoxProps<'aside'>['paddingInline']
  paddingBlock?: BoxProps<'aside'>['paddingBlock']
  paddingTop?: BoxProps<'aside'>['paddingTop']
  paddingRight?: BoxProps<'aside'>['paddingRight']
  paddingBottom?: BoxProps<'aside'>['paddingBottom']
  paddingLeft?: BoxProps<'aside'>['paddingLeft']
  children: BoxProps<'aside'>['children']
  color?: BoxColor
  intent?: BoxIntent
}
