import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

export type SplitViewMainBarProps = PropsFromBox
