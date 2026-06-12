import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { FlexProps } from 'lib/index.core'
import { syncRespDataset, syncRespStyle } from 'lib/internals/dom'

import { Box } from '../Box'

import './flex.scss'

export const Flex = <T extends ElementType = 'div'>({
  // own
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  rowGap,
  columnGap,
  // Box
  ...boxProps
}: FlexProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = boxProps.tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Flex', finalRef, bp, {
      display,
      flexDirection,
      flexWrap,
      justifyContent,
      alignItems,
      alignContent,
      gap,
      rowGap,
      columnGap,
    })
  }, [bp, display, flexDirection, flexWrap, justifyContent, alignItems, alignContent, gap, rowGap, columnGap])

  useLayoutEffect(() => {
    syncRespDataset('Flex', finalRef, bp, { flexDirection })
  }, [bp, flexDirection])

  return (
    <Box
      {...boxProps}
      tagAttrs={
        {
          ...boxProps.tagAttrs,
          className: classNames(withPrefix('flex'), boxProps.tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
    >
      {boxProps.children}
    </Box>
  )
}

Flex.displayName = 'Flex'
