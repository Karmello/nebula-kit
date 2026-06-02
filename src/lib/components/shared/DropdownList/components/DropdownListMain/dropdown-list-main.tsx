import { useEffect, useLayoutEffect } from 'react'

import { useOutsideClick } from 'lib/hooks'
import { Box, BoxProps } from 'lib/index.core'

import { getNextActiveIndex } from '../../helpers'
import { useDropdownListContext } from '../../providers'

export const DropdownListMain = ({
  // Box
  children,
  tagAttrs,
  tagRef,
  // own
  itemsCount,
  finalItemBlockSize,
}: Pick<BoxProps, 'children' | 'tagAttrs' | 'tagRef'> & { itemsCount: number; finalItemBlockSize: number }) => {
  const {
    triggerRef,
    portalRef,
    scrollWrapperRef,
    resizeVisible,
    setResizeVisible,
    internalOpen,
    setInternalOpen,
    setHoveredIndex,
    hoveredIndex,
    floatingResolved,
    setBlockMouse,
    setEnsureVisibleIndex,
  } = useDropdownListContext()

  useOutsideClick([triggerRef, portalRef], () => setResizeVisible(false))

  useEffect(() => {
    if (internalOpen) {
      setTimeout(() => {
        setResizeVisible(true)
      })
    } else {
      setTimeout(() => {
        setResizeVisible(false)
      })
    }
  }, [internalOpen])

  useEffect(() => {
    if (!resizeVisible) {
      setInternalOpen(false)
      setHoveredIndex(-1)
    }
  }, [resizeVisible])

  useLayoutEffect(() => {
    if (!internalOpen) return
    const initialWidth = window.innerWidth
    const handleResize = () => {
      if (window.innerWidth !== initialWidth) {
        setResizeVisible(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [internalOpen])

  return (
    <Box
      tagRef={tagRef}
      tagAttrs={{
        ...tagAttrs,
        style: { minInlineSize: '0px', ...tagAttrs?.style },
        role: 'listbox',
        onKeyDown: e => {
          if (e.key === 'Escape' || e.key === 'Tab') {
            e.stopPropagation()
            setResizeVisible(false)
            return
          }

          if (!scrollWrapperRef.current) return

          if (e.key === 'Enter') {
            if (internalOpen) {
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
              visibleItemsCount: floatingResolved?.blockSize ? Math.floor(floatingResolved.blockSize / finalItemBlockSize) : 1,
              itemBlockSize: finalItemBlockSize,
            })

            setBlockMouse(true)
            setHoveredIndex(nextIndex)
            setEnsureVisibleIndex(nextIndex)
          }
        },
      }}
    >
      {children}
    </Box>
  )
}
