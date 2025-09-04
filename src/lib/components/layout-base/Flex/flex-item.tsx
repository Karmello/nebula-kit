import { ComponentRef, ElementType, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box, BoxProps } from 'lib/components'
import { withPrefix, computeResponsiveCss, useScreen } from 'lib/helpers'
import { ResponsiveProp, CssFlexItemAlignSelf } from 'lib/definitions'

import './flex.scss'

export type FlexItemOwnProps = {
  flex?: ResponsiveProp<string | number>
  flexGrow?: ResponsiveProp<number>
  flexShrink?: ResponsiveProp<number>
  flexBasis?: ResponsiveProp<string | number>
  alignSelf?: ResponsiveProp<CssFlexItemAlignSelf>
  order?: ResponsiveProp<number>
}

export type FlexItemProps<E extends ElementType = 'div'> = Omit<
  BoxProps<E>,
  | 'display'
  | 'margin'
  | 'marginInline'
  | 'marginBlock'
  | 'marginTop'
  | 'marginRight'
  | 'marginBottom'
  | 'marginLeft'
> &
  FlexItemOwnProps

export const FlexItem = <E extends ElementType = 'div'>({
  elem,
  elemProps,
  elemRef,
  // own
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  ...boxProps
}: FlexItemProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    computeResponsiveCss(elemRef || ref, bp, {
      flex,
      flexGrow,
      flexShrink,
      flexBasis,
      alignSelf,
      order,
    })
  }, [bp, flex, flexGrow, flexShrink, flexBasis, alignSelf, order])

  return (
    <Box
      elem={elem}
      elemProps={{ ...elemProps, className: classNames(withPrefix('flex-item'), elemProps?.className) }}
      elemRef={elemRef || ref}
      {...(boxProps as any)}
    />
  )
}

FlexItem.displayName = 'Flex.Item'
