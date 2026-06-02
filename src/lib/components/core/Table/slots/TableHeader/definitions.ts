import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<
  BoxProps<'thead'>,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'paddingBlock' | 'paddingInline' | 'textAlign'
> & {
  children: BoxProps<'thead'>['children']
}

export type TableHeaderProps = PropsFromBox
