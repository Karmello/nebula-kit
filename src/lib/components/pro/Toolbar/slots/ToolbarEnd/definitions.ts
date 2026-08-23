import { BoxProps } from 'lib/index.core'

export type ToolbarEndProps = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children']
}
