import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/core/internal'
import { withPrefix } from 'lib/helpers'

import { MarkerListProvider } from './MarkerListProvider'
import { MarkerListTag, MarkerListProps, DEFAULT_MARKER_LIST_GAP } from './definitions'

import './marker-list.scss'

export const MarkerList = <T extends MarkerListTag = 'ul'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Flex
  gap = DEFAULT_MARKER_LIST_GAP,
  // Box
  color,
  intent,
  // own
  listStyle,
}: MarkerListProps<T>) => {
  return (
    <WithSlots<'MarkerList.Item'>
      componentName="MarkerList"
      slotsConfig={[{ name: 'MarkerList.Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {({ slotsByName }) => {
        return (
          <MarkerListProvider color={color} intent={intent}>
            <Flex
              tag={tag || 'ul'}
              tagAttrs={{
                ...tagAttrs,
                className: classNames(withPrefix('marker-list'), tagAttrs?.className),
                style: {
                  ...tagAttrs?.style,
                  listStyle,
                  listStylePosition: 'outside',
                },
                role: 'list',
              }}
              tagRef={tagRef}
              flexDirection="column"
              gap={gap}
            >
              {slotsByName['MarkerList.Item']}
            </Flex>
          </MarkerListProvider>
        )
      }}
    </WithSlots>
  )
}

MarkerList.displayName = 'MarkerList'
