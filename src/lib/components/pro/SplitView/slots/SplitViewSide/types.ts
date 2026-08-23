import { BoxColor, BoxIntent } from 'lib/components/core/Box'
import { BoxProps } from 'lib/index.core'

export type SplitViewSideProps = {
  tagAttrs?: BoxProps<'aside'>['tagAttrs']
  tagRef?: BoxProps<'aside'>['tagRef']
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
