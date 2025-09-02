import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix, useScreen, computeResponsiveCss } from 'lib/helpers'

import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  GridElem,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './grid.scss'

type GridElemUnion = `${GridElem}`

export type GridOwnProps = {
  gridTemplateColumns?: ResponsiveProp<string | number>
  gridTemplateRows?: ResponsiveProp<string | number>
  gridAutoRows?: ResponsiveProp<string>
  gridAutoColumns?: ResponsiveProp<string>
  gridAutoFlow?: ResponsiveProp<`${CssGridAutoFlow}`>
  placeItems?: ResponsiveProp<`${CssGridPlaceItems}`>
  placeContent?: ResponsiveProp<`${CssGridPlaceContent}`>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export type GridProps<E extends GridElemUnion> = Omit<BoxProps<E>, 'display'> & GridOwnProps

export const Grid = <E extends GridElemUnion = 'div'>({
  elem,
  elemProps,
  elemRef,
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
  ...boxProps
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
      elemProps={{ ...elemProps, className: classNames(withPrefix('grid'), elemProps?.className) }}
      elemRef={elemRef}
      {...boxProps}
    />
  )
}

Grid.displayName = 'Grid'

// const Test = () => {
//   return (
//     <Grid elem="a" elemProps={{ href: 'href' }} variant="ghost" margin={10}>
//       grid
//     </Grid>
//   )
// }
