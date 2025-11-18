import { cloneElement, ReactElement, ReactNode, RefObject, useEffect, useLayoutEffect, useRef } from 'react'

import { Flex, Box, Resize, Portal, DropdownListProps } from 'lib/components'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/motion/Resize/definitions'
import { useNebkitStore } from 'lib/state'
import { useOutsideClick } from 'lib/hooks'

import { useDropdownListContext } from './DropdownListProvider'
import { getItemsWrapperBlockSize, getInitScrollTop, handleArrowNavigation } from './helpers'

export const DropdownListComponent = ({
  slotsByName,
  tagRef,
  tagAttrs,
  placement,
  visibleItemsCount,
  scrollToIndex,
  scrollAlign,
  itemBorderIntent,
}: { slotsByName: Record<string, ReactNode[]> } & Omit<DropdownListProps, 'children'>) => {
  const {
    variant,
    intent,
    animateVisible,
    setAnimateVisible,
    open,
    setOpen,
    size,
    triggerRef,
    hoveredIndex,
    setHoveredIndex,
    setBlockMouse,
  } = useDropdownListContext()

  const { borderWidth } = useNebkitStore()

  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const itemsCount = slotsByName['DropdownList.Item'].length
  const finalVisibleItemsCount = itemsCount < (visibleItemsCount ?? 0) ? itemsCount : (visibleItemsCount ?? 0)

  useOutsideClick([triggerRef, portalRef], () => setAnimateVisible(false))

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
        setHoveredIndex(-1)
      }, DEFAULT_RESIZE_DURATION)
    }
  }, [animateVisible])

  useLayoutEffect(() => {
    if (scrollWrapperRef.current) {
      const scrollTop = getInitScrollTop(
        finalVisibleItemsCount,
        size ?? 'md',
        borderWidth,
        scrollToIndex ?? 0,
        scrollAlign
      )
      if (scrollTop !== undefined) scrollWrapperRef.current.scrollTop = scrollTop
    }
  }, [scrollWrapperRef.current])

  const triggerWidth = (triggerRef as RefObject<HTMLDivElement>).current?.offsetWidth
  const itemsContainerBlockSize = getItemsWrapperBlockSize(finalVisibleItemsCount, size ?? 'md', borderWidth)
  const opensUpDownwards = (placement || 'bottom-start').startsWith('bottom')

  return (
    <Box
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        role: 'listbox',
        onKeyDown: e => {
          if (!scrollWrapperRef.current) return
          if (e.key === 'Escape' || e.key === 'Tab') {
            e.stopPropagation()
            setAnimateVisible(false)
          } else if (e.key === 'Enter') {
            if (open) {
              scrollWrapperRef.current
                .querySelectorAll<HTMLElement>('.neb-dropdown-list-item')
                [hoveredIndex]?.click()
            }
          } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            if (e.repeat) return
            e.preventDefault()
            setBlockMouse(true)
            const { activeIndex, scrollTop } = handleArrowNavigation(
              e.key,
              itemsCount,
              finalVisibleItemsCount,
              size ?? 'md',
              borderWidth,
              scrollWrapperRef.current.scrollTop,
              hoveredIndex
            )
            setHoveredIndex(activeIndex)
            setTimeout(() => {
              if (scrollWrapperRef.current) scrollWrapperRef.current.scrollTop = scrollTop
            }, 125)
          }
        },
      }}
      intent="neutral"
    >
      {slotsByName['DropdownList.Trigger']}
      {open ? (
        <Portal tagRef={portalRef} anchorRef={triggerRef} placement={placement}>
          <Resize property="blockSize" visible={animateVisible}>
            <Box
              variant={variant === 'ghost' ? 'solid' : variant}
              intent={variant === 'ghost' ? 'neutral' : intent}
              borderTopWidth={0}
              borderTopLeftRadius={opensUpDownwards ? 0 : undefined}
              borderTopRightRadius={opensUpDownwards ? 0 : undefined}
              borderBottomLeftRadius={!opensUpDownwards ? 0 : undefined}
              borderBottomRightRadius={!opensUpDownwards ? 0 : undefined}
              minInlineSize={`${triggerWidth}px`}
            >
              <Box
                tagRef={scrollWrapperRef}
                blockSize={itemsContainerBlockSize}
                overflowY="auto"
                overflowX="hidden"
                borderTopLeftRadius={opensUpDownwards ? 0 : undefined}
                borderTopRightRadius={opensUpDownwards ? 0 : undefined}
                borderBottomLeftRadius={!opensUpDownwards ? 0 : undefined}
                borderBottomRightRadius={!opensUpDownwards ? 0 : undefined}
              >
                <Flex flexDirection="column" flexWrap="nowrap" alignItems="stretch">
                  {slotsByName['DropdownList.Item'].map((slot, index) => (
                    <Box
                      key={index}
                      variant="outline"
                      borderRadius={0}
                      borderLeftWidth={0}
                      borderRightWidth={0}
                      borderTopWidth={opensUpDownwards ? (index > 0 ? 0 : undefined) : 0}
                      borderBottomWidth={
                        opensUpDownwards ? (index === itemsCount - 1 ? 0 : undefined) : undefined
                      }
                      borderIntent={itemBorderIntent}
                    >
                      {cloneElement(slot as ReactElement<any>, { index })}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Resize>
        </Portal>
      ) : null}
    </Box>
  )
}
