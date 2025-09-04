import classNames from 'classnames'
import { Box, BoxProps } from 'lib/components'
import { ListElem } from 'lib/definitions'
import { withPrefix } from 'lib/helpers'

import './list.scss'

export type ListOwnProps = {
  listStyle?: 'disc' | 'circle' | 'square' | 'decimal' | 'none'
}

export type ListProps<E extends ListElem> = Omit<BoxProps<E>, 'display'> & ListOwnProps

export const List = <E extends ListElem = 'ul'>({ elem, elemProps, listStyle, ...rest }: ListProps<E>) => {
  return (
    <Box
      {...rest}
      elem={elem || 'ul'}
      elemProps={{
        ...elemProps,
        className: classNames(withPrefix('list'), elemProps?.className),
        style: {
          ...elemProps?.style,
          listStyle,
          listStylePosition: 'inside',
        },
      }}
      display="block"
    />
  )
}

export type ListItemProps = Omit<BoxProps<'li'>, 'elem' | 'display'>

const ListItem = ({ elemProps, ...rest }: ListItemProps) => {
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

List.Item = ListItem
