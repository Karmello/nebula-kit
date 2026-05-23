import { BoxProps } from 'lib/components'

type PropsFromBox = Pick<
  BoxProps<'section'>,
  | 'tagAttrs'
  | 'tagRef'
  | 'padding'
  | 'paddingInline'
  | 'paddingBlock'
  | 'paddingTop'
  | 'paddingRight'
  | 'paddingBottom'
  | 'paddingLeft'
> & {
  children: BoxProps<'section'>['children']
}

export type SplitViewMainProps = PropsFromBox
