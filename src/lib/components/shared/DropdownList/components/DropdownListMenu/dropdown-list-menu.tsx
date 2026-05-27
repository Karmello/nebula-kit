import { cloneElement, ReactNode, RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'

import { Box, Resize, VirtualList, Divider } from 'lib/components'
import { Portal, DropdownList } from 'lib/components/shared'
import { FloatingResolved, useFloating } from 'lib/internals/positioning'

import { DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT } from '../../definitions'
import { useDropdownListContext } from '../../providers'

export const DropdownListMenu = ({
  items,
  finalItemBlockSize,
  correctedVisibleItemsCount,
}: {
  items: Array<unknown>
  finalItemBlockSize: number
  correctedVisibleItemsCount: number
}) => {
  const {
    triggerRef,
    portalRef,
    scrollWrapperRef,
    open,
    floatingResolved,
    setFloatingResolved,
    resizeVisible,
    ensureVisibleIndex,
    scrollToIndex,
    scrollAlign,
    disableListAnimation,
    onClosed,
    onOpened,
    placement,
    noOptionsLabel,
  } = useDropdownListContext()

  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(undefined)

  const prevOpenRef = useRef<boolean>(open)

  const finalVisibleItemsCount = floatingResolved?.blockSize
    ? Math.floor(floatingResolved.blockSize / finalItemBlockSize)
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

  const ListItemDivider = () => (
    <Divider
      marginBlock="0px"
      // color={color}
      // intent={intent}
      elevated
      surface="dividing"
    />
  )

  const handleResolve = useCallback(
    (resolved: FloatingResolved) => {
      if (resolved.placement !== floatingResolved?.placement || resolved.blockSize !== floatingResolved?.blockSize) {
        setFloatingResolved(resolved)
      }
    },
    [floatingResolved?.placement, floatingResolved?.blockSize, setFloatingResolved]
  )

  useFloating({
    enabled: true,
    anchorRef: triggerRef,
    mode: 'fit-y',
    floatingBlockSize: correctedVisibleItemsCount * finalItemBlockSize,
    placement,
    onResolve: handleResolve,
  })

  if (!open) {
    return null
  }

  return (
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
          blockSize={`${finalVisibleItemsCount * finalItemBlockSize}px`}
          minInlineSize={triggerWidth !== undefined ? `${triggerWidth}px` : undefined}
          overflow="hidden"
          borderTopWidth="0px"
          borderTopLeftRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          borderTopRightRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          borderBottomLeftRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          borderBottomRightRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
        >
          {items.length ? (
            <VirtualList
              key={String(open)}
              tagRef={scrollWrapperRef}
              items={items}
              itemBlockSize={finalItemBlockSize}
              visibleItemsCount={finalVisibleItemsCount ?? DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT}
              scrollToIndex={scrollToIndex}
              scrollAlign={scrollAlign}
              elevated
              renderItem={(item: ReactNode, index) => {
                return (
                  <>
                    {opensUpDownwards ? <ListItemDivider /> : null}
                    {cloneElement(item as any, { index })}
                    {!opensUpDownwards ? <ListItemDivider /> : null}
                  </>
                )
              }}
              ensureVisibleIndex={ensureVisibleIndex}
            />
          ) : noOptionsLabel ? (
            <>
              {opensUpDownwards ? <ListItemDivider /> : null}
              <DropdownList.Item index={0}>{noOptionsLabel}</DropdownList.Item>
              {!opensUpDownwards ? <ListItemDivider /> : null}
            </>
          ) : null}
        </Box>
      </Resize>
    </Portal>
  )
}
