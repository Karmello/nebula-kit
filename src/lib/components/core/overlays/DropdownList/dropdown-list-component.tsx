import {
  cloneElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import { Flex, Box, Resize, Portal, DropdownListProps } from 'lib/components'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/motion/Resize/definitions'
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
    intent,
    color,
    resizeVisible,
    setResizeVisible,
    open,
    setOpen,
    size,
    triggerRef,
    hoveredIndex,
    setHoveredIndex,
    setBlockMouse,
  } = useDropdownListContext()

  const [triggerWidth, setTriggerWidth] = useState<number | undefined>(undefined)
  const portalRef = useRef<HTMLDivElement>(null)
  const scrollWrapperRef = useRef<HTMLDivElement>(null)

  const itemsCount = slotsByName['DropdownList.Item'].length
  const finalVisibleItemsCount = itemsCount < (visibleItemsCount ?? 0) ? itemsCount : (visibleItemsCount ?? 0)

  useOutsideClick([triggerRef, portalRef], () => setResizeVisible(false))

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setResizeVisible(true)
      })
    }
  }, [open])

  useEffect(() => {
    if (!resizeVisible) {
      setTimeout(() => {
        setOpen(false)
        setHoveredIndex(-1)
      }, DEFAULT_RESIZE_DURATION)
    }
  }, [resizeVisible])

  useLayoutEffect(() => {
    if (scrollWrapperRef.current) {
      const scrollTop = getInitScrollTop(
        finalVisibleItemsCount,
        size ?? 'md',
        scrollToIndex ?? 0,
        scrollAlign
      )
      if (scrollTop !== undefined) scrollWrapperRef.current.scrollTop = scrollTop
    }
  }, [scrollWrapperRef.current])

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

  const itemsContainerBlockSize = getItemsWrapperBlockSize(finalVisibleItemsCount, size ?? 'md')
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
            setResizeVisible(false)
          } else if (e.key === 'Enter') {
            if (open) {
              e.preventDefault()
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
    >
      {slotsByName['DropdownList.Trigger']}
      {open ? (
        <Portal tagRef={portalRef} anchorRef={triggerRef} placement={placement}>
          <Resize
            property="blockSize"
            visible={resizeVisible}
            easing={resizeVisible ? 'ease-out' : 'ease-in'}
          >
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
      ) : null}
    </Box>
  )
}
