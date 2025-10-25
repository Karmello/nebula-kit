import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'div'>['children']
}

export type DropdownListItemProps = PropsFromHtmlTag
