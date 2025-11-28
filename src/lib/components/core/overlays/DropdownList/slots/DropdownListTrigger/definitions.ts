import { BoxProps, HtmlTagProps } from 'lib/components'

type PropsFromHtmlTag = {
  children: HtmlTagProps<'div'>['children']
}

type PropsFromBox = Pick<BoxProps, 'inlineSize'>

export type DropdownListTriggerProps = PropsFromHtmlTag & PropsFromBox
