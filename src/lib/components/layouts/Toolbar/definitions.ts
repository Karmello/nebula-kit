import { HtmlTagProps } from 'lib/components'
import { SwitchAt } from 'lib/definitions'

export type ToolbarOwnProps = {
  switchAt?: SwitchAt
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children']
}

export type ToolbarProps = PropsFromHtmlTag & ToolbarOwnProps
