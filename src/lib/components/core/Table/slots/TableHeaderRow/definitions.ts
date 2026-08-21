import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<
  BoxProps<'tr'>,
  'tagAttrs' | 'tagRef' | 'color' | 'intent' | 'textAlign'
> & {
  children: BoxProps<'tr'>['children']
}

export type TableHeaderRowProps = PropsFromBox
