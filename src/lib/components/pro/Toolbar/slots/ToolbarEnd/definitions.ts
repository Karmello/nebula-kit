import { BoxProps } from 'lib/index.core'

type PropsFromBox = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps<'div'>['children']
}

export type ToolbarEndProps = PropsFromBox
