import { cloneElement, ReactNode, RefObject, useCallback, useLayoutEffect, useRef, useState } from 'react'

import { Box, Resize, VirtualList, Divider } from 'lib/components'
import { DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT, Portal } from 'lib/components/shared'
import { FloatingResolved, useFloating } from 'lib/internals/positioning'

import { useDropdownListContext } from '../../providers'
import { DropdownListItem } from '../../slots/DropdownListItem/dropdown-list-item'

export const DropdownListMenu = ({
  items,
  finalItemBlockSize,
  correctedVisibleItemsCount,
}: {
  items: ReactNode[]
  finalItemBlockSize: number
  correctedVisibleItemsCount: number
}) => {
  const {
    triggerRef,
    portalRef,
    scrollWrapperRef,
    internalOpen,
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
    color,
    intent,
  } = useDropdownListContext()

  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(undefined)

  const prevOpenRef = useRef<boolean>(internalOpen)

  const finalVisibleItemsCount = floatingResolved?.blockSize
    ? Math.floor(floatingResolved.blockSize / finalItemBlockSize)
    : correctedVisibleItemsCount

  const finalAnimationDuration = !disableListAnimation ? Math.min(400, Math.max(200, finalVisibleItemsCount * 40)) : 0

  useLayoutEffect(() => {
    const wasOpen = prevOpenRef.current
    prevOpenRef.current = internalOpen
    if (wasOpen && !internalOpen) {
      onClosed?.()
    } else if (!wasOpen && internalOpen) {
      setTimeout(() => {
        onOpened?.()
      }, finalAnimationDuration)
    }
    if (!internalOpen) return

    const el = (triggerRef as RefObject<HTMLElement>).current
    if (!el) return
    const update = () => setTriggerWidth(el.offsetWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [internalOpen, finalAnimationDuration])

  const opensUpDownwards = (floatingResolved?.placement ?? 'bottom-start').startsWith('bottom')

  const ListItemDivider = () => <Divider marginBlock="0px" color={color} intent={intent} elevated />

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

  if (!internalOpen) {
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
          overflow="clip"
          borderTopWidth="0px"
          borderTopLeftRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          borderTopRightRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          borderBottomLeftRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          borderBottomRightRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
        >
          {items.length ? (
            <VirtualList
              tagRef={scrollWrapperRef}
              items={items}
              itemBlockSize={finalItemBlockSize}
              visibleItemsCount={finalVisibleItemsCount ?? DEFAULT_DROPDOWN_LIST_VISIBLE_ITEMS_COUNT}
              scrollToIndex={scrollToIndex}
              scrollAlign={scrollAlign}
              elevated
              color={color}
              intent={intent}
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
              <DropdownListItem index={0}>{noOptionsLabel}</DropdownListItem>
              {!opensUpDownwards ? <ListItemDivider /> : null}
            </>
          ) : null}
        </Box>
      </Resize>
    </Portal>
  )
}
