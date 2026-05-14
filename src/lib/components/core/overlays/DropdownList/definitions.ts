import { JSX } from 'react'

import { ButtonProps, HtmlTagProps } from 'lib/components'

import { PortalPlacement } from '../../utility/Portal'
import { TShirtSize } from 'lib/definitions'

export const DROPDOWN_LIST_PLACEMENTS = [
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'top-start',
  'top-center',
  'top-end',
] as const satisfies PortalPlacement[]

export const DROPDOWN_LIST_SIZES = ['xs', 'sm', 'md', 'lg'] as const satisfies TShirtSize[]
export const DROPDOWN_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const

export const DEFAULT_DROPDOWN_LIST_SIZE: DropdownListProps['size'] = 'md'
export const DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS: DropdownListProps['openOnFocus'] = false
export const DEFAULT_DROPDOWN_LIST_KEEP_OPEN: DropdownListProps['keepOpen'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX: DropdownListProps['scrollToIndex'] = 0
export const DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN: DropdownListProps['scrollAlign'] = 'start'
export const DEFAULT_DROPDOWN_LIST_INTENT: DropdownListProps['intent'] = 'tertiary'
export const DEFAULT_DROPDOWN_LIST_PLACEMENT: DropdownListProps['placement'] = 'bottom-start'

export type DropdownListSize = (typeof DROPDOWN_LIST_SIZES)[number]
export type DropdownListScrollAlign = (typeof DROPDOWN_LIST_SCROLL_ALIGN)[number]
export type DropdownListPlacement = (typeof DROPDOWN_LIST_PLACEMENTS)[number]

type ChildrenAsFuncArgs = {
  open: boolean
  setOpen: (open: boolean) => void
  resolvedPlacement?: DropdownListPlacement
}

type DropdownListOwnProps = {
  size?: DropdownListSize
  visibleItemsCount?: number
  openOnFocus?: boolean
  keepOpen?: boolean
  scrollToIndex?: number
  scrollAlign?: DropdownListScrollAlign
  placement?: DropdownListPlacement
  noOptionsLabel?: string
  disableListAnimation?: boolean
  onOpened?: () => void
  onClosed?: () => void
}

type PropsFromHtmlTag = Pick<HtmlTagProps<'div'>, 'tagRef' | 'tagAttrs'> & {
  children: HtmlTagProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

type PropsFromButton = Pick<ButtonProps, 'color' | 'intent'>

export type DropdownListProps = PropsFromHtmlTag & PropsFromButton & DropdownListOwnProps
