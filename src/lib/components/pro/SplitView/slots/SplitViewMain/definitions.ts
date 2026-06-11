import { BoxProps } from 'lib/index.core'

export type SplitViewMainProps = Pick<
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
