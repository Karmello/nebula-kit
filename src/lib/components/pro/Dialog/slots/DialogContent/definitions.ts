import { BoxProps } from 'lib/index.core'

type PropsFromBox = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}

export type DialogContentProps = PropsFromBox
