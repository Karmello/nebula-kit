import { ElementType } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, getCssVars } from 'lib/helpers'
import { PolymorphicProps, ResponsiveProp, ScaleValue } from 'lib/definitions'

import './flex.scss'

export type FlexOwnProps = {
  direction?: ResponsiveProp<'row' | 'row-reverse' | 'column' | 'column-reverse'>
  wrap?: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>
  justify?: ResponsiveProp<
    'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  >
  align?: ResponsiveProp<'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export type FlexProps<E extends ElementType = 'div'> = PolymorphicProps<E, BoxOwnProps & FlexOwnProps>

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
