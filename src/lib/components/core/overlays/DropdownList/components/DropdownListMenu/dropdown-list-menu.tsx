import { cloneElement, ReactElement, RefObject, useLayoutEffect, useState } from 'react'

import { Floating, Portal, Resize, Box, Flex } from 'lib/components'

import { useDropdownListContext } from '..'
import { getItemsWrapperBlockSize, getMaxAllowedVisibleItemsCount } from '../../helpers'

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
    placement,
    size,
    open,
  } = useDropdownListContext()

  useLayoutEffect(() => {
    if (!open) return
    const el = (triggerRef as RefObject<HTMLElement>).current
    if (!el) return
    const update = () => setTriggerWidth(el.offsetWidth)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(el)
    return () => observer.disconnect()
  }, [open])

  const itemsContainerBlockSize = getItemsWrapperBlockSize(resolvedVisibleItemsCount, size ?? 'md')
  const opensUpDownwards = (resolvedPlacement || 'bottom-start').startsWith('bottom')

  const itemsCount = slotsByName['DropdownList.Item'].length

  return (
    <Floating
      anchorRef={triggerRef}
      floatingBlockSize={Number(itemsContainerBlockSize.replace('px', ''))}
      placement={placement}
      onResolve={resolved => {
        if (resolved.placement !== resolvedPlacement) {
          setResolvedPlacement(resolved.placement as never)
        }

        if (resolved.blockSize !== undefined) {
          const maxAllowedVisibleItemsCount = getMaxAllowedVisibleItemsCount(size, resolved.blockSize)

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
        <Resize property="blockSize" visible={resizeVisible} easing={resizeVisible ? 'ease-out' : 'ease-in'}>
          <Box
            tagRef={scrollWrapperRef}
            drawable
            variant="solid"
            intent={intent}
            color={color}
            blockSize={itemsContainerBlockSize}
            minInlineSize={`${triggerWidth}px`}
            overflowY="auto"
            overflowX="hidden"
            borderTopWidth="0px"
            borderTopLeftRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
            borderTopRightRadius={opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
            borderBottomLeftRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
            borderBottomRightRadius={!opensUpDownwards ? '0px' : 'var(--neb-border-radius)'}
          >
            <Flex flexDirection="column" flexWrap="nowrap" alignItems="stretch">
              {slotsByName['DropdownList.Item'].map((slot, index) => (
                <Box
                  key={index}
                  drawable
                  color={color}
                  intent={itemBorderIntent}
                  variant="outline"
                  borderLeftWidth="0px"
                  borderRightWidth="0px"
                  borderTopWidth={opensUpDownwards ? (index > 0 ? '0px' : undefined) : '0px'}
                  borderBottomWidth={
                    opensUpDownwards ? (index === itemsCount - 1 ? '0px' : undefined) : undefined
                  }
                  borderRadius="0px"
                >
                  {cloneElement(slot as ReactElement<any>, { index })}
                </Box>
              ))}
            </Flex>
          </Box>
        </Resize>
      </Portal>
    </Floating>
  )
}
