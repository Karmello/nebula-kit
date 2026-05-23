import { BoxProps, HtmlTagProps } from 'lib/components'

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
  children: HtmlTagProps<'main'>['children']
}

export type AppFrameMainProps = PropsFromBox
