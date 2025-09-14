import { BoxProps } from 'lib/components'

export type ListItemProps = Omit<BoxProps<'li'>, 'elem' | 'display'>
