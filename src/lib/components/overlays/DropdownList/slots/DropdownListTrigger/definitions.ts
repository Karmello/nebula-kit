import { HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = {
  children: HtmlTagProps<'div'>['children']
}

export type DropdownListTriggerProps = PropsFromHtmlTag
