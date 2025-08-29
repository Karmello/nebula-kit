import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'

import {
  CssGridAutoFlow,
  CssGridPlaceContent,
  CssGridPlaceItems,
  PolymorphicProps,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './grid.scss'

type GridAs = 'div' | 'section' | 'main' | 'article' | 'aside' | 'nav' | 'ul' | 'ol'

export interface GridOwnProps {
  as?: GridAs
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

export type GridProps<E extends GridAs = 'div'> = PolymorphicProps<E, BoxOwnProps & GridOwnProps>

/** Grid is a polymorphic, responsive 2‑D layout primitive built on Box. It exposes a CSS‑variable API for track templates, auto‑placement, alignment, and per‑axis gaps - great for card grids, dashboards, and complex layouts. */
export const Grid = <E extends GridAs = 'div'>({
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
