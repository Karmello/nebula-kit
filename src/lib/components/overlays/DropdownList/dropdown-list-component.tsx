import { cloneElement, ReactElement, ReactNode, RefObject, useEffect, useLayoutEffect, useRef } from 'react'

import { Animate, Box, DropdownListProps, Flex, Portal } from 'lib/components'
import { DEFAULT_ANIMATE_DURATION } from 'lib/components/motion/Animate/definitions'
import { useNebkitStore } from 'lib/state'
import { useOutsideClick } from 'lib/hooks'

import { useDropdownListContext } from './DropdownListProvider'
import { getItemsWrapperBlockSize, getInitScrollTop, handleArrowNavigation } from './helpers'

export const DropdownListComponent = ({
  slotsByName,
  tagRef,
  tagAttrs,
  visibleItemsCount,
  scrollToIndex,
  scrollAlign,
  itemBorderIntent,
}: { slotsByName: Record<string, ReactNode[]> } & Omit<DropdownListProps, 'children'>) => {
  const {
    variant,
    intent,
    inlineSize,
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
      }, DEFAULT_ANIMATE_DURATION)
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
        <Portal
          tagRef={portalRef}
          anchorRef={triggerRef}
          placement="bottom"
          inlineSize={triggerWidth !== undefined ? triggerWidth + 'px' : undefined}
        >
          <Animate property="blockSize" visible={animateVisible}>
            <Box
              variant={variant === 'ghost' ? 'solid' : variant}
              intent={variant === 'ghost' ? 'neutral' : intent}
              borderTopWidth={0}
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
            >
              <Box
                tagRef={scrollWrapperRef}
                blockSize={itemsContainerBlockSize}
                overflowY="auto"
                overflowX="hidden"
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
              >
                <Flex flexDirection="column" flexWrap="nowrap" alignItems="stretch">
                  {slotsByName['DropdownList.Item'].map((slot, index) => (
                    <Box
                      key={index}
                      variant="outline"
                      inlineSize={inlineSize}
                      borderLeftWidth={0}
                      borderRightWidth={0}
                      borderTopWidth={0}
                      borderBottomWidth={index === itemsCount - 1 ? 0 : undefined}
                      borderRadius={0}
                      borderIntent={itemBorderIntent}
                    >
                      {cloneElement(slot as ReactElement<any>, { index })}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Box>
          </Animate>
        </Portal>
      ) : null}
    </Box>
  )
}
