import { JSX } from 'react'

import { SwitchAt } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components'

import { SplitViewContextProps } from './SplitViewProvider'

export const SplitViewSidePosition = ['left', 'right'] as const
export type SplitViewSidePosition = (typeof SplitViewSidePosition)[number]

type ChildrenAsFuncArgs = {
  setSideOpen: (sideOpen: boolean) => Promise<boolean>
  mode: SplitViewContextProps['mode']
}

export type SplitViewOwnProps = {
  sidePosition?: SplitViewSidePosition
  switchAt?: SwitchAt
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

export type SplitViewProps = PropsFromHtmlTag & SplitViewOwnProps
