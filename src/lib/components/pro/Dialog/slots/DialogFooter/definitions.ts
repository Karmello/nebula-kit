import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'dialog'>['children']
}

export type DialogFooterProps = PropsFromBox
