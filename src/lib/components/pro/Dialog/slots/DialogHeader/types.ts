import { BoxProps } from 'lib/index.core'

export type DialogHeaderProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}
