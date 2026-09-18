import { BoxProps } from 'lib/components/core/Box'

export type DialogHeaderProps = {
  elemAttrs?: BoxProps['elemAttrs']
  elemRef?: BoxProps['elemRef']
  children: BoxProps<'dialog'>['children']
}
