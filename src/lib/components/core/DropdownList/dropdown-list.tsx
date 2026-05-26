import { useRef, useState } from 'react'

import { WithSlots } from 'lib/components/shared'
import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE, LENGTH_SCALE } from 'lib/definitions'
import { FloatingResolved } from 'lib/internals/positioning'

import { DropdownListProps } from './definitions'
import { DropdownListProvider, DropdownListMain } from './components'

export const DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS: DropdownListProps['openOnFocus'] = false
export const DEFAULT_DROPDOWN_LIST_KEEP_OPEN: DropdownListProps['keepOpen'] = false
export const DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT: DropdownListProps['visibleItemsCount'] = 5
export const DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX: DropdownListProps['scrollToIndex'] = 0
export const DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN: DropdownListProps['scrollAlign'] = 'start'
export const DEFAULT_DROPDOWN_LIST_INTENT: DropdownListProps['intent'] = 'tertiary'
export const DEFAULT_DROPDOWN_LIST_PLACEMENT: DropdownListProps['placement'] = 'bottom-start'
export const DEFAULT_DROPDOWN_ITEM_BLOCK_SIZE: DropdownListProps['itemBlockSize'] = Number(
  CONTROL_SIZE_MAP[DEFAULT_CONTROL_SIZE].blockSize.replace('px', '')
)

export const DropdownList = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
  // Button
  color,
  intent = DEFAULT_DROPDOWN_LIST_INTENT,
  // Portal
  placement = DEFAULT_DROPDOWN_LIST_PLACEMENT,
  // own
  itemBlockSize = DEFAULT_DROPDOWN_ITEM_BLOCK_SIZE,
  visibleItemsCount = DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  openOnFocus = DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS,
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

        const finalItemBlockSize = itemBlockSize + Number(LENGTH_SCALE['3xs'].replace('px', ''))

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
            itemBlockSize={itemBlockSize}
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
            finalItemBlockSize={finalItemBlockSize}
          >
            <DropdownListMain tagRef={tagRef} tagAttrs={tagAttrs} />
          </DropdownListProvider>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
