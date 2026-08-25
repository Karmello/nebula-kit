import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'
import { Box, MarkerListItemProps } from 'lib/index.core'

import { useMarkerListContext } from '../../providers/MarkerListProvider'

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
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('marker-list-item'), tagAttrs?.className),
        role: 'listitem',
      }}
      tagRef={tagRef}
      drawable
      variant="ghost"
      color={color || rootColor}
      intent={intent || rootIntent}
    >
      {children}
    </Box>
  )
}

MarkerListItem.displayName = 'MarkerList.Item'
