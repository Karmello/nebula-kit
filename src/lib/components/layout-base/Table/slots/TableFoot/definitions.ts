import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tfoot'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tfoot'>['children']
}

export type TableFootProps = PropsFromHtmlTag
