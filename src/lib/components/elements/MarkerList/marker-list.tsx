import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { MarkerListTag, MarkerListProps, DEFAULT_MARKER_LIST_ROW_GAP } from './definitions'
import './marker-list.scss'

export const MarkerList = <T extends MarkerListTag = 'ul'>({
  children,
  tag,
  tagAttrs,
  tagRef,
  rowGap = DEFAULT_MARKER_LIST_ROW_GAP,
  // own
  listStyle,
}: MarkerListProps<T>) => {
  return (
    <WithSlots<'Item'>
      componentName="MarkerList"
      slotsConfig={[{ name: 'Item', required: true, allowMultiple: true }]}
      childrenToVerify={children}
    >
      {slots => {
        return (
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
            rowGap={rowGap}
          >
            {slots.Item || ''}
          </Flex>
        )
      }}
    </WithSlots>
  )
}

MarkerList.displayName = 'MarkerList'
