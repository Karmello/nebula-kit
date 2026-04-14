import { cloneElement, ReactElement, RefObject, useLayoutEffect, useRef, useState } from 'react'

import { Box, Floating, Portal, Resize, VirtualList, DropdownList, DropdownListItemProps, Divider } from 'lib/components'

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
    correctedVisibleItemsCount,
    intent,
    color,
    noOptionsLabel,
    placement,
    open,
    onOpened,
    onClosed,
    scrollToIndex,
    scrollAlign,
    ensureVisibleIndex,
    itemHeight,
    floatingResolved,
    setFloatingResolved,
    disableListAnimation,
  } = useDropdownListContext()

  const prevOpenRef = useRef<boolean>(open)

  const finalVisibleItemsCount = floatingResolved?.blockSize
    ? Math.floor(floatingResolved.blockSize / itemHeight)
    : correctedVisibleItemsCount

  const finalAnimationDuration = !disableListAnimation ? Math.min(400, Math.max(200, finalVisibleItemsCount * 40)) : 0

  useLayoutEffect(() => {
    const wasOpen = prevOpenRef.current
    prevOpenRef.current = open
    if (wasOpen && !open) {
      onClosed?.()
    } else if (!wasOpen && open) {
      setTimeout(() => {
        onOpened?.()
      }, finalAnimationDuration)
    }
    if (!open) return

    const el = (triggerRef as RefObject<HTMLElement>).current
    if (!el) return
    const update = () => setTriggerWidth(el.offsetWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [open, finalAnimationDuration])

  const opensUpDownwards = (floatingResolved?.placement ?? 'bottom-start').startsWith('bottom')

  const ListItemDivider = () => <Divider marginBlock="0px" color={color} intent={intent} surface="raised" />

  return (
    <Floating
      anchorRef={triggerRef}
      mode="fit-y"
      floatingBlockSize={correctedVisibleItemsCount * itemHeight}
      placement={placement}
      onResolve={resolved => {
        if (resolved.placement !== floatingResolved?.placement || resolved.blockSize !== floatingResolved?.blockSize) {
          setFloatingResolved(resolved)
        }
      }}
    >
      <Portal tagRef={portalRef} anchorRef={triggerRef} placement={floatingResolved?.placement || placement}>
        <Resize
          property="blockSize"
          visible={resizeVisible}
          duration={resizeVisible ? finalAnimationDuration : 0}
          easing={resizeVisible ? 'ease-out' : undefined}
        >
          <Box
            drawable
            variant="solid"
            intent={intent}
            color={color}
            blockSize={`${finalVisibleItemsCount * itemHeight}px`}
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
                visibleItemsCount={finalVisibleItemsCount ?? DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT}
                scrollToIndex={scrollToIndex}
                scrollAlign={scrollAlign}
                color={color}
                intent={intent}
                renderItem={(slot, index) => {
                  return (
                    <>
                      {opensUpDownwards ? <ListItemDivider /> : null}
                      {cloneElement(slot as ReactElement<DropdownListItemProps & { index: number }>, {
                        index,
                      })}
                      {!opensUpDownwards ? <ListItemDivider /> : null}
                    </>
                  )
                }}
                ensureVisibleIndex={ensureVisibleIndex}
              />
            ) : noOptionsLabel ? (
              <>
                {opensUpDownwards ? <ListItemDivider /> : null}
                <DropdownList.Item disabled>{noOptionsLabel}</DropdownList.Item>
                {!opensUpDownwards ? <ListItemDivider /> : null}
              </>
            ) : null}
          </Box>
        </Resize>
      </Portal>
    </Floating>
  )
}
