import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'td'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'td'>['children']
}

export type TableCaptionProps = PropsFromHtmlTag
