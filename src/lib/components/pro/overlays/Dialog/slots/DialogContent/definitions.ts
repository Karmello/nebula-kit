import { HtmlTagProps } from 'lib/components/core/base'

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'dialog'>['children']
}

export type DialogContentProps = PropsFromHtmlTag
