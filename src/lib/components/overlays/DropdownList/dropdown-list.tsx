import { RefObject, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { Animate, Box, Flex, Portal } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { DEFAULT_ANIMATE_DURATION } from 'lib/components/base/Animate/definitions'
import { BUTTON_SIZE_CONFIG, DEFAULT_BUTTON_SIZE } from 'lib/components/controls/Button/definitions'
import { useNebkitStore } from 'lib/state'
import { useOutsideClick } from 'lib/hooks'

import {
  DropdownListProps,
  DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
  DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
} from './definitions'

import { DropdownListProvider } from './DropdownListProvider'

export const DropdownList = ({
  // HtmlTag
  children,
  tagRef,
  tagAttrs,
  // Box
  inlineSize,
  // Button
  size = DEFAULT_BUTTON_SIZE,
  // own
  visibleItemsCount = DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT,
  keepOpen = DEFAULT_DROPDOWN_LIST_KEEP_OPEN,
  scrollToIndex = DEFAULT_DROPDOWN_LIST_SCROLL_TO_INDEX,
  scrollAlign = DEFAULT_DROPDOWN_LIST_SCROLL_ALIGN,
  itemVariant,
  itemIntent,
  listBorderIntent,
  itemBorderIntent = DEFAULT_DROPDOWN_LIST_ITEM_BORDER_INTENT,
}: DropdownListProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const [animateVisible, setAnimateVisible] = useState<boolean>(false)

  const { borderWidth } = useNebkitStore()

  const rootRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement>(null)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  useOutsideClick([triggerRef, portalRef], () => setAnimateVisible(false))

  const getItemsContainerBlockSize = useCallback(
    (visibleItemsCount: number) => {
      const allItemsBlockSize = visibleItemsCount * BUTTON_SIZE_CONFIG[size].blockSize
      const allItemsBorderWidth = (visibleItemsCount - 1) * borderWidth
      return `${allItemsBlockSize + allItemsBorderWidth}px`
    },
    [borderWidth]
  )

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setAnimateVisible(true)
      })
    }
  }, [open])

  useEffect(() => {
    if (!animateVisible) {
      setTimeout(() => {
        setOpen(false)
      }, DEFAULT_ANIMATE_DURATION)
    }
  }, [animateVisible])

  useLayoutEffect(() => {
    if (scrollWrapperRef.current) {
      if (scrollToIndex === undefined || visibleItemsCount === undefined) return
      let baseIndex = scrollToIndex
      if (scrollAlign === 'center') baseIndex -= (visibleItemsCount - 1) / 2
      else if (scrollAlign === 'end') baseIndex -= visibleItemsCount - 1
      if (baseIndex >= 0) {
        const allItemsBlockSize = baseIndex * BUTTON_SIZE_CONFIG[size].blockSize
        const allItemsBorderWidth = baseIndex * borderWidth
        scrollWrapperRef.current.scrollTop = allItemsBlockSize + allItemsBorderWidth
      }
    }
  }, [scrollWrapperRef.current, scrollToIndex, scrollAlign])

  const finalChildren = typeof children === 'function' ? children({ open, animateVisible }) : children

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
        const triggerWidth = (triggerRef as RefObject<HTMLDivElement>).current?.offsetWidth

        const itemsLength = slotsByName['DropdownList.Item'].length
        const itemsContainerBlockSize =
          visibleItemsCount !== undefined
            ? getItemsContainerBlockSize(itemsLength < visibleItemsCount ? itemsLength : visibleItemsCount)
            : 0

        return (
          <DropdownListProvider
            open={open}
            setOpen={setOpen}
            animateVisible={animateVisible}
            setAnimateVisible={setAnimateVisible}
            triggerRef={triggerRef}
            keepOpen={keepOpen}
            size={size}
            inlineSize={inlineSize}
            itemVariant={itemVariant}
            itemIntent={itemIntent}
          >
            <Box
              tagRef={tagRef || rootRef}
              tagAttrs={{
                ...tagAttrs,
                role: 'listbox',
                onKeyDown: e => {
                  if (e.key === 'Escape' || e.key === 'Tab') {
                    e.stopPropagation()
                    setAnimateVisible(false)
                  }
                },
              }}
              intent="neutral"
            >
              {slotsByName['DropdownList.Trigger']}
              {open ? (
                <Portal
                  tagRef={portalRef}
                  anchorRef={triggerRef}
                  placement="bottom"
                  inlineSize={triggerWidth !== undefined ? triggerWidth + 'px' : undefined}
                >
                  <Animate property="blockSize" visible={animateVisible}>
                    <Box
                      tagRef={scrollWrapperRef}
                      blockSize={itemsContainerBlockSize}
                      overflowY="auto"
                      overflowX="hidden"
                      borderTopLeftRadius={0}
                      borderTopRightRadius={0}
                      borderTopWidth={0}
                      variant={listBorderIntent ? 'outline' : 'solid'}
                      intent="neutral"
                      borderIntent={listBorderIntent}
                    >
                      <Flex flexDirection="column" flexWrap="nowrap" alignItems="stretch">
                        {slotsByName['DropdownList.Item'].map((slot, key) => (
                          <Box
                            key={key}
                            variant="outline"
                            inlineSize={inlineSize}
                            borderLeftWidth={0}
                            borderRightWidth={0}
                            borderTopWidth={0}
                            borderBottomWidth={
                              key === slotsByName['DropdownList.Item'].length - 1 ? 0 : undefined
                            }
                            borderRadius={0}
                            borderIntent={itemBorderIntent}
                          >
                            {slot}
                          </Box>
                        ))}
                      </Flex>
                    </Box>
                  </Animate>
                </Portal>
              ) : null}
            </Box>
          </DropdownListProvider>
        )
      }}
    </WithSlots>
  )
}

DropdownList.displayName = 'DropdownList'
