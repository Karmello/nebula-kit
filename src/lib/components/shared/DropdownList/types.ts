import { BoxProps } from 'lib/index.core'

import { DROPDOWN_LIST_PLACEMENTS, DROPDOWN_LIST_SCROLL_ALIGN } from './constants'

export type DropdownListScrollAlign = (typeof DROPDOWN_LIST_SCROLL_ALIGN)[number]
export type DropdownListPlacement = (typeof DROPDOWN_LIST_PLACEMENTS)[number]

export type DropdownListState = { open: boolean; placement: DropdownListPlacement }

export type DropdownListProps = {
  // own
  state?: DropdownListState
  onStateChange?: (state: DropdownListState) => void
  itemBlockSize?: number
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
  // Box
  children: BoxProps['children']
  tagRef?: BoxProps['tagRef']
  tagAttrs?: BoxProps['tagAttrs']
  color?: BoxProps['color']
  intent?: BoxProps['intent']
}
