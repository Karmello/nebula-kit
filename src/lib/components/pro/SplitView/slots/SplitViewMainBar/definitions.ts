import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps['children']
}

export type SplitViewMainBarProps = PropsFromBox
