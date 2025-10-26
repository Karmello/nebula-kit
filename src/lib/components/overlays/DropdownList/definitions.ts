import { JSX } from 'react'

import { BoxProps, ButtonProps, HtmlTagProps } from 'lib/components'

export const DEFAULT_DROPDOWN_LIST_CLOSE_ON_ITEM_CLICK: DropdownListProps['closeOnItemClick'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT: DropdownListProps['itemBorderIntent'] = 'muted'

type ChildrenAsFuncArgs = {
  open: boolean
  animateVisible: boolean
}

type DropdownListOwnProps = {
  closeOnItemClick?: boolean
  visibleItemsCount?: number
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
