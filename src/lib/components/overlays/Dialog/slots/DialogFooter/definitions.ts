import { HtmlTagProps } from 'lib/components/base'

type PropsFromHtmlTag = Pick<HtmlTagProps, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'dialog'>['children']
}

export type DialogFooterProps = PropsFromHtmlTag
