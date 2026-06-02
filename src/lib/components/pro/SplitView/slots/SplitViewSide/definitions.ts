import { DEFAULT_SWITCH_AT } from 'lib/constants'
import { BoxProps } from 'lib/index.core'

export const DEFAULT_SPLIT_VIEW_SIDE_WIDTH = '225px'
export const DEFAULT_SPLIT_VIEW_SIDE_INTENT: SplitViewSideProps['intent'] = { base: 'tertiary', [DEFAULT_SWITCH_AT]: 'neutral' }

type PropsFromBox = Pick<
  BoxProps<'aside'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'theme'
  | 'brand'
  | 'color'
  | 'intent'
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
}

export type SplitViewSideProps = PropsFromBox
