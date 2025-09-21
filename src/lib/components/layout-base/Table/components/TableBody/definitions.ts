import { BoxProps } from 'lib/components'

export type TableBodyProps = Pick<BoxProps<'tbody'>, 'children' | 'tagAttrs' | 'tagRef'>
