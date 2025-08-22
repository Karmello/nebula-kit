import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'
import { PolymorphicProps, ResponsiveProp, ScaleValue } from 'lib/definitions'

import './grid.scss'

type GridAs = 'div' | 'section' | 'main' | 'article' | 'aside' | 'nav' | 'ul' | 'ol'

export interface GridOwnProps {
  columns?: ResponsiveProp<string | number>
  rows?: ResponsiveProp<string | number>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
  autoFlow?: ResponsiveProp<'row' | 'column' | 'dense' | 'row dense' | 'column dense'>
  autoRows?: ResponsiveProp<string>
  autoColumns?: ResponsiveProp<string>
  placeItems?: ResponsiveProp<'start' | 'center' | 'end' | 'stretch'>
  placeContent?: ResponsiveProp<
    'start' | 'center' | 'end' | 'stretch' | 'space-between' | 'space-around' | 'space-evenly'
  >
}

export type GridProps<E extends GridAs = 'div'> = PolymorphicProps<E, BoxOwnProps & GridOwnProps>

export const Grid = <E extends GridAs = 'div'>({
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
