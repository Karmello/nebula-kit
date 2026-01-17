import { cloneElement, ReactElement, RefObject, useLayoutEffect, useRef, useState } from 'react'

import {
  Box,
  Floating,
  Portal,
  Resize,
  VirtualList,
  DropdownList,
  DropdownListItemProps,
} from 'lib/components'

import { useDropdownListContext } from '..'
import { DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT } from '../../definitions'

export const DropdownListMenu = () => {
  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(undefined)

  const {
    triggerRef,
    portalRef,
    scrollWrapperRef,
    slotsByName,
    resizeVisible,
    defaultResolvedVisibleItemsCount,
    resolvedVisibleItemsCount,
    setResolvedVisibleItemsCount,
    resolvedPlacement,
    setResolvedPlacement,
    intent,
    color,
    itemBorderIntent,
    noOptionsLabel,
    placement,
    open,
    onOpened,
    onClosed,
    scrollToIndex,
    scrollAlign,
    ensureVisibleIndex,
    itemHeight,
    animationDuration,
  } = useDropdownListContext()

  const prevOpenRef = useRef<boolean>(open)

  useLayoutEffect(() => {
    const wasOpen = prevOpenRef.current
    prevOpenRef.current = open
    if (wasOpen && !open) {
      setTimeout(() => {
        onClosed?.()
      }, animationDuration)
    } else if (!wasOpen && open) {
      setTimeout(() => {
        onOpened?.()
      }, animationDuration)
    }
    if (!open) return

    const el = (triggerRef as RefObject<HTMLElement>).current
    if (!el) return
    const update = () => setTriggerWidth(el.offsetWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [open, animationDuration])

  const opensUpDownwards = (resolvedPlacement || 'bottom-start').startsWith('bottom')

  const itemsContainerBlockSize = resolvedVisibleItemsCount * itemHeight

  return (
    <Floating
      anchorRef={triggerRef}
      mode="fit-y"
      floatingBlockSize={itemsContainerBlockSize}
      placement={placement}
      onResolve={resolved => {
        if (resolved.placement !== resolvedPlacement) {
          setResolvedPlacement(resolved.placement as never)
        }

        if (resolved.blockSize !== undefined) {
          const maxAllowedVisibleItemsCount = Math.floor(resolved.blockSize / itemHeight)

          if (
            defaultResolvedVisibleItemsCount !== undefined &&
            maxAllowedVisibleItemsCount !== undefined &&
            maxAllowedVisibleItemsCount !== resolvedVisibleItemsCount
          ) {
            const min = Math.min(defaultResolvedVisibleItemsCount, maxAllowedVisibleItemsCount)
            if (min != null) setResolvedVisibleItemsCount(min)
          }
        } else {
          setResolvedVisibleItemsCount(defaultResolvedVisibleItemsCount)
        }
      }}
    >
      <Portal tagRef={portalRef} anchorRef={triggerRef} placement={resolvedPlacement}>
        <Resize
          property="blockSize"
          visible={resizeVisible}
          duration={animationDuration}
          easing={resizeVisible ? 'ease-out' : 'ease-in'}
        >
          <Box
            drawable
            variant="solid"
            intent={intent}
            color={color}
            blockSize={`${itemsContainerBlockSize}px`}
            minInlineSize={`${triggerWidth}px`}
            overflow="hidden"
            borderTopWidth="0px"
            borderTopLeftRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
            borderTopRightRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
            borderBottomLeftRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
            borderBottomRightRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          >
            {slotsByName['DropdownList.Item'].length ? (
              <VirtualList
                key={String(open)}
                tagRef={scrollWrapperRef}
                items={slotsByName['DropdownList.Item']}
                itemHeight={itemHeight}
                visibleItemsCount={resolvedVisibleItemsCount ?? DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT}
                scrollToIndex={scrollToIndex}
                scrollAlign={scrollAlign}
                color={color}
                intent={intent}
                renderItem={(slot, index) => {
                  return (
                    <Box
                      drawable
                      color={color}
                      intent={itemBorderIntent}
                      variant="outline"
                      borderLeftWidth="0px"
                      borderRightWidth="0px"
                      borderTopWidth={!opensUpDownwards ? '0px' : undefined}
                      borderBottomWidth={opensUpDownwards ? '0px' : undefined}
                      borderRadius="0px"
                    >
                      {cloneElement(slot as ReactElement<DropdownListItemProps & { index: number }>, {
                        index,
                      })}
                    </Box>
                  )
                }}
                ensureVisibleIndex={ensureVisibleIndex}
              />
            ) : noOptionsLabel ? (
              <Box
                drawable
                color={color}
                intent={itemBorderIntent}
                variant="outline"
                borderLeftWidth="0px"
                borderRightWidth="0px"
                borderTopWidth={!opensUpDownwards ? '0px' : undefined}
                borderBottomWidth={opensUpDownwards ? '0px' : undefined}
                borderRadius="0px"
              >
                <DropdownList.Item disabled>{noOptionsLabel}</DropdownList.Item>
              </Box>
            ) : null}
          </Box>
        </Resize>
      </Portal>
    </Floating>
  )
}
