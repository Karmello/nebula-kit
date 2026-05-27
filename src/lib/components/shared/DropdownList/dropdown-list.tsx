import { LENGTH_SCALE } from 'lib/definitions'

import { DropdownListMain, DropdownListMenu } from './components'
import { DropdownListProvider } from './providers'
import { WithSlots } from '../WithSlots'

import {
  DEFAULT_DROPDOWN_ITEM_BLOCK_SIZE,
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DropdownListProps,
} from './definitions'

export const DropdownList = ({
  // Box
  children,
  tagRef,
  tagAttrs,
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
  return (
    <WithSlots<'DropdownList.Trigger' | 'DropdownList.Item'>
      componentName="DropdownList"
      childrenToVerify={children}
      slotsConfig={[
        { name: 'DropdownList.Trigger', required: true },
        { name: 'DropdownList.Item', required: true, allowMultiple: true },
      ]}
    >
      {({ slotsByName }) => {
        const itemsCount = slotsByName['DropdownList.Item'].length
        let correctedVisibleItemsCount = itemsCount < (visibleItemsCount ?? 0) ? itemsCount : (visibleItemsCount ?? 0)
        if (correctedVisibleItemsCount <= 0 && noOptionsLabel) correctedVisibleItemsCount = 1

        const finalItemBlockSize = itemBlockSize + Number(LENGTH_SCALE['3xs'].replace('px', ''))

        return (
          <DropdownListProvider
            keepOpen={keepOpen}
            openOnFocus={openOnFocus}
            scrollToIndex={scrollToIndex}
            scrollAlign={scrollAlign}
            disableListAnimation={disableListAnimation}
            onClosed={onClosed}
            onOpened={onOpened}
            placement={placement}
            noOptionsLabel={noOptionsLabel}
          >
            <DropdownListMain tagRef={tagRef} tagAttrs={tagAttrs} itemsCount={itemsCount} finalItemBlockSize={finalItemBlockSize}>
              {slotsByName['DropdownList.Trigger']}
              <DropdownListMenu
                items={slotsByName['DropdownList.Item']}
                finalItemBlockSize={finalItemBlockSize}
                correctedVisibleItemsCount={correctedVisibleItemsCount}
              />
            </DropdownListMain>
          </DropdownListProvider>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
