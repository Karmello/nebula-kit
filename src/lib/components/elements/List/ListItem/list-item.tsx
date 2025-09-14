import classNames from 'classnames'

import { Box } from 'lib/components'
import { withPrefix } from 'lib/helpers'

import { ListItemProps } from './definitions'

export const ListItem = ({ elemProps, ...rest }: ListItemProps) => {
  return (
    <Box
      {...rest}
      elem="li"
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('list-item'), elemProps?.className),
      }}
    />
  )
}

ListItem.displayName = 'List.Item'
ListItem.slotName = 'Item'
