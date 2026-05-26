import { JSX } from 'react'

import { BoxProps, ButtonProps } from 'lib/components'
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

export type ChildrenAsFuncArgs = {
  open: boolean
  setOpen: (open: boolean) => void
  resolvedPlacement?: DropdownListPlacement
}

type DropdownListOwnProps = {
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

type PropsFromBox = Pick<BoxProps<'div'>, 'tagRef' | 'tagAttrs'> & {
  children: BoxProps<'div'>['children'] | ((args: ChildrenAsFuncArgs) => JSX.Element)
}

type PropsFromButton = Pick<ButtonProps, 'color' | 'intent'>

export type DropdownListProps = PropsFromBox & PropsFromButton & DropdownListOwnProps
