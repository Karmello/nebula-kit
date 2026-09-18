import { BoxProps } from 'lib/components/core/Box'

export type ToolbarStartProps = {
  elemAttrs?: BoxProps<'div'>['elemAttrs']
  elemRef?: BoxProps<'div'>['elemRef']
  children: BoxProps<'div'>['children']
}
