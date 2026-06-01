import classNames from 'classnames'

import { withPrefix } from 'lib/helpers'

import { Box } from '../../Box/box'
import { useMarkerListContext } from '../MarkerListProvider'
import { MarkerListItemProps } from './definitions'

export const MarkerListItem = ({ children, tagAttrs, tagRef, color, intent }: MarkerListItemProps) => {
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
