import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'tr'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'tr'>['children']
}

export type TableHeadRowProps = PropsFromHtmlTag
