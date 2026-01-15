import { useRef, useState } from 'react'

import { WithSlots } from 'lib/components/core/internal'
import { BUTTON_SIZE_CONFIG, DEFAULT_BUTTON_SIZE } from 'lib/components/core/controls/Button/definitions'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/motion/Resize'

import {
  DropdownListProps,
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DEFAULT_DROPDOWN_LIST_INTENT,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_OPEN_ON_FOCUS,
  DEFAULT_DROPDOWN_LIST_NO_OPTIONS_LABEL,
} from './definitions'

import { DropdownListProvider, DropdownListMain } from './components'
import { BOX_BORDER_WIDTH } from '../../base/Box'

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
  openOnFocus = DEFAULT_DROPDOWN_OPEN_ON_FOCUS,
  keepOpen = DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  scrollToIndex = DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  scrollAlign = DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  itemBorderIntent = DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
  noOptionsLabel = DEFAULT_DROPDOWN_LIST_NO_OPTIONS_LABEL,
  animationDuration = DEFAULT_RESIZE_DURATION,
  onOpened,
  onClosed,
}: DropdownListProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [resizeVisible, setResizeVisible] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const [ensureVisibleIndex, setEnsureVisibleIndex] = useState<number | undefined>(undefined)
  const [blockMouse, setBlockMouse] = useState<boolean>(false)
  const [resolvedVisibleItemsCount, setResolvedVisibleItemsCount] =
    useState<DropdownListProps['visibleItemsCount']>(visibleItemsCount)
  const [resolvedPlacement, setResolvedPlacement] = useState<DropdownListProps['placement']>(placement)

  const triggerRef = useRef<HTMLElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const finalChildren =
    typeof children === 'function' ? children({ open, setOpen, resolvedPlacement }) : children

  return (
    <WithSlots
      childrenToVerify={finalChildren}
      componentName="DropdownList"
      slotsConfig={[
        { name: 'DropdownList.Trigger', required: true },
        { name: 'DropdownList.Item', allowMultiple: true },
      ]}
    >
      {({ slotsByName }) => {
        const itemsCount = slotsByName['DropdownList.Item'].length

        let defaultResolvedVisibleItemsCount =
          itemsCount < (visibleItemsCount ?? 0) ? itemsCount : (visibleItemsCount ?? 0)
        if (defaultResolvedVisibleItemsCount <= 0) defaultResolvedVisibleItemsCount = 1

        const itemHeight =
          Number(BUTTON_SIZE_CONFIG[size].blockSize.replace('px', '')) +
          Number(BOX_BORDER_WIDTH.replace('px', ''))

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
            ensureVisibleIndex={ensureVisibleIndex}
            setEnsureVisibleIndex={setEnsureVisibleIndex}
            blockMouse={blockMouse}
            setBlockMouse={setBlockMouse}
            defaultResolvedVisibleItemsCount={defaultResolvedVisibleItemsCount}
            resolvedVisibleItemsCount={resolvedVisibleItemsCount ?? 5}
            setResolvedVisibleItemsCount={setResolvedVisibleItemsCount}
            resolvedPlacement={resolvedPlacement}
            setResolvedPlacement={setResolvedPlacement}
            // props
            color={color}
            intent={intent}
            size={size}
            placement={placement}
            visibleItemsCount={visibleItemsCount}
            openOnFocus={openOnFocus}
            keepOpen={keepOpen}
            scrollToIndex={scrollToIndex}
            scrollAlign={scrollAlign}
            itemBorderIntent={itemBorderIntent}
            noOptionsLabel={noOptionsLabel}
            animationDuration={animationDuration}
            onOpened={onOpened}
            onClosed={onClosed}
            // extra
            itemHeight={itemHeight}
          >
            <DropdownListMain tagRef={tagRef} tagAttrs={tagAttrs} />
          </DropdownListProvider>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
