import { BoxProps } from 'lib/components/core/Box'

export type SplitViewMainBarProps = {
  elemAttrs?: BoxProps<'div'>['elemAttrs']
  elemRef?: BoxProps<'div'>['elemRef']
  children: BoxProps['children']
}
