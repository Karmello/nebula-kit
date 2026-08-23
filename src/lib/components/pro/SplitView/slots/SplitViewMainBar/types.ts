import { BoxProps } from 'lib/index.core'

export type SplitViewMainBarProps = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps['children']
}
