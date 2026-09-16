import classNames from 'classnames'

import { Box } from 'lib/components/core/Box'
import { withPrefix } from 'lib/helpers'

import { useMarkerListContext } from '../../providers/MarkerListProvider'
import { MarkerListItemProps } from './types'

export const MarkerListItem = ({
  children,
  elemAttrs,
  elemRef,
  color,
  intent,
}: MarkerListItemProps) => {
  const { color: rootColor, intent: rootIntent } = useMarkerListContext()

  return (
    <Box
      elemTag="li"
      className={classNames(withPrefix('marker-list-item'), elemAttrs?.className)}
      elemAttrs={{
        ...elemAttrs,
        role: 'listitem',
      }}
      elemRef={elemRef}
      drawable
      color={color || rootColor}
      intent={intent || rootIntent}
    >
      {children}
    </Box>
  )
}

MarkerListItem.displayName = 'MarkerList.Item'
