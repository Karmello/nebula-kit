import type { BoxProps } from '../../../Box/types'

export type AppFrameMainProps = {
  tagAttrs?: BoxProps<'main'>['tagAttrs']
  tagRef?: BoxProps<'main'>['tagRef']
  padding?: BoxProps<'main'>['padding']
  paddingInline?: BoxProps<'main'>['paddingInline']
  paddingBlock?: BoxProps<'main'>['paddingBlock']
  paddingTop?: BoxProps<'main'>['paddingTop']
  paddingRight?: BoxProps<'main'>['paddingRight']
  paddingBottom?: BoxProps<'main'>['paddingBottom']
  paddingLeft?: BoxProps<'main'>['paddingLeft']
  children: BoxProps<'main'>['children']
}
