import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'thead'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'thead'>['children']
}

export type TableHeadProps = PropsFromHtmlTag
