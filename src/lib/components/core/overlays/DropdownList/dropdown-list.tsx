import { useRef, useState } from 'react'

import { FloatingResolved } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { DEFAULT_BUTTON_SIZE } from 'lib/components/core/controls/Button/definitions'
import { CONTROL_SIZE_MAP, LENGTH_SCALE } from 'lib/definitions'

import {
  DropdownListProps,
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DEFAULT_DROPDOWN_LIST_INTENT,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_OPEN_ON_FOCUS,
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
  openOnFocus = DEFAULT_DROPDOWN_OPEN_ON_FOCUS,
  keepOpen = DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  scrollToIndex = DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  scrollAlign = DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  noOptionsLabel,
  disableListAnimation,
  onOpened,
  onClosed,
}: DropdownListProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [resizeVisible, setResizeVisible] = useState<boolean>(false)
  const [hoveredIndex, setHoveredIndex] = useState<number>(-1)
  const [ensureVisibleIndex, setEnsureVisibleIndex] = useState<number | undefined>(undefined)
  const [blockMouse, setBlockMouse] = useState<boolean>(false)
  const [floatingResolved, setFloatingResolved] = useState<FloatingResolved | undefined>(undefined)

  const triggerRef = useRef<HTMLElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const finalChildren =
    typeof children === 'function'
      ? children({
          open,
          setOpen,
          resolvedPlacement: floatingResolved?.placement as DropdownListProps['placement'],
        })
      : children

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

        let correctedVisibleItemsCount = itemsCount < (visibleItemsCount ?? 0) ? itemsCount : (visibleItemsCount ?? 0)
        if (correctedVisibleItemsCount <= 0 && noOptionsLabel) correctedVisibleItemsCount = 1

        const itemHeight =
          Number((CONTROL_SIZE_MAP[size || 'md'].blockSize as string).replace('px', '')) +
          Number(LENGTH_SCALE['3xs'].replace('px', ''))

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
            correctedVisibleItemsCount={correctedVisibleItemsCount}
            floatingResolved={floatingResolved}
            setFloatingResolved={setFloatingResolved}
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
            noOptionsLabel={noOptionsLabel}
            disableListAnimation={disableListAnimation}
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
