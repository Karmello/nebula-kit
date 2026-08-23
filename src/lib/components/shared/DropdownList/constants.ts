import { PortalPlacement } from 'lib/components/pro/Portal'
import { type DropdownListProps } from 'lib/components/shared'
import { CONTROL_SCALE_MAP, DEFAULT_TSHIRT_SIZE } from 'lib/constants'

export const DROPDOWN_LIST_PLACEMENTS = [
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'top-start',
  'top-center',
  'top-end',
] as const satisfies PortalPlacement[]

export const DROPDOWN_LIST_SCROLL_ALIGN = ['start', 'center', 'end'] as const

export const DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS: DropdownListProps['openOnFocus'] = false
export const DEFAULT_DROPDOWN_LIST_KEEP_OPEN: DropdownListProps['keepOpen'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX: DropdownListProps['scrollToIndex'] = 0
export const DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN: DropdownListProps['scrollAlign'] = 'start'
export const DEFAULT_DROPDOWN_LIST_PLACEMENT: DropdownListProps['placement'] = 'bottom-start'
export const DEFAULT_DROPDOWN_LIST_INTENT: DropdownListProps['intent'] = 'tertiary'

export const DEFAULT_DROPDOWN_ITEM_BLOCK_SIZE: DropdownListProps['itemBlockSize'] = Number(
  CONTROL_SCALE_MAP[DEFAULT_TSHIRT_SIZE].blockSize.replace('px', '')
)
