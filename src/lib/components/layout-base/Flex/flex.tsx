import { ComponentRef, ElementType, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix, computeResponsiveCss, useScreen } from 'lib/helpers'

import {
  CssFlexAlignItems,
  CssFlexDirection,
  CssFlexJustifyContent,
  CssFlexWrap,
  ResponsiveProp,
  ScaleValue,
} from 'lib/definitions'

import './flex.scss'

export type FlexOwnProps = {
  flexDirection?: ResponsiveProp<CssFlexDirection>
  flexWrap?: ResponsiveProp<CssFlexWrap>
  justifyContent?: ResponsiveProp<CssFlexJustifyContent>
  alignItems?: ResponsiveProp<CssFlexAlignItems>
  gap?: ResponsiveProp<ScaleValue | string>
  rowGap?: ResponsiveProp<ScaleValue | string>
  columnGap?: ResponsiveProp<ScaleValue | string>
}

export type FlexProps<E extends ElementType = 'div'> = Omit<BoxProps<E>, 'display'> & FlexOwnProps

export const Flex = <E extends ElementType = 'div'>({
  elem,
  elemProps,
  elemRef,
  // css
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  rowGap,
  columnGap,
  ...boxProps
}: FlexProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(elemRef || ref, bp, {
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
      elem={elem}
      elemProps={{ ...elemProps, className: classNames(withPrefix('flex'), elemProps?.className) }}
      elemRef={elemRef || ref}
      {...(boxProps as any)}
    />
  )
}

Flex.displayName = 'Flex'
