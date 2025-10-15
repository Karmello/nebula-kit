import classNames from 'classnames'

import { Flex } from 'lib/components'
import { WithSlots } from 'lib/components/internal'
import { withPrefix } from 'lib/helpers'

import { MarkerListProvider } from './MarkerListProvider'
import { MarkerListTag, MarkerListProps, DEFAULT_MARKER_LIST_ROW_GAP } from './definitions'
import './marker-list.scss'

export const MarkerList = <T extends MarkerListTag = 'ul'>({
  // HtmlTag
  children,
  tag,
  tagAttrs,
  tagRef,
  // Flex
  rowGap = DEFAULT_MARKER_LIST_ROW_GAP,
  // Box
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
          <MarkerListProvider intent={intent}>
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
              {slotsByName['MarkerList.Item']}
            </Flex>
          </MarkerListProvider>
        )
      }}
    </WithSlots>
  )
}

MarkerList.displayName = 'MarkerList'
