import { BoxProps } from '../Box'

type RotateOwnProps = {
  angle: number
  duration?: number
  easing?: string
}

type PropsFromBox = {
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  tagRef?: BoxProps<'span'>['tagRef']
  children: BoxProps<'span'>['children']
}

export type RotateProps = PropsFromBox & RotateOwnProps
