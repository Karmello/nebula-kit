import type { BoxProps } from '../../../Box/types'

export type AppFrameMainProps = Pick<
  BoxProps<'main'>,
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
  children: BoxProps<'main'>['children']
}
