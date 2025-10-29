import { JSX } from 'react'

import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'

export const DROPDOWN_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const

export const DEFAULT_DROPDOWN_LIST_KEEP_OPEN: DropdownListProps['keepOpen'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX: DropdownListProps['scrollToIndex'] = 0
export const DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN: DropdownListProps['scrollAlign'] = 'start'
export const DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT: DropdownListProps['itemBorderIntent'] = 'muted'

export type DropdownListScrollAlign = (typeof DROPDOWN_LIST_SCROLL_ALIGN)[number]

type ChildrenAsFuncArgs = {
  open: boolean
  animateVisible: boolean
}

type DropdownListOwnProps = {
  visibleItemsCount?: number
  keepOpen?: boolean
  scrollToIndex?: number
  scrollAlign?: DropdownListScrollAlign
  itemVariant?: ButtonProps['variant']
  itemIntent?: ButtonProps['intent']
  listBorderIntent?: BoxProps['borderIntent']
  itemBorderIntent?: BoxProps['borderIntent']
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

type PropsFromBox = Pick<BoxProps, 'inlineSize'>

type PropsFromButton = Pick<ButtonProps, 'size'>

export type DropdownListProps = PropsFromHtmlTag & PropsFromBox & PropsFromButton & DropdownListOwnProps
