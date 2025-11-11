import { JSX } from 'react'

import { BoxProps, ButtonProps, HtmlTagProps, PortalPlacement } from 'lib/components'

export const DROPDOWN_LIST_PLACEMENTS = [
  'bottom-start',
  'bottom-end',
  'top-start',
  'top-end',
] as const satisfies PortalPlacement[]

export const DROPDOWN_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const

export const DEFAULT_DROPDOWN_LIST_KEEP_OPEN: DropdownListProps['keepOpen'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX: DropdownListProps['scrollToIndex'] = 0
export const DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN: DropdownListProps['scrollAlign'] = 'start'
export const DEFAULT_DROPDOWN_LIST_INTENT: DropdownListProps['intent'] = 'tertiary'
export const DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT: DropdownListProps['itemBorderIntent'] = 'muted'
export const DEFAULT_DROPDOWN_LIST_PLACEMENT: DropdownListProps['placement'] = 'bottom-start'

export type DropdownListScrollAlign = (typeof DROPDOWN_LIST_SCROLL_ALIGN)[number]
export type DropdownListPlacement = (typeof DROPDOWN_LIST_PLACEMENTS)[number]

type ChildrenAsFuncArgs = {
  open: boolean
  animateVisible: boolean
}

type DropdownListOwnProps = {
  visibleItemsCount?: number
  keepOpen?: boolean
  scrollToIndex?: number
  scrollAlign?: DropdownListScrollAlign
  itemBorderIntent?: BoxProps['borderIntent']
  placement?: DropdownListPlacement
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

type PropsFromButton = Pick<ButtonProps, 'variant' | 'intent' | 'size'>

export type DropdownListProps = PropsFromHtmlTag & PropsFromButton & DropdownListOwnProps
