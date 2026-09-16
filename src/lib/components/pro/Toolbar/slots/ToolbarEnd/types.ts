import { BoxProps } from 'lib/components/core/Box'

export type ToolbarEndProps = {
  elemAttrs?: BoxProps<'div'>['elemAttrs']
  elemRef?: BoxProps<'div'>['elemRef']
  children: BoxProps<'div'>['children']
}
