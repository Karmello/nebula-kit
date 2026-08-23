import { BoxProps } from 'lib/index.core'

type FadeOwnProps = {
  visible: boolean
  duration?: number
  easing?: string
}

type PropsFromBox = {
  tagAttrs?: BoxProps<'span'>['tagAttrs']
  tagRef?: BoxProps<'span'>['tagRef']
  children: BoxProps<'span'>['children']
}

export type FadeProps = PropsFromBox & FadeOwnProps
