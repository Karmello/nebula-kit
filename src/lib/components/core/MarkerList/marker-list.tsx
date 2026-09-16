import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'
import { useSlots } from 'lib/hooks'

import { DEFAULT_MARKER_LIST_GAP } from './constants'
import { MarkerListProvider } from './providers/MarkerListProvider'
import { MarkerListProps, MarkerListTag } from './types'

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
  const slots = useSlots<'MarkerList.Item'>({
    componentName: 'MarkerList',
    slotsConfig: [{ name: 'MarkerList.Item', required: true, allowMultiple: true }],
    childrenToVerify: children,
  })

  if (!slots) return null

  return (
    <MarkerListProvider color={color} intent={intent}>
      <Box
        display="flex"
        tag={tag || 'ul'}
        className={classNames(withPrefix('marker-list'), tagAttrs?.className)}
        tagAttrs={{
          ...tagAttrs,
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
        {slots.slotsByName['MarkerList.Item']}
      </Box>
    </MarkerListProvider>
  )
}

MarkerList.displayName = 'MarkerList'
