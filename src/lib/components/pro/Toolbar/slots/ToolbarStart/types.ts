import { BoxProps } from 'lib/index.core'

export type ToolbarStartProps = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children']
}
