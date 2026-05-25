import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { syncRespStyle } from 'lib/internals/dom'
import { useScreen } from 'lib/hooks'
import { withPrefix } from 'lib/helpers'

import { GridItemProps } from './definitions'

import './grid-item.scss'

export const GridItem = <T extends ElementType = 'div'>({
  // Box
  children,
  tag,
  tagAttrs,
  tagRef,
  // own
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
}: GridItemProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    syncRespStyle('Grid.Item', tagRef || ref, bp, {
      gridColumn,
      gridRow,
      justifySelf,
      alignSelf,
    })
  }, [bp, gridColumn, gridRow, justifySelf, alignSelf])

  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('grid-item'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </Box>
  )
}

GridItem.displayName = 'Grid.Item'
