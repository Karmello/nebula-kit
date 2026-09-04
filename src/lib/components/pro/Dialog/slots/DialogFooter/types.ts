import { BoxProps } from 'lib/components/core/Box'

export type DialogFooterProps = {
  tagAttrs?: BoxProps['tagAttrs']
  tagRef?: BoxProps['tagRef']
  children: BoxProps<'dialog'>['children']
}
