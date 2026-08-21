import { NEB_LENGTH } from 'lib/constants'

import { WithSlots } from '../WithSlots'
import { DropdownListMain, DropdownListMenu } from './components'
import {
  DEFAULT_DROPDOWN_ITEM_BLOCK_SIZE,
  DEFAULT_DROPDOWN_LIST_INTENT,
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_OPEN_ON_FOCUS,
  DEFAULT_DROPDOWN_LIST_PLACEMENT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DropdownListProps,
} from './definitions'
import { DropdownListProvider } from './providers'

export const DropdownList = ({
  // Box
  children,
  tagRef,
  tagAttrs,
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

        const finalItemBlockSize =
          (itemBlockSize !== undefined ? itemBlockSize : 50) + Number(NEB_LENGTH.px_002.replace('px', ''))

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
