import classNames from 'classnames'

import { WithSlots } from 'lib/components/shared'
import { withPrefix } from 'lib/helpers'
import { Box, MarkerListProps } from 'lib/index.core'
import { MarkerListTag } from 'lib/types'

import { DEFAULT_MARKER_LIST_GAP } from './constants'
import { MarkerListProvider } from './MarkerListProvider'

import './marker-list.scss'

export const MarkerList = <T extends MarkerListTag = 'ul'>({
  // Flex
  children,
  tag,
  tagAttrs,
  tagRef,
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
            <Box
              display="flex"
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
            </Box>
          </MarkerListProvider>
        )
      }}
    </WithSlots>
  )
}

MarkerList.displayName = 'MarkerList'
