import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { GridProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'

import { Box } from '../Box'

import './grid.scss'

export const Grid = <T extends ElementType = 'div'>({
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
  // Box
  ...boxProps
}: GridProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = boxProps.tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Grid', finalRef, bp, {
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
