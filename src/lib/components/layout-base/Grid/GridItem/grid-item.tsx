import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix, useScreen } from 'lib/helpers'
import { Box } from 'lib/components'
import { applyRespValues } from 'lib/service'

import { GridItemProps } from './definitions'

import './grid-item.scss'

export const GridItem = <E extends ElementType = 'div'>({
  // own
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
  // NativeElem
  children,
  elem,
  elemProps,
  elemRef,
}: GridItemProps<E>) => {
  const ref = useRef<ComponentRef<E>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    applyRespValues('style', elemRef || ref, bp, {
      gridColumn,
      gridRow,
      justifySelf,
      alignSelf,
    })
  }, [bp, gridColumn, gridRow, justifySelf, alignSelf])

  return (
    <Box
      elem={elem}
      elemProps={
        {
          ...elemProps,
          className: classNames(withPrefix('grid-item'), elemProps?.className),
        } as PropsWithoutRef<ComponentProps<E>>
      }
      elemRef={elemRef || ref}
    >
      {children}
    </Box>
  )
}

GridItem.displayName = 'Grid.Item'
