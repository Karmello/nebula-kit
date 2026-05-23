import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps<'tr'>, 'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'textAlign'> & {
  children: BoxProps<'tr'>['children']
}

export type TableRowProps = PropsFromBox
