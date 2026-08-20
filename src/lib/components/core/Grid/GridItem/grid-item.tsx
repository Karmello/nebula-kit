import { ComponentProps, ComponentRef, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'
import { Box, GridItemProps } from 'lib/index.core'
import { syncRespStyle } from 'lib/internals/dom'
import type { GridTag } from 'lib/types'

import './grid-item.scss'

export const GridItem = <T extends GridTag = 'div'>({
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
