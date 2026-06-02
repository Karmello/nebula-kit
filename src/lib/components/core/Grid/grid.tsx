import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { resolveLengthValue, withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { syncRespStyle } from 'lib/internals/dom'
import { GridTag } from 'lib/types'

import { GridProps } from './definitions'

import './grid.scss'

export const Grid = <T extends GridTag = 'div'>({
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
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
      gridTemplateColumns,
      gridTemplateRows,
      gridAutoRows,
      gridAutoColumns,
      gridAutoFlow,
      placeItems,
      placeContent,
      gap: gap !== undefined ? resolveLengthValue(gap) : undefined,
      rowGap: rowGap !== undefined ? resolveLengthValue(rowGap) : undefined,
      columnGap: columnGap !== undefined ? resolveLengthValue(columnGap) : undefined,
    })
  }, [
    bp,
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
