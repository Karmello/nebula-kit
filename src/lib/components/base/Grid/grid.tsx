import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'

import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  GridAs,
  PolymorphicProps,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './grid.scss'

type GridAsType = `${GridAs}`

export interface GridOwnProps {
  as?: GridAsType
  columns?: ResponsiveProp<string | number>
  rows?: ResponsiveProp<string | number>
  autoRows?: ResponsiveProp<string>
  autoColumns?: ResponsiveProp<string>
  autoFlow?: ResponsiveProp<`${CssGridAutoFlow}`>
  placeItems?: ResponsiveProp<`${CssGridPlaceItems}`>
  placeContent?: ResponsiveProp<`${CssGridPlaceContent}`>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export type GridProps<E extends GridAsType = 'div'> = PolymorphicProps<E, BoxOwnProps & GridOwnProps>

export const Grid = <E extends GridAsType = 'div'>({
  as = 'div' as E,
  className,
  style,
  columns,
  rows,
  gap,
  rowGap,
  columnGap,
  autoFlow,
  autoRows,
  autoColumns,
  placeItems,
  placeContent,
  ...rest
}: GridProps<E>) => {
  return (
    <Box
      as={as}
      className={classNames(withPrefix('grid'), className)}
      style={{
        ...getCssVars('grid', {
          columns,
          rows,
          gap,
          rowGap,
          columnGap,
          autoFlow,
          autoRows,
          autoColumns,
          placeItems,
          placeContent,
        }),
        ...style,
      }}
      {...(rest as GridProps<E>)}
    />
  )
}

Grid.displayName = 'Grid'
