import { BoxProps } from 'lib/components/core/Box'

export type DialogFooterProps = {
  elemAttrs?: BoxProps['elemAttrs']
  elemRef?: BoxProps['elemRef']
  children: BoxProps<'dialog'>['children']
}
