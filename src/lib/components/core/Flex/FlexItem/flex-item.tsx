import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { Box, FlexItemProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'

import './flex-item.scss'

export const FlexItem = <T extends ElementType = 'div'>({
  // own
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  // Box
  ...boxProps
}: FlexItemProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = boxProps.tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Flex.Item', finalRef, bp, {
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
      {...boxProps}
      tagAttrs={
        {
          ...boxProps.tagAttrs,
          className: classNames(withPrefix('flex-item'), boxProps.tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
    >
      {boxProps.children}
    </Box>
  )
}

FlexItem.displayName = 'Flex.Item'
