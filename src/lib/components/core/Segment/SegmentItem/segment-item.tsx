import { ComponentProps, ElementType, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box, SegmentItemProps } from 'lib/index.core'

export const SegmentItem = <T extends ElementType = 'div'>({
  // Flex.Item
  children,
  tag,
  tagAttrs,
  tagRef,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  alignSelf,
  order,
}: SegmentItemProps<T>) => {
  return (
    <Box
      tag={tag}
      tagAttrs={
        {
          ...tagAttrs,
          className: classNames(withPrefix('segment-item'), tagAttrs?.className),
        } as PropsWithoutRef<ComponentProps<T>>
      }
      tagRef={tagRef}
      flex={flex}
      flexBasis={flexBasis}
      flexGrow={flexGrow}
      flexShrink={flexShrink}
      alignSelf={alignSelf}
      order={order}
    >
      {children}
    </Box>
  )
}

SegmentItem.displayName = 'Segment.Item'
