import { BoxProps } from 'lib/components/core/Box'

export type SplitViewMainBarProps = {
  tagAttrs?: BoxProps<'div'>['tagAttrs']
  tagRef?: BoxProps<'div'>['tagRef']
  children: BoxProps['children']
}
