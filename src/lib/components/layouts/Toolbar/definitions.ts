import { JSX } from 'react'

import { HtmlTagProps } from 'lib/components'
import { SwitchAt } from 'lib/definitions'

type ChildrenAsFuncArgs = {
  setMainOpen: (mainOpen: boolean) => Promise<boolean>
  mainOpen: boolean
}

export type ToolbarOwnProps = {
  switchAt?: SwitchAt
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'nav'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'nav'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export type ToolbarProps = PropsFromHtmlTag & ToolbarOwnProps
