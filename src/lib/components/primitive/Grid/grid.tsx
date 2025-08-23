import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'

import {
  GridAutoFlow,
  GridPlaceContent,
  GridPlaceItems,
  PolymorphicProps,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './grid.scss'

type GridAs = 'div' | 'section' | 'main' | 'article' | 'aside' | 'nav' | 'ul' | 'ol'

export interface GridOwnProps {
  /** Column track template or count (e.g. "repeat(12, 1fr)" or 12); supports responsive values */
  columns?: ResponsiveProp<string | number>
  /** Row track template or count (e.g. "auto 1fr auto" or 3); supports responsive values */
  rows?: ResponsiveProp<string | number>
  /** Shorthand gap between grid items; accepts scale tokens or raw CSS; responsive */
  gap?: ResponsiveProp<ScaleValue | string>
  /** Vertical spacing between rows; overrides gap on the block axis; responsive */
  rowGap?: ResponsiveProp<ScaleValue | string>
  /** Horizontal spacing between columns; overrides gap on the inline axis; responsive */
  columnGap?: ResponsiveProp<ScaleValue | string>
  /** Auto‑placement strategy for items (grid-auto-flow); responsive */
  autoFlow?: ResponsiveProp<GridAutoFlow>
  /** Size for implicitly created rows (grid-auto-rows); responsive */
  autoRows?: ResponsiveProp<string>
  /** Size for implicitly created columns (grid-auto-columns); responsive */
  autoColumns?: ResponsiveProp<string>
  /** Shorthand alignment for items within their cells (place-items); responsive */
  placeItems?: ResponsiveProp<GridPlaceItems>
  /** Shorthand alignment for the grid within its container (place-content); responsive */
  placeContent?: ResponsiveProp<GridPlaceContent>
}

export type GridProps<E extends GridAs = 'div'> = PolymorphicProps<E, BoxOwnProps & GridOwnProps>

/** Grid is a polymorphic, responsive 2‑D layout primitive built on Box. It exposes a CSS‑variable API for track templates, auto‑placement, alignment, and per‑axis gaps - great for card grids, dashboards, and complex layouts. */
export const Grid = <E extends GridAs = 'div'>({
  className,
  style,
  columns = '1fr',
  rows = 'auto',
  gap = 0,
  rowGap = 0,
  columnGap = 0,
  autoFlow = 'row',
  autoRows = 'auto',
  autoColumns = 'auto',
  placeItems = 'stretch',
  placeContent = 'start',
  ...rest
}: GridProps<E>) => {
  return (
    <Box
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
