import { ComponentProps, ElementType, PropsWithoutRef } from 'react'
import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'

import { DEFAULT_SEGMENT_FLEX_DIRECTION, SegmentProps } from './definitions'

import './segment.scss'

export const Segment = <T extends ElementType = 'div'>({
  // Flex
  children,
  tag,
  tagAttrs,
  tagRef,
  flexDirection = DEFAULT_SEGMENT_FLEX_DIRECTION,
}: SegmentProps<T>) => {
  return (
    <WithSlots<'Segment.Item'>
      childrenToVerify={children}
      componentName="Segment"
      slotsConfig={[{ name: 'Segment.Item', required: true, allowMultiple: true }]}
    >
      {({ slotsByName }) => {
        return (
          <Flex
            tag={tag}
            tagAttrs={
              {
                ...tagAttrs,
                className: classNames(withPrefix('segment'), tagAttrs?.className),
              } as PropsWithoutRef<ComponentProps<T>>
            }
            tagRef={tagRef}
            flexDirection={flexDirection}
            flexWrap="nowrap"
            alignItems="stretch"
          >
            {slotsByName['Segment.Item']}
          </Flex>
        )
      }}
    </WithSlots>
  )
}

Segment.displayName = 'Segment'
