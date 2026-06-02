import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE } from 'lib/constants'
import { ActionSurfaceProps, BoxProps } from 'lib/index.core'

import { PortalPlacement } from '../Portal'

export const DROPDOWN_LIST_PLACEMENTS = [
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'top-start',
  'top-center',
  'top-end',
] as const satisfies PortalPlacement[]

export const DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS: DropdownListProps['openOnFocus'] = false
export const DEFAULT_DROPDOWN_LIST_KEEP_OPEN: DropdownListProps['keepOpen'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX: DropdownListProps['scrollToIndex'] = 0
export const DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN: DropdownListProps['scrollAlign'] = 'start'
export const DEFAULT_DROPDOWN_LIST_PLACEMENT: DropdownListProps['placement'] = 'bottom-start'
export const DEFAULT_DROPDOWN_LIST_INTENT: DropdownListProps['intent'] = 'tertiary'

export const DEFAULT_DROPDOWN_ITEM_BLOCK_SIZE: DropdownListProps['itemBlockSize'] = Number(
  CONTROL_SIZE_MAP[DEFAULT_CONTROL_SIZE].blockSize.replace('px', '')
)

export const DROPDOWN_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const

export type DropdownListScrollAlign = (typeof DROPDOWN_LIST_SCROLL_ALIGN)[number]
export type DropdownListPlacement = (typeof DROPDOWN_LIST_PLACEMENTS)[number]

export type DropdownListState = { open: boolean; placement: DropdownListPlacement }

export type DropdownListProps = {
  // Box
  children: BoxProps['children']
  tagRef?: BoxProps['tagRef']
  tagAttrs?: BoxProps['tagAttrs']
  // ActionSurface
  color?: ActionSurfaceProps['color']
  intent?: ActionSurfaceProps['intent']
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
}
