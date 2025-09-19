import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix, useScreen, computeResponsiveCss } from 'lib/helpers'

import { GridElem, GridProps } from './definitions'

import './grid.scss'

export const Grid = <E extends GridElem = 'div'>({
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
  elem,
  elemProps,
  elemRef,
}: GridProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(elemRef || ref, bp, {
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
      elem={elem}
      elemProps={
        { ...elemProps, className: classNames(withPrefix('grid'), elemProps?.className) } as PropsWithoutRef<
          ComponentProps<E>
        >
      }
      elemRef={elemRef || ref}
    >
      {children}
    </Box>
  )
}

Grid.displayName = 'Grid'
