import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<BoxProps<'div'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'div'>['children']
}

export type ToolbarStartProps = PropsFromBox
