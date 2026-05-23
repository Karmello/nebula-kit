import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'dialog'>['children']
}

export type DialogHeaderProps = PropsFromHtmlTag
