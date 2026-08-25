import { BoxProps } from 'lib/components/core/Box'

export type DialogContentProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}
