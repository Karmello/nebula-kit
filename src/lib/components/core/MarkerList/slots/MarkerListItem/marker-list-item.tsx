import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'

import { useMarkerListContext } from '../../providers/MarkerListProvider'
import { MarkerListItemProps } from './types'

export const MarkerListItem = ({
  children,
  tagAttrs,
  tagRef,
  color,
  intent,
}: MarkerListItemProps) => {
  const { color: rootColor, intent: rootIntent } = useMarkerListContext()

  return (
    <Box
      tag="li"
      className={classNames(withPrefix('marker-list-item'), tagAttrs?.className)}
      tagAttrs={{
        ...tagAttrs,
        role: 'listitem',
      }}
      tagRef={tagRef}
      drawable
      color={color || rootColor}
      intent={intent || rootIntent}
    >
      {children}
    </Box>
  )
}

MarkerListItem.displayName = 'MarkerList.Item'
