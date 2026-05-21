import { BoxProps, HtmlTagProps } from 'lib/components'
import { DEFAULT_SWITCH_AT } from 'lib/definitions'

export const DEFAULT_SPLIT_VIEW_SIDE_WIDTH = '225px'
export const DEFAULT_SPLIT_VIEW_SIDE_INTENT: SplitViewSideProps['intent'] = { base: 'tertiary', [DEFAULT_SWITCH_AT]: 'neutral' }

type PropsFromHtmlTag = Pick<HtmlTagProps<'aside'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'aside'>['children']
}

type PropsFromBox = Pick<
  BoxProps<'aside'>,
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
>

export type SplitViewSideProps = PropsFromHtmlTag & PropsFromBox
