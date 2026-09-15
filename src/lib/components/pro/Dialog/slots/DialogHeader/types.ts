import { BoxProps } from 'lib/components/core/Box'

export type DialogHeaderProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}
