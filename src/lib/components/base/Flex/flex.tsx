import { ComponentRef, ElementType, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxOwnProps } from 'lib/components'
import { withPrefix, computeResponsiveCss, useScreen } from 'lib/helpers'

import {
  CssFlexAlign,
  CssFlexDirection,
  CssFlexJustify,
  CssFlexWrap,
  PolymorphicProps,
  PropsOf,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './flex.scss'

export type FlexOwnProps = {
  flexDirection?: ResponsiveProp<`${CssFlexDirection}`>
  flexWrap?: ResponsiveProp<`${CssFlexWrap}`>
  justifyContent?: ResponsiveProp<`${CssFlexJustify}`>
  alignItems?: ResponsiveProp<`${CssFlexAlign}`>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export const Flex = <E extends ElementType = 'div'>({
  className,
  style,
  // css
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  rowGap,
  columnGap,
  ...rest
}: PolymorphicProps<E, Omit<BoxOwnProps, 'display'> & FlexOwnProps>) => {
  const localRef = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(localRef, bp, {
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      gap,
      rowGap,
      columnGap,
    })
  }, [bp, flexDirection, flexWrap, justifyContent, alignItems, gap, rowGap, columnGap])

  return (
    <Box
      innerRef={localRef}
      className={classNames(withPrefix('flex'), className)}
      style={style}
      {...(rest as PropsOf<E>)}
    />
  )
}

Flex.displayName = 'Flex'
