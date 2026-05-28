import { ActionSurfaceProps, BoxProps } from 'lib/components'
import { PortalPlacement } from 'lib/components/shared/Portal'

export const DROPDOWN_LIST_PLACEMENTS = [
  'bottom-start',
  'bottom-center',
  'bottom-end',
  'top-start',
  'top-center',
  'top-end',
] as const satisfies PortalPlacement[]

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
