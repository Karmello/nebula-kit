import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'aside'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'aside'>['children']
}

type PropsFromBox = Pick<BoxProps<'aside'>, 'intent' | 'inlineSize'>

export type SplitViewSideProps = PropsFromHtmlTag & PropsFromBox
