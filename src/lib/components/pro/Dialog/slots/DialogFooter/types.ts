import { BoxProps } from 'lib/index.core'

export type DialogFooterProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}
