import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps['children']
}

export type SplitViewMainBarProps = PropsFromHtmlTag
