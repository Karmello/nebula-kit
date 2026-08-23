import { BoxColor, BoxIntent } from 'lib/components/core/Box'
import { BoxProps } from 'lib/index.core'

export const DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE: SplitViewSideProps['inlineSize'] = '225px'
export const DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE: SplitViewSideProps['blockSize'] = '100%'

export const DEFAULT_SPLIT_VIEW_SIDE_INTENT: SplitViewSideProps['intent'] = 'neutral'

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
