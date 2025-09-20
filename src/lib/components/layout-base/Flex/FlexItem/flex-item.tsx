import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix, useScreen } from 'lib/helpers'
import { Box } from 'lib/components'
import { applyRespValues } from 'lib/service'

import { FlexItemProps } from './definitions'

import './flex-item.scss'

export const FlexItem = <E extends ElementType = 'div'>({
  // own
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  // NativeElem
  children,
  elem,
  elemProps,
  elemRef,
}: FlexItemProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', elemRef || ref, bp, {
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
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('flex-item'), elemProps?.className),
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef || ref}
    >
      {children}
    </Box>
  )
}

FlexItem.displayName = 'Flex.Item'
