import { ComponentRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, useScreen, computeResponsiveCss } from 'lib/helpers'

import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  GridAs,
  PolymorphicProps,
  PropsOf,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './grid.scss'

type GridAsType = `${GridAs}`

export type GridOwnProps = {
  as?: GridAsType
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

export const Grid = <E extends GridAsType = 'div'>({
  as = 'div' as E,
  className,
  // css
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
  ...rest
}: PolymorphicProps<E, Omit<BoxOwnProps, 'display'> & GridOwnProps>) => {
  const localRef = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(localRef, bp, {
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
      innerRef={localRef}
      as={as}
      className={classNames(withPrefix('grid'), className)}
      {...(rest as PropsOf<E>)}
    />
  )
}

Grid.displayName = 'Grid'
