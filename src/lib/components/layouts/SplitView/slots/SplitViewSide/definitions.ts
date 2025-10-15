import { BoxProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_SPLIT_VIEW_SIDE_WIDTH = '225px'

type PropsFromHtmlTag = Pick<HtmlTagProps<'aside'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'aside'>['children']
}

type PropsFromBox = Pick<BoxProps<'aside'>, 'intent' | 'inlineSize'>

export type SplitViewSideProps = PropsFromHtmlTag & PropsFromBox
