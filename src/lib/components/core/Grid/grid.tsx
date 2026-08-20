import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { GridProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'
import type { GridTag } from 'lib/types'

import { Box } from '../Box'

import './grid.scss'

export const Grid = <T extends GridTag = 'div'>({
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
  display,
  gridTemplateColumns,
  gridTemplateRows,
  gridAutoRows,
  gridAutoColumns,
  gridAutoFlow,
  placeItems,
  placeContent,
  gap,
  rowGap,
  columnGap,
}: GridProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Grid', tagRef || ref, bp, {
      display,
      gridTemplateColumns,
      gridTemplateRows,
      gridAutoRows,
      gridAutoColumns,
      gridAutoFlow,
      placeItems,
      placeContent,
      gap,
      rowGap,
      columnGap,
    })
  }, [
    bp,
    display,
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoRows,
    gridAutoColumns,
    gridAutoFlow,
    placeItems,
    placeContent,
    gap,
    rowGap,
    columnGap,
  ])

  return (
    <Box
      tag={tag}
      tagAttrs={
        { ...tagAttrs, className: classNames(withPrefix('grid'), tagAttrs?.className) } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </Box>
  )
}

Grid.displayName = 'Grid'
