import { ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix, computeResponsiveCss, useScreen } from 'lib/helpers'

import { FlexProps } from './definitions'

import './flex.scss'

export const Flex = <E extends ElementType = 'div'>({
  // own
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  gap,
  rowGap,
  columnGap,
  // NativeElem
  children,
  elem,
  elemProps,
  elemRef,
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
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('flex'), elemProps?.className || ''),
        } as PropsWithoutRef<React.ComponentProps<E>>
      }
      elemRef={elemRef || ref}
    >
      {children}
    </Box>
  )
}

Flex.displayName = 'Flex'
