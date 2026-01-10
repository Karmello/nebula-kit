import { useRef, useState } from 'react'

import { WithSlots } from 'lib/components/core/internal'
import { DEFAULT_BUTTON_SIZE } from 'lib/components/core/controls/Button/definitions'

import {
  DropdownListProps,
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DEFAULT_DROPDOWN_LIST_INTENT,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
} from './definitions'

import { DropdownListProvider, DropdownListMain } from './components'

export const DropdownList = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
  // Button
  color,
  intent = DEFAULT_DROPDOWN_LIST_INTENT,
  size = DEFAULT_BUTTON_SIZE,
  // Portal
  placement = DEFAULT_DROPDOWN_LIST_PLACEMENT,
  // own
  visibleItemsCount = DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  keepOpen = DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  scrollToIndex = DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  scrollAlign = DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  itemBorderIntent = DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
}: DropdownListProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [resizeVisible, setResizeVisible] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const [blockMouse, setBlockMouse] = useState<boolean>(false)
  const [resolvedVisibleItemsCount, setResolvedVisibleItemsCount] =
    useState<DropdownListProps['visibleItemsCount']>(visibleItemsCount)
  const [resolvedPlacement, setResolvedPlacement] = useState<DropdownListProps['placement']>(placement)

  const triggerRef = useRef<HTMLElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const finalChildren = typeof children === 'function' ? children({ open, resolvedPlacement }) : children

  return (
    <WithSlots
      childrenToVerify={finalChildren}
      componentName="DropdownList"
      slotsConfig={[
        { name: 'DropdownList.Trigger', required: true },
        { name: 'DropdownList.Item', allowMultiple: true, required: true },
      ]}
    >
      {({ slotsByName }) => {
        const itemsCount = slotsByName['DropdownList.Item'].length

        return (
          <DropdownListProvider
            // refs
            triggerRef={triggerRef}
            portalRef={portalRef}
            scrollWrapperRef={scrollWrapperRef}
            // slots
            slotsByName={slotsByName}
            // state
            open={open}
            setOpen={setOpen}
            resizeVisible={resizeVisible}
            setResizeVisible={setResizeVisible}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            blockMouse={blockMouse}
            setBlockMouse={setBlockMouse}
            defaultResolvedVisibleItemsCount={
              itemsCount < (visibleItemsCount ?? 0) ? itemsCount : (visibleItemsCount ?? 0)
            }
            resolvedVisibleItemsCount={resolvedVisibleItemsCount}
            setResolvedVisibleItemsCount={setResolvedVisibleItemsCount}
            resolvedPlacement={resolvedPlacement}
            setResolvedPlacement={setResolvedPlacement}
            // props
            color={color}
            intent={intent}
            size={size}
            placement={placement}
            visibleItemsCount={visibleItemsCount}
            keepOpen={keepOpen}
            scrollToIndex={scrollToIndex}
            scrollAlign={scrollAlign}
            itemBorderIntent={itemBorderIntent}
          >
            <DropdownListMain tagRef={tagRef} tagAttrs={tagAttrs} />
          </DropdownListProvider>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
