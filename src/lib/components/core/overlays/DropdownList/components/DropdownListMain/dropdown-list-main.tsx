import { useEffect } from 'react'

import { Box, DropdownListProps } from 'lib/components'
import { useOutsideClick } from 'lib/hooks'

import { useDropdownListContext, DropdownListMenu } from '../'
import { getNextActiveIndex } from '../../helpers'

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
    hoveredIndex,
    setHoveredIndex,
    setEnsureVisibleIndex,
    setBlockMouse,
    resolvedVisibleItemsCount,
    itemHeight,
    animationDuration,
  } = useDropdownListContext()

  useOutsideClick([triggerRef, portalRef], () => setResizeVisible(false))

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setResizeVisible(true)
      })
    } else {
      setTimeout(() => {
        setResizeVisible(false)
      })
    }
  }, [open])

  useEffect(() => {
    if (!resizeVisible) {
      setTimeout(() => {
        setOpen(false)
        setHoveredIndex(-1)
      }, animationDuration)
    }
  }, [resizeVisible])

  const itemsCount = slotsByName['DropdownList.Item'].length

  return (
    <Box
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        role: 'listbox',
        onKeyDown: e => {
          if (e.key === 'Escape' || e.key === 'Tab') {
            e.stopPropagation()
            setResizeVisible(false)
            return
          }

          if (!scrollWrapperRef.current) return

          if (e.key === 'Enter') {
            if (open) {
              e.preventDefault()
              const el = scrollWrapperRef.current.querySelector<HTMLElement>(
                `[data-neb-dropdown-list-item-index="${hoveredIndex}"]`
              )
              el?.click()
            }
          } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            if (e.repeat) return
            e.preventDefault()
            if (!scrollWrapperRef.current) return

            const nextIndex = getNextActiveIndex({
              key: e.key,
              itemsCount,
              activeIndex: hoveredIndex,
              scrollTop: scrollWrapperRef.current.scrollTop,
              visibleItemsCount: resolvedVisibleItemsCount ?? 1,
              itemHeight,
            })

            setBlockMouse(true)
            setHoveredIndex(nextIndex)
            setEnsureVisibleIndex(nextIndex)
          }
        },
      }}
    >
      {slotsByName['DropdownList.Trigger']}
      <DropdownListMenu />
    </Box>
  )
}
