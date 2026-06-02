import { BoxProps } from 'lib/index.core'

type PropsFromBox = Pick<
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

export type AppFrameMainProps = PropsFromBox
