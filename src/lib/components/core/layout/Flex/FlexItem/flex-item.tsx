import { ComponentProps, ComponentRef, ElementType, PropsWithoutRef, useLayoutEffect, useRef } from 'react'
import classNames from 'classnames'

import { Box } from 'lib/components'
import { updateDomRespStyle } from 'lib/service'
import { withPrefix } from 'lib/helpers'
import { useScreen } from 'lib/hooks'

import { FlexItemProps } from './definitions'

import './flex-item.scss'

export const FlexItem = <T extends ElementType = 'div'>({
  // own
  flex,
  flexGrow,
  flexShrink,
  flexBasis,
  alignSelf,
  order,
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
}: FlexItemProps<T>) => {
  const ref = useRef<ComponentRef<T>>(null)

  const { bp } = useScreen()

  useLayoutEffect(() => {
    updateDomRespStyle('Flex.Item', tagRef || ref, bp, {
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
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('flex-item'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef || ref}
    >
      {children}
    </Box>
  )
}

FlexItem.displayName = 'Flex.Item'
