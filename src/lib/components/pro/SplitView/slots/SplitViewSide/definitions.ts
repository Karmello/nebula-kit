import { BoxProps } from 'lib/components'
import { DEFAULT_SWITCH_AT } from 'lib/definitions'

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
