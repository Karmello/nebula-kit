import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { MarkerListItemProps } from './definitions'

export const MarkerListItem = ({ children, elemProps, elemRef }: MarkerListItemProps) => {
  return (
    <Box
      elem="li"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('marker-list-item'), elemProps?.className),
        role: 'listitem',
      }}
      elemRef={elemRef}
    >
      {children}
    </Box>
  )
}

MarkerListItem.displayName = 'MarkerList.Item'
MarkerListItem.slotName = 'Item'
