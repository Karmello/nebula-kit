import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { MarkerListItemProps } from './definitions'

export const MarkerListItem = ({ children, tagAttrs, tagRef }: MarkerListItemProps) => {
  return (
    <Box
      tag="li"
      tagAttrs={{
        ...tagAttrs,
        className: classNames(withPrefix('marker-list-item'), tagAttrs?.className),
        role: 'listitem',
      }}
      tagRef={tagRef}
    >
      {children}
    </Box>
  )
}

MarkerListItem.displayName = 'MarkerList.Item'
