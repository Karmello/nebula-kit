import { BoxProps } from 'lib/components'

export type TableCellProps = Pick<BoxProps<'td'>, 'children' | 'tagAttrs' | 'tagRef'>
