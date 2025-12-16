import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { updateDomRespStyle } from 'lib/service'
import { useScreen } from 'lib/hooks'
import { withPrefix } from 'lib/helpers'

import { GridItemProps } from './definitions'

import './grid-item.scss'

export const GridItem = <T extends ElementType = 'div'>({
  // own
  gridColumn,
  gridRow,
  justifySelf,
  alignSelf,
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
}: GridItemProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespStyle('Grid.Item', tagRef || ref, bp, {
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
