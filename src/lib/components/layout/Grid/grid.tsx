import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix, useScreen } from 'lib/helpers'
import { applyRespValues } from 'lib/service'

import { GridTag, GridProps } from './definitions'

import './grid.scss'

export const Grid = <T extends GridTag = 'div'>({
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
  children,
  tag,
  tagAttrs,
  tagRef,
}: GridProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', tagRef || ref, bp, {
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
        { ...tagAttrs, className: classNames(withPrefix('grid'), tagAttrs?.className) } as PropsWithoutRef<
          ComponentProps<T>
        >
      }
      tagRef={tagRef || ref}
    >
      {children}
    </Box>
  )
}

Grid.displayName = 'Grid'
