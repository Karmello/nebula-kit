import { useEffect, useLayoutEffect } from 'react'

import { Box, DropdownListProps } from 'lib/components'
import { DEFAULT_RESIZE_DURATION } from 'lib/components/core/motion/Resize/definitions'
import { useOutsideClick } from 'lib/hooks'

import { useDropdownListContext, DropdownListMenu } from '../'
import { getInitScrollTop, handleArrowNavigation } from '../../helpers'

export const DropdownListMain = ({ tagRef, tagAttrs }: Pick<DropdownListProps, 'tagRef' | 'tagAttrs'>) => {
  const {
    triggerRef,
    portalRef,
    scrollWrapperRef,
    slotsByName,
    resizeVisible,
    setResizeVisible,
    open,
    setOpen,
    size,
    hoveredIndex,
    setHoveredIndex,
    setBlockMouse,
    finalVisibleItemsCount,
    scrollAlign,
    scrollToIndex,
  } = useDropdownListContext()

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
  }, [open])

  const itemsCount = slotsByName['DropdownList.Item'].length

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
      <DropdownListMenu />
    </Box>
  )
}
