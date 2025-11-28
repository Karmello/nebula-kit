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

import { DropdownListProvider } from './DropdownListProvider'
import { DropdownListComponent } from './dropdown-list-component'

export const DropdownList = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
  // Button
  variant,
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

  const triggerRef = useRef<HTMLElement>(null)

  const finalChildren = typeof children === 'function' ? children({ open, resizeVisible }) : children

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
        return (
          <DropdownListProvider
            open={open}
            setOpen={setOpen}
            resizeVisible={resizeVisible}
            setResizeVisible={setResizeVisible}
            triggerRef={triggerRef}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            keepOpen={keepOpen}
            size={size}
            variant={variant}
            color={color}
            intent={intent}
            blockMouse={blockMouse}
            setBlockMouse={setBlockMouse}
          >
            <DropdownListComponent
              slotsByName={slotsByName}
              tagRef={tagRef}
              tagAttrs={tagAttrs}
              placement={placement}
              visibleItemsCount={visibleItemsCount}
              scrollToIndex={scrollToIndex}
              scrollAlign={scrollAlign}
              itemBorderIntent={itemBorderIntent}
            />
          </DropdownListProvider>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
