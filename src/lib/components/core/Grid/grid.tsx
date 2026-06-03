import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { resolveLengthValue, withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { GridProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'

import { Box } from '../Box'

import './grid.scss'

export const Grid = <T extends ElementType = 'div'>({
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
  // Box
  ...boxProps
}: GridProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = boxProps.tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Grid', finalRef, bp, {
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
      {...boxProps}
      tagAttrs={
        {
          ...boxProps.tagAttrs,
          className: classNames(withPrefix('grid'), boxProps.tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
    >
      {boxProps.children}
    </Box>
  )
}

Grid.displayName = 'Grid'
