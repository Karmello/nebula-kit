import { ElementType } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'

import {
  CssFlexAlign,
  CssFlexDirection,
  CssFlexJustify,
  CssFlexWrap,
  PolymorphicProps,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './flex.scss'

export type FlexOwnProps = {
  /** Main axis direction (row, column, etc.), supports responsive values */
  direction?: ResponsiveProp<CssFlexDirection>
  /** How flex items wrap onto multiple lines, supports responsive values */
  wrap?: ResponsiveProp<CssFlexWrap>
  /** Distribution of items along the main axis, supports responsive values */
  justify?: ResponsiveProp<CssFlexJustify>
  /** Alignment of items along the cross axis, supports responsive values */
  align?: ResponsiveProp<CssFlexAlign>
  /** Shorthand spacing between items, supports responsive values */
  gap?: ResponsiveProp<ScaleValue | string>
  /** Vertical spacing between rows, overrides gap on block axis */
  rowGap?: ResponsiveProp<ScaleValue | string>
  /** Horizontal spacing between columns, overrides gap on inline axis */
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export type FlexProps<E extends ElementType = 'div'> = PolymorphicProps<E, BoxOwnProps & FlexOwnProps>

/** Flex is a polymorphic layout primitive built on Box that uses flexbox under the hood. It handles direction, wrapping, alignment, and gaps (with per-axis overrides), and supports responsive values for a clean, mobile-first flow. */
export const Flex = <E extends ElementType = 'div'>({
  className,
  style,
  direction,
  wrap,
  justify,
  align,
  gap,
  rowGap,
  columnGap,
  ...rest
}: FlexProps<E>) => {
  return (
    <Box
      className={classNames(withPrefix('flex'), className)}
      style={{
        ...getCssVars('flex', { direction, wrap, justify, align, gap, rowGap, columnGap }),
        ...style,
      }}
      {...(rest as FlexProps<E>)}
    />
  )
}

Flex.displayName = 'Flex'
