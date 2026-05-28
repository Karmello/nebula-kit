import { CONTROL_SIZE_MAP, DEFAULT_CONTROL_SIZE, LENGTH_SCALE } from 'lib/definitions'

import { DropdownListProvider } from './providers'
import { WithSlots } from '../WithSlots'

import { DropdownListMain } from './components/DropdownListMain/dropdown-list-main'
import { DropdownListMenu } from './components/DropdownListMenu/dropdown-list-menu'
import { DropdownListProps } from './definitions'

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

export const DropdownList = ({
  // Box
  children,
  tagRef,
  tagAttrs,
  // ActionSurface
  color,
  intent = DEFAULT_DROPDOWN_LIST_INTENT,
  // Portal
  placement = DEFAULT_DROPDOWN_LIST_PLACEMENT,
  // own
  state,
  onStateChange,
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
            state={state}
            onStateChange={onStateChange}
            keepOpen={keepOpen}
            openOnFocus={openOnFocus}
            scrollToIndex={scrollToIndex}
            scrollAlign={scrollAlign}
            disableListAnimation={disableListAnimation}
            onClosed={onClosed}
            onOpened={onOpened}
            placement={placement}
            noOptionsLabel={noOptionsLabel}
            color={color}
            intent={intent}
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
