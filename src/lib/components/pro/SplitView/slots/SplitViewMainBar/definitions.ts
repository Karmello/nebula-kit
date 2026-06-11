import { BoxProps } from 'lib/index.core'

export type SplitViewMainBarProps = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}
