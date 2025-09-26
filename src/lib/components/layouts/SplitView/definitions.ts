import { SwitchAt } from 'lib/definitions'
import { HtmlTagProps } from 'lib/components'

export const SplitViewSidePosition = ['left', 'right'] as const
export type SplitViewSidePosition = (typeof SplitViewSidePosition)[number]

export const DEFAULT_SPLIT_VIEW_SIDE_WIDTH = '225px'

export type SplitViewOwnProps = {
  sidePosition?: SplitViewSidePosition
  switchAt?: SwitchAt
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: HtmlTagProps<'div'>['children']
}

export type SplitViewProps = PropsFromHtmlTag & SplitViewOwnProps
