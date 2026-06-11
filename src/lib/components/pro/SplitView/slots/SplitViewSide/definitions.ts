import { BoxColor, BoxIntent } from 'lib/components/core/Box'
import { BoxProps } from 'lib/index.core'

export const DEFAULT_SPLIT_VIEW_SIDE_INLINE_SIZE: SplitViewSideProps['inlineSize'] = '225px'
export const DEFAULT_SPLIT_VIEW_SIDE_BLOCK_SIZE: SplitViewSideProps['blockSize'] = '100%'

export const DEFAULT_SPLIT_VIEW_SIDE_INTENT: SplitViewSideProps['intent'] = 'neutral'

export type SplitViewSideProps = Pick<
  BoxProps<'aside'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'inlineSize'
  | 'blockSize'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
> & {
  children: BoxProps<'aside'>['children']
  color?: BoxColor
  intent?: BoxIntent
}
