import { BoxProps } from 'lib/components'

export type TableCellProps = Pick<BoxProps<'td'>, 'children' | 'elemProps' | 'elemRef'>
