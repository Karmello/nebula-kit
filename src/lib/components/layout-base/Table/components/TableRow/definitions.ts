import { BoxProps } from 'lib/components'

export type TableRowProps = Pick<BoxProps<'tr'>, 'children' | 'elemProps' | 'elemRef'>
