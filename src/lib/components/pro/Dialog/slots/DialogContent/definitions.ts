import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'dialog'>['children']
}

export type DialogContentProps = PropsFromBox
