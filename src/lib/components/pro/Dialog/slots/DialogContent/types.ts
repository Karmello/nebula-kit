import { BoxProps } from 'lib/index.core'

export type DialogContentProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}
