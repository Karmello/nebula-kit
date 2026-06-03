import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { Box, GridItemProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'

import './grid-item.scss'

export const GridItem = <T extends ElementType = 'div'>({
  // own
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
  // Box
  ...boxProps
}: GridItemProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)
  const finalRef = boxProps.tagRef || ref

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Grid.Item', finalRef, bp, {
      gridColumn,
      gridRow,
      justifySelf,
      alignSelf,
    })
  }, [bp, gridColumn, gridRow, justifySelf, alignSelf])

  return (
    <Box
      {...boxProps}
      tagAttrs={
        {
          ...boxProps.tagAttrs,
          className: classNames(withPrefix('grid-item'), boxProps.tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={finalRef}
    >
      {boxProps.children}
    </Box>
  )
}

GridItem.displayName = 'Grid.Item'
